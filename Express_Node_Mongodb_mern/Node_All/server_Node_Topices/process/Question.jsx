🧩 1️⃣ BASIC QUESTIONS
Q1. What is process in Node.js?

Answer:
process is a global object in Node.js that provides information and control over 
the current running Node.js program.
You can access environment variables, system info, and even stop the app.

🧠 Example:

console.log(process.pid);       // Process ID
console.log(process.platform);  // win32, linux, darwin
console.log(process.cwd());     // Current directory

Q2. Is process a global object?

Answer:
✅ Yes, it’s globally available — you don’t need to require() it.
You can access it from anywhere in your code.

Q3. How do you stop a process manually?

Answer:
Use process.exit([code]).
A code of 0 means success, any other means error.

console.log("Start...");
process.exit(0);
console.log("This will not run");

Q4. What is process.env used for?

Answer:
process.env gives you access to environment variables, such as port numbers or secrets.

Example:

console.log(process.env.PORT);


Run like this:

PORT=3000 node app.js

Q5. What does process.argv return?

Answer:
It returns an array containing command-line arguments.

🧩 Example:

console.log(process.argv);


Run:

node app.js hello world


Output:

['node', 'app.js', 'hello', 'world']

⚙️ 2️⃣ INTERMEDIATE QUESTIONS
Q6. How can you listen for process events like exit or error?

Answer:
You can attach event listeners to handle lifecycle events.

Example:

process.on("exit", (code) => console.log("Exit code:", code));
process.on("uncaughtException", (err) => console.log("Error:", err));

Q7. What’s the difference between process.exit() and normal program end?


| Normal End                     | `process.exit()`           |
| ------------------------------ | -------------------------- |
| Code finishes naturally        | You manually stop it       |
| Executes all pending callbacks | Stops immediately          |
| Exit code auto = 0             | Exit code defined manually |



Q8. How can you handle OS signals (like Ctrl+C)?

Answer:
Use signal listeners:

process.on("SIGINT", () => {
  console.log("Process interrupted!");
  process.exit(0);
});


🔹 SIGINT → Ctrl+C
🔹 SIGTERM → Termination request

Q9. How to monitor memory usage of your process?

Answer:

console.log(process.memoryUsage());


Output Example:

{
  rss: 2342912,
  heapTotal: 1824768,
  heapUsed: 1048576,
  external: 128000
}

Q10. What is process.uptime()?

Answer:
It returns how many seconds the process has been running.

console.log(`Running for ${process.uptime()} seconds`);

🧠 3️⃣ ADVANCED QUESTIONS
Q11. How do you handle uncaught exceptions globally?

Answer:
Using the uncaughtException event:

process.on("uncaughtException", (err) => {
  console.error("Caught exception:", err);
});
throw new Error("Crash test!");


⚠️ Best practice: log it and exit gracefully.

Q12. What is the difference between process and child_process?

| Feature       | `process`                | `child_process`            |
| ------------- | ------------------------ | -------------------------- |
| Represents    | Current Node.js instance | New process created        |
| Memory        | Shared (same process)    | Separate                   |
| Communication | N/A                      | Via IPC messages           |
| Created by    | Node automatically       | Developer manually         |
| Use Case      | App control              | Parallel or external tasks |



Q13. What is the use of process.nextTick()?

Answer:
It schedules a callback to run after the current operation completes, but before the event loop continues.

Example:

console.log("A");
process.nextTick(() => console.log("B"));
console.log("C");


Output:

A
C
B

Q14. What is the difference between process.nextTick() and

setImmediate()?

| Method               | Runs When                       | Priority |
| -------------------- | ------------------------------- | -------- |
| `process.nextTick()` | Before the event loop continues | Higher   |
| `setImmediate()`     | After the current I/O event     | Lower    |


Q15. How do you gracefully shut down a Node.js process?

Answer:
Listen for exit signals, close DB connections, stop servers, then exit.

Example:

process.on("SIGTERM", () => {
  console.log("Shutting down...");
  server.close(() => process.exit(0));
});

💡 4️⃣ REAL-WORLD QUESTIONS

| #  | Question                            | Short Answer                     |
| -- | ----------------------------------- | -------------------------------- |
| 1  | How to get the PID of your process? | `process.pid`                    |
| 2  | How to print environment variables? | `console.log(process.env)`       |
| 3  | How to read custom CLI args?        | `process.argv`                   |
| 4  | How to detect OS platform?          | `process.platform`               |
| 5  | How to get Node version?            | `process.version`                |
| 6  | How to catch Ctrl+C stop?           | `process.on('SIGINT', callback)` |
| 7  | How to print uptime?                | `process.uptime()`               |
| 8  | How to check memory usage?          | `process.memoryUsage()`          |
| 9  | How to kill a process externally?   | `kill PID` (in terminal)         |
| 10 | What happens if `process.exit(1)`?  | Exits with error code 1          |


⚙️ 5️⃣ Mini Diagram (ASCII)


┌───────────────────────────┐
│      OS (System)          │
│   ├─────────────────────┤ │
│   │  Node.js Process    │ │  ← your running app
│   │  process.pid = 8123 │ │
│   │  Access env, args   │ │
│   │  Handle events      │ │
│   └─────────────────────┘ │
└───────────────────────────┘


🧩 6️⃣ Bonus Quick Quiz (for Interview Warm-Up)

| Question                             | Answer                                |
| ------------------------------------ | ------------------------------------- |
| What is `process.env.PORT`?          | Environment variable for port         |
| What is `process.exit(0)`?           | Stop process successfully             |
| What is `process.pid`?               | Current process ID                    |
| What is `process.cwd()`?             | Current working directory             |
| How to catch uncaught errors?        | `process.on('uncaughtException', fn)` |
| How to get CLI args?                 | `process.argv`                        |
| What event fires when process stops? | `exit`                                |


