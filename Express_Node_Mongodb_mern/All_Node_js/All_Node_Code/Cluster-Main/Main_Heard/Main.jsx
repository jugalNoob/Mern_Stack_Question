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
