🔐 CRYPTOGRAPHY IN NODE.JS — COMPLETE INTERVIEW GUIDE

Node.js provides cryptography via the built-in crypto module.

const crypto = require('crypto');

1️⃣ HASHING (One-Way Encryption)

👉 Used for passwords, integrity checks

🔹 Algorithms

SHA256

SHA512

MD5 ❌ (NOT secure)

bcrypt (external lib)

scrypt

PBKDF2

🔸 SHA256 Example
const hash = crypto.createHash('sha256')
  .update('password')
  .digest('hex');

console.log(hash);


📌 One-way → cannot decrypt

🔸 Password Hashing (BEST PRACTICE)
crypto.scrypt('password', 'salt', 64, (err, key) => {
  console.log(key.toString('hex'));
});


✔ Slower → prevents brute force
✔ Used in production auth systems

🔸 Interview Question

❓ Why not store plain passwords?
✔ Hashing protects even if DB is leaked

2️⃣ SALTING (Password Protection)
const salt = crypto.randomBytes(16).toString('hex');


✔ Prevents rainbow table attacks

3️⃣ SYMMETRIC ENCRYPTION (Encrypt + Decrypt with SAME key)

👉 Used for data at rest, cookies, sessions

🔹 Algorithms

AES-256-CBC

AES-256-GCM (BEST)

🔸 AES Example
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('secret', 'utf8', 'hex');
encrypted += cipher.final('hex');


🔓 Decrypt

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

🔸 Interview Question

❓ Where do you store the key?
✔ Env variables
✔ KMS (AWS / Vault)

4️⃣ ASYMMETRIC ENCRYPTION (Public + Private Key)

👉 Used for JWT signing, HTTPS, key exchange

🔹 Algorithms

RSA

ECC (Elliptic Curve)

🔸 RSA Encryption
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('hello'));
const decrypted = crypto.privateDecrypt(privateKey, encrypted);


✔ Public → encrypt
✔ Private → decrypt

5️⃣ DIGITAL SIGNATURES (Authenticity)

👉 Used in JWT, OAuth, APIs

const sign = crypto.createSign('RSA-SHA256');
sign.update('message');

const signature = sign.sign(privateKey, 'hex');


Verify:

const verify = crypto.createVerify('RSA-SHA256');
verify.update('message');

verify.verify(publicKey, signature);

🔸 Interview Question

❓ Difference between encryption & signing?
✔ Encryption → confidentiality
✔ Signing → authenticity & integrity

6️⃣ HMAC (Hash + Secret Key)

👉 Used in API security, webhooks

const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('data');
console.log(hmac.digest('hex'));


✔ Faster than RSA
✔ Shared secret

7️⃣ RANDOM DATA GENERATION
🔸 Secure Random
crypto.randomBytes(16);


✔ Used for:

Tokens

Session IDs

CSRF tokens

8️⃣ KEY DERIVATION FUNCTIONS (KDF)
🔹 PBKDF2
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', cb);

🔹 scrypt (Recommended)

✔ Memory-hard
✔ Strong against GPUs

9️⃣ TIMING ATTACK PREVENTION
crypto.timingSafeEqual(a, b);


✔ Prevents timing attacks

🔟 JWT & Crypto (INTERVIEW FAVORITE)

JWT uses:

HMAC (HS256)

RSA (RS256)

✔ Header + Payload → Signed
✔ NOT encrypted (unless JWE)

1️⃣1️⃣ TLS / HTTPS (Behind the Scenes)

Node uses crypto for:

SSL certificates

HTTPS servers

Secure sockets

https.createServer({ key, cert }, app);

1️⃣2️⃣ COMMON INTERVIEW TRAPS ❌

| Mistake                     | Why Bad       |
| --------------------------- | ------------- |
| MD5 for passwords           | Broken        |
| Hardcoding keys             | Insecure      |
| No salt                     | Vulnerable    |
| AES without IV              | Unsafe        |
| Comparing hashes with `===` | Timing attack |

1️⃣3️⃣ crypto vs bcrypt


| Feature          | crypto | bcrypt        |
| ---------------- | ------ | ------------- |
| Built-in         | ✔      | ❌             |
| Password hashing | ⚠      | ✔             |
| Speed            | Fast   | Slow (secure) |
| GPU resistance   | ❌      | ✔             |




1️⃣4️⃣ REAL-WORLD NODE.JS USE CASES

✔ Login systems
✔ Payment gateways
✔ API authentication
✔ Webhooks
✔ JWT auth
✔ Secure cookies
✔ Kafka message signing
✔ Redis token security

1️⃣5️⃣ ONE-LINE INTERVIEW ANSWERS 🔥

✔ Hashing vs Encryption?
→ Hashing is one-way, encryption is reversible

✔ Why AES-GCM?
→ Provides encryption + integrity

✔ Why scrypt over SHA?
→ Slower + memory-hard

✔ Is JWT encrypted?
→ No, only signed

🔥 WANT NEXT?

👉 Crypto interview MCQs
👉 Node.js security system design
👉 JWT deep dive with attacks
👉 OAuth vs JWT vs Sessions
👉 Kafka message signing

Just tell me 👍