// clusterApp.js
const cluster = require("cluster");
const os = require("os");
const express = require("express");

if (cluster.isMaster) {
  console.log(`👑 Master ${process.pid} is running`);

  // Create workers = number of CPU cores
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if it dies
  cluster.on("exit", (worker) => {
    console.log(`💀 Worker ${worker.process.pid} died, restarting...`);
    cluster.fork();
  });
} else {
  // Worker process creates its own Express app
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello Jugal 👋 — served by worker ${process.pid}`);
  });

  app.get("/api", (req, res) => {
    res.json({ pid: process.pid, message: "Handled by Express cluster worker" });
  });

  app.listen(3000, () => {
    console.log(`🚀 Worker ${process.pid} started on port 3000`);
  });
}


//// ---------------->>>

Setup (assume these at the top)
const cluster = require('cluster');
const os = require('os');
const express = require('express');


Meaning: import the modules you need.

cluster — Node's cluster API to fork workers.

os — to get number of CPU cores.

express — web framework for the server.

Master / Primary process check
if (cluster.isMaster) {
  console.log(`👑 Master ${process.pid} is running`);
  ...
} else {
  // worker code
}


Meaning: Node runs the file once in a single process.

If this process is the master (the controller), run the code inside the if branch.

If it is a worker (a forked child), run the else branch.
process.pid prints the OS process id for clarity/logging.

Note: in newer Node versions cluster.isPrimary is used; isMaster still commonly seen.

Determine how many workers to create
const numCPUs = os.cpus().length;
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}


Meaning:

os.cpus().length returns how many CPU cores the machine has (e.g., 4, 8).

The for loop calls cluster.fork() that many times — each fork() creates a worker process (a copy of this script running the else branch).
Goal: make one worker per CPU core so your app can use all cores.

Restart workers on exit
cluster.on("exit", (worker) => {
  console.log(`💀 Worker ${worker.process.pid} died, restarting...`);
  cluster.fork();
});


Meaning:

Listen for the 'exit' event: when a worker process dies (crash or exit).

Log which worker died, and immediately fork() a new worker to replace it.
Goal: keep the service resilient (auto-restart crashed workers).

Worker process: create Express app
// Worker process creates its own Express app
const app = express();


Meaning: Each worker creates its own Express application instance and server — workers are independent processes.

Define the root route
app.get("/", (req, res) => {
  res.send(`Hello Jugal 👋 — served by worker ${process.pid}`);
});


Meaning: when a request hits /, the worker responds with a message including its process.pid.
This is useful to see which worker handled the request when testing.

Define API route that returns JSON
app.get("/api", (req, res) => {
  res.json({ pid: process.pid, message: "Handled by Express cluster worker" });
});


Meaning: /api returns a JSON object containing the worker PID and a message — again useful for verifying load distribution across workers.

Listen on a port
app.listen(3000, () => {
  console.log(`🚀 Worker ${process.pid} started on port 3000`);
});


Meaning: each worker starts listening on port 3000.
Important detail: Node and the cluster module allow multiple worker processes to listen on the same port — the master coordinates incoming connections and distributes them to workers (round-robin or OS scheduling depending on Node version).

Quick runtime behavior summary

You run node clusterApp.js.

The master process starts and forks numCPUs worker processes.

Each worker runs the else block and starts an Express server on port 3000.

When clients connect, requests are distributed among workers — usually in round-robin — so different requests hit different PIDs.

If a worker dies, the master logs it and forks a replacement.

Small tips / gotchas

If you need shared state between requests, don’t store it in memory in a worker — use a shared DB or cache (Redis) because each worker has its own memory space.

For graceful shutdowns, handle SIGTERM in workers to close servers before exit.

cluster.isMaster is commonly used, but in modern Node you may see cluster.isPrimary.