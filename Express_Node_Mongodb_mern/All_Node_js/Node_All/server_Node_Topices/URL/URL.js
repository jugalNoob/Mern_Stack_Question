🌐 Node.js url Module

The url module provides utilities for URL resolution, parsing, and formatting — i.e., breaking a web address into its parts or creating one from parts.

🧩 Importing the URL Module

In Node.js, there are two styles depending on version:

✅ Modern (Recommended — ES6 style)
const { URL } = require('url');

🧓 Old (Legacy)
const url = require('url');

📦 Example URL

Let’s take this URL:

https://jugalsharma.dev:8080/blog/post?id=123&type=node#comments


const { URL } = require('url');

const myUrl = new URL('https://jugalsharma.dev:8080/blog/post?id=123&type=node#comments');

console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Hostname:", myUrl.hostname);
console.log("Port:", myUrl.port);
console.log("Pathname:", myUrl.pathname);
console.log("Search:", myUrl.search);
console.log("Search Params:", myUrl.searchParams);
console.log("Hash:", myUrl.hash);


Protocol: https:
Host: jugalsharma.dev:8080
Hostname: jugalsharma.dev
Port: 8080
Pathname: /blog/post
Search: ?id=123&type=node
Search Params: URLSearchParams { 'id' => '123', 'type' => 'node' }
Hash: #comments


⚙️ 2️⃣ Working with Query Parameters

You can get, set, or loop through parameters easily:

console.log(myUrl.searchParams.get('id')); // 123
console.log(myUrl.searchParams.get('type')); // node

myUrl.searchParams.set('page', '2');
console.log(myUrl.href); 
// https://jugalsharma.dev:8080/blog/post?id=123&type=node&page=2#comments

⚙️ 3️⃣ Formatting (Build URL from Parts)

You can create a full URL by setting properties:

const myUrl = new URL('https://example.com');

myUrl.pathname = '/user/profile';
myUrl.search = '?id=10';
myUrl.hash = '#top';

console.log(myUrl.toString());
// https://example.com/user/profile?id=10#top

⚙️ 4️⃣ Legacy Parser (url.parse)

Before Node v10, the url.parse() method was used:

const url = require('url');

const myUrl = url.parse('https://example.com:8080/home?id=1&cat=books', true);
console.log(myUrl.hostname); // example.com
console.log(myUrl.query.id); // 1
console.log(myUrl.query.cat); // books


⚠️ Note: url.parse() is now deprecated. Use the URL class instead.


⚙️ 5️⃣ Resolve URLs (Join Paths)

If you want to combine a base URL with a relative path:

const { resolve } = require('url');

console.log(resolve('https://example.com/home/', '../about'));
// Output: https://example.com/about

🚀 Real-World Use Cases


| Use Case                                      | Example                                      |
| --------------------------------------------- | -------------------------------------------- |
| Parse incoming request URLs in APIs           | `new URL(req.url, 'http://localhost')`       |
| Extract query parameters                      | `/api?user=1&active=true` → `user`, `active` |
| Modify or construct redirect URLs             | Add tokens, params, etc.                     |
| Validate URLs before requests                 | Check hostname or protocol                   |
| Combine base + endpoint URLs in microservices | `baseURL + endpoint` safely                  |


🧠 In Short
| Concept          | Description             | Example            |
| ---------------- | ----------------------- | ------------------ |
| **Parsing**      | Break URL into parts    | `new URL()`        |
| **Query Params** | Read/set URL parameters | `url.searchParams` |
| **Formatting**   | Build a URL from parts  | `myUrl.toString()` |
| **Resolution**   | Combine relative URLs   | `url.resolve()`    |



🧩 Example: Inside an Express API
const express = require('express');
const { URL } = require('url');
const app = express();

app.get('/api', (req, res) => {
  const fullUrl = new URL(req.protocol + '://' + req.get('host') + req.originalUrl);
  res.json({
    host: fullUrl.host,
    path: fullUrl.pathname,
    params: Object.fromEntries(fullUrl.searchParams),
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

