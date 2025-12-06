1️⃣ What is process in Node.js?

process is a global object in Node.js

Provides information about and control over the current Node.js process

Example:

console.log(process.version); // Node.js version
console.log(process.pid);     // Process ID
console.log(process.platform); // OS platform



2️⃣ How to get environment variables?
console.log(process.env.NODE_ENV);
process.env.PORT = 3000;


Interview tip: Useful for configs, secrets, and deployment settings.



3️⃣ How to exit a process?
process.exit();      // Exit with code 0
process.exit(1);     // Exit with error code 1


Exit codes: 0 = success, 1 = error

You can also handle cleanup before exit using:

process.on('exit', (code) => console.log('Exiting with code:', code));


4️⃣ How to handle signals (SIGINT, SIGTERM) in Node.js?
process.on('SIGINT', () => {
  console.log('Ctrl+C pressed. Exiting...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Process terminated');
});


Signals are sent by OS or terminal

Useful for graceful shutdown



6️⃣ How to access command-line arguments?
console.log(process.argv);
/*
process.argv[0] = node executable path
process.argv[1] = script path
process.argv[2..] = user arguments
*/


Example:

node app.js hello world


🔟 Event Listeners in process

| Event                | Description                            |
| -------------------- | -------------------------------------- |
| `exit`               | Fired when process exits               |
| `beforeExit`         | Called **before Node exits naturally** |
| `uncaughtException`  | Catches unhandled errors               |
| `unhandledRejection` | Catches rejected promises              |
| `SIGINT` / `SIGTERM` | OS signals, Ctrl+C etc                 |




✅ Interview Tip

Node.js interviews often ask 5–7 questions from process

Focus on:

Environment variables (process.env)

Memory usage (process.memoryUsage)

Signals (SIGINT, SIGTERM)

exit vs beforeExit

argv (command-line args)

Uncaught exceptions / promise rejections




memory Uage ----------------------------->>>

const end = process.cpuUsage(start);

console.log(end);  // { user: x, system: y }
console.log("Total CPU Time:", (end.user + end.system) / 1000, "ms");


console.log(end);  // { user: x, system: y }
console.log("Total CPU Time:", (end.user + end.system) / 1000, "ms");


| Property | Explanation                                                       |
| -------- | ----------------------------------------------------------------- |
| `user`   | Time spent executing **your JS code** (user-level operations)     |
| `system` | Time spent executing **OS-level tasks** on behalf of your process |

109 ms spent executing JavaScript code

62 ms spent doing OS-level work


2::: Memory Checik Information  ---------------------



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

