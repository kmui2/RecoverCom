
let socket = io.connect();
$(document).ready(function(){
    $("#login").click(function(){
        let user = {
            name: $('#name').val(),
            room: $('#room').val()
        }
        console.log(user);
        if (user.name !='' && user.room!='') {
            socket.emit('enter', user);
             $(location).attr('href', 'dashboard.html?name='+user.name+'&room='+user.room);
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
