Yes! In Node.js, the cluster module is used to take advantage of multi-core CPUs.
 By default, Node.js runs on a single thread, so a single process cannot fully utilize
  all CPU cores. cluster allows you to create multiple worker processes that share the same server port.

Let me explain clearly 👇

1️⃣ Why Cluster?

Node.js is single-threaded → one CPU core

For high-performance servers, you want to use all CPU cores

Cluster allows you to fork multiple worker processes

Each worker handles its own incoming requests → parallel processing

2️⃣ How it works

Master process → controls workers

Workers → handle HTTP requests

All workers share the same port

3️⃣ Example: Cluster in HTTP Server
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers and restart
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  // Workers share the same server port
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

4️⃣ How it works internally

Master process forks N worker processes (usually equal to CPU cores)

Workers listen on the same port

OS load balances incoming connections between workers

If a worker crashes → master can restart it automatically

5️⃣ Benefits

Utilizes all CPU cores

Handles more concurrent requests

Workers can be restarted on crash

Easy to scale horizontally

6️⃣ Key Points

Each worker is a separate Node.js process

Memory is not shared → each has its own heap

Use IPC (inter-process communication) to communicate between master & workers

Good for CPU-intensive tasks, high-load HTTP servers

7️⃣ Interview Tip

“Node.js cluster allows multi-core utilization by forking multiple worker processes from a master, each listening on the same port, providing load balancing and process isolation.”