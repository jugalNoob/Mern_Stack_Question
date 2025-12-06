💬 Common Interview Questions

1️⃣ Q: What is TLS and how is it used in Node.js?
A: TLS (Transport Layer Security) is used to encrypt network communication. In Node.js, it’s implemented using the tls module or indirectly through the https module.

2️⃣ Q: Difference between https and tls module?
A:

https = High-level module for secure HTTP servers.

tls = Low-level module for encrypted TCP connections (non-HTTP too).

3️⃣ Q: How does TLS improve security?
A: TLS provides:

Encryption (privacy)

Authentication (identity verification)

Integrity (data not altered)

4️⃣ Q: Can you create a TLS server without https?
A: Yes. Use tls.createServer() directly for custom encrypted socket connections.

5️⃣ Q: What is the difference between SSL and TLS?
A: TLS is the upgraded version of SSL with stronger encryption algorithms and better performance.

6️⃣ Q: What files are required to enable TLS in Node.js?
A:

Private Key (server-key.pem)

Certificate (server-cert.pem)

(Optionally) CA certificate

🚀 Real-World Use Cases

✅ Secure web servers (HTTPS)
✅ Secure microservices communication (gRPC, TCP)
✅ Encrypted database connections (MongoDB, MySQL TLS)
✅ Certificate-based authentication

🧩 Summary Table


| Concept      | Explanation                             |
| ------------ | --------------------------------------- |
| Module       | `tls`                                   |
| Used For     | Secure socket (TCP) connections         |
| Replaces     | SSL                                     |
| Underlies    | HTTPS                                   |
| Key Methods  | `tls.createServer()`, `tls.connect()`   |
| Files Needed | `.key`, `.cert`                         |
| Security     | Encryption + Authentication + Integrity |


