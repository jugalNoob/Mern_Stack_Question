Advanced Node.js Interview Questions — Execution Model, Event Loop & Performance
Core Architecture
How does Node.js achieve asynchronous I/O despite running JavaScript in a single thread?

Explain the role of libuv in Node.js. How does it differ from V8?

What are the main phases of the event loop, and what type of callbacks run in each phase?

How are microtasks (Promise.then) and process.nextTick scheduled relative to event loop phases?

What’s the difference between OS kernel async I/O and libuv thread pool I/O in Node.js?

Why is Node.js called “non-blocking” if it uses threads in the background?

Thread Pool & Performance
What is the default libuv thread pool size, and how can you change it?

Which Node.js APIs use the libuv thread pool, and which don’t?

If you have 100 concurrent file read requests and the thread pool size is 4, what happens?

What’s the impact of increasing UV_THREADPOOL_SIZE to a large number like 64?

CPU-Intensive Tasks
Why are CPU-bound operations a problem in Node.js?

How would you handle an image processing task that takes 5 seconds without blocking the main thread?

Compare worker_threads, child_process, and cluster for handling CPU-intensive workloads.

What are some examples of CPU-heavy operations that can block the Node.js event loop?

V8 & Garbage Collection
What is the role of V8 in Node.js, and how does it optimize JavaScript execution?

How does JIT compilation work in V8? What are hot functions and deoptimization?

Explain the different types of garbage collection in V8.

How can garbage collection pauses affect Node.js performance?

Streams & Backpressure
Explain how Node.js streams work and why they’re important for large data processing.

What is backpressure in streams, and how does Node handle it?

How would you stream a 10GB file to a client without blocking memory?

Scaling & Multi-Core Usage
Why doesn’t Node.js use multiple cores by default?

Compare scaling Node.js with cluster vs using a process manager like PM2.

How would you architect a Node.js app to fully utilize an 8-core CPU server?

What’s the trade-off between scaling vertically (more CPU per process) and horizontally (more processes/machines)?

libuv & Low-Level Details
How does libuv implement the event loop differently on Linux vs Windows?

What is epoll/kqueue/IOCP, and how does Node.js use them?

How does Node.js handle DNS lookups differently between dns.lookup and dns.resolve?

Advanced Real-World Scenarios
You have a Node.js server that needs to process 100,000 Kafka messages/min and also serve 10,000 HTTP requests/min — how do you design it to avoid blocking?

A Node.js API shows occasional spikes to 5 seconds latency — how do you investigate if it’s due to GC, CPU, or I/O bottlenecks?

If your app is mostly CPU-bound (image processing, video transcoding), would you still use Node.js? Why or why not?

How would you safely shut down a Node.js server handling live WebSocket connections?

Security & Reliability
What are the risks of unhandled promise rejections in Node.js?

How does Node.js handle uncaughtException and what’s the recommended practice when it occurs?

Why is it unsafe to keep running after a fatal error in Node.js?

Bonus: Edge Cases & Gotchas
Why might a setTimeout(fn, 0) not run immediately?

Why does await fs.readFile() sometimes block other requests, even though it’s async?

How do you prevent blocking when parsing a huge JSON file in Node.js?

What happens if you schedule 1 million process.nextTick() callbacks?

What’s the maximum safe heap size for Node.js on a 64-bit machine, and why?