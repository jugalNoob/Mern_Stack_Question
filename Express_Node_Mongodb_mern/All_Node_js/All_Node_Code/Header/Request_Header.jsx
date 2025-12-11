✅ Most Common Request Headers (Client → Server)
1️⃣ Content-Type

Tells server what format the body is in.

Content-Type: application/json
Content-Type: multipart/form-data
Content-Type: application/x-www-form-urlencoded

2️⃣ Authorization

Used for login / secure routes.

Authorization: Bearer <token>
Authorization: Basic <base64>

3️⃣ Accept

Client tells server what response formats it can accept.

Accept: application/json
Accept: text/html

4️⃣ User-Agent

Identifies the device/browser/app.

Example:

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)

5️⃣ Host

Tells the domain name requested.

Host: api.example.com

6️⃣ Origin

Used for CORS — from which website the request came.

Origin: https://example.com

7️⃣ Referer

Which page triggered the request.

Referer: https://mywebsite.com/dashboard

8️⃣ Cookie

Authentication, session IDs, preferences.

Cookie: token=abc123; userid=10;

9️⃣ Accept-Language

Preferred language of the user.

Accept-Language: en-US,en;q=0.9

🔟 Accept-Encoding

Compression formats the client supports.

Accept-Encoding: gzip, deflate, br

✔ How to read request headers in Express
app.get('/test', (req, res) => {
    console.log(req.headers);        // all headers
    console.log(req.headers['host']);
    console.log(req.headers['user-agent']);
    console.log(req.headers['authorization']);
    res.send('OK');
});

🔥 Most useful headers when building APIs
📌 Security

Authorization

Cookie

📌 CORS

Origin

Access-Control-Request-Headers

Access-Control-Request-Method

📌 Body parsing

Content-Type

🛠 Want a complete table of ALL 60+ HTTP request headers

or
Want which headers are required for scalable APIs (Node + Kafka + Redis)?

Just tell me — I’ll send full list.