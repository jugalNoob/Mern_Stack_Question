🧠 Top Node.js url Interview Questions & Answers
1️⃣ What is the purpose of the url module in Node.js?

Answer:
The url module provides utilities for parsing, formatting, and resolving URLs.
It helps break a URL into its components (protocol, host, path, query, etc.) or build new URLs dynamically.

Example:

const { URL } = require('url');
const myUrl = new URL('https://example.com:8080/user?id=10');
console.log(myUrl.hostname); // example.com
console.log(myUrl.searchParams.get('id')); // 10

2️⃣ How do you parse a URL in Node.js?

Answer:
You can parse a URL using the URL class.

const { URL } = require('url');
const myUrl = new URL('https://test.com:8080/api/user?id=1&role=admin');
console.log(myUrl.protocol); // https:
console.log(myUrl.hostname); // test.com
console.log(myUrl.pathname); // /api/user
console.log(myUrl.searchParams.get('role')); // admin

3️⃣ What’s the difference between url.parse() and new URL()?

| Feature        | `url.parse()`                       | `new URL()`                   |
| -------------- | ----------------------------------- | ----------------------------- |
| Type           | Legacy API                          | Modern API (Recommended)      |
| Returns        | Plain object                        | URL object                    |
| Query Handling | Needs `true` flag for query parsing | Has `searchParams` by default |
| Example        | `url.parse(urlString, true)`        | `new URL(urlString)`          |


Example:

const url = require('url');
const legacy = url.parse('https://example.com?id=5', true);
console.log(legacy.query.id); // 5

const modern = new URL('https://example.com?id=5');
console.log(modern.searchParams.get('id')); // 5

4️⃣ How do you extract query parameters from a URL?

Answer:
Use searchParams.get() or loop over searchParams.

const { URL } = require('url');
const myUrl = new URL('https://example.com/user?name=jugal&id=101');
console.log(myUrl.searchParams.get('name')); // jugal
console.log(myUrl.searchParams.get('id'));   // 101

// Loop through all
for (const [key, value] of myUrl.searchParams) {
  console.log(key, value);
}

5️⃣ How can you modify or add query parameters in a URL?

Answer:
Use searchParams.set() or append().

const { URL } = require('url');
const myUrl = new URL('https://example.com?user=jugal');
myUrl.searchParams.set('page', '2');
myUrl.searchParams.append('mode', 'dark');
console.log(myUrl.href);
// https://example.com/?user=jugal&page=2&mode=dark

6️⃣ How do you resolve relative URLs using the url module?

Answer:
Use url.resolve(base, relative) (legacy method).

const { resolve } = require('url');
console.log(resolve('https://example.com/home/', '../about'));
// Output: https://example.com/about


✅ In modern JavaScript, you can simply do:

new URL('../about', 'https://example.com/home/');

7️⃣ How do you use the url module with Node.js http server?

Answer:
You can parse incoming request URLs manually.

const http = require('http');
const { URL } = require('url');

http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  console.log(myUrl.pathname); // e.g., /api
  console.log(myUrl.searchParams.get('id')); // query param
  res.end('URL parsed successfully');
}).listen(3000);

8️⃣ What are the key properties of the URL object?

| Property       | Description            | Example                              |
| -------------- | ---------------------- | ------------------------------------ |
| `href`         | Full URL               | `https://example.com:8080/user?id=1` |
| `protocol`     | Protocol (scheme)      | `https:`                             |
| `hostname`     | Domain only            | `example.com`                        |
| `port`         | Port number            | `8080`                               |
| `pathname`     | Path after domain      | `/user`                              |
| `search`       | Query string           | `?id=1`                              |
| `searchParams` | Query parameter object | `URLSearchParams`                    |
| `hash`         | Fragment               | `#top`                               |


9️⃣ How do you handle URL encoding and decoding in Node.js?

Answer:
You can use global functions:

const original = 'https://example.com/?name=Jugal Sharma';
const encoded = encodeURI(original);
const decoded = decodeURI(encoded);
console.log(encoded); // https://example.com/?name=Jugal%20Sharma
console.log(decoded); // https://example.com/?name=Jugal Sharma

🔟 Difference Between encodeURI() and encodeURIComponent()


| Function               | Use Case                                | Example                                                 |
| ---------------------- | --------------------------------------- | ------------------------------------------------------- |
| `encodeURI()`          | Encodes full URLs (keeps `: / ? # & =`) | `encodeURI('https://a.com/?name=jugal sharma')`         |
| `encodeURIComponent()` | Encodes individual query parameters     | `encodeURIComponent('jugal sharma')` → `jugal%20sharma` |




Bonus (Advanced): How do you parse query strings manually (without url module)?

You can use the querystring module:

const querystring = require('querystring');

const query = 'id=101&name=jugal&city=delhi';
const result = querystring.parse(query);
console.log(result); // { id: '101', name: 'jugal', city: 'delhi' }

🎯 Quick Recap

| Question                | Key Concept                            |
| ----------------------- | -------------------------------------- |
| What is `url` module?   | Parsing, building, resolving URLs      |
| Modern vs Legacy?       | `new URL()` vs `url.parse()`           |
| Extract query params?   | `searchParams.get()`                   |
| Modify URL?             | `searchParams.set()`                   |
| Work with HTTP server?  | `new URL(req.url, base)`               |
| Resolve relative paths? | `url.resolve()`                        |
| Encoding/Decoding?      | `encodeURI()` / `encodeURIComponent()` |





