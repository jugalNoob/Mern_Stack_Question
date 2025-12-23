
import fs from 'node:fs'

import net from 'node:net'
import { createServer } from 'node:http'
import EventEmitter from 'node:events'
import { pipeline } from "node:stream/promises";

import { Readable,Duplex,Transform } from 'node:stream'
import os from 'node:os'
import express from 'express'
import { buffer } from 'node:stream/consumers'
import { url } from 'node:inspector'


import { createHmac } from 'node:crypto'
import { stdin, stdout } from 'node:process'
import { Server } from 'socket.io';
import http from 'http';

  

// Create HTTP server
const server = http.createServer();

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
    socket.emit('reply', 'Message received!');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});




// import { Duplex} from 'stream/promises'; // Use promise-based pipeline
// import { stdout } from 'process';







// await pipeline(
//   fs.createReadStream("./file/jugal.txt", { hi
// ghWaterMark: 64 * 1024 }),
//   fs.createWriteStream("./file/output.txt", { highWaterMark: 64 * 1024 })
// );


// //   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e