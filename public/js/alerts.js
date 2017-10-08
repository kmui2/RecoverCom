let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (data) {
        console.log('Client said ' + data);
        $('#alerts').html($('#alerts').html() + 
        `
        <p> data </p>
        `);
    })

});