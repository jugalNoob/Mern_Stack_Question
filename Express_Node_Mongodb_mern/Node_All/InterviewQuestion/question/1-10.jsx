https://www.geeksforgeeks.org/node-js/node-interview-questions-and-answers/
https://www.geeksforgeeks.org/node-js/node-interview-questions-and-answers/


1. How does Node.js work?
Node.js works on a single-threaded,
 event-driven architecture using the V8
  JavaScript engine.


V8 Engine: Compiles JavaScript into fast machine code.


Event Loop: Handles asynchronous tasks (I/O, timers, requests) without blocking the main thread.

Libuv library: Provides a thread pool and handles background tasks 

like file system operations and networking.


Non-blocking I/O: Lets Node.js process thousands of concurrent 
requests efficiently without creating multiple threads




2. What is NPM?
NPM stands for the Node Package Manager. It is the package manager for
 the NodeJS environment. It is used to install, share, and manage dependencies (libraries, tools, or packages) in JavaScript applications. Below are the following key points about the NPM:

NPM uses a package.json file in NodeJS projects to track project dependencies, versions,
 scripts, and metadata like the project's name and version.
NPM is accessed by a command-line interface (CLI). Common commands include npm install to
 install packages, npm update to update them, and npm uninstall to remove them.


3. Why is NodeJS single-threaded?
NodeJS is single-threaded because it's based on the asynchronous, non-blocking nature of
 JavaScript. This design makes it simpler to develop and maintain, and it allows NodeJS to handle
  many concurrent
  requests efficiently.




what is single thread base?

  ✅ Simple Answer:
Node.js is single-threaded, which means it runs all 
JavaScript code in one main thread, executing one task at a time (line by line).

👉 But — it uses an event loop and asynchronous callbacks to 
handle multiple tasks (like file reads, API calls, or database queries)
 without blocking the main thread.