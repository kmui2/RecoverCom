
let socket = io.connect();
$(document).ready(function(){
    $("#send").click(function(){
        let message = $('#message').val();
        // console.log(user);
        if (message != '') {
            socket.emit('message', message);
            alert('Your message "'+message+'" has been successfully sent!');
            $('#message').val('');
            //  $(location).attr('href', 'dashboard.html')
        }
    });
    
    
});