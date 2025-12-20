🏗️ fs System Design (Node.js)
🎯 Problem

Design a system that uploads, reads, updates, deletes files efficiently using Node.js fs.

Used in:

Log systems

File upload services

Report generation

Media servers

1️⃣ HIGH-LEVEL ARCHITECTURE
Client
   |
HTTP Request
   |
Node.js Server
   |
Validation / Auth
   |
Stream Layer
   |
File System (Disk)

2️⃣ WHY NOT readFile() / writeFile()?
❌ Problems

Loads entire file into memory

Blocks thread pool under heavy load

Crashes on large files

✅ Solution

👉 Streams + Backpressure

3️⃣ FILE UPLOAD SYSTEM DESIGN
📌 Flow

Client sends file

Node.js receives stream

Pipe directly to disk

Save metadata in DB

🧠 ASCII DIAGRAM
Client
  |
  |  (Readable Stream)
  v
Node.js Server
  |
  | pipe()
  v
Write Stream (fs)
  |
  v
Disk

✅ Code (Upload – STREAM BASED)
import fs from 'fs'
import http from 'http'

http.createServer((req, res) => {
  const writeStream = fs.createWriteStream('./uploads/file.txt')

  req.pipe(writeStream)

  writeStream.on('finish', () => {
    res.end('Upload Complete')
  })
}).listen(3000)

4️⃣ FILE READ (DOWNLOAD SYSTEM)
🔥 Optimized Design

Stream chunks

Support range requests (video)

const readStream = fs.createReadStream('file.txt')
readStream.pipe(res)

5️⃣ LOGGING SYSTEM DESIGN (VERY IMPORTANT)
❌ Bad
fs.appendFile('log.txt', msg)

✅ Good
const logStream = fs.createWriteStream('log.txt', { flags: 'a' })

logStream.write('User logged in\n')

🧠 Why?

No race condition

Better performance

Handles backpressure

6️⃣ FILE UPDATE SYSTEM DESIGN
❌ Direct update?

Not possible safely.

✅ Strategy
Read Stream → Transform → Temp File → Rename

ASCII
file.txt
  |
ReadStream
  |
Transform
  |
Temp File
  |
Rename (Atomic)

Code
import { createReadStream, createWriteStream, rename } from 'fs'

const rs = createReadStream('a.txt')
const ws = createWriteStream('temp.txt')

rs.pipe(ws)

ws.on('finish', () => {
  rename('temp.txt', 'a.txt', () => {})
})

7️⃣ DELETE SYSTEM DESIGN
fs.rm('file.txt', { force: true }, () => {})


For safety:

Soft delete

Move to trash folder

8️⃣ SCALABILITY CHALLENGES

| Problem          | Solution            |
| ---------------- | ------------------- |
| Large files      | Streams             |
| High concurrency | Queue / worker      |
| Multiple servers | Shared storage (S3) |
| Disk failure     | Replication         |
| Logging          | Log rotation        |


9️⃣ DISTRIBUTED FILE SYSTEM DESIGN (ADVANCED)
Client
  |
Load Balancer
  |
Node Servers
  |
Shared Storage (S3 / NFS)
  |
Metadata DB

🔥 Key Insight

Local fs does NOT scale horizontally

🔟 INTERVIEW QUESTIONS & ANSWERS
❓ Why streams over fs.readFile?

Answer:
Streams reduce memory usage and support backpressure.

❓ How Node handles file I/O?

Answer:
Via libuv thread pool, async callbacks queued to event loop.

❓ Can fs handle 10k concurrent uploads?

Answer:
❌ No (local disk bottleneck)
✅ Use object storage (S3).

❓ How to prevent data corruption?

Answer:
Atomic writes using temp file + rename.

🎯 FINAL INTERVIEW SUMMARY
Small file → readFile
Large file → streams
Logs → write stream
Scale → S3
Atomic → temp + rename
