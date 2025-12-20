🌐 Node.js Events – Complete Guide

In Node.js, events are signals emitted by objects to indicate that something has happened. Node.js has a built-in events module to handle these.

1️⃣ Event Basics
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('sayHello', () => {
  console.log('Hello World!');
});

myEmitter.emit('sayHello'); // Triggers the event


EventEmitter → base class for emitting and listening to events

.on(event, callback) → register listener

.emit(event, args...) → trigger event

2️⃣ Types of Events in Node.js

Node.js has various types of events depending on the module or object.

🔹 2.1 Process Events

Events on the process object (global)

process.on('exit', (code) => console.log('Exit code:', code));
process.on('uncaughtException', (err) => console.error('Error:', err));
process.on('beforeExit', () => console.log('Before exit'));
process.on('SIGINT', () => console.log('Ctrl+C pressed'));


Common process events:

exit → when process is about to exit

beforeExit → right before event loop ends naturally

uncaughtException → unhandled exception

SIGINT, SIGTERM → OS signals

🔹 2.2 Timer Events

Timers like setTimeout or setInterval emit callbacks asynchronously

setTimeout(() => console.log('Timeout fired'), 1000);
setInterval(() => console.log('Interval fired'), 2000);

🔹 2.3 Stream Events

Readable and writable streams emit events:

const fs = require('fs');
const readable = fs.createReadStream('file.txt');

readable.on('data', chunk => console.log('Data:', chunk.toString()));
readable.on('end', () => console.log('End of file'));
readable.on('error', err => console.error('Error:', err));


Common stream events:

data → chunk received

end → stream finished

error → error occurred

close → stream closed

🔹 2.4 HTTP / Server Events
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Hello');
});

server.on('close', () => console.log('Server closed'));
server.on('error', (err) => console.error('Server error:', err));

server.listen(3000);


Common HTTP events:

request → incoming request

connection → new TCP connection

close → server closed

error → server error

🔹 2.5 Child Process Events
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh']);

ls.on('exit', (code) => console.log('Child exited with code', code));
ls.on('error', (err) => console.error('Failed to start process:', err));


Common child process events:

exit → process exited

error → failed to spawn process

close → streams closed

🔹 2.6 Custom / User-defined Events
const EventEmitter = require('events');
class MyClass extends EventEmitter {}

const obj = new MyClass();
obj.on('customEvent', (msg) => console.log(msg));

obj.emit('customEvent', 'Hello custom event!');


Useful for modular applications

Can pass arguments to listeners

🔹 2.7 Error Events

Many Node.js objects emit error events

const fs = require('fs');
const readable = fs.createReadStream('nonexistent.txt');

readable.on('error', (err) => console.error('Stream error:', err));


⚠️ If error is not handled, Node.js will throw and crash.

🔹 2.8 Promise / Async Events (Advanced)

unhandledRejection → emitted when a promise rejects and is not caught

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});


rejectionHandled → when a rejected promise is later handled

3️⃣ EventEmitter Methods (Interview Focus)


| Method                             | Description                    |
| ---------------------------------- | ------------------------------ |
| `.on(event, listener)`             | Adds listener, can be multiple |
| `.once(event, listener)`           | Fires only once                |
| `.emit(event, args...)`            | Trigger event                  |
| `.removeListener(event, listener)` | Remove specific listener       |
| `.removeAllListeners(event)`       | Remove all listeners           |
| `.listeners(event)`                | Get list of listeners          |



4️⃣ Advanced / Interview Traps

Error events must be handled → otherwise crash

process.nextTick() vs setImmediate() → microtasks vs check phase

Overusing .on() without .removeListener() → memory leaks

Some events are one-time (once) → e.g., connection for a single TCP connection

🔹 Summary Table – All Types of Node.js Events

| Event Type           | Examples / Modules               |
| -------------------- | -------------------------------- |
| Process Events       | `exit`, `beforeExit`, `SIGINT`   |
| Timer Events         | `setTimeout`, `setInterval`      |
| Stream Events        | `data`, `end`, `error`           |
| HTTP / Server Events | `request`, `connection`, `error` |
| Child Process Events | `exit`, `close`, `error`         |
| Custom Events        | `emit('customEvent')`            |
| Error Events         | `error`, `unhandledRejection`    |
