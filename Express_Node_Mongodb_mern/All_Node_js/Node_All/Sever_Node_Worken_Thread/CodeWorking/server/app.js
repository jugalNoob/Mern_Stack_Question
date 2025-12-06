// // ✅ Built-in Node.js module for cryptographic operations
// const crypto = require('crypto');



// setTimeout(()=>{

//     console.log('time Tout')
// },0)
// crypto.pbkdf2('password1', 'salt1', 100000, 512, 'sha512', () => {
//   console.log('ms','password 1 Done');
// });

// console.log('jugal')


// const fs = require('fs');

// console.log('jugal'); // Main Thread 1

// setTimeout(() => { // Event Loop / Callback Queue
//     console.log('setTimeout');
// }, 0);

// function onme() {  // Main Thread 2
//     console.log('function');
// }
// onme();

// console.log(fs.Stats); // Main Thread 3

// console.log('jugal'); // Main Thread 4

// const MainFn = async () => { // Declared on Main Thread
//     let Main = await 45;
//     console.log(Main, 'await');
// };

// MainFn();



// 🧠 Step-by-Step Execution
// 🧩 Phase 1 — Main Thread (Synchronous code)

// Everything outside callbacks and async operations runs in the main thread first:

// console.log('jugal') → ✅ main thread

// setTimeout(...) → registered with the Timer phase of the event loop, but callback not executed yet

// onme() is called → inside it, console.log('function') → ✅ main thread

// console.log(fs.Stats) → ✅ main thread

// console.log('jugal') → ✅ main thread

// MainFn() is called

// When called, it runs synchronously until the first await,

// The await 45 pauses this function, returning control to the event loop.




// 🧩 Phase 2 — Microtask Queue (Promise / async-await)

// The resolved value (45) from the await goes into the microtask queue.

// Once the main thread finishes all synchronous code, the microtask queue runs.

// So, console.log(45, 'await') runs before setTimeout.

// 🧩 Phase 3 — Event Loop (Callback Queue)

// Finally, the setTimeout() callback runs, because it was queued with a 0ms timer — but only after microtasks finish.




// 🧩 Phase 3 — Event Loop (Callback Queue)

// Finally, the setTimeout() callback runs, because it was queued
//  with a 0ms timer — but 
// #only after microtasks finish.



// | Code Part                                | Thread Type / Phase                                  | Description                         |
// | ---------------------------------------- | ---------------------------------------------------- | ----------------------------------- |
// | All `console.log()` outside async/timers | **Main Thread**                                      | Synchronous JS execution            |
// | `setTimeout()` callback                  | **Event Loop (Timers phase)**                        | Executes after all microtasks       |
// | `await 45` continuation                  | **Microtask Queue**                                  | Runs before timers                  |
// | FileSystem (`fs`) usage                  | **May trigger libuv thread pool** (for async fs ops) | But here you’re not using async I/O |


