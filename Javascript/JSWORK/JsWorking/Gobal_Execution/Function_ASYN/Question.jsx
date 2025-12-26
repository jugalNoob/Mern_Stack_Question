🔑 Memory Trick
await  ===  Promise.then
async === returns Promise


🏆 Interview-Perfect One-Liner

async/await is syntactic sugar over Promises, where await pauses
 execution and resumes the function using a
 microtask, equivalent to a Promise.then() callback.



 🔥 1-Page JavaScript Interview Cheat Sheet
(Event Loop • Promises • async/await • Web APIs • Node.js notes)

1️⃣ JS Runtime – Big Picture
JS Engine (V8)
 ├─ Call Stack        → executes sync code
 ├─ Memory Heap       → stores objects & functions
 └─ Event Loop        → moves tasks to stack

Browser Only:
 ├─ Web APIs          → timers, fetch, DOM, IO
 ├─ Microtask Queue   → promises, await
 └─ Macrotask Queue   → timers, UI events

2️⃣ Execution Priority (VERY IMPORTANT)
1. Call Stack (sync)
2. Microtask Queue (ALL)
3. Macrotask Queue (ONE)


📌 Microtasks always finish before any macrotask runs

3️⃣ Where Things Actually Go

| Code              | Goes To                       |
| ----------------- | ----------------------------- |
| `console.log()`   | Call Stack                    |
| `Promise.then()`  | Microtask Queue               |
| `Promise.catch()` | Microtask Queue               |
| `await`           | Microtask Queue               |
| `setTimeout()`    | Web API → Macrotask           |
| `fetch()`         | Web API → Promise → Microtask |
| DOM events        | Web API → Macrotask           |



4️⃣ async / await (Truth Table)
async function test() {
  let x = await 10;
  console.log(x);
}


Execution:

test() starts
→ await pauses function
→ Promise.resolve(10)
→ Microtask Queue
→ resumes function
→ x = 10


❌ await does NOT use Web API
✅ await = Promise.then()

5️⃣ Promise Flow (Correct)
Promise.resolve("A").then(console.log);

Promise resolved
→ Microtask Queue
→ Call Stack


🚫 No Web API involved

6️⃣ setTimeout Flow
setTimeout(() => console.log("B"), 0);

setTimeout
→ Web API (timer)
→ Macrotask Queue
→ Call Stack

7️⃣ fetch Flow (Common Trap)
fetch("/api").then(res => console.log(res));

fetch
→ Web API (network)
→ Promise resolved
→ Microtask Queue
→ Call Stack

8️⃣ Classic Interview Output Order
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


Output:

A
D
C
B


Why?

Sync → Microtask → Macrotask

9️⃣ Browser vs Node.js (Quick)




| Browser             | Node.js              |
| ------------------- | -------------------- |
| Web APIs            | libuv                |
| DOM Events          | No DOM               |
| Timers → Macrotask  | Timers → Timer Phase |
| Promise → Microtask | Promise → Microtask  |




🔑 Golden Interview Rules (Memorize)

1️⃣ Promises never go to Web APIs
2️⃣ await is syntactic sugar for .then()
3️⃣ Microtasks always run before Macrotasks
4️⃣ Web APIs handle only external async work
5️⃣ Call Stack must be empty before Event Loop runs

🏆 Perfect Interview One-Liner

JavaScript executes synchronous code on the call stack, offloads
 async browser work to Web APIs, resumes promises via the microtask 
 queue, and only then processes macrotasks through the event loop.