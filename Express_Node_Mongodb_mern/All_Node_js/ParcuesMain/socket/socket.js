✅ Correct way to use Socket.io (Node.js)
1. With ES Modules (import syntax)
import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("message", (msg) => {
    console.log("message:", msg);
  });
});

2. With CommonJS (require syntax)
const { Server } = require("socket.io");

const io = new Server(3000);

io.on("connection", (socket) => {
  console.log("A user connected");
});

🧪 If you simply want to print what socket.io exports:
import { Server } from "socket.io";

console.log(Server);


This prints the Server class.

🔥 Want an example with Express + Socket.io?
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
});

server.listen(3000, () => console.log("Server running"));


If you want, I can give you:

✅ Real-time chat app
✅ Node.js cluster + socket.io
✅ Redis adapter for multi-node socket.io scale