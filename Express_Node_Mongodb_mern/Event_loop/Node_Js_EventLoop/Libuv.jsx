🔹 Main Role of libuv in Node.js

libuv is a C library that handles asynchronous I/O, timers, and
 the event loop in Node.js, allowing Node to perform non-blocking
  operations on a single main thread.

🔹 Simple Words

Manages the Event Loop → decides which callback to run next

Handles Async I/O → file system, network, DNS, etc.

Thread Pool → performs heavy tasks in background threads (default 4 threads)

Bridges JS and OS → lets JavaScript code perform async work 
without blocking the main thread

🔹 Components of libuv
libuv
│
├─ Event Loop (manages queues and callback execution)
├─ Thread Pool (fs, crypto, zlib)
├─ Async I/O (network, timers)
├─ Handles OS-level operations

🔹 Flow with Node.js
JavaScript Code (Main Thread)
         │
         ▼
    libuv Event Loop
   ┌───────────────┐
   │ Async I/O     │  ← fs, network, timers
   │ Thread Pool   │  ← heavy operations
   └─────┬─────────┘
         │ callback ready
         ▼
    Main Thread executes callback

🔹 Example
const fs = require('fs');

console.log('Start');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('File read done');
});

console.log('End');


Output:

Start
End
File read done


Explanation:

fs.readFile → delegated to libuv thread pool

Main thread continues executing sync code (console.log('End'))

Event loop picks up callback when I/O completes

Callback executes on main thread

🔹 One-Line Interview Answer

libuv in Node.js provides the event loop, async I/O, and a thread pool, enabling non-blocking operations on a single main thread.