
$(document).ready(function(){
    $("#login").click(function(){
        let user = {
            username: $('#username').val(),
            password: $('#password').val()
        }
        console.log(user);
        if (user.username != '' && user.password !='') {
            console.log('hi')
            $.ajax({
                url: 'http://'+document.domain+":8079/users/authenticate",
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
                    if (data.success) {
                        console.log(data);
                        localStorage.setItem('token', data.token); //set
                        localStorage.setItem('firstName', data.firstName); //set
                        localStorage.setItem('lastName', data.lastName); //set
                        $(location).attr('href', 'alerts.html')
                    }
                    else {
                        console.log(data);
                        $('#error-message').text(data.msg);
                    }
                },
                error: function () {
                    $('#error-message').text('We are sorry but our servers are having an issue right now');
                }
            });
        }
    });
});