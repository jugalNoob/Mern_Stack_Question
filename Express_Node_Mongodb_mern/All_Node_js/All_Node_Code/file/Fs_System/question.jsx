fs supports BOTH asynchronous (callback-based / promise-based) and synchronous APIs.

Now let’s explain it clearly + deeply.

✅ 1️⃣ fs is ASYNCHRONOUS by default

Most fs methods are async and use callbacks.

Example (Async + Callback)
const fs = require('fs')

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err)
  console.log(data)
})

console.log('This runs first')

Output order
This runs first
(file content)


➡️ Because fs.readFile is non-blocking.

✅ 2️⃣ Async fs uses CALLBACKS

Node follows error-first callback pattern:

(err, data) => {}


✔ Error handled first
✔ No try/catch for async callbacks

✅ 3️⃣ fs also has PROMISE-BASED async

Modern Node.js provides fs/promises.

import fs from 'fs/promises'

const data = await fs.readFile('a.txt', 'utf-8')
console.log(data)


✔ Still async
✔ Cleaner syntax
✔ Uses async/await

❌ 4️⃣ fs has SYNCHRONOUS (blocking) APIs too
Example (Sync)
const fs = require('fs')

const data = fs.readFileSync('a.txt', 'utf-8')
console.log(data)
console.log('This runs after file read')


⛔ Blocks event loop
⛔ Bad for servers

⚖️ Comparison Table (Interview Gold)

| API Type         | Example                  | Blocking |
| ---------------- | ------------------------ | -------- |
| Async + Callback | `fs.readFile()`          | ❌ No     |
| Async + Promise  | `fs/promises.readFile()` | ❌ No     |
| Sync             | `fs.readFileSync()`      | ✅ Yes    |

🧠 IMPORTANT INTERVIEW INSIGHT

❓ Is fs truly non-blocking?

Answer:

No. fs operations are executed in libuv thread pool,
 not truly async at OS level.

Flow
fs.readFile()
   ↓
libuv thread pool
   ↓
Event Loop callback

🎯 Final Interview Answer (Perfect)

fs provides asynchronous APIs using callbacks and promises, 
and also synchronous APIs. In production, async fs methods are
 preferred to avoid blocking the event loop.

If you want next 🔥
➡️ fs + event loop deep dive
➡️ Why fs can block under heavy load
➡️ Thread pool size tuning (UV_THREADPOOL_SIZE)


🧠 Why error comes first? (Interview Answer)

Node.js is async + non-blocking, so:

Error must be checked immediately

Avoids using try/catch for async code

Makes callbacks predictable & consistent

🔹 Error-First Callback Pattern

🔥 What happens in each case

✔ File exists
err = null
data = "file content"


❌ File missing
err = Error: ENOENT
data = undefined


| Operation   | Method                     |
| ----------- | -------------------------- |
| Create      | `writeFile`                |
| Read        | `readFile`                 |
| Update      | `appendFile` / `writeFile` |
| Delete      | `unlink`                   |
| Large files | `createReadStream`         |



🔰 BASIC LEVEL
1️⃣ What is fs module?

Answer:
fs is Node.js core module used to interact with the file system—read, write, update, 
delete files & directories.

2️⃣ Difference between fs.readFile() and fs.readFileSync()?

| readFile              | readFileSync        |
| --------------------- | ------------------- |
| Async (non-blocking)  | Sync (blocking)     |
| Uses callback         | No callback         |
| Better for production | Bad for server apps |


fs.readFile('a.txt', cb)
fs.readFileSync('a.txt')

3️⃣ What is error-first callback?
Answer:
Node.js callbacks follow (err, data) pattern so errors 
can be handled immediately in async operations.


4️⃣ Difference between writeFile and appendFile?

Answer:

writeFile → overwrites file

appendFile → adds data at the end

5️⃣ Does appendFile create file if not exists?

Answer:
✅ Yes.

🟡 INTERMEDIATE LEVEL
6️⃣ Why try/catch doesn’t work with fs.readFile()?

Answer:
Because errors occur asynchronously, outside the
 current call stack.


 7️⃣ How to update a file using fs?

Answer:
Read → modify → write.

fs.readFile('a.txt','utf8',(e,d)=>{
  fs.writeFile('a.txt', d+' new', ()=>{})
})

8️⃣ Difference between fs.unlink() and fs.rm()?


| unlink            | rm                     |
| ----------------- | ---------------------- |
| Deletes file only | Deletes file or folder |
| Older             | New (Node 14+)         |


9️⃣ How to check file exists?
fs.access('a.txt', fs.constants.F_OK, cb)


⚠️ fs.exists() is deprecated.


🔟 What is __dirname vs process.cwd()?
__dirname	process.cwd


| __dirname             | process.cwd                |
| --------------------- | -------------------------- |
| Current file location | Where node command was run |



🔥 ADVANCED LEVEL
1️⃣1️⃣ Difference between readFile and streams?

Answer:

readFile loads entire file into memory

Streams read chunk by chunk (efficient for large files)

fs.createReadStream('big.txt')



1️⃣2️⃣ When should you use streams?

Answer:

Large files

Video, logs, uploads

Low memory usage

1️⃣3️⃣ What is file descriptor?

Answer:
A number that represents an open file in the OS.

1️⃣4️⃣ What is atomic write?

Answer:
A write operation that completes fully or not at all, preventing data corruption.

1️⃣5️⃣ How does Node.js handle file I/O internally?

Answer:

Uses libuv

File I/O goes to thread pool

Callback queued to event loop

⚠️ TRICK QUESTIONS
1️⃣6️⃣ Is fs truly non-blocking?

Answer:
❌ No.
File system calls are executed in libuv thread pool, not OS async.

1️⃣7️⃣ What happens if two writeFile calls run simultaneously?

Answer:
Race condition → data may be lost.

1️⃣8️⃣ Is appendFile thread-safe?

Answer:
❌ Not guaranteed across processes.

1️⃣9️⃣ What is fs.watch()?

Answer:
Watches file changes (OS-dependent, not 100% reliable).

2️⃣0️⃣ Best practice for logging?

Answer:
Use write stream instead of appendFile.

fs.createWriteStream('log.txt', { flags: 'a' })

🎯 ONE-LINER INTERVIEW CHEAT SHEET
readFile → async
readFileSync → blocking
writeFile → overwrite
appendFile → append
streams → large files
libuv → thread pool