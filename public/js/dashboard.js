let socket = io.connect();
$(document).ready(function(){
    var name = getUrlParameter('name');
    var room = getUrlParameter('room');
    if (name && room)
        $('#welcome-message').html('<h3>Welcome '+name+'! <br>(Room '+room+')</h3>');
    $('#bathroom').click(function () {
        socket.emit('message', {name,room,message:'Bathroom'});
        alert('Your message "Bathroom" has been successfully sent!');
    });
    $('#dressing').click(function () {
        socket.emit('message', {name,room,message:'Dressing'});
        alert('Your message "Dressing" has been successfully sent!');
    })
    $('#transfer').click(function () {
        socket.emit('message', {name,room,message:'Transfer'});
        alert('Your message "Transfer" has been successfully sent!');
    })
    $('#hygiene').click(function () {
        socket.emit('message', {name,room,message:'Hygiene'});
        alert('Your message "Hygiene" has been successfully sent!');
    })
    $('#other').click(function () {
        console.log("hello");
        $(location).attr('href', 'message.html')
    })
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