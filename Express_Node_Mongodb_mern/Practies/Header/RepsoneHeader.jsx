✅ Setting Response Headers in Express

Your line:

res.set('Content-Type', 'application/json');


is correct and sets a single header on the response.

✔ All common response headers you may need (Express)

Below are the most frequently used headers in APIs:

1️⃣ Content-Type header

Tells the client what data format you are sending.

res.set('Content-Type', 'application/json');
res.set('Content-Type', 'text/html');
res.set('Content-Type', 'application/pdf');

2️⃣ Custom headers

You can send your own header (useful for metadata).

res.set('X-Powered-By', 'Jugal-API');
res.set('X-Request-ID', '123456');

3️⃣ CORS headers

Allow frontend domains to access the API.

res.set('Access-Control-Allow-Origin', '*');
res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

4️⃣ Cache-Control headers

Control how responses should be cached.

res.set('Cache-Control', 'no-store');           // no caching
res.set('Cache-Control', 'max-age=3600');       // cache 1 hour

5️⃣ Security headers

Recommended for production.

res.set('X-Frame-Options', 'DENY');
res.set('X-Content-Type-Options', 'nosniff');
res.set('Strict-Transport-Security', 'max-age=31536000');

✔ Setting multiple headers at once

Instead of calling res.set() many times:

res.set({
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
  'X-Powered-By': 'Jugal-API'
});

✔ For most APIs, minimum recommended:
res.set({
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff'
});

🔥 BONUS: How to apply headers to all routes (global middleware)
app.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});


If you want, I can give you:

✅ Complete list of all HTTP headers
✅ Best headers for Node.js + Express APIs
✅ Security headers setup with Helmet middleware