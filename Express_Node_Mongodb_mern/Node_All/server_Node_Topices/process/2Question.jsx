🚀 1️⃣ Print System Info from process

Question:
Write a program to print the current Node process details 
like ID, platform, Node version, memory usage, and uptime.

Code:

console.log("Process ID:", process.pid);
console.log("Platform:", process.platform);
console.log("Node Version:", process.version);
console.log("Memory Usage:", process.memoryUsage());
console.log("Uptime (seconds):", process.uptime());


🧠 Interviewer checks: if you understand process is the Node runtime itself, not the OS.

⚙️ 2️⃣ Read Command-Line Arguments

Question:
Take two numbers from command line and print their sum.

Code:

const args = process.argv.slice(2);
const a = Number(args[0]);
const b = Number(args[1]);

console.log(`Sum = ${a + b}`);


Run:

node app.js 10 20


🧠 Asked to test: ability to parse process.argv for CLI apps.

🧩 3️⃣ Handle Environment Variables

Question:
Print a custom message based on an environment variable NODE_ENV.

Code:

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else {
  console.log("Development Mode");
}


Run:

NODE_ENV=production node app.js


🧠 Asked to test: real-world use of process.env for configs.

🧠 4️⃣ Handle Process Exit

Question:
Gracefully shut down your app on exit.

Code:

process.on("exit", (code) => {
  console.log(`Exiting with code: ${code}`);
});

console.log("Running...");
setTimeout(() => {
  console.log("Done!");
  process.exit(0);
}, 1000);


🧠 Asked to test: understanding of cleanup & lifecycle.

💥 5️⃣ Handle Uncaught Exceptions

Question:
Catch and handle runtime errors globally.

Code:

process.on("uncaughtException", (err) => {
  console.error("Unhandled Error:", err.message);
});

throw new Error("Server crashed unexpectedly!");


🧠 Asked to test: ability to prevent app crashes in production.

⚡ 6️⃣ Create a Child Process using exec

Question:
Run a system command from Node.js (list files or check memory).

Code:

const { exec } = require("child_process");

exec("dir", (err, stdout, stderr) => {  // use "ls" on mac/linux
  if (err) return console.error(err);
  console.log("Output:\n", stdout);
});


🧠 Asked to test: if you know how to call shell commands from Node.

🧠 7️⃣ Communicate with Child Process using spawn

Question:
Spawn a Node process that runs another script.

Code:

const { spawn } = require("child_process");

const child = spawn("node", ["child.js"]);

child.stdout.on("data", (data) => console.log("Child:", data.toString()));
child.stderr.on("data", (err) => console.error("Error:", err.toString()));
child.on("exit", (code) => console.log("Exited with code:", code));


🧩 child.js

console.log("Child Process Running...");


🧠 Asked to test: IPC & asynchronous event handling.

🔀 8️⃣ Send & Receive Messages Between Parent and Child

Question:
Use IPC (Inter-Process Communication) to send data between processes.

Code (parent.js):

const { fork } = require("child_process");
const child = fork("./worker.js");

child.on("message", (msg) => console.log("From Child:", msg));
child.send({ task: "Start Job" });


Code (worker.js):

process.on("message", (msg) => {
  console.log("From Parent:", msg);
  process.send({ status: "Done" });
});


🧠 Asked to test: deep understanding of fork() for clustering & microservices.

🧩 9️⃣ Cluster Example (Multi-Core Utilization)

Question:
Use the cluster module to run multiple workers for scalability.

Code:

const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);
  os.cpus().forEach(() => cluster.fork());

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);
  require("http")
    .createServer((req, res) => {
      res.end(`Hello from worker ${process.pid}`);
    })
    .listen(3000);
}


🧠 Asked to test: scaling Node apps across CPU cores.

🔄 🔟 Compare Process vs Child Process vs Cluster

🚀 1️⃣ Print System Info from process

Question:
Write a program to print the current Node process details like ID, platform, Node version, memory usage, and uptime.

Code:

console.log("Process ID:", process.pid);
console.log("Platform:", process.platform);
console.log("Node Version:", process.version);
console.log("Memory Usage:", process.memoryUsage());
console.log("Uptime (seconds):", process.uptime());


🧠 Interviewer checks: if you understand process is the Node runtime itself, not the OS.

⚙️ 2️⃣ Read Command-Line Arguments

Question:
Take two numbers from command line and print their sum.

Code:

const args = process.argv.slice(2);
const a = Number(args[0]);
const b = Number(args[1]);

console.log(`Sum = ${a + b}`);


Run:

node app.js 10 20


🧠 Asked to test: ability to parse process.argv for CLI apps.

🧩 3️⃣ Handle Environment Variables

