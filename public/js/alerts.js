let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (data) {
        console.log(data);
    })

});