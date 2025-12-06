🧠 What is the net Module in Node.js?

✅ The net module is a built-in module in Node.js that allows you to create TCP servers and clients.

It’s used for low-level network communication, meaning:

No HTTP, no TLS — just raw data over TCP.

Used when you need custom protocols, or socket-based communication.

🧩 Importing the net Module
const net = require("net");

⚙️ 1️⃣ Creating a TCP Server
const net = require("net");

const server = net.createServer((socket) => {
  console.log("✅ Client connected");

  socket.on("data", (data) => {
    console.log("Received:", data.toString());
    socket.write("Message received!");
  });

  socket.on("end", () => {
    console.log("❌ Client disconnected");
  });
});

server.listen(8000, () => {
  console.log("🚀 TCP server running on port 8000");
});

🧩 Explanation:

net.createServer() → creates a new TCP server.

Each client is represented by a socket.

socket.on("data") → listens for data sent from client.

socket.write() → sends data to client.

⚙️ 2️⃣ Creating a TCP Client
const net = require("net");

const client = net.createConnection({ port: 8000 }, () => {
  console.log("🔗 Connected to server");
  client.write("Hello from client!");
});

client.on("data", (data) => {
  console.log("Server says:", data.toString());
});

client.on("end", () => {
  console.log("❌ Disconnected from server");
});


🧠 This connects to your TCP server on port 8000 and sends a message.

📜 Server ↔ Client Communication Flow
Client -----> TCP Server
          <---- Response


Every connection is handled via sockets, which are full-duplex streams:

You can read (socket.on('data'))

You can write (socket.write())

🧩 3️⃣ Events in net.Server and net.Socket



| Object   | Event          | Description                  |
| -------- | -------------- | ---------------------------- |
| `server` | `'connection'` | When a client connects       |
| `server` | `'listening'`  | When server starts listening |
| `server` | `'close'`      | When server closes           |
| `socket` | `'data'`       | When data is received        |
| `socket` | `'end'`        | When connection ends         |
| `socket` | `'error'`      | On connection error          |


🧠 4️⃣ Real-World Use Cases

✅ Chat applications (real-time messages)
✅ IoT communication (devices sending data)
✅ Custom protocol servers (not HTTP-based)
✅ Internal microservice TCP communication

🧩 5️⃣ Simple Real Chat Example
// chatServer.js
const net = require("net");
const clients = [];

const server = net.createServer((socket) => {
  clients.push(socket);
  socket.write("Welcome to chat!\n");

  socket.on("data", (data) => {
    clients.forEach((client) => {
      if (client !== socket) client.write(data);
    });
  });

  socket.on("end", () => {
    clients.splice(clients.indexOf(socket), 1);
  });
});

server.listen(4000, () => console.log("Chat server running on port 4000"));


Then connect with:

telnet localhost 4000


Open 2–3 terminals, type messages, and watch them broadcast. 💬


| Feature    | TCP (`net`)      | HTTP (`http`)       | TLS (`tls`)          |
| ---------- | ---------------- | ------------------- | -------------------- |
| Level      | Low-level        | High-level          | Secure layer         |
| Encryption | ❌ No             | ❌ No (unless HTTPS) | ✅ Yes                |
| Protocol   | Custom           | HTTP                | Encrypted TCP        |
| Use Case   | Chat, IoT, games | APIs, websites      | Secure communication |



