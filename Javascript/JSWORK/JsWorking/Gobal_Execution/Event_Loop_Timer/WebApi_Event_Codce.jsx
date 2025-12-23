
Microtask Queue   → Promises, queueMicrotask, MutationObserver
Macrotask Queue   → setTimeout, setInterval, setImmediate, UI events


+-------------------+           +------------------+
|    Code Segment   |           |   Heap Memory    |
|  (Functions etc.) |           |  Objects/Arrays  |
+-------------------+           +------------------+
          |                            |
          v                            v
    +-------------------+       +-------------------+
    |    Call Stack     |       |     Web APIs      |
    |  (Sync code runs) | <---> | Timers/Fetch/etc. |
    +-------------------+       +-------------------+
          |                            |
          v                            |
    +-------------------+               |
    |  Microtask Queue  | <-------------+
    |  (Promises etc.)  |
    +-------------------+
          |
          v
    +-------------------+
    |  Macrotask Queue  |
    |  (setTimeout etc.)|
    +-------------------+
          |
          v
      Repeat Event Loop





🔹 2️⃣ Web APIs (NOT executed here)

Examples:

setTimeout

setInterval

DOM events

fetch

XHR

They:

run outside JS engine

wait for timer / IO

then push callbacks to queues

❌ Web APIs never “run first”

🔹 3️⃣ Microtask Queue (HIGHEST priority async)
Examples:

Promise.then / catch / finally

queueMicrotask

MutationObserver

process.nextTick (Node.js – even higher)

✅ Always runs BEFORE macrotask

🔹 4️⃣ Macrotask (Task Queue)
Examples:

setTimeout

setInterval

setImmediate (Node)

UI events

MessageChannel

🔥 FINAL PRIORITY ORDER (MEMORIZE)
Call Stack
↓
Microtask Queue
↓
Macrotask Queue

🧪 Example (Classic Interview Question)
console.log('start')

setTimeout(() => console.log('timeout'), 0)

Promise.resolve().then(() => console.log('promise'))

console.log('end')

✅ Output:
start
end
promise
timeout

WHY?

Sync → start, end

Microtask → promise

Macrotask → timeout

🔥 Where does Web API fit?
setTimeout(cb, 1000)


Flow:

Call Stack → Web API (timer)
            ↓
        Macrotask Queue
            ↓
        Call Stack


Web API = waiting room, not execution

🔹 Node.js SPECIAL CASE (important)
Order in Node.js:
process.nextTick
↓
Promise microtasks
↓
Timers (setTimeout)
↓
setImmediate


process.nextTick can starve event loop ⚠️

🧠 One-line interview answer

“Web APIs schedule callbacks, microtasks execute first, and macrotasks run afterward.”

🔑 Easy Memory Trick

🧠 "S → M → M"

Sync

Microtask

Macrotask

If you want next:
🔥 event loop starvation
🔥 why promises can block timers
🔥 setTimeout(fn, 0) myth