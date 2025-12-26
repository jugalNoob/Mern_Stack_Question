🧠 Exact Queues in Node.js
process.nextTick   → NextTick Queue (highest priority)
Promise.then       → Microtask Queue
queueMicrotask     → Microtask Queue

🔥 Priority Order (Very Important)
1️⃣ Synchronous code
2️⃣ process.nextTick queue
3️⃣ Microtask queue (Promise.then, queueMicrotask)
4️⃣ Event loop phases (timers, I/O, etc.)

