🔥 Node.js system design (1M users)
🔥 Memory leak debugging case study
🚀 WANT NEXT?

🔥 Node.js interview coding puzzles
🔥 Event loop trick questions
🔥 System design for mid-level



✅ MID-LEVEL NODE.JS INTERVIEW QUESTIONS (WITH ANSWERS)
🔁 1. Explain the Node.js event loop (high level)

👉 Node.js uses an event-driven, non-blocking model.
The event loop handles:

Timers

I/O callbacks

Promises / microtasks

It allows Node.js to handle many concurrent requests using a single main thread.

⚙️ 2. Difference between setTimeout and setImmediate

| setTimeout   | setImmediate       |
| ------------ | ------------------ |
| Timers phase | Check phase        |
| Time-based   | Executes after I/O |



✔ Order is not guaranteed

🔐 3. How do you securely store passwords?

✔ Never plain text
✔ Use bcrypt or scrypt
✔ Store only hash + salt

🧩 4. What is process.nextTick() and when to avoid it?

👉 Executes before the event loop continues

❌ Avoid recursive usage → event loop starvation
✔ Use setImmediate instead

🚦 5. How do you handle errors in async code?

✔ Try/catch (async/await)
✔ .catch() for promises
✔ Global handlers:

process.on('unhandledRejection', fn);

🧠 6. Difference between Promise and callback?

| Callback               | Promise               |
| ---------------------- | --------------------- |
| Nested (callback hell) | Flat chain            |
| Error-prone            | Better error handling |
| Old style              | Modern                |



📦 7. What is middleware in Express?

👉 Middleware functions sit between request and response

Used for:

Auth

Logging

Validation

app.use((req,res,next)=>next());

🔄 8. How does Node.js handle high concurrency?

✔ Non-blocking I/O
✔ Event loop
✔ Thread pool (libuv)

🧵 9. Difference between cluster and worker threads


| Cluster       | Worker Threads  |
| ------------- | --------------- |
| Multi-process | Multi-thread    |
| HTTP scaling  | CPU tasks       |
| Same port     | Message passing |


📉 10. What causes memory leaks in Node.js?

✔ Global variables
✔ EventEmitter listeners
✔ Closures
✔ Caches without eviction

🧪 11. How do you debug memory leaks?

✔ Heap snapshots
✔ Chrome DevTools
✔ process.memoryUsage()

🌐 12. How do you read client IP behind Nginx?

✔ Use X-Forwarded-For

app.set('trust proxy', true);
req.ip;

🔑 13. Is JWT encrypted?

❌ No — JWT is signed, not encrypted

✔ Anyone can read payload
✔ No one can modify it

🚨 14. What happens if error event is not handled?

👉 Node.js crashes

emitter.on('error', fn);

🧰 15. How do you implement graceful shutdown?

✔ Listen to SIGTERM / SIGINT
✔ Close server
✔ Close DB connections

🧪 16. Difference between fs.readFile and streams

| readFile          | Stream      |
| ----------------- | ----------- |
| Loads entire file | Chunk-based |
| High memory       | Efficient   |


⏱️ 17. How do you measure execution time?

✔ process.hrtime()
✔ performance.now()

🔒 18. How do you secure an Express app?

✔ Helmet
✔ Rate limiting
✔ Input validation
✔ HTTPS

🔄 19. What is backpressure?

👉 Mechanism to prevent memory overload when consumer is slower than producer.

🧠 20. Explain async/await internally

👉 await pauses function, not thread
👉 Resumes via microtask queue

🎯 MOST COMMON MID-LEVEL FOCUS AREAS

✔ Event loop
✔ Async handling
✔ JWT
✔ Memory leaks
✔ Express middleware
✔ Scaling basics
✔ Security basics

🚀 WANT NEXT?

🔥 Mid-level coding round questions
🔥 Express.js interview questions
🔥 Node.js MCQs
🔥 System design for mid-level

Just say NEXT 🔥

🔥 Mid-level coding round questions 

🔥 MID-LEVEL NODE.JS CODING ROUND QUESTIONS (WITH SOLUTIONS)
These are REAL coding tasks asked in Node.js interviews (1.5–4 yrs experience).

I’ve grouped them by topic and kept solutions clean + interview-ready.

1️⃣ ASYNC / EVENT LOOP
Q1. Print numbers 1–3 in order using async code
function print() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}
print();


📌 Tests: closures, timers, async thinking

Q2. Convert callback-based function to Promise
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

2️⃣ PROMISES / ASYNC-AWAIT
Q3. Implement sleep(ms)
const sleep = ms => new Promise(res => setTimeout(res, ms));

await sleep(1000);

Q4. Run promises sequentially (not parallel)
async function runSequential(tasks) {
  for (const task of tasks) {
    await task();
  }
}

Q5. Handle promise errors properly
async function handler() {
  try {
    await doTask();
  } catch (err) {
    console.error(err);
  }
}

3️⃣ EVENT EMITTER
Q6. Create a custom EventEmitter
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const e = new MyEmitter();

e.on('greet', name => console.log(`Hello ${name}`));
e.emit('greet', 'Node');

Q7. Prevent memory leaks in EventEmitter
emitter.setMaxListeners(20);
emitter.removeListener('event', handler);

4️⃣ EXPRESS / API
Q8. Create a simple Express middleware
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

Q9. Handle async errors in Express
const asyncHandler = fn =>
  (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

5️⃣ FILE SYSTEM & STREAMS
Q10. Read large file using streams
const fs = require('fs');

fs.createReadStream('big.txt')
  .pipe(fs.createWriteStream('copy.txt'));


📌 Tests: memory efficiency

6️⃣ SECURITY
Q11. Hash password using bcrypt
const bcrypt = require('bcrypt');

const hash = await bcrypt.hash(password, 10);

Q12. Verify JWT token
jwt.verify(token, secret, (err, decoded) => {
  if (err) return res.sendStatus(401);
  req.user = decoded;
});

7️⃣ MEMORY / PERFORMANCE
Q13. Find memory leak bug
app.get('/leak', (req, res) => {
  global.arr = global.arr || [];
  global.arr.push(req.body);
});


❌ Global variable causes memory leak

8️⃣ PROCESS & ENV
Q14. Read environment variables safely
const PORT = process.env.PORT || 3000;

9️⃣ SYSTEM THINKING
Q15. Graceful shutdown code
process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});

🔥 BONUS CHALLENGE (VERY COMMON)
Q16. Limit concurrency to 2 promises
async function limit(tasks, limit) {
  let i = 0;
  const results = [];

  async function runner() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  }

  await Promise.all(Array(limit).fill().map(runner));
  return results;
}

🧠 INTERVIEWER EXPECTS YOU TO KNOW

✔ async / await
✔ Event loop basics
✔ Express middleware
✔ Streams vs buffers
✔ Error handling
✔ Memory safety
✔ Security basics

