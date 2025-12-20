NODE.JS PERFORMANCE

NODE.JS PERFORMANCE

🔥 NODE.JS PERFORMANCE TUNING (V8 + GC) — STAFF / PRINCIPAL LEVEL

This is deep internals knowledge that separates senior from staff/principal.

I’ll cover:

V8 memory model

Garbage Collector internals

Real tuning levers

Debugging slow Node.js apps

Interview-ready answers

🧠 V8 MEMORY MODEL (CORE)
🧱 Heap Layout
Heap
 ├─ New Space (Young Gen)
 │   ├─ From Space
 │   └─ To Space
 ├─ Old Space
 ├─ Large Object Space
 ├─ Code Space
 └─ Map Space

🔥 Key Insight

Most objects die young

GC optimized for short-lived objects

♻️ GARBAGE COLLECTOR (ORINOCO)
🔁 Young Generation (Fast)

Scavenge GC

Copying collector

Very fast (ms)

🐘 Old Generation (Slow)

Mark-Sweep-Compact

Stop-the-world

Can cause latency spikes

⏱️ WHY GC CAUSES LATENCY


🧠 V8 MEMORY MODEL (CORE)
🧱 Heap Layout
Heap
 ├─ New Space (Young Gen)
 │   ├─ From Space
 │   └─ To Space
 ├─ Old Space
 ├─ Large Object Space
 ├─ Code Space
 └─ Map Space

🔥 Key Insight

Most objects die young

GC optimized for short-lived objects

♻️ GARBAGE COLLECTOR (ORINOCO)
🔁 Young Generation (Fast)

Scavenge GC

Copying collector

Very fast (ms)

🐘 Old Generation (Slow)

Mark-Sweep-Compact

Stop-the-world

Can cause latency spikes

⏱️ WHY GC CAUSES LATENCY

| Cause                   | Effect           |
| ----------------------- | ---------------- |
| Large heap              | Longer marking   |
| Many long-lived objects | Old Gen pressure |
| Object retention        | Memory leaks     |
| Large Buffers           | Full GC          |



💥 One full GC can pause Node for 100ms–seconds

🎯 PERFORMANCE TUNING LEVERS (REAL WORLD)
1️⃣ HEAP SIZE TUNING
Default

~1.5GB (64-bit)

Increase Heap
node --max-old-space-size=4096 app.js


📌 Rule:

Do NOT blindly increase heap

Bigger heap = slower GC

2️⃣ ALLOCATION PATTERNS (VERY IMPORTANT)
❌ Bad
function handler() {
  return { a: 1, b: 2, c: Math.random() };
}

✅ Better
const template = { a: 1, b: 2 };
function handler() {
  return { ...template, c: Math.random() };
}


✔ Reduces shape changes

3️⃣ OBJECT SHAPES (HIDDEN CLASSES)
❌ Bad
obj.a = 1;
obj.b = 2;

❌ Worse
obj.b = 2;
obj.a = 1;

✅ Good

Initialize objects consistently

Same property order

4️⃣ AVOID ACCIDENTAL MEMORY LEAKS
🔥 Common Leaks

Global arrays/maps

Closures capturing large objects

EventEmitter listeners

Unbounded caches

emitter.setMaxListeners(10);

5️⃣ BUFFERS & STREAMS (CRITICAL)
❌ Bad
fs.readFile('big.file', cb);

✅ Good
fs.createReadStream('big.file').pipe(res);


✔ Avoid Large Object Space pollution

🔍 GC DEBUGGING (INTERVIEW GOLD)
Enable GC Logs
node --trace-gc app.js

Heap Snapshots

Chrome DevTools

--inspect

Memory Usage
process.memoryUsage()

🧪 REAL PRODUCTION DEBUG STORY

💥 Symptom

p99 latency spikes every 5 minutes

🔎 Root Cause

In-memory cache growing

Old Gen pressure

Full GC pauses

🛠 Fix

LRU cache

Max size

TTL eviction

🧵 EVENT LOOP + GC INTERACTION

GC is stop-the-world

Event loop paused

Timers delayed

p99 latency increases

📌 Staff insight

“GC doesn’t reduce throughput — it kills tail latency.”

⚙️ WORKER THREADS VS GC

Workers have separate heaps

GC isolated per worker

Good for CPU-heavy work

🎯 INTERVIEW QUESTIONS YOU’LL GET
Q1: Why not just increase heap?

👉 Larger heap = slower GC → worse latency

Q2: How do you reduce GC pressure?

👉 Fewer allocations, reuse objects, streams

Q3: How to detect leaks?

👉 Heap snapshots, retained size growth

Q4: When does Node crash OOM?

👉 Old space exhausted

🧠 STAFF-LEVEL SOUND BYTE

“Performance tuning in Node.js is mostly about allocation behavior, not CPU speed.”

🔥 QUICK CHECKLIST

✔ Avoid blocking CPU
✔ Stream large data
✔ Control heap size
✔ Watch GC logs
✔ Kill memory leaks
✔ Optimize hot paths

🚀 WANT NEXT?

🔥 Distributed systems failure stories (real incidents)
🔥 Node.js CPU profiling (Flamegraphs)
🔥 Event loop starvation deep dive
🔥 Principal-level design interview mock

Say NEXT 🔥