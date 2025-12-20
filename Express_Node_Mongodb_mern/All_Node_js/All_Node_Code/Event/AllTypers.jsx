🌐 Why Use EventEmitter in Node.js
1️⃣ Node.js is Event-Driven

Node.js is single-threaded and asynchronous.

Most operations are non-blocking (I/O, HTTP requests, file system).

To handle asynchronous events, Node uses events and callbacks.

EventEmitter provides a structured way to handle these events.


2️⃣ Benefits of Using EventEmitter



| Benefit                            | Explanation                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Decoupling**                     | Event producers and consumers are **separate**. You emit events without worrying about who listens. |
| **Reusable & Modular**             | Multiple modules can listen to the same event. Makes code **modular** and **extensible**.           |
| **Asynchronous Event Handling**    | Lets you respond to events **when they happen**, e.g., HTTP requests, file changes, or timers.      |
| **Synchronous & Predictable**      | By default, `.emit()` runs listeners **synchronously**, so order is predictable.                    |
| **Supports Once / Many Listeners** | `.once()` for one-time events, `.on()` for repeated events.                                         |
| **Error Handling**                 | Provides a standard way to handle errors via `error` event.                                         |



3️⃣ Common Use Cases

HTTP Server / Request Handling

const server = require('http').createServer();
server.on('request', (req, res) => res.end('Hello'));


File System / Streams

const fs = require('fs');
const stream = fs.createReadStream('file.txt');
stream.on('data', chunk => console.log(chunk.toString()));
stream.on('end', () => console.log('Done reading'));


Custom Modules

const EventEmitter = require('events');
class MyApp extends EventEmitter {}
const app = new MyApp();

app.on('login', user => console.log(`${user} logged in`));
app.emit('login', 'Jugal');


Worker Threads / Cluster Communication

Workers can emit messages to the master process, and master can listen for events.

4️⃣ Interview Key Points

EventEmitter decouples event producer & listener.

Used in core Node.js modules: http, fs, net, stream.

Supports synchronous execution by default.

.once() is useful for one-time initialization events.

Helps avoid callback hell by centralizing event handling.

🔹 TL;DR

EventEmitter is the backbone of Node.js’s event-driven architecture.
It allows modules, streams, servers, and custom objects to emit events and react to them asynchronously in a clean, decoupled way.