Question:
Print a custom message based on an environment variable NODE_ENV.

Code:

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else {
  console.log("Development Mode");
}


Run:

NODE_ENV=production node app.js


🧠 Asked to test: real-world use of process.env for configs.

🧠 4️⃣ Handle Process Exit

Question:
Gracefully shut down your app on exit.

Code:

process.on("exit", (code) => {
  console.log(`Exiting with code: ${code}`);
});

console.log("Running...");
setTimeout(() => {
  console.log("Done!");
  process.exit(0);
}, 1000);


🧠 Asked to test: understanding of cleanup & lifecycle.

💥 5️⃣ Handle Uncaught Exceptions

Question:
Catch and handle runtime errors globally.

Code:

process.on("uncaughtException", (err) => {
  console.error("Unhandled Error:", err.message);
});

throw new Error("Server crashed unexpectedly!");


🧠 Asked to test: ability to prevent app crashes in production.

⚡ 6️⃣ Create a Child Process using exec

Question:
Run a system command from Node.js (list files or check memory).

Code:

const { exec } = require("child_process");

exec("dir", (err, stdout, stderr) => {  // use "ls" on mac/linux
  if (err) return console.error(err);
  console.log("Output:\n", stdout);
});


🧠 Asked to test: if you know how to call shell commands from Node.

🧠 7️⃣ Communicate with Child Process using spawn

Question:
Spawn a Node process that runs another script.

Code:

const { spawn } = require("child_process");

const child = spawn("node", ["child.js"]);

child.stdout.on("data", (data) => console.log("Child:", data.toString()));
child.stderr.on("data", (err) => console.error("Error:", err.toString()));
child.on("exit", (code) => console.log("Exited with code:", code));


🧩 child.js

console.log("Child Process Running...");


🧠 Asked to test: IPC & asynchronous event handling.

🔀 8️⃣ Send & Receive Messages Between Parent and Child

Question:
Use IPC (Inter-Process Communication) to send data between processes.

Code (parent.js):

const { fork } = require("child_process");
const child = fork("./worker.js");

child.on("message", (msg) => console.log("From Child:", msg));
child.send({ task: "Start Job" });


Code (worker.js):

process.on("message", (msg) => {
  console.log("From Parent:", msg);
  process.send({ status: "Done" });
});


🧠 Asked to test: deep understanding of fork() for clustering & microservices.

🧩 9️⃣ Cluster Example (Multi-Core Utilization)

Question:
Use the cluster module to run multiple workers for scalability.

Code:

const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);
  os.cpus().forEach(() => cluster.fork());

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);
  require("http")
    .createServer((req, res) => {
      res.end(`Hello from worker ${process.pid}`);
    })
    .listen(3000);
}


🧠 Asked to test: scaling Node apps across CPU cores.

🔄 🔟 Compare Process vs Child Process vs Cluster



| Feature       | process       | child_process    | cluster                   |
| ------------- | ------------- | ---------------- | ------------------------- |
| Represents    | Current app   | New process      | Master + workers          |
| Memory        | Shared        | Separate         | Separate per worker       |
| Communication | None          | Via IPC          | Built-in                  |
| Use Case      | Control app   | External command | Multi-core load balancing |
| Example       | `process.pid` | `exec('ls')`     | `cluster.fork()`          |


🎯 BONUS INTERVIEW Q QUICK RECAP
#	Question


| #  | Question                         | Hint                                      |
| -- | -------------------------------- | ----------------------------------------- |
| 1  | How to access CLI args?          | `process.argv`                            |
| 2  | How to get env vars?             | `process.env`                             |
| 3  | How to stop Node?                | `process.exit()`                          |
| 4  | How to spawn command?            | `child_process.exec()`                    |
| 5  | How to communicate with child?   | `fork()` + IPC                            |
| 6  | What is cluster used for?        | Utilize multiple CPU cores                |
| 7  | What’s difference exec vs spawn? | `exec` buffers output, `spawn` streams it |
| 8  | How to handle process signals?   | `process.on('SIGINT')`                    |
| 9  | How to check memory?             | `process.memoryUsage()`                   |
| 10 | How to gracefully shut down?     | `SIGTERM` + cleanup + `exit()`            |



🎯 BONUS INTERVIEW Q QUICK RECAP

               ┌───────────────┐
               │   process     │ ← main Node program
               └──────┬────────┘
                      │ fork()
          ┌───────────┴───────────┐
          │ child_process (A)     │
          │ child_process (B)     │
          └───────────┬───────────┘
                      │ cluster.fork()
            ┌─────────┴─────────┐
            │ worker1  worker2  │ ← multi-core
            └───────────────────┘
