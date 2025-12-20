cGot it 👍
You want ALL TYPES in Node.js crypto module — clear, complete, interview-oriented, no confusion.

Below is the FULL CLASSIFICATION of Node.js Crypto 🔐

✅ ALL TYPES IN NODE.JS CRYPTO MODULE (INTERVIEW READY)

Node.js crypto is divided into 10 MAIN TYPES / CATEGORIES

const crypto = require('crypto');

1️⃣ HASHING (One-Way)

🔹 Purpose
✔ Password storage
✔ Data integrity

🔹 Functions

createHash()

🔹 Algorithms

sha1 ❌

sha256 ✅

sha512 ✅

md5 ❌

crypto.createHash('sha256').update('data').digest('hex');


📌 One-way → cannot decrypt

2️⃣ HMAC (Hash + Secret)

🔹 Purpose
✔ API authentication
✔ Webhooks

🔹 Function

createHmac()

crypto.createHmac('sha256', 'secret').update('data').digest('hex');


📌 Shared secret key

3️⃣ SYMMETRIC ENCRYPTION (Same Key)

🔹 Purpose
✔ Cookies
✔ DB encryption

🔹 Functions

createCipheriv()

createDecipheriv()

🔹 Algorithms

AES-256-CBC

AES-256-GCM ✅

crypto.createCipheriv('aes-256-gcm', key, iv);


📌 Same key encrypt & decrypt

4️⃣ ASYMMETRIC ENCRYPTION (Public / Private)

🔹 Purpose
✔ HTTPS
✔ Secure key exchange

🔹 Functions

publicEncrypt()

privateDecrypt()

🔹 Algorithms

RSA

ECC

crypto.publicEncrypt(publicKey, buffer);

5️⃣ DIGITAL SIGNATURES

🔹 Purpose
✔ JWT
✔ OAuth
✔ Message authenticity

🔹 Functions

createSign()

createVerify()

crypto.createSign('RSA-SHA256');


📌 Verifies who sent the data

6️⃣ PASSWORD-BASED KEY DERIVATION (KDF)

🔹 Purpose
✔ Secure password storage

🔹 Functions

pbkdf2()

scrypt() ✅

crypto.scrypt(password, salt, 64, cb);


📌 Slows down brute force attacks

7️⃣ RANDOM / SECURE DATA

🔹 Purpose
✔ Tokens
✔ Session IDs
✔ CSRF

🔹 Functions

randomBytes()

randomUUID()

crypto.randomBytes(16);
crypto.randomUUID();

8️⃣ KEY PAIRS & KEY OBJECTS

🔹 Purpose
✔ Certificates
✔ Signing keys

🔹 Functions

generateKeyPair()

createPrivateKey()

createPublicKey()

crypto.generateKeyPair('rsa', options, cb);

9️⃣ CONSTANT-TIME COMPARISON

🔹 Purpose
✔ Prevent timing attacks

🔹 Function

timingSafeEqual()

crypto.timingSafeEqual(a, b);

🔟 STREAM-BASED CRYPTO

🔹 Purpose
✔ Large file encryption

🔹 Objects

Cipher

Decipher

Sign

Verify
(all are streams)

fs.createReadStream()
  .pipe(cipher)
  .pipe(fs.createWriteStream());

🔥 INTERVIEW SUPER SUMMARY


| Type        | One-Line                    |
| ----------- | --------------------------- |
| Hashing     | One-way password protection |
| HMAC        | Hash + secret               |
| Symmetric   | Same key encrypt/decrypt    |
| Asymmetric  | Public / Private keys       |
| Signatures  | Verify sender               |
| KDF         | Secure password hashing     |
| Random      | Secure tokens               |
| Keys        | Manage crypto keys          |
| Timing Safe | Prevent side-channels       |
| Streams     | Encrypt big data            |



⭐ MOST ASKED INTERVIEW QUESTIONS

✔ Hash vs HMAC
→ HMAC uses a secret key

✔ AES vs RSA
→ AES = fast, RSA = secure key exchange

✔ Best password hashing?
→ scrypt / bcrypt

✔ Is JWT encrypted?
→ ❌ No, only signed

If you want next 👇
🔥 crypto interview MCQs
🔥 JWT + crypto attacks
🔥 Node.js security system design
🔥 AES vs RSA deep dive