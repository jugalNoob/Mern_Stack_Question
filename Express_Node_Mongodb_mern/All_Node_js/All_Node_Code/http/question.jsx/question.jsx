🌐 Node.js HTTP Interview Questions
🔹 BASIC LEVEL
1️⃣ What is the http module in Node.js?

Answer:

A built-in Node.js module used to create HTTP servers and clients.

2️⃣ How do you create a simple HTTP server?

Answer:

const http = require('http')
http.createServer((req, res) => res.end('Hello')).listen(3000)

3️⃣ What is req and res in createServer?

Answer:

req → instance of IncomingMessage, represents client request (readable stream)

res → instance of ServerResponse, represents server response (writable stream)

4️⃣ Difference between res.write() and res.end()?
Method	Use
res.write()	Send partial data (can call multiple times)
res.end()	End response and optionally send final chunk
5️⃣ What is the default HTTP method if not specified?

Answer:

GET

🔹 INTERMEDIATE LEVEL
6️⃣ How to read POST request body in Node.js?

Answer:

let body = ''
req.on('data', chunk => body += chunk)
req.on('end', () => console.log(body))


req is a readable stream.

7️⃣ How to send JSON response?
res.writeHead(200, { 'Content-Type': 'application/json' })
res.end(JSON.stringify({ message: 'Hello' }))

8️⃣ What is the difference between HTTP/1.1, HTTP/2, HTTP/3?
Version	Feature
1.1	Text-based, one request per connection, head-of-line blocking
2	Binary, multiplexing, header compression
3	QUIC protocol over UDP, faster handshakes
9️⃣ How to implement routing in pure Node.js?

Answer:

if (req.url === '/about' && req.method === 'GET') {}


Express automates this, Node requires manual routing.

🔟 How does Node.js handle many concurrent requests?

Answer:

Node uses an event-driven, non-blocking I/O model. Requests are handled by the event loop, blocking work can go to the libuv thread pool.

🔹 ADVANCED LEVEL
11️⃣ What is the difference between res.writeHead() and res.setHeader()?
Method	Use
res.setHeader()	Set header without sending status
res.writeHead()	Set status + headers and send immediately
12️⃣ How to implement streaming response?
const fs = require('fs')
fs.createReadStream('file.txt').pipe(res)


Useful for large files (video, logs) without loading in memory.

13️⃣ What is keep-alive in Node.js?

Answer:

Reuses the same TCP connection for multiple requests. Speeds up HTTP requests.

14️⃣ How to handle 404 or unknown routes?
res.writeHead(404, { 'Content-Type': 'application/json' })
res.end(JSON.stringify({ message: 'Route not found' }))

15️⃣ What is backpressure in HTTP streams?

Answer:

When a writable stream cannot process incoming data fast enough, Node applies backpressure to prevent memory overflow.

🔹 TRICK / INTERVIEW TRAPS
16️⃣ Can res.end() be called multiple times?

❌ No → throws “Cannot set headers after they are sent”.

17️⃣ What happens if res.end() is never called?

❌ Client hangs → memory leak.

18️⃣ How to handle large POST requests safely?

Use streams and chunked parsing instead of reading full body into memory.

19️⃣ Difference between HTTP and HTTPS server in Node.js?

HTTP → http.createServer()

HTTPS → https.createServer({ key, cert })

HTTPS encrypts communication with SSL/TLS.

20️⃣ How Node.js parses HTTP requests internally?

Data arrives via TCP socket

Passed to HTTP parser (C++)

IncomingMessage created → req object

Body streamed → callbacks/event loop

🔹 PERFORMANCE / SCALABILITY QUESTIONS

How to serve 100k concurrent requests?

Use cluster module, load balancer, streaming, offload static files to CDN.

How to implement file streaming + HTTP server?

fs.createReadStream(file).pipe(res)

How to avoid blocking the event loop in HTTP server?

Async operations, worker threads for CPU tasks.

🎯 INTERVIEW CHEAT SHEET
req → IncomingMessage (stream)
res → ServerResponse (stream)
res.write → chunk
res.end → finish
GET → read, POST → create, PUT → replace, PATCH → partial
Node handles concurrency → event loop + libuv
Streaming → large files / backpressure
Headers → setHeader / writeHead
