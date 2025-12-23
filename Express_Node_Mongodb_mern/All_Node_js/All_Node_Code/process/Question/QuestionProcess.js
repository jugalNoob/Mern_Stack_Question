// globals.js
console.log(Object.getOwnPropertyNames(global)); //check gobale boject



2️⃣ Questions About process

Typical Questions:

Q1:: What is process in Node.js?

✅ Interview Tip

 “process is a global object”.

Global object that provides information about, and control over, the running Node process.


Write a program to print the current Node process details 
like ID, platform, Node version, memory usage, and uptime.


Code:

console.log("Process ID:", process.pid);
4️⃣ Interview Tip

PID = Process ID
process.pid → gives Node’s current PID assigned by the OS.
Often asked in cluster, child process, or debugging questions.

console.log("Platform:", process.platform);
console.log("Node Version:", process.version);
console.log("Memory Usage:", process.memoryUsage());
console.log("Uptime (seconds):", process.uptime());

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





Q2:: What is the main purpose of process?

To read info (version, platform, memory, CPU, PID)

To control process (exit, signals, events)

To handle env variables (process.env) and CLI arguments (process.argv)


❓ What is the difference between process.nextTick() and setImmediate()?

| Function                 | When it runs                                                                             | Priority               |
| ------------------------ | ---------------------------------------------------------------------------------------- | ---------------------- |
| **`process.nextTick()`** | Runs **immediately after the current operation**, **before** the event loop continues    | 🔺 **Higher Priority** |
| **`setImmediate()`**     | Runs **after the current event loop phase**, on the **next iteration of the event loop** | 🔻 **Lower Priority**  |




Q what is Main of env?



process.env is used to configure your Node.js app dynamically,
by storing sensitive or environment-specific settings outside your source code.


| Question                               | Answer                                                            |   |        |
| -------------------------------------- | ----------------------------------------------------------------- | - | ------ |
| **What is `process.env`?**             | It’s an object that holds environment variables from the system.  |   |        |
| **Why use env variables?**             | To make configuration flexible, secure, and environment-specific. |   |        |
| **Where are env variables stored?**    | In OS environment or `.env` files (loaded by `dotenv`).           |   |        |
| **How to access them?**                | `process.env.VARIABLE_NAME`                                       |   |        |
| **What data type are env values?**     | Always strings (`'8080'`, `'true'`, `'false'`, etc.)              |   |        |
| **How to check if a variable exists?** | `if (process.env.PORT)`                                           |   |        |
| **Default fallback example**           | `const port = process.env.PORT                                    |   | 3000;` |





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
It schedules a callback to run after the current operation
 completes, but before the event loop continues.

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



::::::::::::::::---------------------------->>>>


console.log('first');



const Test1=async()=>{
  
  let x=await 'jugal sharm'
  console.log(x)
}


Test1()

process.nextTick(() => console.log('proces'));



| Method               | Queue Name      | Priority  | When does it run?                                                                         |
| -------------------- | --------------- | --------- | ----------------------------------------------------------------------------------------- |
| `console.log()`      | None            | Instant   | Runs **immediately** in the current execution context (synchronous).                      |
| `process.nextTick()` | nextTick Queue  | Very High | Runs **immediately after the current code block**, before any other microtasks or timers. |
| `Promise.then()`     | Microtask Queue | High      | Runs **after all nextTick callbacks** but before macrotasks (timers, I/O).                |
| `setTimeout()`       | Macrotask Queue | Low       | Runs in the **next iteration of the event loop**, after microtasks are done.              |



Order,Code,Reason
1st,first,Synchronous execution.
2nd,jugal sharm,First microtask to be processed after the await.
3rd,promiseiing,Next microtask in the queue.
4th,proces,A nextTick created inside a microtask; it runs after the current microtask phase finishes.



Ah! Now you want to understand why the output order is:

first
jugal sharm
promiseiing
proces


for this code:

console.log('first');

const Test1 = async () => {
  let x = await 'jugal sharm';
  console.log(x);
}

Test1();

process.nextTick(() => console.log('proces'));

const Test2 = new Promise((res, rej) => {
  let data = 'promiseiing';
  res(data);
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});


Let’s break it step by step, event-loop style.

Step 1️⃣: Synchronous code
console.log('first')


Runs immediately

✅ Output:

first

Step 2️⃣: Test1() async function
let x = await 'jugal sharm'


'jugal sharm' is not a promise, but await wraps it in Promise.resolve()

Always async → result goes to microtask queue

Scheduled:

console.log(x) → microtask

Step 3️⃣: process.nextTick
process.nextTick(() => console.log('proces'))


Added to nextTick queue

Next tick runs after current stack, but in modern Node.js await-resolved microtasks run first at top-level, so jugal sharm prints before proces

Step 4️⃣: Test2 Promise
new Promise((res, rej) => {
  res('promiseiing');
}).then(...)


res('promiseiing') → promise resolves immediately

.then() goes to microtask queue, after the await microtask

Scheduled:

console.log('promiseiing') → microtask queue

Step 5️⃣: Execution order in queues

Sync stack → first

Microtask queue → Test1 console.log(x) → jugal sharm

Microtask queue → Test2 .then() → promiseiing

NextTick queue → process.nextTick → proces

✅ Final Output
first
jugal sharm
promiseiing
proces

🔑 Key Points (Interview Gold)

await always yields → microtask

Promise.then() → microtask, executes after earlier microtasks

process.nextTick() → highest priority, but await-resolved microtasks may execute first at top-level in modern Node

Synchronous code always first