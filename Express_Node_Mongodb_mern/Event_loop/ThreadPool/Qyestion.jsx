🔥 Node.js Thread Pool Interview Questions
1️⃣ Basic Question

Q: What is the Node.js thread pool, and why is it needed?

Golden Rule Answer:

The thread pool in Node.js is part of libuv. It allows heavy or blocking operations (like fs, crypto, zlib) to run in the background so the single main thread remains non-blocking.

Trap: Don’t say JS runs in multiple threads — only async tasks use the pool.

2️⃣ Default Thread Pool Size

Q: What is the default size of the thread pool, and what does it mean?

Golden Rule Answer:

The default size is 4 threads. This means Node.js can run 4 heavy async tasks concurrently. Any additional tasks wait in a queue until a thread becomes free.

Trap: Don’t confuse main JS thread with thread pool threads.

3️⃣ Configuring Thread Pool

Q: How can you increase the thread pool size in Node.js?

Golden Rule Answer:

UV_THREADPOOL_SIZE=8 node app.js


This increases the maximum number of concurrent background tasks to 8.

Trap: Increasing threads doesn’t speed up synchronous JS code — it only affects async libuv tasks.

4️⃣ Thread Pool Use Cases

Q: Which Node.js operations use the thread pool?

Golden Rule Answer:

File system (fs.readFile, fs.writeFile)

Crypto (pbkdf2, hashing)

Compression (zlib.gzip)

DNS (async lookup)

Trap: Timers (setTimeout) and Promises do not use thread pool.

5️⃣ Thread Pool + Event Loop

Q: Explain what happens when a thread pool task completes.

Golden Rule Answer:

Task runs in a background thread

When complete, its callback is queued in the Event Loop

Main thread executes the callback

Trap: Don’t say callback runs in thread pool — JS always runs on main thread.

6️⃣ Advanced / Trick Question

Q: If you offload 10 CPU-heavy tasks at the same time, what happens with default thread pool?

Golden Rule Answer:

Only 4 tasks run in parallel (default pool size)

Remaining 6 wait in the thread pool queue

As threads free up, queued tasks start executing

Trap: Don’t assume all 10 run at once.

7️⃣ Microtask vs Thread Pool

Q: Does Promise or process.nextTick use the thread pool?

Golden Rule Answer:

No. Promises and process.nextTick run on the main thread in microtask queue. Thread pool is only used for specific libuv async tasks.

Trap: Confusing microtasks with background threads.

✅ Extra Tip for Interview:

Always clarify main thread vs thread pool

Mention Event Loop when explaining callback execution

If you want, I can also make an ASCII diagram showing main thread + thread pool (4 threads) + queued tasks + callbacks, which pairs perfectly with these questions for interviews.

Do you want me to do that?