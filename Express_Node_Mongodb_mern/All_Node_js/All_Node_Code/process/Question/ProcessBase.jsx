🔹 BASIC LEVEL (Simple)
1️⃣ What is process in Node.js?

Answer:

process is a global object that provides info about the current Node.js
 process and allows interaction with 
the environment, arguments, and exit events.



2️⃣ How to get the current process ID?
console.log(process.pid) // e.g., 12345

3️⃣ How to get Node.js version?
console.log(process.version) // v20.x.x

4️⃣ How to get platform (OS)?
console.log(process.platform) // 'win32', 'linux', 'darwin'

5️⃣ How to exit a Node.js process?
process.exit(0) // 0 → success, 1 → failure

🔹 INTERMEDIATE LEVEL
6️⃣ How to read environment variables?
console.log(process.env.NODE_ENV)
process.env.PORT = 3000

7️⃣ How to read command-line arguments?
console.log(process.argv) 
// [ 'node', 'app.js', 'arg1', 'arg2' ]


process.argv[2] → first user-provided argument

8️⃣ How to measure high-resolution time?
const start = process.hrtime()
// some code
const diff = process.hrtime(start)
console.log(diff) // [seconds, nanoseconds]

9️⃣ How to listen for process events?
process.on('exit', (code) => console.log('Exiting with', code))
process.on('uncaughtException', (err) => console.log('Error:', err))

🔟 Difference between process.nextTick() and setImmediate()?


2️⃣ How to get the current process ID?
console.log(process.pid) // e.g., 12345

3️⃣ How to get Node.js version?
console.log(process.version) // v20.x.x

4️⃣ How to get platform (OS)?
console.log(process.platform) // 'win32', 'linux', 'darwin'

5️⃣ How to exit a Node.js process?
process.exit(0) // 0 → success, 1 → failure

⚠️ KEY INTERVIEW TAKEAWAYS

process.exit() is immediate — it does not wait for async tasks.

Any timers, pending promises, or I/O after process.exit() are lost.

The second argument to process.exit() is deprecated / ignored.

Always flush logs or async work before calling process.exit().


🔹 INTERMEDIATE LEVEL
6️⃣ How to read environment variables?
console.log(process.env.NODE_ENV)
process.env.PORT = 3000

7️⃣ How to read command-line arguments?
console.log(process.argv) 
// [ 'node', 'app.js', 'arg1', 'arg2' ]


process.argv[2] → first user-provided argument

8️⃣ How to measure high-resolution time?
const start = process.hrtime()
// some code
const diff = process.hrtime(start)
console.log(diff) // [seconds, nanoseconds]

9️⃣ How to listen for process events?
process.on('exit', (code) => console.log('Exiting with', code))
process.on('uncaughtException', (err) => console.log('Error:', err))

🔟 Difference between process.nextTick() and setImmediate()?


🔹 ADVANCED LEVEL
11️⃣ How to get memory usage?
console.log(process.memoryUsage())
// { rss, heapTotal, heapUsed, external, arrayBuffers }

12️⃣ How to get CPU usage?
console.log(process.cpuUsage())
// { user: ..., system: ... } in microseconds

13️⃣ How to change process title?
process.title = 'My Node App'
console.log(process.title)

14️⃣ How to handle signals (like Ctrl+C)?
process.on('SIGINT', () => {
  console.log('Process interrupted')
  process.exit()
})

15️⃣ How to get current working directory?
console.log(process.cwd())

🔹 VERY HARD LEVEL
16️⃣ How to perform graceful shutdown in Node.js?
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)

function shutdown() {
  console.log('Cleaning up resources...')
  // close DB connections, stop servers
  process.exit(0)
}

17️⃣ How to check Node.js uptime?
console.log(process.uptime()) // seconds

18️⃣ How to access the Node.js event loop statistics?
console.log(process._getActiveHandles())
console.log(process._getActiveRequests())


⚠️ _getActiveHandles() and _getActiveRequests() are internal, but sometimes used in debugging interviews.

19️⃣ How to send signals to child processes using process?
const { fork } = require('node:child_process')
const child = fork('child.js')
child.kill('SIGTERM') // sends termination signal

20️⃣ How to detect if process is running under a debugger?
if (process.execArgv.includes('--inspect')) {
  console.log('Running in debug mode')
}

🔹 INTERVIEW TRAPS & NOTES

process.exit() does not wait for async code → always clean up first.

process.nextTick() has higher priority than promises.

process.env values are always strings.

process.on('uncaughtException') should not replace proper error handling.

Accessing _getActiveHandles() → internal API, rarely needed, but can impress interviewers.




process.pid → process ID
process.env → environment variables
process.argv → CLI arguments
process.exit(code) → exit process
process.memoryUsage() → memory stats
process.hrtime() → high-resolution timing
process.nextTick() → microtask queue
process.on('event') → listen for exit/errors/signals
