🧠 Concept Recap: Event Loop Phases

Node.js runs JavaScript in phases managed by libuv’s event loop:

| **Phase**              | **Example Function**         | **Description**                                   |
| ---------------------- | ---------------------------- | ------------------------------------------------- |
| **1. Timers**          | `setTimeout`, `setInterval`  | Executes callbacks after a specified delay.       |
| **2. I/O Callbacks**   | `fs.readFile`, `net`, `http` | Executes deferred I/O callbacks.                  |
| **3. Idle/Prepare**    | Internal use                 | Internal phase before poll.                       |
| **4. Poll**            | File system, sockets         | Waits for new I/O events.                         |
| **5. Check**           | `setImmediate()`             | Executes callbacks scheduled with `setImmediate`. |
| **6. Close Callbacks** | `socket.on('close')`         | Executes when handles are closed.                 |


🔍 Example 1 — Your Code Explained
let fs = require('fs')
let one = 'jugal sharma' // Top-level Code

console.log(fs) // synchronous (top-level)
setTimeout(() => console.log('karan sharma setTimeout'), 0) // Timers phase
console.log(one) // synchronous
setImmediate(() => console.log('setImmediate')) // Check phase
console.log('end Time') // synchronous

🧾 Output (Typical)
[fs module object] 
jugal sharma
end Time
karan sharma setTimeout
setImmediate


🧩 Explanation:

All console.log outside async calls run immediately (synchronously).

setTimeout(..., 0) runs in Timer phase (executed after poll phase).

setImmediate() runs in Check phase — it usually comes after timeout in scripts like this, but timing may differ.

⚠️ The order of setTimeout(..., 0) and setImmediate() may swap depending on environment — because both are queued for near-immediate execution but in different event loop phases.

🔄 Example 2 — Inside an I/O Callback

Here’s how the difference becomes deterministic 👇

const fs = require('fs')

fs.readFile(__filename, () => {
  setTimeout(() => console.log('setTimeout inside I/O'), 0)
  setImmediate(() => console.log('setImmediate inside I/O'))
})

✅ Output (Always consistent)
setImmediate inside I/O
setTimeout inside I/O


🧩 Why?

After I/O, the event loop moves to the poll phase.

When polling ends, it jumps directly to the check phase, where setImmediate callbacks are executed before timers.

🧩 Example 3 — Multiple Asynchronous Queues
setImmediate(() => console.log('A - setImmediate'))
setTimeout(() => console.log('B - setTimeout 0'), 0)
Promise.resolve().then(() => console.log('C - Promise'))
process.nextTick(() => console.log('D - nextTick'))
console.log('E - main thread')

🧾 Output Order
E - main thread
D - nextTick
C - Promise
B - setTimeout 0
A - setImmediate


🧠 Why this order?

E runs first — main thread code.

nextTick() (microtask) runs before promises and before returning to event loop.

Promises (.then) execute right after nextTick.

Then the event loop’s timers and check phases run.

⚙️ Example 4 — Mixing File I/O and Timers
const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('I/O finished');
});

setTimeout(() => console.log('Timer phase 1'), 0);
setImmediate(() => console.log('Check phase'));
console.log('Synchronous log');

🧾 Output (Typically)
Synchronous log
Timer phase 1
Check phase
I/O finished


💡 Key takeaway: setImmediate() and setTimeout(..., 0) are close in timing but run in different event loop phases.

🧱 Example 5 — Demonstrating Event Loop Phases Clearly
const fs = require('fs');

setTimeout(() => console.log('1️⃣ Timer phase'), 0);
setImmediate(() => console.log('5️⃣ Check phase'));

fs.readFile(__filename, () => {
  console.log('3️⃣ I/O Callback phase');
  setTimeout(() => console.log('4️⃣ Timer after I/O'), 0);
  setImmediate(() => console.log('6️⃣ Check after I/O'));
});

console.log('2️⃣ Top-level code');

✅ Output
2️⃣ Top-level code
1️⃣ Timer phase
3️⃣ I/O Callback phase
6️⃣ Check after I/O
4️⃣ Timer after I/O

🧩 Summary Table


| Function             | Event Loop Phase    | Execution Timing            |
| -------------------- | ------------------- | --------------------------- |
| `console.log()`      | Top-level           | Immediate                   |
| `setTimeout()`       | **Timers Phase**    | After delay / next cycle    |
| `setImmediate()`     | **Check Phase**     | After Poll phase            |
| `fs.readFile()`      | **I/O Phase**       | Asynchronous file read      |
| `process.nextTick()` | **Microtask Queue** | Before returning to loop    |
| `Promise.then()`     | **Microtask Queue** | After nextTick, before loop |
