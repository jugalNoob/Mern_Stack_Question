Perfect 👍 You want a clear list of HTTP status codes that Express uses (since Express just sends standard HTTP codes).

Here’s the breakdown ⬇️

📌 Types of HTTP Status Codes in Express.js

Express.js doesn’t create new codes; it uses standard HTTP status codes.
They are grouped into 5 categories:

🔹 1xx – Informational

➡️ Request received, still processing.

100 Continue – Client can continue request.

101 Switching Protocols – Server switching protocol (e.g. WebSocket upgrade).

🔹 2xx – Success

➡️ Request was successful.

200 OK – Success (GET, POST, PUT, DELETE).

201 Created – New resource created (e.g. user registered).

202 Accepted – Request accepted, processing later (async).

204 No Content – Success, but no response body (e.g. delete).

🔹 3xx – Redirection

➡️ Further action needed, resource moved.

301 Moved Permanently – Resource moved forever.

302 Found – Temporary redirect.

304 Not Modified – Cached resource is still valid.

🔹 4xx – Client Errors

➡️ Problem with client’s request.

400 Bad Request – Invalid request (missing fields, bad JSON).

401 Unauthorized – No/invalid authentication.

403 Forbidden – Authenticated but no permission.

404 Not Found – Resource doesn’t exist.

405 Method Not Allowed – Wrong HTTP method used.

409 Conflict – Resource conflict (e.g. duplicate email).

422 Unprocessable Entity – Validation failed.

🔹 5xx – Server Errors

➡️ Problem on server side.

500 Internal Server Error – General server crash/bug.

502 Bad Gateway – Server got invalid response from upstream.

503 Service Unavailable – Server overloaded or down for maintenance.

504 Gateway Timeout – Upstream server didn’t respond in time.