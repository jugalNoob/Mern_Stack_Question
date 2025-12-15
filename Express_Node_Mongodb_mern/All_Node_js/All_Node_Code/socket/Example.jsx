✅ What io.emit does?

It sends a message to ALL connected clients.

✅ Simple Example (server side)
io.on("connection", (socket) => {
  console.log("User connected");

  // Send message to every client
  io.emit("welcome", "Hello everyone!");
});


This will send "Hello everyone!" to all users.

✅ Client side (browser)
socket.on("welcome", (msg) => {
  console.log(msg);
});


Output:

Hello everyone!