UV_THREADPOOL_SIZE=16 

🧠 CORE IDEA (ONE LINE)

Thread Pool = internal helper threads for async I/O

Worker Threads = developer-controlled threads for CPU work

🧩 1️⃣ Thread Pool — DEEP

🔹 What is Thread Pool?

A fixed set of background threads

Managed by libuv

Used automatically by Node.js

👉 You do NOT create or manage these threads.

🔹 Default Thread Pool Size

UV_THREADPOOL_SIZE = 4   (default)


Max allowed: 128

🔹 What uses the Thread Pool?

Only blocking operations:


| Operation         | Uses Thread Pool |
| ----------------- | ---------------- |
| `fs.readFile()`   | ✅                |
| `crypto.pbkdf2()` | ✅                |
| `bcrypt.hash()`   | ✅                |
| `dns.lookup()`    | ✅                |
| Network I/O       | ❌ (event loop)   |


🔹 Internal Architecture
Main Event Loop
   ↓
libuv Thread Pool (4 threads)
   ↓
OS / CPU

🔹 Example (Implicit usage)
fs.readFile('file.txt', () => {
  console.log('Done');
});


✔ Thread pool handles file read

✔ Event loop remains free

🔹 Limitations

❌ Fixed size
❌ Can get saturated
❌ Not good for heavy CPU loops

🧩 2️⃣ Worker Threads — DEEP

🔹 What are Worker Threads?

Explicit threads created by developer

Run JavaScript code

Execute CPU-heavy tasks

new Worker('./worker.js');

🔹 Architecture
Single Node Process
 ├─ Main Thread (Event Loop)
 ├─ Worker Thread 1
 ├─ Worker Thread 2

🔹 Communication

Message passing

Optional shared memory (SharedArrayBuffer)

🔹 Example
// main.js
const worker = new Worker('./worker.js');
worker.postMessage('start');

🔹 Advantages

✔ True parallel JS execution
✔ No event loop blocking
✔ Custom scaling

🔹 Limitations

❌ More memory
❌ More complex
❌ Needs careful design

⚔️ THREAD POOL vs WORKER THREADS (TABLE)


| Feature       | Thread Pool       | Worker Threads |
| ------------- | ----------------- | -------------- |
| Managed by    | Node (libuv)      | Developer      |
| Purpose       | Async I/O         | CPU-heavy JS   |
| Size          | Fixed (default 4) | Custom         |
| JS execution  | ❌ No              | ✔ Yes          |
| Blocking risk | Pool saturation   | Worker only    |
| Complexity    | Low               | High           |




🧠 WHEN TO USE WHAT?
✔ Use Thread Pool when:

File system access

Crypto async APIs

DNS lookups

Simple background work

✔ Use Worker Threads when:

CPU-intensive loops

Image processing

Encryption pipelines

ML / data processing

🔥 REAL-WORLD SCENARIO
Password Hashing API

❌ Bad:

bcrypt.hashSync(password);


✔ Good:

Use async bcrypt → thread pool

Or worker threads for bulk hashing

⚠️ INTERVIEW TRAPS (VERY COMMON)
❌ “Thread pool runs JavaScript”

WRONG
✔ It runs native C++ operations

❌ “Increasing thread pool fixes CPU blocking”

WRONG
✔ CPU JS still blocks event loop

❌ “Worker threads replace thread pool”

WRONG
✔ Different responsibilities

🧠 PERFORMANCE TUNING TIP

If many async fs/crypto calls:

UV_THREADPOOL_SIZE=16 node app.js


⚠️ Don’t overdo it → CPU contention

🎯 INTERVIEW ONE-LINERS (MEMORIZE)

✔ Thread pool is for async I/O
✔ Worker threads are for CPU-heavy JS
✔ Thread pool is automatic
✔ Worker threads are manual
✔ Event loop stays responsive in both

🔥 SENIOR-LEVEL FOLLOW-UP QUESTIONS

Thread pool starvation?

Worker thread memory sharing?

Cluster + workers + pool design?

Why network I/O doesn’t use thread pool?

🚀 Want next?

Thread pool starvation demo

Worker thread pool implementation

Node.js event loop deep dive

libuv internals explained visually