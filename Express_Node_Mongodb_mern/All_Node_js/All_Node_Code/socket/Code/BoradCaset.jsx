3Broadcasting messages



// Create Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});
let one='jugha;'


io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
console.log(one)
  socket.on('message', (msg) => {
    console.log('Received message:', msg);
    socket.broadcast.emit('reply', 'Message received!');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});



✅ Broadcast to all other clients except sender:
socket.on('message', (msg) => {
    console.log('Received message:', msg);
    socket.broadcast.emit('reply', 'Message received to others!');
});


socket.broadcast.emit() → sends to everyone except this socket



:::::::::::::: Socket.io main important  ---------------------->>>


io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('message', (msg) => {
        console.log('Received message:', msg);

        // Reply only to this client
        socket.emit('reply', 'Message received!');

        // Broadcast to others
        socket.broadcast.emit('reply', `Other clients received: ${msg}`);

        // Broadcast to all
        io.emit('broadcastAll', `Everyone sees: ${msg}`);
    });
});
