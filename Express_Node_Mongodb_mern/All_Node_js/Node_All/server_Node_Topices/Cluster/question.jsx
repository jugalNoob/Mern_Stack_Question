🧠 Node.js Cluster — Interview Questions & Answers
1️⃣ What is a Cluster in Node.js?

Answer:
Cluster allows Node.js to use multiple CPU cores by creating multiple worker processes that share the same server port.

Example:

const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
} else {
  require("./app"); // run express app
}


👉 Each worker runs independently and handles requests — improving performance.

2️⃣ Why do we need Cluster in Node.js?

Answer:
Because Node.js is single-threaded, it uses only one CPU core by default.
Cluster helps use all CPU cores for parallel processing and higher throughput.

3️⃣ How does Cluster work internally?

Answer:

The master process forks multiple worker processes.

Each worker runs the same app.

Node’s internal load balancer distributes requests (round-robin).

Master → Worker #1 → Request 1  
       → Worker #2 → Request 2  
       → Worker #3 → Request 3

4️⃣ What is the difference between isMaster and isWorker?

Answer:

cluster.isMaster: true for the main process that creates workers.

cluster.isWorker: true for worker processes that handle requests.

5️⃣ How to restart a worker if it crashes?

Answer:
By listening for the 'exit' event and creating a new worker.

cluster.on('exit', (worker) => {
  console.log(`Worker ${worker.process.pid} died`);
  cluster.fork();
});

6️⃣ Can all workers listen on the same port?

Answer:
✅ Yes. Node’s cluster module allows all workers to share the same port.
Internally, the master accepts connections and passes them to available workers.

7️⃣ What happens if one worker fails?

Answer:

The master detects the failure using the 'exit' event.

Then it can fork a new worker to replace the dead one automatically.
This ensures high availability.

8️⃣ How to send a message from Master to Worker (or vice versa)?

Answer:
Use the process.send() method.

Example:

if (cluster.isMaster) {
  const worker = cluster.fork();
  worker.send("Hello from master");
} else {
  process.on("message", msg => console.log("Worker got:", msg));
}

9️⃣ Difference between Cluster and Child Process?


| Feature       | Cluster                         | Child Process                     |
| ------------- | ------------------------------- | --------------------------------- |
| Purpose       | Multi-core server load handling | Running separate tasks or scripts |
| Shares Port   | ✅ Yes                           | ❌ No                              |
| Communication | Built-in messaging              | Requires manual IPC               |
| Used For      | Scaling servers                 | Background tasks / utilities      |



🔟 Can we use Cluster with Express.js?

Answer:
✅ Yes, most commonly done like this:

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
} else {
  const app = require("express")();
  app.get("/", (req, res) => res.send(`Handled by ${process.pid}`));
  app.listen(3000);
}

11️⃣ What are the benefits of using Clusters?

✅ Utilize all CPU cores
✅ Handle more concurrent users
✅ Auto-restart on crash
✅ Better performance and scalability

12️⃣ What are the limitations of Clusters?

⚠️ Each worker has its own memory (not shared).
⚠️ Need external tools (like Redis) for shared session data.
⚠️ Not ideal for stateful apps unless state is stored externally.

13️⃣ How to gracefully shut down a Cluster?

Answer:

for (const id in cluster.workers) {
  cluster.workers[id].disconnect();
}


Ensures no requests are lost before shutting down.

14️⃣ Can Cluster and Nginx be used together?

Answer:
✅ Yes.

Cluster → distributes load among CPU cores (inside one machine).

Nginx → distributes traffic among multiple servers or containers.

👉 Combined, they give both multi-core and multi-server scalability.

15️⃣ What’s the difference between Cluster and PM2?


| Feature         | Cluster      | PM2                     |
| --------------- | ------------ | ----------------------- |
| Built-in Module | ✅ Yes        | ❌ No (external tool)    |
| Management      | Manual setup | Auto cluster management |
| Monitoring      | Basic logs   | Advanced dashboard      |
| Usage           | Development  | Production-ready        |



🧠 What is fork in Node.js (simple meaning)

Fork means to create a new process (copy) of your program.

Think of it like this 👇

You have one worker (main process).
You make 4 clones (child workers).
Now all 5 can work together on different tasks.

🧩 In Cluster

In Node.js Cluster,
cluster.fork() is used to create a new worker process.

Example:

const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork(); // 👈 create 1 new worker
  cluster.fork(); // 👈 create another worker
} else {
  console.log("I am a worker process");
}


Output:

I am a worker process
I am a worker process


So here:

The master used fork() twice.

It created 2 workers, both running the same code.

🧰 Simple Real-life Example

Imagine you’re running a restaurant 🍴

You (the owner) = master process

You hire 4 cooks = workers
Each cook (worker) takes a different order.
You used fork() to “create” them.

✅ In short:
v 

| Term   | Meaning                                  |
| ------ | ---------------------------------------- |
| fork() | Create a new worker process              |
| Master | Main controller process                  |
| Worker | Copy that runs code and handles requests |




Good question, Jugal 👏 — but let’s clear one common confusion:

