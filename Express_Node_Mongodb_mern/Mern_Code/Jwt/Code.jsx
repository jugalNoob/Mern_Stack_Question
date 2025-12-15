2️⃣ Your corrected code (important)

First, the import is wrong. It should be:

const JWT = require('jsonwebtoken');

let key = 'shhhjugalmjhkjjkjgd';

function JwtDecode() {
    // 1️⃣ Create / Sign JWT
    const token = JWT.sign({ name: 'jugal sharma' }, key);
    console.log(token, 'JWT TOKEN');

    // 2️⃣ Verify JWT
    const verify = JWT.verify(token, key);
    console.log(verify, 'VERIFY JWT');

    // 3️⃣ Decode JWT
    const decode = JWT.decode(token);
    console.log(decode, 'DECODE JWT');
}

JwtDecode();

3️⃣ Line-by-line simple explanation
✅ JWT.sign()
const token = JWT.sign({ name: 'jugal sharma' }, key);


👉 Creates a JWT token
👉 Payload = { name: 'jugal sharma' }
👉 key = secret used to lock the token

📦 Output looks like:

header.payload.signature

✅ JWT.verify()
const verify = JWT.verify(token, key);


👉 Checks:

Token is not changed

Token is signed with the same secret

✔ If valid → returns original data
❌ If invalid → throws error

✅ JWT.decode()
const decode = JWT.decode(token);


👉 Only reads data
👉 ❌ Does NOT check secret
👉 ❌ Not safe for authentication

⚠ Used only for debugging / UI info

4️⃣ About these lines (❌ wrong usage)
JWT.JsonWebTokenError()
JWT.TokenExpiredError()
JWT.NotBeforeError()


❌ These are error classes, not functions
❌ You don’t call them directly

5️⃣ Correct way to use JWT errors

Errors appear when verify() fails.

Example:
try {
    JWT.verify(token, key);
} catch (error) {
    if (error instanceof JWT.TokenExpiredError) {
        console.log('Token expired');
    } else if (error instanceof JWT.JsonWebTokenError) {
        console.log('Invalid token');
    } else if (error instanceof JWT.NotBeforeError) {
        console.log('Token not active yet');
    }
}

6️⃣ JWT Errors explained simply

| Error               | Meaning                        |
| ------------------- | ------------------------------ |
| `JsonWebTokenError` | Token is fake or modified      |
| `TokenExpiredError` | Token time is over             |
| `NotBeforeError`    | Token used before allowed time |


7️⃣ Interview one-line answers (🔥 important)

sign → creates token

verify → checks token + secret

decode → reads token without security

JWT is stateless → no DB needed

verify ≠ decode

8️⃣ Real-world flow (simple)
Login → JWT.sign → Client stores token
Request → JWT.verify → Allow / Deny


