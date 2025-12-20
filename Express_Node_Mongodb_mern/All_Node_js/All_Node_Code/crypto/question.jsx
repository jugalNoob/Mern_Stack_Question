🔐 NODE.JS CRYPTO INTERVIEW QUESTIONS & ANSWERS
🟢 BASIC LEVEL (FOUNDATION)
1️⃣ What is cryptography?

👉 Cryptography is the practice of securing data using techniques like encryption, hashing, and signing to ensure confidentiality, integrity, and authenticity.

2️⃣ What is the crypto module in Node.js?

👉 Built-in Node.js module used for:

Hashing

Encryption / Decryption

Digital signatures

Secure random values

const crypto = require('crypto');

3️⃣ Difference between hashing and encryption?

| Hashing        | Encryption  |
| -------------- | ----------- |
| One-way        | Two-way     |
| Cannot decrypt | Can decrypt |
| Passwords      | Secure data |



4️⃣ Is SHA256 encryption?

❌ No.
👉 SHA256 is a hashing algorithm, not encryption.

5️⃣ Why should passwords never be stored as plain text?

👉 If DB leaks, all users are compromised. Hashing protects passwords even after breach.

🟡 INTERMEDIATE LEVEL
6️⃣ What is salting?

👉 Adding random data to passwords before hashing to prevent rainbow table attacks.

7️⃣ What is HMAC?

👉 Hash-based Message Authentication Code.
✔ Uses hash + secret key
✔ Verifies data integrity & authenticity

8️⃣ Difference between AES and RSA?

| AES       | RSA                 |
| --------- | ------------------- |
| Symmetric | Asymmetric          |
| Fast      | Slow                |
| Same key  | Public/private keys |


9️⃣ What is IV in encryption?

👉 Initialization Vector adds randomness so same data encrypts differently each time.

🔟 What is scrypt?

👉 Password-based key derivation function
✔ Slow
✔ Memory-hard
✔ Prevents GPU attacks

🔵 ADVANCED LEVEL
1️⃣1️⃣ What is AES-GCM and why is it preferred?

👉 AES-GCM provides:

Encryption

Authentication (integrity)

✔ Prevents tampering
✔ Faster than CBC

1️⃣2️⃣ What is a timing attack?

👉 Attack based on response time differences.
✔ Prevented using crypto.timingSafeEqual().

1️⃣3️⃣ What is digital signing?

👉 Ensures:

Who sent the data

Data not altered

✔ Uses private key to sign
✔ Public key to verify

1️⃣4️⃣ Is JWT encrypted?

❌ No
👉 JWT is Base64 encoded and signed, not encrypted.

1️⃣5️⃣ Difference between signing and encryption?

| Signing         | Encryption      |
| --------------- | --------------- |
| Verifies sender | Hides data      |
| Integrity       | Confidentiality |


🔴 TRICK / TRAP QUESTIONS
1️⃣6️⃣ Can hashing be reversed?

❌ Never (practically).

1️⃣7️⃣ Why not compare passwords using ===?

👉 Vulnerable to timing attacks.

1️⃣8️⃣ Why is MD5 insecure?

👉 Broken by:

Collision attacks

Fast brute force

1️⃣9️⃣ Can AES work without IV?

❌ Technically yes, but insecure.

2️⃣0️⃣ Why is RSA not used to encrypt large data?

👉 Very slow and size-limited.
✔ Used only for key exchange.

🟣 SYSTEM DESIGN QUESTIONS
2️⃣1️⃣ How would you securely store user passwords?

👉 Use:

bcrypt or scrypt

Unique salt per user

Store only hash + salt

2️⃣2️⃣ How does HTTPS use crypto?

👉 Uses:

RSA / ECDHE → key exchange

AES → data encryption

Certificates → trust

2️⃣3️⃣ How do you secure API requests?

👉 Using:

HMAC

JWT

OAuth

TLS

2️⃣4️⃣ How do you sign Kafka messages?

👉 HMAC or RSA signature before producing messages.

2️⃣5️⃣ Where should encryption keys be stored?

👉

Environment variables

Cloud KMS (AWS, GCP)

Vault

❌ Never in code

🔥 ONE-LINE RAPID FIRE

✔ Hashing → One-way
✔ Encryption → Two-way
✔ HMAC → Hash + secret
✔ AES → Fast symmetric
✔ RSA → Secure asymmetric
✔ JWT → Signed, not encrypted
✔ scrypt → Best for passwords

💡 MOST ASKED INTERVIEW FAVORITES

🔥 Hash vs Encryption
🔥 AES vs RSA
🔥 JWT encrypted or not
🔥 Password storage best practices
🔥 Timing attacks
🔥 MD5 vs SHA256