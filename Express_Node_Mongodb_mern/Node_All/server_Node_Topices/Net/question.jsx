💬 Common Interview Questions
1️⃣ What is the net module used for?

It provides an asynchronous network API for creating TCP servers and clients in Node.js.

2️⃣ How does net differ from http?

net works at a lower level using raw TCP sockets, while http is built on top of TCP, handling HTTP protocol automatically.

3️⃣ What is a socket in Node.js?

A socket is a bi-directional communication channel between a client and server. In Node.js, each TCP connection is represented by a socket.

4️⃣ Can we send JSON data over net?

Yes. You can send stringified JSON data:

socket.write(JSON.stringify({ message: "Hello" }));

5️⃣ How is net related to tls?

The tls module builds on top of net — it adds encryption (TLS/SSL) to the raw TCP sockets provided by net.



| Concept                  | Description               |
| ------------------------ | ------------------------- |
| Module                   | `net`                     |
| Layer                    | Transport (TCP)           |
| Security                 | None (plain text)         |
| Data Format              | Raw bytes / text          |
| Server                   | `net.createServer()`      |
| Client                   | `net.createConnection()`  |
| Use Case                 | Chat apps, games, sensors |
| Higher-Level Alternative | `http`, `tls`, `https`    |




💬 Interview-Ready Explanation

“The net module in Node.js is used for creating raw 
TCP servers and clients, where data is exchanged as
 plain text.
For security, Node.js provides the tls module, 
which wraps around the net sockets to provide 
encryption, authentication, and data integrity — 
forming the foundation of HTTPS and other secure 
network protocols.”

