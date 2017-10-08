
$(document).ready(function(){
    $("#register").click(function(){
        let user = {
            facilityId: $('#facilityId').val(),
            email: $('#email').val(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            username: $('#username').val(),
            password: $('#password').val()
        }
        console.log(user);
        if (user.facilityId && user.email && user.firstName && user.lastName && user.username && user.password) {
            $.ajax({
                url: "http://localhost:8079/users/register",
                type: "POST",
                contentType: "application/json",
                xhrFields: {
                    withCredentials: false
                }, 
                headers: {
            
                },  
                data: JSON.stringify(user),
                success: function(data) {
                    console.log(data);
                    $(location).attr('href', 'dashboard.html')
                },
                error: function () {
                    console.log('We are sorry but our servers are having an issue right now');
                }
              });
        }
    });
});