🔥 NODE.JS INTERVIEW CODING PUZZLES (ADVANCED → EXPERT)
These are REAL interview puzzles that test event loop, async behavior, closures, memory, and internals.

I’ll give:
✔ Code
✔ Question
✔ Output
✔ Explanation
✔ Interview takeaway

🧩 PUZZLE 1 — setTimeout vs setImmediate
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));

❓ Output?

👉 Non-deterministic

🧠 Why?

Depends on event loop start

If I/O cycle → setImmediate first

If timer expires → setTimeout first

📌 Interview takeaway:
❌ Never rely on order between them

🧩 PUZZLE 2 — process.nextTick starvation
process.nextTick(() => console.log('tick'));

setTimeout(() => console.log('timeout'), 0);

✅ Output
tick
timeout

🧠 Why?

nextTick runs before event loop phases

🧩 PUZZLE 3 — Infinite nextTick (DANGEROUS)
function loop() {
  process.nextTick(loop);
}
loop();

❓ What happens?

👉 Event loop never reaches I/O
👉 App hangs (100% CPU)

📌 Interview takeaway:
process.nextTick() can kill production

🧩 PUZZLE 4 — Promise vs nextTick
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('tick'));

✅ Output
tick
promise

🧠 Why?

✔ nextTick > promise microtasks

🧩 PUZZLE 5 — Closure + async loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

✅ Output
3
3
3

🧠 Fix
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

🧩 PUZZLE 6 — EventEmitter error crash
const EventEmitter = require('events');
const e = new EventEmitter();

e.emit('error', new Error('Boom'));

❓ Result?

👉 Process crashes

📌 Only event that crashes Node.js

🧩 PUZZLE 7 — Async/await + event loop
async function test() {
  console.log(1);
  await null;
  console.log(2);
}

test();
console.log(3);

✅ Output
1
3
2

🧠 Why?

await → microtask

🧩 PUZZLE 8 — Blocking event loop
setTimeout(() => console.log('timeout'), 0);

for (let i = 0; i < 1e9; i++) {}

❓ Output?

👉 timeout runs after loop finishes

📌 Blocking JS blocks everything

🧩 PUZZLE 9 — Stream backpressure
readable.pipe(writable);

❓ What happens if writable is slow?

👉 Readable pauses automatically

📌 Streams manage backpressure internally

🧩 PUZZLE 🔟 — process.env mutation
process.env.PORT = 3000;
setTimeout(() => console.log(process.env.PORT), 100);

✅ Output
3000


📌 process.env is mutable per process

🧠 INTERVIEW MASTER TAKEAWAYS

✔ nextTick > promises > timers
✔ Event loop starvation is real
✔ Blocking JS = dead server
✔ Error event without handler = crash
✔ Streams handle backpressure
✔ let fixes closure issues

🔥 WANT EVEN HARDER?