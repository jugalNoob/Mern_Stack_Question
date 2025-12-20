🔥 JWT — ENCRYPTED OR NOT? (INTERVIEW FAVORITE)
❓ Is JWT encrypted?
❌ NO — JWT is NOT encrypted by default

👉 JWT is:
✔ Signed
❌ Not encrypted

🔍 JWT STRUCTURE
HEADER.PAYLOAD.SIGNATURE


Example:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIn0
.
Xk2Y7....

📌 WHAT IS SIGNED?

✔ Header + Payload are Base64 encoded
✔ Signature ensures:

Token integrity

Token authenticity

❌ Anyone can read payload
❌ No one can modify payload without secret

🧠 INTERVIEW TRICK

❓ Can anyone read JWT data?
✔ YES

❓ Can anyone modify JWT data?
❌ NO (without secret)

🔐 JWT SIGNING ALGORITHMS

| Algorithm | Type                 |
| --------- | -------------------- |
| HS256     | HMAC (shared secret) |
| RS256     | RSA (public/private) |
| ES256     | ECC                  |



🧨 JWT COMMON ATTACKS (INTERVIEW GOLD)
1️⃣ Token Theft

✔ XSS steals token from localStorage

2️⃣ Token Replay

✔ Reusing stolen token

3️⃣ Weak Secret

✔ Easy to brute force HS256 secret

4️⃣ Algorithm Confusion

✔ Switching RS256 → HS256

🛡️ JWT SECURITY BEST PRACTICES

✔ Use short expiry
✔ Use refresh tokens
✔ Store token in HTTP-only cookies
✔ Always use HTTPS
✔ Validate iss, aud, exp

🔒 WHEN SHOULD JWT BE ENCRYPTED?

👉 When JWT contains:

PII

Financial data

Sensitive metadata

Use:

✔ JWE (JSON Web Encryption)

JWE = Encrypted JWT


But:
❗ More complex
❗ Less common

⚔️ JWT vs SESSION (INTERVIEW)

| JWT         | Session       |
| ----------- | ------------- |
| Stateless   | Stateful      |
| Scalable    | Server memory |
| Hard revoke | Easy revoke   |



🧠 PERFECT INTERVIEW ANSWER (MEMORIZE)

“JWT is not encrypted, it is signed.
Anyone can read the payload, but cannot modify it without the secret or private key.”

🔥 BONUS SYSTEM DESIGN QUESTION
❓ How would you design secure auth for a high-scale Node.js app?

✔ HTTPS
✔ bcrypt for passwords
✔ JWT access token (5–15 min)
✔ Refresh token in HTTP-only cookie
✔ Redis blacklist for logout
✔ Role-based authorization

🚀 WANT NEXT?

🔥 JWT attacks with examples
🔥 OAuth vs JWT vs Sessions
🔥 Kafka + JWT security
🔥 API Gateway security design