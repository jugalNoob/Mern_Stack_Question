🔥 Event Loop Starvation — what it really means (clear + interview-ready)

✅ Definition (simple)

Event loop starvation happens when the event loop cannot reach certain queues (usually macrotasks like setTimeout, I/O, UI updates) because other tasks keep the call stack or microtask queue busy.

In short:
👉 Some tasks never get CPU time

🧠 Why it happens (core idea)

The event loop is single-threaded.
If one phase never finishes, other phases starve.

Main causes:

Infinite / heavy synchronous code

Uncontrolled microtasks (Promises)

CPU-heavy JS without yielding

Recursive scheduling

🔁 Event Loop Priority (IMPORTANT)
Call Stack (sync)
↓
Microtask Queue (Promise.then, queueMicrotask)
↓
Macrotask Queue (setTimeout, setInterval, I/O)
↓
Render / I/O


⚠️ Microtasks always run before macrotasks

❌ Example 1: Microtask Starvation (MOST COMMON)
function starve() {
  Promise.resolve().then(starve)
}

starve()

setTimeout(() => {
  console.log('I will NEVER run')
}, 0)

What happens?

Microtask schedules another microtask

Event loop never reaches macrotask queue

setTimeout starves

📌 This is event loop starvation

❌ Example 2: Synchronous CPU Block
while (true) {
  // infinite loop
}


Call stack never clears

Event loop never runs

Everything freezes (browser / Node)

❌ Example 3: Heavy loop
for (let i = 0; i < 1e10; i++) {}


Event loop blocked for seconds

Timers + I/O delayed

Appears like “hang”

❌ Example 4: Recursive setImmediate / nextTick (Node.js)
function loop() {
  process.nextTick(loop)
}

loop()


📌 nextTick runs before promises in Node
➡️ Total starvation of I/O

🔍 What actually starves?

| Starved Thing | Reason                   |
| ------------- | ------------------------ |
| `setTimeout`  | Macrotask never reached  |
| I/O callbacks | Event loop stuck         |
| UI rendering  | Main thread blocked      |
| GC            | Safe point never reached |



✅ How to PREVENT Event Loop Starvation
🟢 1. Yield control to event loop
function work(i = 0) {
  if (i > 1e6) return
  if (i % 1000 === 0) {
    setTimeout(() => work(i + 1), 0) // yield
  } else {
    work(i + 1)
  }
}

🟢 2. Break microtask chains

❌ BAD

Promise.resolve().then(loop)


✅ GOOD

Promise.resolve().then(() => {
  setTimeout(loop, 0)
})

🟢 3. Use Workers for CPU tasks

Browser → Web Workers

Node.js → Worker Threads

🟢 4. Prefer streaming over buffering

❌ BAD

fs.readFile('big.file', cb)


✅ GOOD

fs.createReadStream('big.file')

🟢 5. Limit recursion depth

Avoid:

infinite then

infinite nextTick

infinite setImmediate

🧠 Interview One-Liners (🔥 GOLD)

Event loop starvation means some tasks never execute

Microtasks can starve macrotasks

Promises can block timers

CPU-heavy JS blocks the event loop

Yielding restores fairness

🧪 Quick Interview Question

Q: Why does setTimeout(fn, 0) not run immediately?
A: Because microtasks must finish first; starvation can delay it indefinitely.