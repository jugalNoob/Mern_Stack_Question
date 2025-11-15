⚙️ What It Is

The querystring module in Node.js provides utility methods to work with URL query strings — converting between strings and objects.

It is mainly used in pure Node.js HTTP servers (without Express), to parse or format URL parameters.

You can load it as:

const querystring = require('querystring');

🧠 1️⃣ querystring.decode()

🔹 What it does:
decode() is an alias for querystring.parse().
It converts a URL query string into a JavaScript object.

📘 Example Conceptually:
"name=jugal&age=25" → becomes { name: 'jugal', age: '25' }

💡 Use Case:
When you receive a URL like
/user?name=jugal&age=25
you decode it into an object for easy access.

🧠 2️⃣ querystring.encode()

🔹 What it does:
encode() is an alias for querystring.stringify().
It converts a JavaScript object into a query string.

📘 Concept:
{ name: 'jugal', age: 25 } → becomes "name=jugal&age=25"

💡 Use Case:
When you want to create a query string to attach to a URL before making an API request.

🧠 3️⃣ querystring.escape(str)

🔹 What it does:
Encodes (escapes) special characters in a string for safe use in URLs.
For example, spaces, &, =, etc., get converted to percent-encoded values.

📘 Concept:
"a b" → "a%20b"

💡 Use Case:
Before sending data like names, addresses, or search text in URLs — prevents breaking the URL format.

🧠 4️⃣ querystring.parse(str[, sep[, eq[, options]]])

🔹 What it does:
Converts a query string (like a=1&b=2) into a JavaScript object.
You can also define custom separators:

sep = separates key-value pairs (default: &)

eq = separates keys from values (default: =)

📘 Concept:
Input → "a=1&b=2"
Output → { a: '1', b: '2' }

💡 Use Case:
When reading the query part of a URL from an HTTP request.

🧠 5️⃣ querystring.stringify(obj[, sep[, eq[, options]]])

🔹 What it does:
Converts an object into a query string.
You can customize how key-value pairs are joined.

sep = separates pairs (default: &)

eq = separates key and value (default: =)

📘 Concept:
Input → { a: 1, b: 2 }
Output → "a=1&b=2"

💡 Use Case:
When building API URLs like:
/api/products?category=laptop&brand=dell

🧠 6️⃣ querystring.unescape(str)

🔹 What it does:
Decodes (unescapes) percent-encoded characters back to normal text.
It’s the reverse of escape().

📘 Concept:
"a%20b" → "a b"

💡 Use Case:
When you receive encoded data in URLs and need to show it in readable form.

📦 Summary Table



| Function                                 | Purpose                    | Converts                | Use Case                 |
| ---------------------------------------- | -------------------------- | ----------------------- | ------------------------ |
| `decode()`                               | Alias for `parse()`        | Query string → Object   | Parse URL parameters     |
| `encode()`                               | Alias for `stringify()`    | Object → Query string   | Build URLs for API calls |
| `escape(str)`                            | Escapes special chars      | String → Encoded string | Make data URL-safe       |
| `parse(str[, sep[, eq[, options]]])`     | Parse custom query formats | String → Object         | Extract parameters       |
| `stringify(obj[, sep[, eq[, options]]])` | Format query string        | Object → String         | Append params to URLs    |
| `unescape(str)`                          | Unescapes encoded chars    | Encoded string → Normal | Decode readable text     |



🌍 Real-World Use Cases


| Scenario                            | How `querystring` helps                             |
| ----------------------------------- | --------------------------------------------------- |
| **1. Manual URL parameter parsing** | Read raw query strings from HTTP requests           |
| **2. Building URLs dynamically**    | Add query parameters to API or redirect URLs        |
| **3. Safe URL handling**            | Escape user input to avoid breaking URLs            |
| **4. Data encoding for APIs**       | Prepare structured data for external GET requests   |
| **5. Legacy systems**               | Still used in older Node.js servers without Express |



⚡ Modern Alternative

In modern Node.js, it’s recommended to use:

new URL()

URLSearchParams

