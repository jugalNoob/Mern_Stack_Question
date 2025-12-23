One-line interview answer 🚀

process.on() listens to Node.js process-level events like exit, 
crashes, and OS signals.

| Event                | Simple meaning            |
| -------------------- | ------------------------- |
| `exit`               | App is ending             |
| `beforeExit`         | App has no work left      |
| `SIGINT`             | User pressed Ctrl + C     |
| `uncaughtException`  | App crashed               |
| `unhandledRejection` | Promise error not handled |


Basic syntax
process.on(eventName, callback)


process.on() — Simple definition

👉 process.on() is used to listen to important
 lifecycle and system events of a Node.js process.

✅ Valid process.on() events (IMPORTANT)
process.on('exit', code => {})
process.on('beforeExit', code => {})
process.on('uncaughtException', err => {})
process.on('unhandledRejection', err => {})
process.on('SIGINT', () => {})   // Ctrl + C


🧠 Correct mental model (KEY INTERVIEW POINT)
process        → global object (events like exit, signal)
process.stdin  → Readable Stream → emits 'data'
process.stdout → Writable Stream → NO 'data' event


Keyboard input
   ↓
stdin buffer
   ↓
'data' event fired
   ↓
callback executes
   ↓
stdout.write()




1️⃣ process.on('exit')
process.on('exit', code => {
  console.log('Process is exiting with code:', code)
})

👉 What it means

Runs when Node.js is about to stop

Program is already finished

👉 Important rules

❌ No async work allowed

❌ No setTimeout, no DB calls

✅ Only sync cleanup

👉 Use case

Log exit code

Close files (sync)

Final message

🧠 Think: “Bye-bye message”



2️⃣ process.on('beforeExit')
process.on('beforeExit', code => {
  console.log('Event loop is empty, about to exit')
})

👉 What it means

Node has nothing left to do

Event loop is empty

Node is thinking about exiting

👉 Special thing

✅ You can add async work

If you do → Node will NOT exit yet

👉 Use case

Schedule last async task

Graceful shutdown logic

🧠 Think: “Wait… anything else?”




3️⃣ process.on('uncaughtException')
process.on('uncaughtException', err => {
  console.error('Crash error:', err.message)
})

👉 What it means

A runtime error happened

Error was NOT inside try/catch

Node is about to crash

👉 VERY IMPORTANT ⚠️

App is in unsafe state

❌ Don’t continue app

✅ Log error + exit process

👉 Use case

Log crash reason

Alert system (last moment)

🧠 Think: “App crashed badly”




4️⃣ process.on('unhandledRejection')
process.on('unhandledRejection', err => {
  console.error('Promise rejected:', err)
})

👉 What it means

A Promise failed

No .catch() attached

Promise.reject('Oops')

👉 Difference from uncaughtException

| uncaughtException | unhandledRejection  |
| ----------------- | ------------------- |
| Sync error        | Async promise error |
| Throws            | Rejects             |


👉 Use case

Log promise failures

Prevent silent bugs

🧠 Think: “Promise failed but nobody caught it”

5️⃣ process.on('SIGINT') (Ctrl + C)
process.on('SIGINT', () => {
  console.log('Ctrl + C pressed')
  process.exit(0)
})

👉 What it means

User pressed Ctrl + C

OS sent a signal to Node

👉 Use case

Graceful shutdown

Close DB

Stop server safely

🧠 Think: “User stopped the app”

🧠 Easy Summary Table (INTERVIEW GOLD)



| Event                | When it runs     | Can do async? |
| -------------------- | ---------------- | ------------- |
| `exit`               | Process ending   | ❌ No          |
| `beforeExit`         | Event loop empty | ✅ Yes         |
| `uncaughtException`  | Crash            | ⚠️ Log + exit |
| `unhandledRejection` | Promise error    | ⚠️ Log        |
| `SIGINT`             | Ctrl + C         | ✅ Yes         |



✅ Typical real-world pattern
process.on('SIGINT', () => {
  console.log('Shutting down...')
  server.close(() => process.exit(0))
})

process.on('uncaughtException', err => {
  console.error(err)
  process.exit(1)
})


If you want next:

🔥 Difference between exit vs beforeExit (deep)
