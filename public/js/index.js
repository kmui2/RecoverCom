
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
            // $(location).attr('href', 'dashboard.html')
        }
    });
    
    
});