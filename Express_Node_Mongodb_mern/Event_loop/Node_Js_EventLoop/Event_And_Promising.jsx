🔹 Key Points (Bullet)

Runs on main thread

Handles timers, I/O, network, and callbacks

Works with microtask queue (Promise, queueMicrotask)

Works with macrotask queue (setTimeout, setImmediate, I/O)

Ensures non-blocking execution



🔍 Key Difference (Simple Words)

Promises are “reaction mechanisms” — they only handle results.
Event Loop is the “engine” that schedules and runs async 
operations on the main thread.

🔎 Code Example


🔍 Key Difference (Simple Words)

Promises are “reaction mechanisms” — they only handle results.
Event Loop is the “engine” that schedules and runs
 async operations on the main thread.


 console.log('start') → main thread

Promise.resolve().then(...) → goes to microtask queue

setTimeout(...) → goes to timers queue in event loop

console.log('end') → main thread

Event loop drains microtasks first, then timers