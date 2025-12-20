🌐 Node.js Interview Questions
1️⃣ Process & Environment

What is process in Node.js?

Difference between process.exit(0) and process.exit(1)?

What is process.pid? Why is it useful?

How do you read environment variables?

Difference between process.nextTick() and setImmediate()?

What is the difference between exit and beforeExit events?

How do you handle signals like SIGINT and SIGTERM?

What is the difference between process.version and process.versions?

How do you check memory usage? Explain heapUsed vs rss.

Can setTimeout run after process.exit()? Why or why not?

2️⃣ Event & EventEmitter

What is the events module in Node.js?

Difference between .on() and .once()?

What is the difference between emit() and listeners()?

How do you remove an EventEmitter listener?

What happens if you emit an event without any listeners?

Difference between process.on('uncaughtException') and try-catch?

How does Node.js handle the error event on streams?

What are EventEmitter memory leak warnings? How do you fix them?

3️⃣ HTTP & Networking

How do you create an HTTP server in Node.js?

How do you get the client IP from req?

What is the difference between HTTP req and res streams?

How do you handle URL parsing in Node.js? (url module or URL class)

Difference between http and https modules?

What is the difference between IPv4 and IPv6?

How do you handle multiple connections in Node.js (cluster/worker threads)?

Explain what happens when you call res.write() multiple times before res.end().

4️⃣ Streams & File System

What is a stream in Node.js? Difference between readable and writable streams?

How do you pipe streams together?

What is the difference between fs.readFile and fs.createReadStream?

How do you handle large files efficiently in Node.js?

Difference between fs.writeFile and fs.appendFile?

Can fs methods be used asynchronously and synchronously? Explain the difference.

5️⃣ Advanced / Tricky

Explain Node.js event loop phases. Where do timers,
 setImmediate, and process.nextTick fit?

Can process.nextTick() starve the event loop? How?

What happens if you do not handle the error event on an EventEmitter?

How do you implement a graceful shutdown in Node.js servers?

Explain memory leak detection in Node.js. How can EventEmitters cause leaks?

How do you read client IP behind a reverse proxy like Nginx?

Explain the difference between cluster workers and child processes.

How does Node.js handle high concurrency with single-threaded event loop?

How do process.env changes affect the running Node.js process?

How do you measure high-resolution time in Node.js? (process.hrtime())