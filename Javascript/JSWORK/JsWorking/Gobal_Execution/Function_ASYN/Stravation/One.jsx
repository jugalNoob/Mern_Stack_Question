🔥 Performance & Microtask Starvation — Explained Like an Interview Pro

This is an advanced JS runtime topic. Interviewers LOVE this one.

1️⃣ What is Microtask Starvation? (Simple Meaning)

Microtask starvation happens when the Microtask Queue keeps getting new tasks and the Macrotask Queue never gets a chance to run.

📌 Because:

Event Loop rule:
👉 Finish ALL microtasks before running ONE macrotask

2️⃣ Why is this a PERFORMANCE problem?

Because:

UI freezes 🥶

setTimeout, UI events, rendering never run

CPU spikes

App feels “stuck” even though JS isn’t “infinite”

3️⃣ Visual Priority (Remember This)
Call Stack
→ Microtask Queue (ALL, no limit)
→ Macrotask Queue (ONE)
→ Render / Paint


🚨 If Microtasks never finish → Macrotasks never execute

4️⃣ Real Example: Microtask Starvation 🔥
❌ BAD CODE (Starvation)
function loop() {
  Promise.resolve().then(loop);
}
loop();

What happens?
loop()
→ Promise.then(loop)
→ Microtask Queue
→ loop()
→ Promise.then(loop)
→ Microtask Queue
→ ...


❌ setTimeout, UI clicks, rendering → NEVER RUN

5️⃣ UI Freeze Example (Browser)
button.onclick = () => {
  Promise.resolve().then(function repeat() {
    Promise.resolve().then(repeat);
  });
};


👉 Browser becomes unresponsive
👉 Can't click / scroll
👉 Rendering blocked

6️⃣ async/await Starvation (Same Problem)
async function repeat() {
  await null;
  repeat();
}
repeat();


Why?

await → Promise.then → Microtask
repeat() → schedules another microtask


🔥 Same starvation effect

7️⃣ Performance Rule (VERY IMPORTANT)

❌ Never put infinite or heavy logic in microtasks
✅ Use macrotasks to yield control

8️⃣ How to FIX Microtask Starvation ✅
✅ Solution 1: Yield using setTimeout
function safeLoop() {
  setTimeout(safeLoop, 0);
}
safeLoop();


✔ Allows rendering
✔ UI responsive
✔ Other tasks execute

✅ Solution 2: Batch microtasks
let count = 0;

function controlledLoop() {
  if (count++ < 1000) {
    Promise.resolve().then(controlledLoop);
  }
}
controlledLoop();


✔ Microtasks eventually end
✔ Event loop continues

✅ Solution 3: requestAnimationFrame (UI work)
function animate() {
  // DOM updates
  requestAnimationFrame(animate);
}
animate();


✔ Best for animations
✔ Syncs with browser paint

9️⃣ Node.js Angle (Interview Gold)

In Node.js:

Microtasks run after each phase

Too many microtasks can block timers, IO, close callbacks

process.nextTick(() => {
  process.nextTick(() => {
    process.nextTick(() => { /* infinite */ });
  });
});


🚨 process.nextTick starvation is worse than Promises

🔑 Golden Rules (Memorize)

1️⃣ Microtasks have higher priority than macrotasks
2️⃣ Infinite microtasks = event loop starvation
3️⃣ await can cause starvation if abused
4️⃣ Yield to macrotasks for performance
5️⃣ UI rendering needs macrotask gaps

🏆 Interview One-Liner (Perfect)

Microtask starvation occurs when continuous promise-based callbacks prevent the event loop from processing macrotasks, leading to performance issues like UI freezing or delayed timers.

⚠️ Red Flags Interviewers Watch For

🚫 Infinite Promise.then() loops
🚫 Heavy logic inside microtasks
🚫 Excessive await in tight loops
🚫 Misusing process.nextTick

If you want next:

⚡ Real-world bug stories

⚡ Debugging starvation

⚡ Performance profiling tips

⚡ Advanced Node.js event loop phases

Just say 🚀