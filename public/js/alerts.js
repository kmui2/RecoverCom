let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (data) { 
        var messageHtml =``
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

            case "Hygeine":
                messageHtml = `<div class="alert alert-dismissible alert-warning">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist With Personal Hygeine <p>
              </div>`
                break;

            case "Other"
                messageHtml = ` <div class="alert alert-dismissible alert-success">
                <button class="close" type="button" data-dismiss="alert">&times;</button>
                <p> Assist Resident. </p>
              </div>`
                break;
        } 
        
        console.log('Client said ' + data);
        $('#alerts').html(  
        `
        <div class="alert alert-dismissible alert-danger">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <h4>Warning!</h4>
        <p> Assist Resident <strong>ASAP!</strong> </p>
      </div>

        <div class="alert alert-dismissible alert-warning">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <p> Tend to Resident's Needs. <p>
      </div>
    
      <div class="alert alert-dismissible alert-success">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <p> Assist Resident. </p>
      </div>

        <p> ${data} </p>
        `+ $('#alerts').html()); 
    })

});