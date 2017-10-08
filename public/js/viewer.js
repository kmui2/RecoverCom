
let socket = io.connect();
$(document).ready(function(){
    socket.emit('get-streams');
    socket.on('add-stream', function(data) {
        
    })
});