let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (data) { 
        var messageHtml =``
        var otherMessageHtml = ``
        switch (data) { 
            case "Dressing": 
                messageHtml = `<div class="alert alert-dismissible alert-success">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist Resident With Dressing </p>
              </div>`
                break; 

            case "Bathroom":
                messageHtml = `<div class="alert alert-dismissible alert-danger">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <h4>Warning!</h4>
                <p> Assist Resident With Bathroom <strong>ASAP!</strong> </p>
              </div>`
                break;

            case "Transfer":
                messageHtml = `<div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist With Transferring. <p>
              </div>`
                break;

            case "Hygiene":
                messageHtml = `<div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist With Personal Hygeine <p>
              </div>`
                break;

            default: 
                otherMessageHtml = ` <div class="alert alert-dismissible alert-success">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> ${data} </p>
              </div>`
                break;
        } 
        
        console.log('Client said ' + data);
        $('#alerts').html(  
        
        messageHtml
        + $('#alerts').html()); 
        $('#other').html(  
            
            otherMessageHtml
            + $('#other').html()); 
    })

});