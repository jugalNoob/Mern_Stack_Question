const start = process.cpuUsage();

for (let i = 0; i < 1e7; i++) {} // heavy loop

const end = process.cpuUsage(start);

console.log(end);  // { user: x, system: y }
console.log("Total CPU Time:", (end.user + end.system) / 1000, "ms");



| Property | Explanation                                                       |
| -------- | ----------------------------------------------------------------- |
| `user`   | Time spent executing **your JS code** (user-level operations)     |
| `system` | Time spent executing **OS-level tasks** on behalf of your process |



const usage = process.cpuUsage();
console.log("User:", usage.user / 1000, "ms");
console.log("System:", usage.system / 1000, "ms");



✔ Final Summary

{ user: 109000, system: 62000 } means:

109 ms spent executing JavaScript code

62 ms spent doing OS-level work

Total CPU usage ≈ 171ms



2::: Memory Checik Information  ---------------------

✔ Your Final Code Explanation
1️⃣ Process Memory Usage (Node process memory consumption)
setInterval(() => {
  const m = process.memoryUsage();

  console.log("========= MEMORY USAGE =========");
  console.log("RSS:", (m.rss / 1024 / 1024).toFixed(2), "MB");
  console.log("Heap Total:", (m.heapTotal / 1024 / 1024).toFixed(2), "MB");
  console.log("Heap Used:", (m.heapUsed / 1024 / 1024).toFixed(2), "MB");
  console.log("External:", (m.external / 1024 / 1024).toFixed(4), "MB");
  console.log("ArrayBuffers:", (m.arrayBuffers / 1024 / 1024).toFixed(4), "MB");
  console.log("================================\n");
}, 2000);

Meaning


| Field          | Meaning                               |
| -------------- | ------------------------------------- |
| `rss`          | Total memory reserved by Node process |
| `heapTotal`    | Total V8 heap memory allocated        |
| `heapUsed`     | Heap memory actually used             |
| `external`     | C++ addons & native resources         |
| `arrayBuffers` | Buffer / ArrayBuffer memory           |




2️⃣ Available System Memory
const available = process.availableMemory();
console.log("========= MEMORY USAGE =========");
console.log("Available System Memory:", (available / 1024 / 1024).toFixed(2), "MB");


This shows how much RAM is free for the system, not specifically Node.

Example output:

Available System Memory: 6425.23 MB

3️⃣ Constrained Memory Limit (When running inside Docker/Kubernetes)
const available = process.constrainedMemory();
console.log("Constrained Memory:", (available / 1024 / 1024).toFixed(2), "MB");


This tells how much memory Node is allowed to use due to environment restrictions.

Example:

Constrained Memory: 512.00 MB


→ meaning you are running in a container whose RAM limit is 512MB.

If no restriction:

0

🎯 Final Summary Table



| API                           | Meaning                                 | Example Use                            |
| ----------------------------- | --------------------------------------- | -------------------------------------- |
| `process.memoryUsage()`       | How much memory Node is currently using | Monitor app performance                |
| `process.availableMemory()`   | Free system RAM                         | Check if enough memory is available    |
| `process.constrainedMemory()` | Maximum RAM allowed by env limits       | Detect Docker/K8s resource constraints |



setInterval(() => {
  const mem = process.memoryUsage();
  const available = process.availableMemory();
  const constrained = process.constrainedMemory();

  console.log("============= MEMORY REPORT =============");
  console.log("RSS:", (mem.rss / 1024 / 1024).toFixed(2), "MB");
  console.log("Heap Used:", (mem.heapUsed / 1024 / 1024).toFixed(2), "MB");
  console.log("Available System RAM:", (available / 1024 / 1024).toFixed(2), "MB");
  console.log("Constrained Memory Limit:", (constrained / 1024 / 1024).toFixed(2), "MB");
  console.log("==========================================\n");
}, 2000);



🚀 Next Step Options

Which would you like to learn now?

1. Memory Leak Example
2. Difference Between RSS & Heap With Diagrams
3. Memory Monitoring Dashboard (Express /metrics)
4. Optimize Memory Usage in Node.js

Reply:

1 for memory leak

2 for diagrams

3 for monitoring dashboard

4 for optimization

Which one should we do? 😊