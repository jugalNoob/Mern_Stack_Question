🧠 What is a Memory Leak? (1-line)

A memory leak happens when objects that are no longer needed are still reachable, so the Garbage Collector cannot free them.

GC rule:

Reachable = NOT collectible
Unreachable = GC cleans it

🟢 BASIC MEMORY LEAK PATTERNS
1️⃣ Forgotten Global Variables
❌ Problem
function test() {
  data = new Array(1000000) // no let/const
}
test()

Why leak?

data becomes a global

Global scope lives for entire app lifetime

Memory graph
Global → data → huge array

✅ Fix
let data = new Array(1000000)

2️⃣ Uncleared Timers (setInterval)
❌ Problem
setInterval(() => {
  console.log("polling")
}, 1000)

Why leak?

Interval callback always reachable

Closure keeps referenced objects alive

✅ Fix
const id = setInterval(...)
clearInterval(id)

3️⃣ Event Listeners Not Removed
❌ Problem
button.addEventListener("click", handler)

Why leak?

DOM → handler → closure → memory retained

✅ Fix
button.removeEventListener("click", handler)

🟡 INTERMEDIATE MEMORY LEAK PATTERNS
4️⃣ Closures Holding Large Objects
❌ Problem
function createHandler() {
  const big = new Array(10_000_000)
  return () => console.log(big.length)
}
const fn = createHandler()

Why leak?
fn → closure → big array

✅ Fix
const size = big.length
return () => console.log(size)


📌 Capture minimum data

5️⃣ Detached DOM Nodes
❌ Problem
let node = document.getElementById("box")
document.body.removeChild(node)
// but reference still exists

Why leak?

Node removed visually

Still referenced in JS

✅ Fix
node = null

6️⃣ Caching Without Eviction
❌ Problem
const cache = {}

function getData(key) {
  if (!cache[key]) {
    cache[key] = heavyComputation()
  }
  return cache[key]
}

Why leak?

Cache grows forever

✅ Fix

LRU cache

TTL eviction

🔴 ADVANCED MEMORY LEAK PATTERNS (REAL SYSTEMS)
7️⃣ Closure in Loops (var + async)
❌ Problem
for (var i = 0; i < 100000; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

Why leak?

One shared i

Timers keep closure alive

Memory spike until all timers finish

✅ Fix
for (let i = 0; i < 100000; i++) { ... }

8️⃣ Promises Never Resolved / Rejected
❌ Problem
new Promise(() => {
  // no resolve / reject
})

Why leak?

Promise stays pending

Closures remain reachable

✅ Fix

Always resolve or reject

9️⃣ Large Buffers in Node.js
❌ Problem
let buf = Buffer.alloc(100 * 1024 * 1024)

Why leak?

Buffers allocated outside V8 heap

Harder for GC to manage

✅ Fix
buf = null

🔥 EXPERT-LEVEL MEMORY LEAKS
🔟 EventEmitter Listener Leak (Node.js)
❌ Problem
emitter.on("data", handler)
// added repeatedly

Symptom
MaxListenersExceededWarning

Why leak?

EventEmitter holds references forever

✅ Fix
emitter.once("data", handler)
emitter.removeListener("data", handler)

1️⃣1️⃣ Circular References + Closures
❌ Problem
obj.self = obj

Why leak?

GC can handle cycles

❌ But closures + global references break GC

✅ Fix

Break references manually

1️⃣2️⃣ Express / API Request Leak (VERY COMMON)
❌ Problem
app.get("/", (req, res) => {
  global.store.push(req)
})

Why leak?

Each request stored forever

✅ Fix

Never store req, res globally

🧠 GC MENTAL MODEL (IMPORTANT)
ROOTS:
- Global
- Active stack
- Closures
- Timers
- Event listeners

If reachable from ROOT → NOT GC’d

🔍 How to Detect Memory Leaks (PRO)
Node.js
node --inspect app.js


Chrome DevTools → Memory

Heap Snapshot

Allocation Timeline

Signs

Heap grows continuously

GC runs but memory not freed

🎯 Interview Killer Summary

“Memory leaks occur when objects remain reachable due to references from globals, closures, timers, or event listeners, preventing garbage collection.”

✅ GOLDEN RULES

✔ Clear timers
✔ Remove listeners
✔ Avoid global state
✔ Capture minimal closure data
✔ Use weak references (WeakMap, WeakSet)
✔ Monitor heap growth

If you want next 🔥

WeakMap vs Map deep dive

Node.js heap vs buffer memory

Real production memory leak case study

GC algorithms (Mark & Sweep, Generational GC)