They are more powerful, built-in, and follow browser standards.
However, querystring is still useful for legacy codebases and low-level HTTP servers.

💡 Interview Tips

Q: Why use querystring when Express has req.query?
A: Express internally uses URL parsing (not querystring) — but in core Node.js (without Express), you need querystring to handle raw query data.

Q: What’s the difference between querystring and URLSearchParams?
A: querystring is older and simpler; URLSearchParams is modern, standard, and supports iteration and encoding automatically.

Q: Where is querystring.escape() used?
A: To encode unsafe characters like spaces or special symbols when sending URLs or search terms.





🧩 What is a Query String in Node.js?

A query string is the part of a URL that contains key–value pairs sent to the server — usually used to pass parameters or filters in GET requests.

It starts after the ? in a URL and uses & to separate multiple parameters.

🧠 Example
https://example.com/products?category=books&price=low


Base URL: https://example.com/products

Query string: ?category=books&price=low

Parsed key-values:

category = "books"

price = "low"

⚙️ In Node.js, there are 2 main ways to work with query strings
1️⃣ Using the built-in querystring module
2️⃣ Using the URL and URLSearchParams classes (modern way)
🧠 1️⃣ Using the querystring module

It’s a core Node.js module that helps parse and format query strings easily.


| Method                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `querystring.parse()`     | Converts query string → JavaScript object |
| `querystring.stringify()` | Converts object → query string            |
| `querystring.escape()`    | Escapes special characters                |
| `querystring.unescape()`  | Unescapes encoded characters              |



Use Case:
When you need to manually handle query parameters in Node.js (without Express).

🧠 2️⃣ Using the URL & URLSearchParams classes (recommended)

Modern Node.js (v10+) includes a URL class that makes parsing easier and safer.

Use Case:
When you want to extract or modify query parameters from full URLs.

🌍 Real-World Use Cases of Query Strings


| Use Case                    | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| **1. Filtering API Data**   | `/products?category=books&price=low` — filter products by type and price. |
| **2. Pagination**           | `/users?page=2&limit=10` — load paginated results.                        |
| **3. Search Queries**       | `/search?q=nodejs` — send search text from frontend to backend.           |
| **4. Authentication Links** | `/verify?token=abc123` — verify email or password reset links.            |
| **5. Sorting Results**      | `/products?sort=price&order=asc` — sort items dynamically.                |




🧩 Where Query Strings are Used in Node.js Apps

HTTP server (core http module):

Parse query parameters manually using url.parse() and querystring.parse().

Express.js apps:

Access directly via req.query, e.g. req.query.name or req.query.page.

External APIs:

When sending GET requests with axios, fetch, or http.get().

Microservices or internal APIs:

Pass parameters between internal service endpoints.

⚡ Real Example Scenarios (Conceptual, No Code)
🔹 1️⃣ Pagination

A frontend sends a request:

GET /users?page=3&limit=20


Backend reads page and limit to return only the 3rd page of 20 users.

🔹 2️⃣ Filter Products
GET /products?category=laptops&brand=dell&price=medium


Server filters the database based on these query parameters.

🔹 3️⃣ Email Verification Link
https://myapp.com/verify?token=abc123xyz


Server extracts the token and verifies the user’s email.

🔹 4️⃣ Search Feature
GET /search?q=javascript+books


Backend fetches results containing “javascript books” from the database.

🔹 5️⃣ Dynamic Sorting
GET /items?sort=rating&order=desc


Server sorts results by rating in descending order.

🧾 Summary Table


| Concept                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| **What**               | Part of the URL containing key-value parameters       |
| **Start Symbol**       | Begins with `?`                                       |
| **Separator**          | Pairs separated by `&`                                |
| **Used In**            | GET requests, API filters, search queries, pagination |
| **Modules**            | `querystring`, `URL`, `URLSearchParams`               |
| **Framework Shortcut** | `req.query` in Express.js                             |



💡 Interview Tip

If the interviewer asks:
“How do you handle query parameters in Node.js?”
You can answer:
“In pure Node.js, I use the querystring or URLSearchParams modules.
In Express.js, I use req.query to access query parameters directly.”


