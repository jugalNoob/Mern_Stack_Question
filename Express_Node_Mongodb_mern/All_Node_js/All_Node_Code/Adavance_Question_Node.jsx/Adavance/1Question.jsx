🔁 1️⃣ Node.js Event Loop Phases
Where do setTimeout, setImmediate, process.nextTick fit?
📊 Event Loop Phases (in order)
┌──────── timers ─────────┐   setTimeout, setInterval
│                          │
├──── pending callbacks ──┤   TCP errors
│                          │
├──── idle / prepare ─────┤   internal
│                          │
├──────── poll ───────────┤   I/O callbacks
│                          │
├──── check ──────────────┤   setImmediate
│                          │
└──── close callbacks ────┘   socket.close

📌 Special Queues

process.nextTick() → runs before ALL phases

Promise microtasks → after current phase, before next

📍 Where each fits

| API                | Phase                           |
| ------------------ | ------------------------------- |
| `setTimeout`       | timers                          |
| `setInterval`      | timers                          |
| `setImmediate`     | check                           |
| `process.nextTick` | **before event loop continues** |
| `Promise.then`     | microtask queue                 |




⚠️ 2️⃣ Can process.nextTick() starve the event loop?
✅ YES — VERY IMPORTANT INTERVIEW TRAP
function loop() {
  process.nextTick(loop);
}
loop();

❌ What happens?

nextTick queue never empties

Event loop never reaches I/O

Server becomes unresponsive

📌 Why?

process.nextTick() runs before the event loop continues.

✅ Best Practice

❌ Avoid recursion with nextTick
✔ Use setImmediate instead

💥 3️⃣ What happens if you don’t handle error on EventEmitter?
❌ App CRASHES
emitter.emit('error', new Error('Boom'));

Output:
Unhandled 'error' event
Process exited

✅ Correct Way
emitter.on('error', err => {
  console.error(err);
});

📌 Rule

error is the only event that crashes Node.js if unhandled.

🔌 4️⃣ How do you implement graceful shutdown in Node.js?
🎯 Goal

✔ Finish active requests
✔ Close DB, Kafka, Redis
✔ Exit cleanly

✅ Example
const server = app.listen(3000);

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
  console.log('Shutting down...');
  
  server.close(() => {
    db.close();
    process.exit(0);
  });

  setTimeout(() => process.exit(1), 10000);
}

📌 Signals

SIGTERM → Docker / Kubernetes

SIGINT → Ctrl+C

🧠 5️⃣ Memory Leak Detection in Node.js
How EventEmitters cause leaks?
🔥 Common Leak
emitter.on('data', handler); // added repeatedly


✔ Listeners never removed
✔ Memory keeps growing

🚨 Warning
MaxListenersExceededWarning

🛠 Detection Tools

process.memoryUsage()

--inspect

Chrome DevTools

Heap snapshots

✅ Fix
emitter.removeListener('data', handler);
emitter.once('data', handler);

🌐 6️⃣ How to read client IP behind Nginx?
❌ WRONG
req.socket.remoteAddress

✅ CORRECT
Nginx
proxy_set_header X-Forwarded-For $remote_addr;

Node.js
const ip = req.headers['x-forwarded-for']?.split(',')[0];

🧠 Express Shortcut
app.set('trust proxy', true);
req.ip;

⚙️ 7️⃣ Cluster workers vs child processes


| Feature       | Cluster      | Child Process   |
| ------------- | ------------ | --------------- |
| Use case      | HTTP scaling | Background jobs |
| Port sharing  | ✔            | ❌               |
| Communication | IPC          | IPC             |
| Same code     | ✔            | ❌               |


📌 Cluster

Multiple workers

Same server port

Load balanced



🚀 8️⃣ How does Node.js handle high concurrency with single thread?
🧠 Key Idea

Node.js is single-threaded but asynchronous

How?

✔ Event loop
✔ Non-blocking I/O
✔ Thread pool (libuv)
✔ OS async APIs

JS Thread
   ↓
Event Loop
   ↓
libuv Thread Pool


✔ CPU-heavy work → worker threads
✔ I/O → async

🌱 9️⃣ How do process.env changes affect running process?
📌 Facts

✔ process.env is mutable
✔ Changes affect current process only
✔ Does NOT affect parent shell

process.env.MODE = 'prod';

⚠️ Warning

Changing env at runtime is dangerous

Values are strings only

⏱️ 1️⃣0️⃣ High-resolution time in Node.js
✅ process.hrtime()
const start = process.hrtime();
// code
const diff = process.hrtime(start);
console.log(diff[0] * 1e9 + diff[1]);


✔ Nanosecond precision
✔ Used for benchmarks

🆕 Modern Alternative
performance.now();

🔥 INTERVIEW RAPID-FIRE (MEMORIZE)

✔ setImmediate → check phase
✔ nextTick → before event loop
✔ Unhandled error → crash
✔ Graceful shutdown → SIGTERM
✔ EventEmitter leaks → listeners
✔ High concurrency → async I/O
✔ process.env → runtime only
✔ hrtime → performance timing