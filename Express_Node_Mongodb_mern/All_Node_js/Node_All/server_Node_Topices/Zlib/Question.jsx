🔹 Q1: What is the zlib module in Node.js?

Answer:
zlib is a built-in Node.js module used for data compression 
and decompression.
It supports algorithms like Gzip and Deflate and works well
 with streams or buffers.

Use Case:
When you want to reduce data size before sending or storing it — e.g., compressing API responses, files, or log data.




🔹 Q2: Why do we need compression in Node.js applications?

Answer:
Compression:

Saves network bandwidth (faster transmission)

Reduces file size on disk

Improves performance of data-heavy APIs

Use Case:
You can gzip HTTP responses before sending to browsers to 
improve response speed:



res.setHeader('Content-Encoding', 'gzip');



🔹 Q3: What’s the difference between zlib.gzip() and zlib.deflate()?

| Method      | Algorithm | Output Format | Common Use                      |
| ----------- | --------- | ------------- | ------------------------------- |
| `gzip()`    | Gzip      | `.gz` format  | Web responses, file compression |
| `deflate()` | Deflate   | `.zz` format  | Internal use, zip files         |



Use Case:
Most APIs and browsers prefer Gzip, so gzip() is widely used for HTTP responses.

🔹 Q4: How can you compress and decompress a file using zlib?


🔹 Q4: How can you compress and decompress a file using zlib?

const fs = require('fs');
const zlib = require('zlib');

// Compress
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// Decompress
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('output.txt'));




  🔹 Q5: What is the advantage of using zlib with Streams?

Answer:
Using zlib with streams allows processing large files efficiently without loading the entire file into memory.

Use Case:
Compressing a 1GB log file in chunks instead of reading it fully.

🔹 Q6: How can zlib improve HTTP server performance?

Answer:
By compressing response data before sending it to the client, zlib reduces payload size — leading to faster page loads and less bandwidth.

Use Case Example:

const http = require('http');
const zlib = require('zlib');

http.createServer((req, res) => {
  const text = 'Welcome to my Node.js server!';
  zlib.gzip(text, (err, compressed) => {
    res.writeHead(200, { 'Content-Encoding': 'gzip' });
    res.end(compressed);
  });
}).listen(3000);

🔹 Q7: How does zlib handle errors during compression?

Answer:
zlib methods use callbacks or Promises, where errors are passed as the first argument.
You should always check for errors before using the output.

Example:

zlib.gzip('data', (err, buffer) => {
  if (err) {
    console.error('Compression failed:', err);
    return;
  }
  console.log('Success:', buffer);
});

🔹 Q8: What is the difference between zlib and third-party compression libraries?


Use Case:
If you only need gzip or deflate → use zlib.
If you need full .zip file creation → use archiver.

💡 Real-World Use Cases of zlib


| Use Case                           | Description                                                               |
| ---------------------------------- | ------------------------------------------------------------------------- |
| **1. HTTP Response Compression**   | Compress API or web server responses using gzip to improve network speed. |
| **2. File Compression**            | Reduce disk space for logs, backups, or CSV files.                        |
| **3. Stream Piping**               | Efficiently compress large files without reading them into memory.        |
| **4. Database Backup Compression** | Compress database dumps before storing them.                              |
| **5. Log Management Systems**      | Compress archived logs daily to save storage.                             |


const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function compressLog() {
  const source = path.join(__dirname, 'logs', 'server.log');
  const dest = path.join(__dirname, 'logs', `server-${Date.now()}.log.gz`);

  fs.createReadStream(source)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(dest))
    .on('finish', () => console.log('Log compressed successfully!'));
}

compressLog();

//////////////////////Topiex question  ------------------------------------->>>

🧠 Top 10 Practical zlib Questions (Real-World Use Cases)
1️⃣ When would you use zlib in a Node.js application?

Use it when your app needs to compress or decompress data — for example, sending large JSON responses from an API, compressing files before saving, or optimizing network bandwidth between client and server.

2️⃣ How does zlib help improve API performance?

zlib compresses the response data (using gzip or deflate), which reduces payload size.
Smaller payloads mean faster data transfer, less network usage, and quicker page loads for clients.

3️⃣ How is zlib used in file storage systems?

In systems that store logs, reports, or media, zlib compresses files before saving them to disk.
This helps in saving storage space and also reduces backup costs.

4️⃣ How does zlib fit in streaming pipelines?

When handling large data streams (like video chunks, file uploads, or logs), zlib can compress or decompress the stream in real time — without loading everything into memory.
This improves efficiency and memory management.

5️⃣ Why is gzip compression commonly used in HTTP servers?

Because most modern browsers understand gzip encoding.
By enabling gzip via zlib, the server sends compressed data, 
and the browser automatically decompresses it — improving response
 time and user experience.

6️⃣ How would you use zlib in a microservices architecture?

In message-based systems (like Kafka or RabbitMQ), zlib can compress payloads before publishing.
This reduces network load between services and increases throughput of messages.

7️⃣ How does zlib help in log rotation or archiving?

After a log file is closed for the day, it can be compressed using zlib to .gz format.
This reduces the log size and makes storage more cost-efficient and manageable.

8️⃣ How can zlib improve database backup performance?

When generating backups (like .json or .csv dumps), compressing them with zlib makes them smaller — which reduces backup upload time and storage usage.

9️⃣ What’s a real-world difference between zlib.gzip and zlib.deflate?

gzip is standard for web traffic — browsers and APIs use it for HTTP responses.

deflate is more low-level, often used inside other formats like ZIP archives.
So for APIs → gzip is preferred.
For internal compression in systems → deflate might be used.

🔟 Why would you prefer zlib over external npm libraries?

Because zlib is:

Built-in (no install required)

Fast and reliable (written in C and integrated into Node.js)

Well-suited for standard compression formats like gzip/deflate

You’d only use external libraries if you need features like ZIP file creation, TAR archives, or advanced encryption.