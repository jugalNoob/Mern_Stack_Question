1️⃣ What is a closure?

A closure is a function that remembers the environment 
in which it was created, i.e., it keeps references to variables
 from its outer lexical scope, even if that outer function has 
 finished executing.

Example:

function outer() {
  let count = 0; // outer variable

  return function inner() { // inner function forms closure
    count++;
    console.log(count);
  }
}

const counter = outer(); // outer finished, but inner keeps reference to `count`
counter(); // 1
counter(); // 2
counter(); // 3


✅ Here, inner “closes over” count.

2️⃣ Closure + Event Loop

When closures are used inside asynchronous callbacks, like setTimeout, setInterval, Promises, or event listeners, the function retains access to variables even after the outer function has finished, because closures keep those variables alive in memory.

Example with setTimeout:

function delayedCounter() {
  let count = 0;

  setTimeout(() => {
    count++;
    console.log('Delayed count:', count);
  }, 1000);
}

delayedCounter(); // after 1 second -> prints: Delayed count: 1


What happens under the hood:

delayedCounter executes, creates count = 0.

The arrow function is passed to setTimeout → registered in Web APIs.

delayedCounter finishes execution → normally count would be gone.

Closure keeps count alive until the timeout callback executes.

After 1000ms, the callback goes into the macrotask queue.

Event loop picks it → executes callback → accesses count via closure → prints 1.

3️⃣ Closure + Promises / Microtasks
function asyncClosure() {
  let x = 42;

  Promise.resolve().then(() => {
    console.log('Promise x:', x);
  });

  console.log('sync code');
}

asyncClosure();


Execution order:

x = 42 → stored in closure.

Promise.resolve().then(...) → schedules microtask.

console.log('sync code') → runs immediately.

Microtask runs → prints Promise x: 42.

✅ The closure ensures the microtask still has access to x, even though the outer function has finished.

4️⃣ Key Points

Closures keep variables alive for later use by callbacks.

Combined with the event loop, closures are essential for async programming.

Without closures, callbacks like setTimeout or .then() would not remember outer variables.