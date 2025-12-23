🧠 GC Internals (JavaScript) — Interview-ready explanation

GC = Garbage Collector
It automatically frees memory that is no longer reachable.

JavaScript uses automatic memory management, not manual free() like C/C++.

🧱 JS Memory Layout (important)
STACK  → execution context, primitives, references
HEAP   → objects, arrays, functions, closures


Stack → fast, auto removed when function ends

Heap → GC managed (this is where GC works)

🎯 Core Rule of GC (VERY IMPORTANT)

If an object is reachable → it stays

If an object is unreachable → it is garbage

🔗 Reachability (ROOTS)

GC starts from roots:

GC ROOTS include:

Global objects (window, global)

Current function stack

Closures

Event listeners

Timers

DOM references

If memory is reachable from a root, GC will not delete it.

🔁 GC Algorithm (High level)

JavaScript engines (V8, SpiderMonkey) use Tracing GC:

➤ Mark & Sweep (main algorithm)
1️⃣ Mark Phase

Start from roots

Traverse all reachable objects

Mark them as alive

2️⃣ Sweep Phase

Scan heap

Remove all unmarked objects

Free memory

Roots → A → B → C (marked)
         |
         X (unreachable → swept)

🧠 V8 GC Internals (REAL INTERVIEW CONTENT)
V8 Heap is divided into:
Young Generation (New Space)
Old Generation (Old Space)

👶 Young Generation (Fast GC)

Small, short-lived objects

Uses Scavenge GC

Very fast

Example:
function test() {
  let x = {}   // short lived
}

👴 Old Generation (Slow GC)

Long-lived objects

Uses Mark-Sweep + Mark-Compact

Slower, more expensive

Objects promoted when:

Survive multiple GC cycles

Large in size

🧹 Mark-Compact (why?)

Problem:

Memory fragmentation
[Obj][ ][ ][Obj][ ][Obj]


Solution:

[Obj][Obj][Obj]


✔ Moves objects together
✔ Reduces fragmentation
❌ Slower (pauses execution)

⏸️ Stop-The-World (STW)

During GC:

JS execution pauses

This is why GC can affect performance

Modern V8 reduces pauses using:

Incremental GC

Concurrent GC

Parallel GC

🧠 Closures & GC (your earlier question)
function counter() {
  let x = 1
  return () => x++
}


x is reachable via closure

GC must NOT collect it

❌ Not a memory leak

🚨 Why memory leaks happen in JS?

GC only checks reachability, NOT usefulness.

Common leak sources:

Unremoved event listeners

Timers not cleared

Global variables

Closures holding large unused data

DOM references not released

🧪 Example: Leak despite GC
let cache = {}

function store(key, value) {
  cache[key] = value
}


cache is global

GC can’t remove anything

Memory grows forever ❌

🧠 Interview 1-liner answers
🔹 What is GC?

Automatic memory reclamation of unreachable objects.

🔹 How does GC work?

Using tracing algorithms like Mark & Sweep starting from GC roots.

🔹 Does GC prevent memory leaks?

No — GC only handles unreachable memory.

🔹 Why closures don’t get collected?

Because they’re still reachable via references.

⚡ Pro-level topics (Senior / Staff)

Write barriers

Remembered sets

Generational hypothesis

Incremental & concurrent marking

Heap snapshots

GC tuning in Node.js