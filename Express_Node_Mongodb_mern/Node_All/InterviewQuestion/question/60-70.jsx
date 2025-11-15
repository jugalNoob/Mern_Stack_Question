61. How do you get memory usage in Node.js?

You can use the built-in process.memoryUsage() method.

console.log(process.memoryUsage());


📘 Output Example:

{
  rss: 26214400,
  heapTotal: 10240000,
  heapUsed: 5120000,
  external: 100000,
  arrayBuffers: 50000
}


rss: Total memory allocated for the process.

heapTotal / heapUsed: V8 engine memory stats.

external: Memory used by C++ objects bound to JS.

62. How do you handle uncaught exceptions using the process object?

Use process.on('uncaughtException', callback) to catch exceptions not handled anywhere else.

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Clean up or restart gracefully
});


⚠️ Note: It’s better to log and restart the app — not continue running.

63. What is the os module used for?

The os module provides system-related information such as CPU, memory, 
platform, and uptime.

const os = require('os');
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());


✅ Useful for monitoring, diagnostics, and performance tuning.

64. How do you get CPU and memory info in Node.js?

You can use both os and process modules.

const os = require('os');
console.log('CPU Info:', os.cpus());
console.log('Free Memory:', os.freemem());
console.log('Memory Usage:', process.memoryUsage());

65. How can you gracefully shut down a Node.js app?

Handle termination signals and close resources cleanly.

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
  console.log('Gracefully shutting down...');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });
}


✅ Prevents abrupt disconnections or data corruption.

66. What is the child_process module?

It allows you to spawn new Node.js processes to perform concurrent tasks.

const { spawn } = require('child_process');
const child = spawn('ls', ['-lh', '/usr']);


📘 Used for:

Running system commands

Heavy CPU-bound tasks

Parallel processing

67. What is the difference between spawn, exec, and fork?



| Method  | Description                           | Returns                       |
| ------- | ------------------------------------- | ----------------------------- |
| `spawn` | Launches a new process with a command | Streams (stdout/stderr)       |
| `exec`  | Runs a command and buffers the output | Callback with output          |
| `fork`  | Creates a new Node.js process         | IPC channel for communication |



const { spawn, exec, fork } = require('child_process');


68. How do you create a child process?

Using the child_process module’s methods:

const { spawn } = require('child_process');
const child = spawn('node', ['worker.js']);


Or using fork() for Node-specific scripts:

const { fork } = require('child_process');
const child = fork('worker.js');

69. What is IPC (Inter-Process Communication)?

IPC allows different processes to communicate and share data.

Example with forked child:

const { fork } = require('child_process');
const child = fork('child.js');

child.send({ msg: 'Hello child' });
child.on('message', (data) => console.log('Parent received:', data));

70. What are worker threads in Node.js?

Worker Threads allow running CPU-intensive JavaScript code in parallel threads (not separate processes).

const { Worker } = require('worker_threads');

new Worker('./worker.js', { workerData: { value: 10 } });


✅ Great for:

Heavy computation

Parallel processing without blocking the event loop.


61. What is the EventEmitter class in Node.js?

Answer:
EventEmitter is a core Node.js class from the events module that
 allows objects to emit and listen to custom events.
It implements the publish–subscribe pattern.


const EventEmitter = require('events');
const event = new EventEmitter();

event.on('greet', () => console.log('Hello Developer!'));
event.emit('greet');

62. How do you create a custom event in Node.js?

Answer:

Import the events module.

Create an instance of EventEmitter.

Register an event with .on() and trigger it with .emit().

const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('start', (msg) => console.log('Started:', msg));
myEvent.emit('start', 'File upload in progress');

63. What is the difference between on() and once() in EventEmitter?


| Method                      | Description                                                                      |
| --------------------------- | -------------------------------------------------------------------------------- |
| **`on(event, listener)`**   | Registers a listener that runs every time the event is emitted.                  |
| **`once(event, listener)`** | Registers a listener that runs **only once**, then automatically removes itself. |


Example:

emitter.once('connect', () => console.log('Connected once!'));

64. How do you remove an event listener?

Answer:
You can use .off() (Node v10+) or .removeListener().

function greet() { console.log('Hi!'); }
emitter.on('greet', greet);
emitter.off('greet', greet); // or emitter.removeListener('greet', greet);

65. What are Child Processes in Node.js?

Answer:
Child processes allow you to run system commands or separate Node.js scripts in parallel.
Node.js uses the child_process module for this.
Example:

const { exec } = require('child_process');
exec('dir', (err, stdout, stderr) => console.log(stdout));

66. What are the methods available in the child_process module?

Answer:

spawn() – starts a process (stream-based).

exec() – runs a command (buffers output).

execFile() – runs an executable file.

fork() – creates a new Node.js process with IPC channel (used for clustering).

67. What is the difference between spawn() and exec()?

| Feature         | `spawn()`                            | `exec()`                     |
| --------------- | ------------------------------------ | ---------------------------- |
| **Output**      | Streams (useful for large data)      | Buffers (not for large data) |
| **Performance** | Better for long-running tasks        | Simpler for short commands   |
| **Return Type** | ChildProcess object with I/O streams | Callback with output         |



68. What is fork() in Node.js?

Answer:
fork() is a special version of spawn() that creates a separate Node.js proces
s and enables message passing between parent and child via IPC (inter-process communication).

Used in clustering and worker threads.

const { fork } = require('child_process');
const child = fork('worker.js');
child.send({ msg: 'Start task' });
child.on('message', (m) => console.log('From child:', m));

69. What is Inter-Process Communication (IPC)?

Answer:
IPC allows communication between multiple Node.js processes, typically using fork() or cluster modules.
Used for message passing between parent and child processes.

70. What are some real-world use cases of Child Processes?

Answer:

Running CPU-heavy tasks (e.g., encryption, image processing)

Running shell commands (e.g., git, ls, curl)

Scaling Node.js with worker processes

Handling parallel background jobs