Q what is statless and statfull ?



🟢 BASIC JWT QUESTIONS


1️⃣ What is JWT?

JWT (JSON Web Token) is a compact, stateless token used for authentication 
and authorization between client and server.

2️⃣ JWT structure?

JWT has 3 parts:

header.payload.signature


Header → algorithm & token type

Payload → user data (claims)

Signature → verifies integrity

3️⃣ What problem does JWT solve?

Avoids server-side sessions

Scales well for microservices

Used for stateless authentication

4️⃣ Is JWT encrypted?

❌ No
JWT is Base64 encoded, not encrypted

Anyone can decode payload (but cannot modify without secret)

5️⃣ Where is JWT stored?

Authorization header (BEST)

HTTP-only cookies (secure)

❌ LocalStorage (XSS risk)

🟡 INTERMEDIATE QUESTIONS

6️⃣ Difference between sign, verify, decode?


| Method   | Purpose                 |
| -------- | ----------------------- |
| `sign`   | Create token            |
| `verify` | Validate token & secret |
| `decode` | Read payload (unsafe)   |


7️⃣ What happens if JWT secret changes?

👉 All old tokens become invalid

8️⃣ What is expiresIn?
JWT.sign(payload, secret, { expiresIn: '1h' })


👉 Automatically expires token

9️⃣ How does JWT work internally?

Client logs in

Server creates JWT

Client sends JWT in every request

Server verifies JWT

🔟 Why JWT is stateless?

No DB/session storage on server

All info inside token

🔴 ADVANCED JWT QUESTIONS

1️⃣1️⃣ JWT vs Session


| JWT                | Session            |
| ------------------ | ------------------ |
| Stateless          | Stateful           |
| Stored client-side | Stored server-side |
| Fast & scalable    | Slower             |
| Hard to revoke     | Easy to revoke     |


1️⃣2️⃣ How to invalidate JWT?

JWT cannot be invalidated easily

Solutions:

Short expiry time

Refresh tokens

Token blacklist (Redis)

1️⃣3️⃣ What is Refresh Token?

Long-lived token

Used to generate new access token

Stored securely (HTTP-only cookie)

1️⃣4️⃣ JWT Security risks?

Token theft (XSS)

Large payload size

No built-in revocation

1️⃣5️⃣ How to secure JWT?

✔ Short expiry
✔ HTTPS only
✔ HTTP-only cookies
✔ Strong secret / RSA keys

🧠 CLAIMS QUESTIONS

1️⃣6️⃣ What are JWT claims?


| Type       | Example             |
| ---------- | ------------------- |
| Registered | `exp`, `iat`, `iss` |
| Public     | `email`, `role`     |
| Private    | Custom app data     |



1️⃣7️⃣ What is exp?

Expiration time of token (timestamp)

1️⃣8️⃣ What is iat?

Issued-at time (when token created)

⚙ SYSTEM DESIGN JWT QUESTIONS
1️⃣9️⃣ JWT in microservices?

Same secret / public key

Auth service issues JWT

All services verify JWT

2️⃣0️⃣ Why JWT preferred in distributed systems?

No shared session store

Easy horizontal scaling

2️⃣1️⃣ JWT with Redis – why?

Token blacklist

Refresh token storage

Logout handling

2️⃣2️⃣ JWT size impact?

Larger token → slower requests

Avoid heavy payloads

❓ TRICKY INTERVIEW QUESTIONS
2️⃣3️⃣ Can JWT be hacked?

❌ Signature cannot be forged
✔ Token can be stolen

2️⃣4️⃣ Can we trust JWT payload?

❌ Never trust decoded payload
✔ Always verify()

2️⃣5️⃣ Why decode() is dangerous?

Because it does not validate signature

2️⃣6️⃣ JWT vs OAuth?

JWT → token format

OAuth → authorization framework

2️⃣7️⃣ What algorithm JWT uses?

HS256 (symmetric)

RS256 (public/private key)

2️⃣8️⃣ HS256 vs RS256?


| HS256         | RS256                  |
| ------------- | ---------------------- |
| Same secret   | Public/Private key     |
| Simple        | More secure            |
| Less scalable | Best for microservices |


🧪 CODING QUESTION (COMMON)


JWT Middleware (Express)



function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    JWT.verify(token, key, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}


🎯 FINAL INTERVIEW GOLD LINES

💡 JWT is stateless but not revocable
💡 Verify ≠ Decode
💡 JWT is not encrypted
💡 Use refresh tokens for security


If you want next:

🔥 Top 10 JWT tricky MCQs

🧠 JWT system design deep dive

🛡 JWT security attack scenarios

🧩 JWT + Redis logout design

Just tell me 🚀
