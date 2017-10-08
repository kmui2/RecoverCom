
let socket = io.connect();
$(document).ready(function(){
    var name = getUrlParameter('name');
    var room = getUrlParameter('room');
    if (name && room)
        $('#welcome-message').html('<h3>Hello '+name+'! <br></h3>');
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
// all <a> tags containing a certain rel=""
$("a[rel~='keep-params']").click(function(e) {
    e.preventDefault();

    var params = window.location.search,
        dest = $(this).attr('href') + params;

    // in my experience, a short timeout has helped overcome browser bugs
    window.setTimeout(function() {
        window.location.href = dest;
    }, 100);
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};