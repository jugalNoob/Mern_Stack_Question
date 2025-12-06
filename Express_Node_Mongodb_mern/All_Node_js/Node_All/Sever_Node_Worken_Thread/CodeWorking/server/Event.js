const fs = require('fs');

// 🧠 1️⃣ Asynchronous - Non-blocking
fs.readFile('jugal.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content (async):', data);
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});

// 🧱 2️⃣ Synchronous - Blocking
const syncData = fs.readFileSync('jugal.txt', 'utf8');
console.log('File content (sync) BlockCode:', syncData);

console.log('hello juygal');



🧩 Step-by-Step Execution Order
1️⃣ fs.readFile()

Non-blocking (asynchronous).

Node.js sends the I/O operation to libuv’s thread pool and continues running.

Callback is saved for later.

2️⃣ setTimeout(..., 0)

Scheduled to run in the timers phase of the event loop.

Runs after the synchronous code and after poll/check phases.

3️⃣ setImmediate()

Scheduled to run in the check phase, after poll phase.

Usually runs before setTimeout(…, 0).

4️⃣ fs.readFileSync()

Blocking: this line halts the main thread until the file is completely read.

Everything else (timers, async file read callback) must wait.

5️⃣ console.log('hello juygal')

Runs after synchronous reading is done.

🧾 Expected Output (Most Likely Order)

File content (sync) BlockCode: Hello world from juga.txt
hello juygal
File content (async): Hello world from juga.txt
setImmediate
setTimeout


| Line                          | Operation                | Thread/Phase                          | Description                        |
| ----------------------------- | ------------------------ | ------------------------------------- | ---------------------------------- |
| `fs.readFile()`               | Non-blocking             | Worker thread                         | File read offloaded to thread pool |
| `fs.readFileSync()`           | Blocking                 | Main thread                           | Stops everything until done        |
| `console.log('hello juygal')` | Main thread              | After sync read finishes              |                                    |
| Async `fs.readFile` callback  | Event loop (poll phase)  | Runs after main thread frees          |                                    |
| `setImmediate()`              | Event loop (check phase) | After poll phase (runs before timers) |                                    |
| `setTimeout(…,0)`             | Event loop (timer phase) | Runs after immediates                 |                                    |




// ✅ Quick Summary

// Async → Non-blocking → Uses background threads.

// Sync → Blocking → Freezes main thread until done.

// Event loop order:

// Timers (setTimeout)

// Pending callbacks

// Idle/prepare

// Poll (I/O)

// Check (setImmediate)

// Close callbacks



::::::::::::::::::::::::::::: Seond Os --------------->>

const fs = require('fs');
// 🧱 2️⃣ Synchronous - Blocking
const syncData = fs.readFileSync('jugal.txt', 'utf8');
console.log('File content (sync) BlockCode:', syncData);

console.log('hello juygal');


🧩 Visual Flow
🔸 fs.readFileSync()
Main Thread ─────────────┐
                         │ (blocked until file read complete)
                         ▼
                   File content returned

🔹 fs.readFile()
Main Thread → Submit task → libuv Thread Pool
Main Thread continues → Callback runs later

💡 Summary

readFileSync() → Main thread, blocking, NO thread pool

readFile() → Offloaded to libuv thread pool, non-blocking

