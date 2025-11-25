🚀 Node.js Process Module — Complete, Interview-Ready Notes

Below is the final consolidated list with crisp explanations you can memorize.

✅ 1. Process Basics
🔹 What is process?

A global object representing the current running Node.js program.

Provides tools to:

Access environment

Control execution

Handle signals & events

Read CPU/memory usage

Interact with OS

Common functions:
process.pid        // Process ID
process.argv       // Command-line arguments
process.cwd()      // Current working directory
process.uptime()   // Seconds since start

✅ 2. Memory APIs
🔹 process.memoryUsage()

Returns detailed memory consumption:

console.log(process.memoryUsage());


Gives:

rss (resident set size)

heapTotal

heapUsed

external

arrayBuffers

🔹 Important for:

Performance debugging

Memory leak tracking

High-load Node.js servers

✅ 3. Timers (process-level)

Node has these timer functions:

setTimeout()

setInterval()

setImmediate()

process.nextTick()

Key difference (interview-ready):


| Timer            | Executes                                |
| ---------------- | --------------------------------------- |
| **nextTick**     | Before event-loop continues (microtask) |
| **setImmediate** | At end of current event loop cycle      |
| **setTimeout**   | After minimum delay (scheduled task)    |


✅ 4. Lifecycle
Important process lifecycle events:


| Event                | Meaning                                    |
| -------------------- | ------------------------------------------ |
| `beforeExit`         | Last chance before Node exits              |
| `exit`               | Process is exiting — **cannot async here** |
| `uncaughtException`  | Error wasn't handled                       |
| `unhandledRejection` | Promise was rejected without catch         |
| `warning`            | Node warnings (Deprecation, leaks)         |



Example:

process.on('exit', code => {
  console.log('Process exiting with code:', code);
});

✅ 5. Signals (OS → Node)

Node listens to OS-level signals:

| Signal               | Meaning         |
| -------------------- | --------------- |
| `SIGINT`             | Ctrl + C        |
| `SIGTERM`            | Termination     |
| `SIGUSR1`, `SIGUSR2` | Custom signals  |
| `SIGHUP`             | Terminal closed |



Example:

process.on('SIGINT', () => {
  console.log('Graceful Shutdown...');
  process.exit();
});


Used for:

Graceful shutdown

Cleanup

Container-based deployments (Docker, Kubernetes)

✅ 6. Environment Variables
Access:
process.env.PORT
process.env.NODE_ENV

Set env:

Linux/Mac:

PORT=5000 node app.js


Windows:

set PORT=5000 && node app.js

Used for:

DB credentials

API keys

Config switching (dev/prod)

✅ 7. CPU Usage
process.cpuUsage();


Returns:

user CPU time

system CPU time

Used for:

Performance analytics

Load testing

Identifying expensive operations

✅ 8. Event Loop–Related APIs
Key functions interacting with event loop:

process.nextTick(callback)

setImmediate(callback)

queueMicrotask(callback)

Timers (timeout, interval)

Microtasks (Promises)

Interview Trick:

process.nextTick() runs before Promises.

✅ 9. OS Interactions

Process module gives access to OS-level information:


| API                | Purpose                |
| ------------------ | ---------------------- |
| `process.platform` | Windows, Linux, darwin |
| `process.arch`     | x64, arm64             |
| `process.env`      | Environment variables  |
| `process.uptime()` | Process running time   |
| `process.hrtime()` | High-resolution timer  |
| `process.cwd()`    | Current working dir    |



⚡ Your Final Complete List (Short for Revision)
✓ Process basics
✓ Memory APIs
✓ Timers & nextTick
✓ Lifecycle events
✓ OS Signals
✓ Environment variables
✓ CPU usage tracking
✓ Event loop APIs
✓ OS interactions


⭐ Want a printable PDF version of this entire “Node.js Process Module Notes”?
I can generate:


Clean headings


Code examples


ASCII diagrams for event loop


Perfect for interviews


Just say: “Process PDF yes”.
