let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (data) {
        console.log('Client said ' + data);
        $('#alerts').html($('#alerts').html() + 
        `
        <div class="alert alert-dismissible alert-danger">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <h4>Warning!</h4>
        <p> Assist Resident <strong>ASAP!</strong> </p>
      </div>

        <div class="alert alert-dismissible alert-warning">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <p> Tend to resident's needs. <p>
      </div>
    
      <div class="alert alert-dismissible alert-success">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <p> Assist Resident. </p>
      </div>

        <p> ${data} </p>
        `);
    })

});