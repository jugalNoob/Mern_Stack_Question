Perfect 👌 — this is a very important Node.js interview topic because it’s all about how Node handles multiple processes (since Node.js itself is single-threaded).

Let’s go step by step 👇

⚙️ child_process Module in Node.js

✅ The child_process module allows Node.js to create and manage subprocesses (other system processes).

👉 This means your Node app can:

Run system commands (like ls, dir, ping, etc.)

Run other Node.js scripts

Run Python, Java, or any other executable

Perform parallel processing

🧠 Why Needed?

Because Node.js runs on a single thread, CPU-heavy or blocking tasks (like compression, encryption, data parsing, ML computation, etc.) can freeze the main event loop.

So Node.js gives us child_process to:

🧩 Offload heavy or external work into separate system processes.

🧩 1️⃣ Importing the Module
const { exec, spawn, fork } = require("child_process");



⚙️ 2️⃣ Main Methods of child_process

| Method    | Description                                  | Best Use                       |
| --------- | -------------------------------------------- | ------------------------------ |
| `exec()`  | Runs a command in a shell and buffers output | Simple shell commands          |
| `spawn()` | Starts a process stream for real-time data   | Continuous/large output        |
| `fork()`  | Starts another Node.js process               | Running JS scripts or services |


🧩 Example 1 — Using exec()

Runs a shell command and returns the full output when done.

const { exec } = require("child_process");

exec("ls", (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Output:\n", stdout);
});


🧠 How it works:

Executes system shell command (ls)

Buffers output in memory

Sends entire output once complete

✅ Best for small commands
❌ Not good for large data (buffers all in memory)

🧩 Example 2 — Using spawn()

Runs a command as a streaming process — gives data in chunks.

const { spawn } = require("child_process");

const child = spawn("ping", ["-c", "4", "google.com"]);

child.stdout.on("data", (data) => {
  console.log("Output:", data.toString());
});

child.stderr.on("data", (data) => {
  console.error("Error:", data.toString());
});

child.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});


🧠 How it works:

Launches a live command process.

Outputs data in real-time chunks.

Doesn’t buffer everything — great for large output.

✅ Real-time logs, streaming output
❌ Slightly more complex to handle

🧩 Example 3 — Using fork()

Used to run another Node.js script as a child process.

// parent.js
const { fork } = require("child_process");

const child = fork("child.js");

child.on("message", (msg) => {
  console.log("Message from child:", msg);
});

child.send({ hello: "Hi Child!" });

// child.js
process.on("message", (msg) => {
  console.log("Message from parent:", msg);
  process.send({ reply: "Hi Parent!" });
});


🧠 How it works:

Runs another Node.js process.

Parent and child communicate using .send() and process.on("message").

Perfect for distributed or worker tasks.

✅ Ideal for Node-to-Node communication
✅ Used in worker threads / clustering
✅ Non-blocking for main process

⚙️ 3️⃣ Real-World Use Cases

| Use Case           | Method             | Example                           |
| ------------------ | ------------------ | --------------------------------- |
| Run shell commands | `exec()`           | `git status`, `ls`, `npm install` |
| Stream large data  | `spawn()`          | `ffmpeg`, `ping`, `curl`          |
| Run Node workers   | `fork()`           | Background computation            |
| CPU heavy tasks    | `fork()`           | Hashing, AI, compression          |
| Parallelization    | `fork()` + message | Multiple workers                  |



🧩 4️⃣ Example — CPU Heavy Work Using fork()
// main.js
const { fork } = require("child_process");

console.log("🧠 Main process started");

const child = fork("worker.js");

child.send({ number: 10 });

child.on("message", (msg) => {
  console.log("✅ Result from child:", msg);
});

// worker.js
process.on("message", (msg) => {
  let fact = 1;
  for (let i = 1; i <= msg.number; i++) fact *= i;
  process.send(fact);
});


🧠 The child runs factorial computation separately,
 so your main app stays responsive.

          ┌──────────────────────────────┐
          │       Main Node.js App       │
          │      (Single Threaded)       │
          └──────────────┬───────────────┘
                         │
                         │ Creates Child Process
                         ▼
        ┌───────────────────────────────────────────┐
        │               child_process               │
        ├───────────────────────────────────────────┤
        │  exec()  │  spawn()  │  fork()             │
        └─────┬────────┬────────┬────────────────────┘
              │        │        │
              ▼        ▼        ▼
     ┌────────────┐  ┌────────────┐  ┌────────────┐
     │ Shell Cmds │  │ Streaming  │  │ Node Script│
     │  (ls etc.) │  │  Output    │  │ child.js   │
     └────────────┘  └────────────┘  └────────────┘
