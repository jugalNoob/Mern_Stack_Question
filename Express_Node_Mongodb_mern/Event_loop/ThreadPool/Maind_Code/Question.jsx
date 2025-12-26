🔹 Node.js Thread Pool (libuv)

The thread pool is a set of background threads that Node.js uses to perform heavy or blocking operations asynchronously, so the main thread stays free.

🧩 Key Points

Default size: 4 threads (UV_THREADPOOL_SIZE=4)

Works in libuv, not visible directly in JS

Handles CPU-intensive or blocking async tasks

Main thread remains non-blocking

🔹 Typical Use Cases

File System Operations (fs)

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('File read done'); // Thread pool handles the read
});


Cryptography (crypto)

const crypto = require('crypto');

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
  console.log('Hash generated'); // CPU-heavy, uses thread pool
});


Compression (zlib)

const zlib = require('zlib');

zlib.gzip('some big data', (err, result) => {
  console.log('Data compressed'); // Thread pool
});


DNS (async DNS lookup)

const dns = require('dns');

dns.lookup('example.com', (err, address) => {
  console.log('DNS resolved'); // Uses thread pool in Node
});

🔹 How It Works
JavaScript Code (Main Thread)
        │
        ▼
Thread Pool (libuv)
│  Handles blocking I/O or CPU-heavy tasks
│  Uses background threads (default 4)
└─> Task done → Callback queued in Event Loop
        │
        ▼
Main Thread executes callback

🔹 Important Notes

Promise does NOT create a thread

CPU-heavy JS code still blocks main thread

You can increase thread pool if needed:

UV_THREADPOOL_SIZE=8 node app.js


Thread pool only works for specific libuv tasks (fs, crypto, zlib, dns)

🔹 Interview-Ready One-Liner

Node.js thread pool allows heavy or blocking operations to run asynchronously in the background, so the single main thread remains non-blocking.