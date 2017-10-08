
$(document).ready(function(){
    $("#login").click(function(){
        let user = {
            name: $('#username').val(),
            room: $('#password').val()
        }
        console.log(user);
        if (user.username && user.password)
            $(location).attr('href', 'dashboard.html')
    });
});