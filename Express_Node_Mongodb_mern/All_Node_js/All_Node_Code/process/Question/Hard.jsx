2️⃣ pid property

process.pid returns the process ID (PID) of the current Node.js process.

PID is a unique number assigned by the operating 
system to each running process.

Example:

console.log(process.pid); 
// Output might be: 12345


This number is assigned by the OS when Node.js starts.

Useful for logging, monitoring, or sending signals to the process.


🌐 Node.js process Hard Questions Explained
1️⃣ Node.js Version – How to check & why it matters?
console.log(process.version)   // v20.4.0
console.log(process.versions)  


process.version → string of Node.js version.

process.versions → object of core dependencies:

{
  node: '20.4.0',
  v8: '11.3.187',
  uv: '1.46.0',
  zlib: '1.2.13',
  ...
}


Interview point:

Different Node.js versions may have different V8 versions,
 libuv features, crypto support, and memory behavior.
Always check process.versions if your app depends on a specific
 runtime feature.



 2️⃣ Memory Usage – Deep Explanation
console.log(process.memoryUsage())


Output example:

{
  rss: 25165824,
  heapTotal: 5242880,
  heapUsed: 3670016,
  external: 123456,
  arrayBuffers: 65536
}


| Property     | Meaning                                                                              |
| ------------ | ------------------------------------------------------------------------------------ |
| rss          | Resident Set Size → total memory allocated for process including code + stack + heap |
| heapTotal    | V8 heap allocated memory                                                             |
| heapUsed     | V8 heap actually used                                                                |
| external     | Memory used by C++ objects bound to JS objects                                       |
| arrayBuffers | Memory allocated for `ArrayBuffer` / typed arrays                                    |



Interview trap:

heapUsed ≠ total process memory. Always check rss for actual usage.



3️⃣ Event Loop & process.nextTick() vs setImmediate()

Node.js event loop phases:

timers → setTimeout, setInterval

pending callbacks

idle/prepare

poll → I/O events

check → setImmediate()

close callbacks

process.nextTick()

Executes before next event loop phase

Microtask queue

Can block I/O if abused

setImmediate()

Executes in check phase, after I/O events

Good for scheduling heavy async tasks

process.nextTick(() => console.log('nextTick'))
setImmediate(() => console.log('setImmediate'))


Output:

nextTick
setImmediate


Interview trap: nextTick can starve I/O if misused.

4️⃣ Advanced Memory Management & GC

Node uses V8 GC, which manages heap.

Use --max-old-space-size to increase heap:

node --max-old-space-size=4096 app.js


process.memoryUsage() helps detect leaks.

global.gc() can be triggered if Node runs with --expose-gc (rare in production, sometimes in testing/profiling).

5️⃣ process.versions differences across Node versions


| Node Version | V8 Version | libuv | Key Differences                                     |
| ------------ | ---------- | ----- | --------------------------------------------------- |
| 14.x         | 8.x        | 1.40  | ES2020 features partial, smaller memory             |
| 16.x         | 9.x        | 1.41  | Faster async hooks, QUIC experimental               |
| 18.x         | 10.x       | 1.42  | Fetch API built-in, stable QUIC                     |
| 20.x         | 11.x       | 1.46  | Optimized GC, newer Intl & performance improvements |




Interview tip:

Node version impacts memory usage, async hook behavior, and V8 optimizations.

6️⃣ Process Signals & Cleanup
process.on('SIGINT', () => {
  console.log('Ctrl+C pressed')
  process.exit()
})

process.on('exit', (code) => {
  console.log('Cleanup before exit:', code)
})


Always handle SIGINT/SIGTERM for graceful shutdown.

process.exit() immediately stops Node, async callbacks may not run.

7️⃣ Hard Interview Trap Questions

What is heapUsed vs rss?

heapUsed → JS objects memory

rss → total process memory including heap, stack, C++ bindings

Difference between process.version and process.versions.node?

Both are Node version, but .versions also shows dependencies (V8, libuv, openssl, zlib…)

Can process.nextTick() starve I/O?

✅ Yes, because it executes before any I/O phase, so I/O may be delayed if abused

How Node.js memory changes across versions?

Newer versions have better GC, faster V8, and more efficient heap → less leaks

Difference in event loop behavior across Node versions?

Minor changes in I/O polling, timers, and async hook ordering

🔹 Interview One-Liner Summary

process.version → Node version

process.versions → Node + V8 + libuv + dependencies

process.memoryUsage() → check RSS & heap

process.nextTick() → microtask queue before I/O

setImmediate() → next loop tick after I/O

Signals → SIGINT, SIGTERM → graceful shutdown

If you want next 🔥
➡️ Node.js process + cluster + worker threads deep design
➡️ Memory leak detection & debugging in Node.js
➡️ Advanced event loop + process traps examples




🧠 3️⃣ ADVANCED QUESTIONS
Q11. How do you handle uncaught exceptions globally?

Answer:
Using the uncaughtException event:

process.on("uncaughtException", (err) => {
  console.error("Caught exception:", err);
});
throw new Error("Crash test!");


⚠️ Best practice: log it and exit gracefully.

Q12. What is the difference between process and child_process?

| Feature       | `process`                | `child_process`            |
| ------------- | ------------------------ | -------------------------- |
| Represents    | Current Node.js instance | New process created        |
| Memory        | Shared (same process)    | Separate                   |
| Communication | N/A                      | Via IPC messages           |
| Created by    | Node automatically       | Developer manually         |
| Use Case      | App control              | Parallel or external tasks |



Q13. What is the use of process.nextTick()?

Answer:
It schedules a callback to run after the current operation
 completes, but before the event loop continues.

Example:

console.log("A");
process.nextTick(() => console.log("B"));
console.log("C");


Output:

A
C
B

Q14. What is the difference between process.nextTick() and

setImmediate()?

| Method               | Runs When                       | Priority |
| -------------------- | ------------------------------- | -------- |
| `process.nextTick()` | Before the event loop continues | Higher   |
| `setImmediate()`     | After the current I/O event     | Lower    |


Q15. How do you gracefully shut down a Node.js process?

Answer:
Listen for exit signals, close DB connections, stop servers, then exit.

Example:

process.on("SIGTERM", () => {
  console.log("Shutting down...");
  server.close(() => process.exit(0));
});

💡 4️⃣ REAL-WORLD QUESTIONS

| #  | Question                            | Short Answer                     |
| -- | ----------------------------------- | -------------------------------- |
| 1  | How to get the PID of your process? | `process.pid`                    |
| 2  | How to print environment variables? | `console.log(process.env)`       |
| 3  | How to read custom CLI args?        | `process.argv`                   |
| 4  | How to detect OS platform?          | `process.platform`               |
| 5  | How to get Node version?            | `process.version`                |
| 6  | How to catch Ctrl+C stop?           | `process.on('SIGINT', callback)` |
| 7  | How to print uptime?                | `process.uptime()`               |
| 8  | How to check memory usage?          | `process.memoryUsage()`          |
| 9  | How to kill a process externally?   | `kill PID` (in terminal)         |
| 10 | What happens if `process.exit(1)`?  | Exits with error code 1          |
