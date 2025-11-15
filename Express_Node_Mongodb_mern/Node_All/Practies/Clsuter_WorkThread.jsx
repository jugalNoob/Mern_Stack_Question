🧩 1️⃣ Example — Worker Threads

👉 Use this when you need parallel computation.

// workerExample.js
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
  console.log('🧠 Main thread running');
  const worker = new Worker(new URL(import.meta.url)); // create worker
  worker.on('message', msg => console.log('📩 From worker:', msg));
  worker.postMessage('Start heavy calculation');
} else {
  parentPort.on('message', msg => {
    console.log('⚙️ Worker received:', msg);
    let sum = 0;
    for (let i = 0; i < 1e8; i++) sum += i;
    parentPort.postMessage(`Result: ${sum}`);
  });
}


✅ Use case:

CPU heavy tasks — encryption, file compression, image processing

🧩 2️⃣ Example — Cluster

👉 Use this to handle many incoming requests using multiple CPU cores.

// clusterExample.js
import cluster from 'cluster';
import http from 'http';
import os from 'os';

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`🧩 Master running on PID ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on('exit', (worker) => {
    console.log(`❌ Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);

  console.log(`🚀 Worker started PID: ${process.pid}`);
}


✅ Use case:

Web servers handling many concurrent users

Scale API performance on multi-core systems


| Situation                                        | Use                   |
| ------------------------------------------------ | --------------------- |
| “I want to split a heavy loop calculation.”      | 🧵 **Worker Threads** |
| “I want to handle 10k HTTP requests per second.” | 🧩 **Cluster**        |
| “I want both — parallel compute + scalable API.” | Combine both!         |



⚡ 4️⃣ Combine Both

You can use Cluster to scale your app across CPU cores
and inside each process use Worker Threads for CPU-heavy tasks. 💪



| Criteria          | Worker Threads               | Cluster                      |
| ----------------- | ---------------------------- | ---------------------------- |
| Type              | Thread (within same process) | Process (independent memory) |
| Use case          | Parallel CPU work            | Scale HTTP servers           |
| Shared memory     | Yes                          | No                           |
| Overhead          | Low                          | High                         |
| Failure isolation | Weak                         | Strong                       |
| Communication     | postMessage / parentPort     | process.send                 |
