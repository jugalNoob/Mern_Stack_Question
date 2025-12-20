🌐 URL Class Interview Questions
1️⃣ What is the URL class in Node.js?

Answer:

A built-in global class that allows you to parse, read, and modify URLs easily.
Returns a URL object with properties like hostname, pathname, searchParams, etc.

2️⃣ How do you create a URL object?
const myUrl = new URL('https://example.com/path?query=1#hash')


Optional second argument: base URL for relative URLs.

3️⃣ How do you get the path from a URL?
myUrl.pathname // "/path"


pathname = path after domain, without query or hash.

4️⃣ How do you get query parameters?
myUrl.searchParams.get('query') // "1"


.searchParams → returns a URLSearchParams object

Can also append, delete, or iterate.

5️⃣ Difference between host, hostname, and origin?


| Property   | Example                                                | Description              |
| ---------- | ------------------------------------------------------ | ------------------------ |
| `hostname` | "example.com"                                          | Domain only              |
| `host`     | "example.com:8080"                                     | Domain + port            |
| `origin`   | "[https://example.com:8080](https://example.com:8080)" | Protocol + domain + port |


6️⃣ How do you modify a URL?
myUrl.pathname = '/new/path'
myUrl.search = '?a=1'
myUrl.hash = '#section'


The href property updates automatically.

7️⃣ How do you serialize multiple URLs into JSON?

Trap: JSON.stringify directly on URL objects gives {}.

const urls = [new URL('https://a.com'), new URL('https://b.com')]
JSON.stringify(urls.map(url => url.href)) 
// ["https://a.com","https://b.com"]

8️⃣ Difference between URL and url.parse()?
Feature	URL	url.parse()


| Feature     | `URL`                  | `url.parse()`            |
| ----------- | ---------------------- | ------------------------ |
| Modern      | ✅                      | ❌ Legacy                 |
| Base URL    | ✅ Supports             | ❌ Needs manual handling  |
| QueryParams | `.searchParams` object | Returns query string     |
| Safety      | ✅ Throws on invalid    | ❌ Returns partial result |




9️⃣ How do you get username and password from a URL?
const u = new URL('https://user:pass@example.com')
console.log(u.username) // "user"
console.log(u.password) // "pass"

🔟 Common Interview Traps

JSON.stringify on URL object → {}

Use .href to serialize.

Confusing host vs hostname

host includes port.

req.url vs URL class

req.url is string, may need base URL to create URL object.

Query parameters are not strings

Use .searchParams.get('key') instead of splitting manually.

If you want next 🔥
➡️ Node.js HTTP + URL query parsing system design
➡️ Dynamic routing using URL class
➡️ Multiple user URL array parsing + JSON

Do you want me to make a multiple user URL parsing example next?

what is url in  interveiw question

Got it! Here’s a clear interview-ready answer for “What is URL?” in Node.js or general web development interviews.

🌐 What is a URL?

URL stands for Uniform Resource Locator.

It is a string that specifies the address of a resource on the web,
 including the protocol, domain, port, path, query parameters, and fragment.

🔹 Components of a URL

Example URL:

https://user:pass@sub.example.com:8080/path/to/page?name=jugal&age=25#section



| Component     | Example                        | Description                   |
| ------------- | ------------------------------ | ----------------------------- |
| Protocol      | `https:`                       | The scheme (http, https, ftp) |
| Username      | `user`                         | Optional, for authentication  |
| Password      | `pass`                         | Optional, for authentication  |
| Hostname      | `sub.example.com`              | Domain name only              |
| Port          | `8080`                         | Optional port number          |
| Pathname      | `/path/to/page`                | Path after domain             |
| Query         | `?name=jugal&age=25`           | Query string parameters       |
| Fragment/Hash | `#section`                     | Location within the page      |
| Origin        | `https://sub.example.com:8080` | Protocol + hostname + port    |


🌐 URL vs URI vs URN
1️⃣ URI – Uniform Resource Identifier

Definition:

A URI is a generic identifier of a resource. It can identify a resource by location, name, or both.

Syntax:

scheme:[//authority]path[?query][#fragment]


Examples:

https://example.com/path          // URI
urn:isbn:0451450523              // URI
mailto:someone@example.com       // URI


✅ Key point: All URLs and URNs are URIs.

2️⃣ URL – Uniform Resource Locator

Definition:

A URL is a type of URI that provides the location of the resource on the web (how to access it).

Example:

https://www.example.com:8080/path?query=1#section


Components:

Protocol: https://

Hostname: www.example.com

Port: 8080

Path: /path

Query: ?query=1

Fragment: #section

✅ Key point: URL is a locator – tells where and how to access a resource.

3️⃣ URN – Uniform Resource Name

Definition:

A URN is a type of URI that names a resource without specifying its location.

Example:

urn:isbn:0451450523


Identifies a book by ISBN

Location is not included

✅ Key point: URN is a name, not a locator.

4️⃣ Summary Table

| Type | Purpose             | Example                      | Notes                 |
| ---- | ------------------- | ---------------------------- | --------------------- |
| URI  | Identify a resource | `mailto:someone@example.com` | Generic identifier    |
| URL  | Identify + locate   | `https://example.com/path`   | Location on the web   |
| URN  | Name a resource     | `urn:isbn:0451450523`        | Location not included |



5️⃣ Node.js Interview Angle

Use URL class to parse URLs (req.url)

URI concept is theoretical – helps understand REST and web standards

URN rarely used in practice but could appear in APIs (ISBN, UUID, etc.)

🔥 Interview One-Liner

URI is the generic identifier, URL is the locator of a resource, and URN is a name without location. All URLs and URNs are URIs, but not all URIs are URLs.

If you want next 🔥
➡️ Practical Node.js example: parsing multiple user URLs
➡️ Query parameter handling using URL class
➡️ Dynamic routing using URLs

Do you want me to show parsing multiple user URLs in Node.js next?