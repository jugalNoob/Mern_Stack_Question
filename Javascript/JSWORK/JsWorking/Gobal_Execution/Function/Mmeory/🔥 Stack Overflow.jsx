Stack Overflow vs Heap Overflow (JS / Node.js)

Clear • Visual • Interview-ready

1️⃣ Stack Overflow
🔹 What is it?

Stack overflow happens when the call stack grows beyond its limit.

The stack stores:

Function call frames

Local variables (primitives)

Return addresses

🔥 Common causes
❌ Infinite / deep recursion
function recurse() {
  recurse()
}
recurse()

❌ Very deep synchronous calls
function f(n) {
  if (n === 0) return
  f(n - 1)
}
f(1e7)

💥 Error you see
RangeError: Maximum call stack size exceeded

🧠 Memory picture
STACK
-----------------
| f()           |
| f()           |
| f()           |
| f()           |  ← keeps growing ❌
-----------------


Heap is usually fine here.

✅ How to fix stack overflow
✔ Convert recursion → iteration
function f(n) {
  while (n--) {}
}

✔ Use async breaks
function f(n) {
  if (n === 0) return
  setImmediate(() => f(n - 1))
}

✔ Tail-call optimization

(Not reliable in JS engines today ❌)

2️⃣ Heap Overflow (Out of Memory)
🔹 What is it?

Heap overflow happens when the heap runs out of available memory.

Heap stores:

Objects

Arrays

Functions

Closures

🔥 Common causes
❌ Memory leak
const arr = []
setInterval(() => {
  arr.push(new Array(1e6))
}, 1000)

❌ Huge allocations
let big = new Array(1e9)

❌ Unbounded cache
const cache = {}
cache[key] = value  // forever

💥 Error you see
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory

🧠 Memory picture
HEAP
-----------------
| obj | arr | fn |
| obj | arr | fn |
| obj | arr | fn | ← keeps growing ❌
-----------------


Stack is usually fine here.

✅ How to fix heap overflow
✔ Remove references
obj = null

✔ Limit caches (LRU)
new LRU({ max: 500 })

✔ Stream instead of buffer
fs.createReadStream().pipe(res)

✔ Increase heap size (temporary)
node --max-old-space-size=4096 app.js

3️⃣ Key Differences (INTERVIEW TABLE)


| Feature   | Stack Overflow                     | Heap Overflow             |
| --------- | ---------------------------------- | ------------------------- |
| Memory    | Stack                              | Heap                      |
| Cause     | Deep recursion                     | Memory leak / big objects |
| Error     | `Maximum call stack size exceeded` | `heap out of memory`      |
| GC helps? | ❌ No                               | ⚠️ Only if unreachable    |
| Fix       | Iteration / async                  | Release memory            |




4️⃣ Real-world Node.js scenarios
🔥 Stack overflow

Recursive JSON parsing

DFS on deep trees

Recursive middleware

🔥 Heap overflow

Kafka consumer storing messages

Mongo cursor not closed

Redis cache without TTL

Event listeners not removed

(You’ve seen these in system design already 😉)

5️⃣ Interview killer statements 💎
✔ Stack overflow

“Stack overflow occurs when recursive or deeply nested function calls exceed the call stack limit.”

✔ Heap overflow

“Heap overflow occurs when long-lived objects accumulate and GC cannot reclaim memory.”

6️⃣ One-line memory rule (remember forever)
Too many calls → STACK overflow
Too much data  → HEAP overflow

7️⃣ Debugging tips
Stack overflow
console.trace()

Heap overflow
node --trace-gc
node --inspect


If you want next:

🔥 Pass-by-value vs reference (with memory diagrams)

🔥 Why recursion is dangerous in Node.js

🔥 GC tuning for high-throughput systems

🔥 Real production memory leak case study