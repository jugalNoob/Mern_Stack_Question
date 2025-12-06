🧠 What is TLS in Node.js?

TLS (Transport Layer Security) is a cryptographic protocol used to secure communication between:

client ↔ server

or server ↔ server

It’s the modern, more secure version of SSL (Secure Socket Layer).

In Node.js, TLS ensures:

🔐 Data sent over the network is encrypted and cannot be intercepted or modified.

⚙️ How TLS Works

TLS provides:
1️⃣ Encryption – hides data from attackers.
2️⃣ Authentication – verifies identity via certificates.
3️⃣ Integrity – ensures data isn’t changed during transfer.

🧩 TLS in Node.js = tls Core Module

Node.js provides a built-in module called tls to create secure network connections.

const tls = require("tls");


This module allows you to:

Create secure TCP servers/clients.

Manage SSL/TLS certificates.

Encrypt data manually.

📜 Example 1 — TLS Server (low-level)
const tls = require("tls");
const fs = require("fs");

const options = {
  key: fs.readFileSync("server-key.pem"),
  cert: fs.readFileSync("server-cert.pem")
};

const server = tls.createServer(options, (socket) => {
  console.log("🔒 Secure connection established!");

  socket.write("Welcome to secure server!");
  socket.setEncoding("utf8");

  socket.on("data", (data) => {
    console.log("Client says:", data);
  });
});

server.listen(8000, () => {
  console.log("TLS server running on port 8000");
});


🧩 Explanation:

tls.createServer() creates an encrypted TCP server.

key and cert files are required (generated using OpenSSL).

Communication between client and server is encrypted.

📜 Example 2 — TLS Client
const tls = require("tls");
const fs = require("fs");

const options = {
  ca: [fs.readFileSync("server-cert.pem")]
};

const client = tls.connect(8000, options, () => {
  console.log("Connected to TLS server");
  client.write("Hello secure world!");
});

client.on("data", (data) => {
  console.log("Received:", data.toString());
});


🧩 Explanation:

tls.connect() establishes a secure connection.

ca contains trusted certificates for verification.

🔐 Example 3 — HTTPS (TLS under the hood)

Most developers use TLS indirectly via the https module:

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("server-key.pem"),
  cert: fs.readFileSync("server-cert.pem")
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello HTTPS + TLS!");
}).listen(443, () => console.log("HTTPS Server running"));


🧩 https = HTTP + TLS encryption

⚙️ TLS vs SSL vs HTTPS


| Term             | Description                                      |
| ---------------- | ------------------------------------------------ |
| **SSL**          | Older security protocol (deprecated).            |
| **TLS**          | Successor to SSL — faster & more secure.         |
| **HTTPS**        | HTTP over TLS. Used in web servers.              |
| **`tls` module** | Low-level Node.js API for custom secure sockets. |


