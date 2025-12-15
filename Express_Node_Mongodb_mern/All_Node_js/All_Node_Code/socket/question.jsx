Yes — Socket is built on top of Duplex Streams.

Let me explain in VERY simple words:

✅ Simple Meaning

A duplex stream can read + write at the same time.
A socket also sends + receives data at the same time.
So yes, a socket uses duplex streams.


⭐ Why?

Because a socket connection works like this:

You send data → write side

You receive data → read side

This matches exactly how a Duplex Stream works.





🔥 Example (TCP socket uses Duplex Stream)
const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Hello"); // write (send)
  
  socket.on("data", (chunk) => { // read (receive)
    console.log("Client says:", chunk.toString());
  });
});


Here:

socket.write() = write stream

socket.on("data") = read stream

So TCP socket = Duplex stream.

🎯 Super Simple Line for Interview

Yes. TCP sockets in Node.js are duplex streams because they
 support both read and write operations simultaneously.