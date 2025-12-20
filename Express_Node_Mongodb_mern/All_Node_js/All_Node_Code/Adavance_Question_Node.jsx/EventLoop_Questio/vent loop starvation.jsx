🔥 EVENT LOOP STARVATION — DEEP DIVE (SENIOR / STAFF / PRINCIPAL)

This topic is frequently used to filter strong Node.js engineers.
I’ll go from internals → failure modes → fixes → interview answers.

🧠 WHAT IS EVENT LOOP STARVATION?

Event loop starvation happens when the event loop is prevented from progressing to the next phase, causing:

Timers delayed

I/O callbacks blocked

Requests piling up

p99 latency exploding

⚠️ Node.js does not crash — it just becomes slow.

🔄 EVENT LOOP PHASES (REFRESH)
┌ timers ──────────────┐  setTimeout / setInterval
│ pending callbacks    │  TCP errors
│ idle, prepare        │
│ poll  ◀─────────────┐│  I/O callbacks
│ check ──────────────┘│  setImmediate
│ close callbacks      │
└──────────────────────┘

🔥 process.nextTick (microtask)
🔥 Promise.then (microtask)

🚨 ROOT CAUSE #1: MICROTASK STARVATION (MOST COMMON)
❌ BAD CODE
function starve() {
  process.nextTick(starve);
}
starve();

❌ Also Bad
Promise.resolve().then(function loop() {
  Promise.resolve().then(loop);
});

🔥 WHAT HAPPENS

nextTick queue drains before every phase

Event loop never reaches timers or I/O

📌 Node gives process.nextTick() higher priority than Promises

🧠 STAFF-LEVEL INSIGHT

“process.nextTick() can starve the event loop. Promises usually just slow it.”

🚨 ROOT CAUSE #2: CPU-BLOCKING JS
❌ BAD
while (true) {}

❌ BAD
for (let i = 0; i < 1e9; i++) {}

💥 EFFECT

JS thread blocked

No GC

No I/O

No timers

🚨 ROOT CAUSE #3: SYNCHRONOUS I/O
❌ BAD
fs.readFileSync('huge.log');


✔ Acceptable only at startup

🚨 ROOT CAUSE #4: UNBOUNDED QUEUES
❌ BAD
setInterval(() => heavyWork(), 1);


Callbacks pile up

Poll phase never drains

🔍 HOW TO DETECT EVENT LOOP STARVATION
1️⃣ EVENT LOOP LAG
const start = process.hrtime.bigint();
setImmediate(() => {
  const lag = Number(process.hrtime.bigint() - start) / 1e6;
  console.log(`Lag: ${lag} ms`);
});


✔ >50ms = danger
✔ >100ms = bad
✔ >500ms = outage

2️⃣ MONITORING METRICS

p99 latency spikes

Requests timeout

CPU at 100%

3️⃣ CPU PROFILING

Flamegraphs

Long JS stacks

Busy loops

🛠️ FIXES (REAL WORLD)
FIX 1️⃣ Yield Control Back to Event Loop
function chunkedWork(items) {
  if (items.length === 0) return;
  processChunk(items.splice(0, 100));
  setImmediate(() => chunkedWork(items));
}


✔ Lets I/O run

FIX 2️⃣ Replace nextTick with setImmediate
setImmediate(() => {
  // safer async
});

FIX 3️⃣ Move CPU Work Off Main Thread
import { Worker } from 'worker_threads';

FIX 4️⃣ Backpressure

Streams

Queues

Rate limits

⚠️ STARVATION VS DEADLOCK



| Starvation     | Deadlock         |
| -------------- | ---------------- |
| Loop runs      | Loop blocked     |
| CPU high       | CPU idle         |
| Timers delayed | Nothing executes |



🧪 REAL PRODUCTION INCIDENT (INTERVIEW GOLD)

💥 Symptom

APIs timing out under load

🔎 Cause

Recursive process.nextTick

Microtask queue starvation

🛠 Fix

Replace with setImmediate

Added monitoring

🎯 INTERVIEW QUESTIONS
Q: Can process.nextTick() starve the event loop?

✔ Yes — it runs before every phase and can block I/O indefinitely.

Q: Promises vs nextTick — which is worse?

✔ nextTick (higher priority)

Q: How do you prevent starvation?

✔ Chunk work
✔ Avoid nextTick loops
✔ Use workers

🧠 STAFF-LEVEL SOUND BYTE

“Event loop starvation doesn’t crash Node — it silently kills latency.”

🔥 QUICK CHECKLIST

✔ Avoid recursive microtasks
✔ Watch event loop lag
✔ Chunk CPU work
✔ Use workers
✔ Replace sync I/O

🚀 WANT NEXT?

🔥 Node.js CPU profiling (Flamegraphs)
🔥 Distributed failure postmortems
🔥 Principal interview mock (live style)