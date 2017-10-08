let socket = io.connect();
$(document).ready(function(){
    console.log('hello')
    socket.on('message', function (data) {
        console.log('Client said ' + data);
        $('#alerts').html($('#alerts').html() + 
        `<div class="alert alert-dismissible alert-warning">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <h4>Warning!</h4>
        <p>Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a class="alert-link" href="#">vel scelerisque nisl consectetur et</a>.</p>
      </div>
        <p> ${data} </p>
        `);
    })

});