🧠 WHAT IS HTTP LIFECYCLE?

The HTTP lifecycle is the complete journey of a request from the client → server → response → connection close/keep-alive.

1️⃣ HIGH-LEVEL FLOW
Client
  |
  |  HTTP Request
  v
TCP Connection
  |
Node.js HTTP Server
  |
Routing / Logic
  |
HTTP Response
  |
Client

2️⃣ STEP-BY-STEP (DEEP)
🟢 STEP 1: DNS RESOLUTION
example.com → IP address


Happens before Node.js

Cached by OS / browser

🟢 STEP 2: TCP CONNECTION
Client → 3-way handshake → Server


Uses TCP

Port: 80 / 443

Persistent connection if keep-alive

🟢 STEP 3: HTTP REQUEST SENT
Example request:
GET /about HTTP/1.1
Host: localhost:9000
User-Agent: Chrome
Accept: */*

🟢 STEP 4: NODE.JS RECEIVES REQUEST
createServer((req, res) => {})


Internally:

Socket → HTTP Parser → req / res objects

🟢 STEP 5: EVENT LOOP + THREAD POOL
Important Interview Truth 🔥

HTTP handling is event-driven, not multi-threaded.

Socket events → Event Loop

Blocking work → Thread Pool

CPU work → main thread

🟢 STEP 6: REQUEST OBJECT (req)
What req contains
req.method   // GET, POST
req.url      // /about
req.headers  // request headers
req.socket   // TCP socket

Body handling (stream)
req.on('data', chunk => {})
req.on('end', () => {})


➡️ Request body is a READABLE STREAM

🟢 STEP 7: ROUTING (MANUAL)
if (req.url === '/about' && req.method === 'GET') {}


📌 Express automates this.

🟢 STEP 8: RESPONSE OBJECT (res)
Response lifecycle
res.writeHead()
res.write()
res.end()

Example
res.writeHead(200, { 'Content-Type': 'text/plain' })
res.write('Hello')
res.end(' World')


➡️ res.end() closes response

🔥 IMPORTANT: RESPONSE CAN BE SENT ONLY ONCE

❌ Wrong

res.end('Hello')
res.end('Again')


✔ Correct

return res.end('Hello')

🟢 STEP 9: HTTP HEADERS SENT

Headers include:

Status Code
Content-Type
Content-Length
Connection


Once headers are sent:

❌ You CANNOT modify them

🟢 STEP 10: DATA STREAMED TO CLIENT

Chunked encoding (large data)

Backpressure handled automatically

Server → Stream → Client

🟢 STEP 11: CONNECTION HANDLING
keep-alive
Connection: keep-alive


Reuses TCP connection

Faster next request

close
Connection: close


Socket closed

3️⃣ HTTP LIFECYCLE ASCII DIAGRAM
Client
  |
  |--- HTTP Request --->|
  |                     |
  |      Node.js        |
  |   Event Loop        |
  |  Routing Logic      |
  |                     |
  |<--- HTTP Response --|
  |
Connection (keep-alive / close)

4️⃣ ERROR FLOW (VERY IMPORTANT)
❌ Server error
res.writeHead(500)
res.end('Internal Server Error')

❌ Client error
res.writeHead(404)
res.end('Not Found')

5️⃣ HTTP vs EXPRESS LIFECYCLE

| Node http      | Express          |
| -------------- | ---------------- |
| Manual routing | Auto routing     |
| No middleware  | Middleware chain |
| Low-level      | High-level       |
| Faster         | Slight overhead  |



6️⃣ PERFORMANCE BOTTLENECKS


| Problem       | Solution       |
| ------------- | -------------- |
| Blocking code | Async          |
| Large payload | Streams        |
| Many users    | Cluster        |
| CPU work      | Worker Threads |



7️⃣ INTERVIEW TRAPS & ANSWERS 🔥
❓ Why Node handles many requests with one thread?

Answer:
Event-driven, non-blocking I/O using Event Loop.

❓ What happens if res.end() not called?

Answer:
Client hangs, memory leak.

❓ Can headers be modified after res.end()?

Answer:
❌ No.

❓ How body is read in Node?

Answer:
As a stream.

🎯 FINAL INTERVIEW ONE-LINER

The HTTP lifecycle in Node.js is event-driven: a request is parsed from a TCP socket, processed by the event loop, routed, and responded using streams, with the connection optionally kept alive.