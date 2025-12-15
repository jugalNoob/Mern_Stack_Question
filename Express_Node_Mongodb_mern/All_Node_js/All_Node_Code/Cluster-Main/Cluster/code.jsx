🔥 Node.js cluster – Deep Step-by-Step Explanation
🧠 Why Cluster is needed in Node.js?

Node.js is single-threaded:

1 process

1 event loop

1 CPU core

👉 On a multi-core CPU, remaining cores stay unused.

💡 Cluster allows Node.js to use ALL CPU cores.



🧩 Your Code (Reference)

const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;


1️⃣ cluster module
const cluster = require('cluster');


👉 Built-in Node.js module
👉 Used to fork multiple Node.js processes

⚠️ These are processes, not threads
Each process has:

its own memory

its own event loop



2️⃣ os.cpus().length
const numCPUs = os.cpus().length;


👉 Returns number of logical CPU cores

Example:

4-core CPU → 4

8-core CPU → 8

💡 Best practice:

fork workers = number of CPU cores



3️⃣ cluster.isMaster
if (cluster.isMaster) {


👉 Checks if current process is:

Master (Primary) → controls workers

Worker → handles requests

📌 Only ONE master process exists




4️⃣ Master Process Logic
console.log(`Master ${process.pid} is running`);


process.pid → OS process ID

Master does NOT handle HTTP traffic

5️⃣ Forking Workers
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}


🔥 MOST IMPORTANT LINE

What happens internally:

Master creates child Node.js processes

Each worker runs the same file

Execution reaches else block

📦 Example (4 cores):

Master
 ├── Worker 1
 ├── Worker 2
 ├── Worker 3
 └── Worker 4

6️⃣ Worker Crash Handling
cluster.on('exit', (worker, code, signal) => {
  console.log(`Worker ${worker.process.pid} died. Restarting...`);
  cluster.fork();
});


👉 If a worker crashes:

Master detects it

Logs the crash

Creates a new worker

🔥 This gives fault tolerance

7️⃣ Worker Process Code
} else {


👉 This code runs in every worker process

Each worker:

Has its own event loop

Handles requests independently

8️⃣ HTTP Server in Workers
http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello from worker ${process.pid}\n`);
}).listen(8000);


🔥 Key concept:

All workers listen on the SAME port (8000)

OS handles load balancing

🧠 How does port sharing work?

Node.js uses:

OS kernel load balancing

Round-robin (on Linux, Node handles RR)

Example:

Request 1 → Worker 1234
Request 2 → Worker 5678
Request 3 → Worker 9012

9️⃣ Worker Log
console.log(`Worker ${process.pid} started`);


Each worker prints:

Worker 1234 started
Worker 5678 started

🔥 DEEP INTERNAL DETAILS (INTERVIEW GOLD)
⚙ Process vs Thread


| Cluster            | Threads          |
| ------------------ | ---------------- |
| Multiple processes | Single process   |
| Separate memory    | Shared memory    |
| Safer              | Faster but risky |




Node cluster uses process-level parallelism.

🧠 Memory behavior

❌ Workers do NOT share memory
✔ Use:

Redis

Database

IPC messaging

🧩 IPC (Inter-Process Communication)
worker.send({ msg: 'hello' });
process.on('message', data => {});


Master ↔ Worker communication happens via IPC channel

⚠️ Common Interview Traps
❓ Does cluster make Node multi-threaded?

❌ NO
✔ Still single-threaded per worker

❓ Does master handle requests?

❌ NO
✔ Only workers handle HTTP

❓ Is cluster same as PM2?

❌ NO
✔ PM2 is a process manager
✔ Cluster is a Node.js core module

🧠 Cluster + DB Connection Pooling (VERY IMPORTANT)

🔥 Each worker has:

Its own DB connection pool

Example:

4 workers × 10 pool size = 40 DB connections


⚠️ Interview trap:
Large pool × many workers = DB overload

🚀 When to use Cluster?

✔ CPU-intensive tasks
✔ High-traffic HTTP servers
✔ REST APIs

❌ When NOT to use Cluster?

❌ Serverless (Lambda)
❌ Already behind PM2 cluster mode

🎯 Interview One-Liners (MEMORIZE)

✔ Cluster uses all CPU cores
✔ Each worker is a separate process
✔ Master manages workers
✔ Workers share the same port
✔ Cluster improves throughput, not single-request speed

🔥 Typical Follow-up Questions

If you want, I can explain next:

🔥 Cluster vs Worker Threads

🔥 Cluster + Redis architecture

🔥 Cluster load balancing strategy

🔥 PM2 cluster mode internals

🔥 High-traffic Node.js architecture (10k+ RPS)

