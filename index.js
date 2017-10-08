'use strict';

var os = require('os');
var nodeStatic = require('node-static');
const express = require('express');
var socketIO = require('socket.io');
const bodyParser = require('body-parser');
const path = require("path");
var http = require('http');
var fileServer = new(nodeStatic.Server)();
let app = module.exports.app = express();
var server = http.Server(app);
server.listen(process.env.PORT || 8080);
console.log("Node app is running at http://localhost:" + 8080)
var io = require('socket.io').listen(server);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// For Rendering HTML
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})
app.use(express.static(__dirname + '/public'));

let users = [];
let connections = [];

io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log("Connected: %s sockets connected", connections.length);

  // convenience function to log server messages on the client
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    socket.emit('log', array);
  }

  socket.on('message', function(message) {
    log('Client said: ', message);
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('enter', function(user) {
    log('Patient ' + user.name + ' in room ' + user.room + 'has entered.');
    socket.user = user;
    users.push(socket.user);
    socket.broadcast.emit('entered', socket.user);
  })

  socket.on('create or join', function(room) {
    log('Received request to create or join room ' + room);

    var numClients = io.sockets.sockets.length;
    // var numClients = 0;
    // if (io.adapter.rooms && io.adapter.rooms[room])
    //   numClients = Object(io.adapter.rooms[room]).length;
    console.log(numClients);
    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === 1) {
      socket.join(room);
      log('Client ID ' + socket.id + ' created room ' + room);
      socket.emit('created', room, socket.id);

    } else if (numClients === 2) {
      log('Client ID ' + socket.id + ' joined room ' + room);
      io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready');
    } else { // max two clients
      socket.emit('full', room);
    }
  });

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });

  socket.on('bye', function(){
    console.log('received bye');
  });

  socket.on('disconnect', function() {
    if (!socket.username) return;
    users.splice(users.indexOf(socket.user), 1);
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  })

});