🧠 Cluster in Node.js does not divide RAM (like 8 GB → 1 GB × 8).

⚙️ What actually happens:

When you use the Node.js Cluster module, it divides CPU cores, not memory.

Each cluster.fork() creates a new process (worker).

All workers share the same total RAM (8 GB) of your system.

The operating system decides how much memory each worker actually uses — depending on their workload.

💡 Example

Let’s say your system has:

8 GB RAM

4 CPU cores

Your cluster code:

const numCPUs = os.cpus().length; // 4
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}


✅ Node will create 4 worker processes — one per CPU core.
🚫 But not 1 GB per worker.
Each worker can use as much RAM as it needs (all from the 8 GB total).

🔍 Think of it like this


| Concept    | What’s divided?            | Who controls it? |
| ---------- | -------------------------- | ---------------- |
| Cluster    | CPU cores                  | Node.js          |
| RAM (8 GB) | Shared between all workers | Operating System |



⚡ In short:

Cluster = splits CPU work, not memory.
All workers share the same total RAM.
OS automatically manages how much each worker uses.


Perfect 💪 Jugal!
Here’s a simple Node.js script to check your CPU cores and memory usage — very useful when tuning cluster performance 👇

🧾 File: systemInfo.js
const os = require("os");

// 🧠 CPU Info
const cpus = os.cpus();
console.log("🧩 Total CPU Cores:", cpus.length);
console.log("⚙️ CPU Model:", cpus[0].model);

// 💾 Memory Info
console.log("💾 Total Memory:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("📉 Free Memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");

// 🕓 System Uptime
console.log("⏱️ System Uptime:", (os.uptime() / 3600).toFixed(2), "hours");

// 🌍 OS Info
console.log("🧭 Platform:", os.platform());
console.log("🏗️ Architecture:", os.arch());

🧠 Run this command:
node systemInfo.js

🧾 Example Output:
🧩 Total CPU Cores: 8
⚙️ CPU Model: Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz
💾 Total Memory: 8.00 GB
📉 Free Memory: 3.25 GB
⏱️ System Uptime: 2.15 hours
🧭 Platform: win32
🏗️ Architecture: x64

✅ What you learn from this:


| Info                | Meaning                                 |
| ------------------- | --------------------------------------- |
| **CPU Cores**       | How many cluster workers you can create |
| **Total Memory**    | Total system RAM                        |
| **Free Memory**     | RAM currently available                 |
| **Platform & Arch** | Your OS and hardware type               |


Excellent question, Jugal 👍 — let’s clear this step by step 👇

🧠 You said:

"Every worker uses 8 (cores) and 8GB RAM?"

Let’s break it down 👇

⚙️ 1️⃣ Your system:

🧩 8 CPU cores

💾 8 GB RAM

⚙️ 2️⃣ When you use cluster.fork() in Node.js:
const numCPUs = os.cpus().length;
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}


➡️ This creates 8 worker processes, one per CPU core.

🧠 What happens under the hood:


| Resource             | Shared or Separate                      | Explanation                                                         |
| -------------------- | --------------------------------------- | ------------------------------------------------------------------- |
| **CPU core**         | 🧍‍♂️ Each worker gets its own CPU core | So all 8 cores work in parallel                                     |
| **Memory (RAM)**     | 🧠 Shared pool                          | Workers **don’t get separate 1 GB RAM each**; they share total 8 GB |
| **Code**             | 📦 Same for all workers                 | Each worker runs the same app code                                  |
| **Variables / Data** | 🔒 Not shared                           | Each worker has its own memory space (copy of variables)            |

🧩 Simple Analogy:

Imagine:

You have 8 chefs (CPU cores) 🧑‍🍳

You have one shared kitchen (8 GB RAM) 🍳

Each chef (worker) works on a different order (request),
but uses the same shared kitchen resources.


 🧠 SYSTEM RESOURCES
 ┌──────────────────────────────┐
 │ CPU: 8 Cores                 │
 │ RAM: 8 GB (shared)           │
 └──────────────────────────────┘
                │
                ▼
        ┌────────────────────┐
        │  Node.js Master 👑 │
        │  (cluster manager) │
        └─────────┬──────────┘
                  │
   ┌──────────────┼────────────────────────────┐
   │              │                            │
   ▼              ▼                            ▼
┌──────────┐  ┌──────────┐                ┌──────────┐
│ Worker 1 │  │ Worker 2 │  ... up to ... │ Worker 8 │
│ CPU #1   │  │ CPU #2   │                │ CPU #8   │
│ RAM use  │  │ RAM use  │                │ RAM use  │
│  (shared)│  │ (shared) │                │ (shared) │
└──────────┘  └──────────┘                └──────────┘

Each worker = separate Node.js process
  - Handles requests in parallel 🧩
  - Uses its own copy of code 🧠
  - Shares total system memory 💾



  🧩 Real Example:

If your 8 GB system runs 8 workers:

Worker 1 might use 400 MB

Worker 2 might use 350 MB

Worker 3 might use 1 GB
… and so on — depending on request load.

The total must fit in 8 GB, but there’s no fixed per-worker size