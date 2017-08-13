// Make connection
var socket = io.connect('http://localhost:4000');

// Get DOM
var message = document.getElementById('message'),
      handle = document.getElementById('username'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

// Emit events
btn.addEventListener('click', function(event){
  event.preventDefault();
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
});

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
