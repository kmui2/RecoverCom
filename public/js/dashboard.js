let socket = io.connect();
$(document).ready(function(){
    $('#bathroom').click(function () {
        socket.emit('message', 'Bathroom');
        alert('Your message "Bathroom" has been successfully sent!');
    });
    $('#dressing').click(function () {
        socket.emit('message', 'Dressing');
        alert('Your message "Dressing" has been successfully sent!');
    })
    $('#transfer').click(function () {
        socket.emit('message', 'transfer');
        alert('Your message "Transfer" has been successfully sent!');
    })
    $('#hygiene').click(function () {
        socket.emit('message', 'Hygiene');
        alert('Your message "Hygiene" has been successfully sent!');
    })
    $('#other').click(function () {
        console.log("hello");
        $(location).attr('href', 'message.html')
    })
});