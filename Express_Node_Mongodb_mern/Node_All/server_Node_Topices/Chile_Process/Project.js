⚙️ 3️⃣ Basic Cluster Example
// clusterServer.js
const cluster = require("cluster");
const os = require("os");
const http = require("http");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`🧠 Master process running (PID: ${process.pid})`);
  console.log(`🔧 Spawning ${numCPUs} workers...\n`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for worker exit
  cluster.on("exit", (worker) => {
    console.log(`❌ Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Workers create HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`✅ Response from worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`🚀 Worker ${process.pid} started`);
}

Run it:
node clusterServer.js


🧩 You’ll see multiple workers created — one per CPU core.

Now open multiple browser tabs or run:

curl localhost:3000


Each response will come from a different worker process (check PID).

⚙️ 4️⃣ Why It’s Powerful (Design Benefits)

✅ Full CPU utilization – uses all cores.
✅ Scalable – handle more requests concurrently.
✅ Fault tolerance – if one worker dies, master restarts it.
✅ Non-blocking main process – each worker runs separately.
✅ Horizontal scaling ready – easy to combine with Docker/K8s.



🧠 5️⃣ Best Cluster Design Pattern

Here’s a clean production-ready pattern (used in real-world systems):

/project
 ├── server.js       // Main API logic (Express/HTTP)
 ├── cluster.js      // Cluster manager
 ├── worker.js       // Worker handler
 └── utils/
      └── logger.js



      🧩 cluster.js
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`👑 Master PID: ${process.pid}`);
  console.log(`🧩 Spawning ${numCPUs} workers...\n`);

  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on("exit", (worker) => {
    console.error(`💀 Worker ${worker.process.pid} crashed, restarting...`);
    cluster.fork();
  });
} else {
  require("./server"); // Each worker runs your main app
}

🧩 server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from worker ${process.pid}`);
});

app.listen(3000, () => {
  console.log(`Worker ${process.pid} running on port 3000`);
});


✅ Design Advantages

Clean separation: cluster logic vs. business logic

Auto-restart on crash

Reusable structure for APIs

Works in Docker and production scaling setups

🎯 6️⃣ Real-World Example

Used by major apps like:

PM2, NGINX, Express clusters

E-commerce servers handling thousands of requests/minute

Event processing and background job workers



🧩 8️⃣ Cluster vs Child Process vs Worker Threads


| Feature       | Cluster                | Child Process     | Worker Threads         |
| ------------- | ---------------------- | ----------------- | ---------------------- |
| Based on      | `child_process.fork()` | `child_process`   | `worker_threads`       |
| Memory        | Separate               | Separate          | Shared                 |
| Communication | Message passing        | Message passing   | Shared memory          |
| Use Case      | Web/API scaling        | External commands | CPU-intensive JS tasks |
| Isolation     | High                   | High              | Medium                 |


🧠 9️⃣ Common Real System Design Question

“How would you scale a Node.js application to handle 10k+ concurrent requests?”

✅ Answer Outline:

Use cluster module to utilize all CPU cores.

Each worker handles part of the load.

Use a load balancer (NGINX or PM2) to distribute requests across containers.

Use Redis caching to offload repeated queries.

Optionally, add Kafka or RabbitMQ for background jobs.




