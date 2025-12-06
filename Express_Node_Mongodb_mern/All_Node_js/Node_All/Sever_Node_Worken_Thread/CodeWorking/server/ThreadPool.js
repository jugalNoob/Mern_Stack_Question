// use Multi core for  4 
process.env.UV_THREADPOOL_SIZE = 2; // before requiring 'crypto'
// ✅ Built-in Node.js module for cryptographic operations
const crypto = require('crypto');




setTimeout(()=>console.log('Timeout') , 0)
const start=Date.now()
// 🧠 CPU-Intensive Work → Offloaded to libuv thread pool
crypto.pbkdf2('password1', 'salt1', 100000, 512, 'sha512', () => {
  console.log(Date.now()-start,'ms','password 1 Done');
});

// 🧠 CPU-Intensive Work → Offloaded to libuv thread pool
crypto.pbkdf2('password2', 'salt1', 100000, 512, 'sha512', () => {
  console.log(Date.now()-start,'ms','password 2 Done');
});


// 🧠 CPU-Intensive Work → Offloaded to libuv thread pool
crypto.pbkdf2('password3', 'salt1', 100000, 512, 'sha512', () => {
  console.log(Date.now()-start,'ms','password 3 Done');
});


console.log('Console .jugasl')

// 🧠 CPU-Intensive Work → Offloaded to libuv thread pool
crypto.pbkdf2('password4', 'salt1', 100000, 512, 'sha512', () => {
  console.log(Date.now()-start,'ms','password 4 Done');
});


// 🧠 CPU-Intensive Work → Offloaded to libuv thread pool
crypto.pbkdf2('password5', 'salt1', 100000, 512, 'sha512', () => {
  console.log(Date.now()-start,'ms','password 5 Done');  /// Wait for because thiread is 4 cpu work 4 complete after run 5 crypto
});




| Task                   | Runs on               | Uses Thread Pool | Blocking?      |
| ---------------------- | --------------------- | ---------------- | -------------- |
| `console.log('jugal')` | Main Thread           | ❌ No             | ✅ Immediate    |
| `crypto.pbkdf2()`      | Worker Thread (libuv) | ✅ Yes            | ❌ Non-blocking |




⚙️ How Node Handles This
🧠 Step 1 — Main Thread

Node starts executing from the top — all JS code runs in the main event loop thread.

It immediately logs:

Console .jugasl


Then moves on; meanwhile, all 5 crypto operations are handed off to libuv’s thread pool.

🧵 Step 2 — Libuv Thread Pool

Node.js uses libuv, which provides a pool of background worker threads.

By default, there are 4 threads:

process.env.UV_THREADPOOL_SIZE // default = 4


➡️ So here’s what happens:


| Crypto Call | Thread Assigned | Starts Immediately?              |
| ----------- | --------------- | -------------------------------- |
| password1   | 🧵 Thread 1     | ✅ Yes                            |
| password2   | 🧵 Thread 2     | ✅ Yes                            |
| password3   | 🧵 Thread 3     | ✅ Yes                            |
| password4   | 🧵 Thread 4     | ✅ Yes                            |
| password5   | 🧵 — (queued)   | ❌ Waits until one thread is free |



🧾 Expected Output Example
Console .jugasl
Timeout
1000 ms password 1 Done
1002 ms password 2 Done
1005 ms password 3 Done
1007 ms password 4 Done
2005 ms password 5 Done


🕐 The first 4 finish nearly together — because 4 threads worked in parallel.
The 5th finishes only after one thread becomes free, because thread pool = 4.

⚡ Want to Use All CPU Cores?

You can increase the thread pool size:

process.env.UV_THREADPOOL_SIZE = 8; // before requiring 'crypto'


🧩 Place this line at the very top of your script, before any I/O or crypto modules load.

Now all 5 PBKDF2 calls can run at the same time (if your CPU supports it).

🧠 Summary Table

| Operation Type                       | Example      | Thread Used       | Blocking? |
| ------------------------------------ | ------------ | ----------------- | --------- |
| JavaScript                           | Loops, logic | Main thread       | ✅ Yes     |
| I/O (fs.readFile, DNS, crypto, zlib) | `pbkdf2()`   | libuv thread pool | ❌ No      |
| Network I/O (HTTP requests)          | Sockets      | Event loop        | ❌ No      |


💡 Quick Visualization
Main Thread (event loop)
 ├── Schedules pbkdf2() x5
 ├── Logs "Console .jugasl"
 └── Handles "Timeout" callback

libuv Thread Pool (4 threads)
 ├── Thread 1: pbkdf2(password1)
 ├── Thread 2: pbkdf2(password2)
 ├── Thread 3: pbkdf2(password3)
 ├── Thread 4: pbkdf2(password4)
 └── Wait queue: pbkdf2(password5)





 ┌────────────────────────────┐
│     🧠 Main Thread (JS)     │ ← event loop, executes your code
│ ─────────────────────────── │
│ console.log(), loops, sync FS → BLOCKS
│ setTimeout(), fs.readFile() → NON-BLOCKING
└────────────────────────────┘

┌────────────────────────────┐
│ ⚙️ libuv Thread Pool (4x)  │ ← runs async tasks
│ pbkdf2(), fs.readFile()    │
│ zlib, DNS, compression     │
└────────────────────────────┘
