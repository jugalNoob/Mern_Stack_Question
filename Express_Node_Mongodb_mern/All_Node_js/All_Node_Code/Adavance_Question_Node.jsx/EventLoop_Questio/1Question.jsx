For each puzzle:
✔ Code
✔ Output
✔ Why
✔ Interview takeaway

🧩 PUZZLE 1 — nextTick vs Promise vs Timer
setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

process.nextTick(() => console.log('nextTick'));

✅ Output
nextTick
promise
timeout

🧠 Why

Order:

process.nextTick

Promise microtasks

Timers phase

📌 Takeaway:
nextTick > promises > timers

🧩 PUZZLE 2 — async/await + microtasks
async function test() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}

console.log('C');
test();
console.log('D');

✅ Output
C
A
D
B

🧠 Why

await schedules continuation as microtask

📌 Takeaway:
await pauses function, not thread

🧩 PUZZLE 3 — Nested nextTick starvation
setTimeout(() => console.log('timeout'), 0);

process.nextTick(function tick() {
  console.log('tick');
  process.nextTick(tick);
});

❓ Output?
tick
tick
tick
... (infinite)

🧠 Why

Event loop never reaches timers

CPU spikes

📌 Takeaway:
Recursive nextTick = production killer

🧩 PUZZLE 4 — setImmediate inside I/O
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
});

✅ Output
immediate
timeout

🧠 Why

After I/O → check phase runs before timers

📌 Takeaway:
Inside I/O → setImmediate wins

🧩 PUZZLE 5 — Promise inside timer
setTimeout(() => {
  console.log('timeout');
  Promise.resolve().then(() => console.log('promise'));
}, 0);

✅ Output
timeout
promise

🧠 Why

Promise microtask runs after current callback

📌 Takeaway:
Microtasks flush after each phase

🧩 PUZZLE 6 — Mixed queue chaos
console.log(1);

setTimeout(() => console.log(2), 0);

setImmediate(() => console.log(3));

Promise.resolve().then(() => console.log(4));

process.nextTick(() => console.log(5));

console.log(6);

✅ Output
1
6
5
4
2 or 3
3 or 2

🧠 Why

nextTick → promise → timers / immediate (non-deterministic)

📌 Takeaway:
Never depend on timer vs immediate order

🧩 PUZZLE 7 — Blocking the event loop
setTimeout(() => console.log('timeout'), 0);

for (let i = 0; i < 1e9; i++) {}

❓ Output?
(timeout prints after loop finishes)

🧠 Why

JS is single-threaded

Blocking loop stops everything

📌 Takeaway:
CPU work must go to workers

🧩 PUZZLE 8 — Promise chain starvation
function loop() {
  Promise.resolve().then(loop);
}
loop();

setTimeout(() => console.log('timeout'), 0);

❓ Output?

👉 timeout never executes

🧠 Why

Microtask queue never empties

📌 Takeaway:
Promises can starve event loop too

🧩 PUZZLE 9 — await + timer
async function foo() {
  await null;
  console.log('foo');
}

setTimeout(() => console.log('timeout'), 0);
foo();

✅ Output
foo
timeout

🧠 Why

await null → microtask

Microtasks run before timers

🧩 PUZZLE 🔟 — Multiple I/O callbacks
const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('file1');
});

fs.readFile(__filename, () => {
  console.log('file2');
});

❓ Output?

👉 Order NOT guaranteed

📌 Takeaway:
I/O completion order is unpredictable

🧠 MASTER INTERVIEW SUMMARY (MEMORIZE)

✔ process.nextTick runs before everything
✔ Promises are microtasks
✔ Timers & immediate order is context-dependent
✔ Recursive microtasks = starvation
✔ Blocking JS = dead server
✔ I/O order is not guaranteed

🚀 WANT NEXT?

🔥 Event loop execution order (EXTREME)
🔥 Node.js memory leak debugging puzzles
🔥 System design + coding hybrid round
🔥 Worker threads deep dive