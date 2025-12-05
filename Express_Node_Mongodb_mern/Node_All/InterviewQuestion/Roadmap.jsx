1️⃣ Node.js Basics

What is Node.js & why it is used

Event Loop & how Node.js handles async tasks

Single-threaded vs multi-threaded

Non-blocking I/O

Node.js architecture

Differences between Node.js and traditional web servers

Global objects (__dirname, __filename, process, Buffer)

2️⃣ Core Modules

fs → File System operations (read/write streams)

http / https → creating servers & clients

os → operating system info

path → file paths

url → parsing URLs

crypto → hashing, encryption

events → EventEmitter

stream → Readable, Writable, Duplex, Transform

child_process → spawning new processes

3️⃣ Asynchronous Programming

Callbacks vs Promises vs Async/Await

Error-first callback pattern

Event loop phases: timers, I/O callbacks, idle, poll, check, close callbacks

process.nextTick(), setImmediate(), setTimeout() differences

Handling concurrency in Node.js

4️⃣ Event Loop & Performance

Understanding the Event Loop deeply

Microtasks vs Macrotasks

Blocking vs Non-blocking code

Measuring performance (console.time(), perf_hooks)

Handling CPU-intensive tasks

Cluster module & multi-core scaling

5️⃣ Streams & Buffers

Buffer vs Stream

Types of streams: Readable, Writable, Duplex, Transform

HighWaterMark & backpressure

pipe() vs pipeline()

ObjectMode streams

Transform streams (gzip, encryption)

Stream events: data, end, finish, drain, error

6️⃣ File System

Synchronous vs asynchronous fs methods

Streams in fs (createReadStream, createWriteStream)

Watching files (fs.watch, fs.watchFile)

Reading large files efficiently (streams & buffers)

7️⃣ HTTP & Networking

Creating HTTP servers

Request & Response objects

Routing (without frameworks)

Query parameters & URL parsing

HTTP methods: GET, POST, PUT, DELETE, PATCH

Handling headers & status codes

Working with sockets (net module, TCP/UDP)

8️⃣ NPM & Modules

Local vs global modules

Built-in modules

Third-party modules

require() vs import (ESM)

Module caching & require.cache

Creating reusable modules

9️⃣ Express & Middleware (optional but common in interviews)

Setting up Express server

Route handling

Middleware: built-in, custom, third-party

Error handling

req and res objects

Serving static files

Query params, route params, body parsing

🔟 Node.js Advanced Concepts

EventEmitter & custom events

Error handling in async code

Cluster & worker threads

Child processes & fork()

Memory management: Heap, Stack, Buffers

Garbage collection in Node.js

Debugging Node.js apps

Performance tuning

1️⃣1️⃣ Database & Node.js

Connecting to MongoDB / MySQL / Postgres

Handling async queries

Streaming database data

Caching strategies (Redis)

Transactions & concurrency handling

1️⃣2️⃣ Real-time Applications

WebSockets (ws, socket.io)

Event-driven architecture

Message queues (Kafka, RabbitMQ)

Using Node.js for microservices

1️⃣3️⃣ Security & Best Practices

Preventing SQL/NoSQL injections

Input validation & sanitization

Rate limiting

Using Helmet & security middleware

Environment variables & config management

Handling secrets & tokens

1️⃣4️⃣ Testing & Debugging

Node.js Debugger (node inspect)

console, util.debuglog

Unit testing: Mocha, Jest

Integration testing

Logging best practices (winston, pino)

1️⃣5️⃣ Deployment & Ecosystem

PM2 process manager

Docker with Node.js

CI/CD pipelines

Scaling Node.js apps (clusters, load balancers)

Serverless Node.js (AWS Lambda, Vercel, etc.)