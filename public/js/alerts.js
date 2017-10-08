let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (message) { 
        var messageHtml =``
        var otherMessageHtml = ``
        switch (message.message) { 
            case "Dressing": 
                messageHtml = `<div class="alert alert-dismissible alert-success">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist ${message.name} With Dressing in room ${message.room}.</p>
              </div>`
                break; 

            case "Bathroom":
                messageHtml = `<div class="alert alert-dismissible alert-danger">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <h4>Warning!</h4>
                <p> Assist ${message.name} With Bathroom in room ${message.room} <strong>ASAP!</strong> </p>
              </div>`
                break;

            case "Transfer":
                messageHtml = `<div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist ${message.name} With Transferring in room ${message.room}. <p>
              </div>`
                break;

            case "Hygiene":
                messageHtml = `<div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist ${message.name} With Personal Hygeine in room ${message.room} <p>
              </div>`
                break;

            default: 
                otherMessageHtml = ` <div class="alert alert-dismissible alert-success">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p>  Assist ${message.name} in room ${message.room} with: ${message.message} </p>
              </div>`
                break;
        } 
        
        console.log('Client said ' + message.message);
        $('#alerts').html(  
        
        messageHtml
        + $('#alerts').html()); 
        $('#other').html(  
            
            otherMessageHtml
            + $('#other').html()); 
    })

});