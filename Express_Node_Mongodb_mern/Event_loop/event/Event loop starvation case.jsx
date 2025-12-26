🏁 INTERVIEW ONE-LINER (GOLD)

Event loop starvation occurs when high-priority microtasks or synchronous
 code prevent the event loop from progressing to timers, I/O, and other phases.


 🔴 Event Loop Starvation — What it means (MAIN IDEA)

Event loop starvation happens when high-priority tasks keep running continuously, so lower-priority phases (timers, I/O, check) never get a chance to execute.

In short:

The event loop is alive, but it never moves forward.

🎯 MAIN CAUSE (VERY IMPORTANT)

👉 Uncontrolled microtasks, especially:

process.nextTick()

Re-chained Promise.then()

Heavy synchronous loops

🧠 WHY IT HAPPENS (CORE LOGIC)

Node.js runs this order:

Call Stack
↓
Microtasks (nextTick, Promise)
↓
Event Loop Phases (Timers → Poll → Check → ...)


⚠️ Microtasks always run BEFORE the event loop moves to the next phase
If microtasks keep adding more microtasks, the loop is starved.

❌ CLASSIC STARVATION EXAMPLE
process.nextTick(function loop() {
  process.nextTick(loop);
});

setTimeout(() => {
  console.log('This never runs');
}, 0);

What happens?
nextTick
nextTick
nextTick
...


➡️ setTimeout never executes
➡️ Event loop is starved

⚠️ PROMISE STARVATION EXAMPLE
function recurse() {
  Promise.resolve().then(recurse);
}
recurse();

setImmediate(() => console.log('Never runs'));


Same issue → infinite microtasks.

🧪 SYNC BLOCKING STARVATION
while (true) {}


This blocks:

Event loop

Timers

I/O

Entire server

🔑 MAIN DIFFERENCE (VERY IMPORTANT)






🛑 HOW TO PREVENT STARVATION
✅ 1. Yield control back to event loop
setImmediate(() => heavyTask());

✅ 2. Limit recursion depth
let count = 0;
function safe() {
  if (++count > 1000) return;
  process.nextTick(safe);
}
safe();

✅ 3. Use Worker Threads for CPU work
new Worker('./cpuTask.js');

🏁 INTERVIEW ONE-LINER (GOLD)

Event loop starvation occurs when high-priority microtasks or synchronous code
 prevent the event loop from progressing to timers, I/O, and other phases.

