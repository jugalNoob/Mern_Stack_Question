🎯 Interview-Ready Definition

queueMicrotask is a JavaScript API that schedules a function to run 
in the microtask queue, after synchronous code but before macrotasks like timers.


🧪 Compare with Promise.then

queueMicrotask(() => console.log('microtask'));

Promise.resolve().then(() => console.log('promise'));

Output:
microtask
promise


👉 Same queue
👉 Order = who was queued first




🧠 What is queueMicrotask? (Simple Meaning)

queueMicrotask(fn) means:
“Run this function after the current code finishes,
but before timers and I/O.”

It schedules a microtask.

📌 In One Line

queueMicrotask puts a function into the microtask queue.

🔎 Where does it run?

In Node.js (and browser):

process.nextTick   → nextTick queue
queueMicrotask     → microtask queue
Promise.then       → microtask queue
setTimeout         → macrotask (timers)

🧪 Simple Example
console.log('start');

queueMicrotask(() => {
  console.log('microtask');
});

console.log('end');

Output:
start
end
microtask


👉 Runs after sync code, but immediately after.

🧪 Compare with setTimeout
console.log('start');

queueMicrotask(() => console.log('microtask'));

setTimeout(() => console.log('timeout'), 0);

console.log('end');

Output:
start
end
microtask
timeout


👉 Microtask always runs before timer

🧪 Compare with Promise.then
queueMicrotask(() => console.log('microtask'));

Promise.resolve().then(() => console.log('promise'));

Output:
microtask
promise


👉 Same queue
👉 Order = who was queued first

❗ Why do we need queueMicrotask?
Problem:

Sometimes you want async behavior without using Promises.

Solution:

Use queueMicrotask

function later(fn) {
  queueMicrotask(fn);
}

later(() => console.log('run later'));

⚠️ Important Warning
queueMicrotask(function loop() {
  queueMicrotask(loop);
});


❌ Infinite microtasks
❌ Event loop starvation
❌ App freeze

(Same risk as Promise loops)

🎯 Interview-Ready Definition

queueMicrotask is a JavaScript API that schedules a function to run in the microtask queue,
 after synchronous code but before macrotasks like timers.

🧠 Memory Trick
sync → nextTick → microtask → timer
