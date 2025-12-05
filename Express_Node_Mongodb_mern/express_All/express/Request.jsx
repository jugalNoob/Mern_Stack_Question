1️⃣ HTTP Request Object (req)

The request object contains information about the HTTP request sent by the client.

Common Propert


| Property          | Description                                       |
| ----------------- | ------------------------------------------------- |
| `req.params`      | Route parameters (e.g., `/users/:id`)             |
| `req.query`       | Query string parameters (e.g., `/search?q=value`) |
| `req.body`        | Data sent in the request body (POST/PUT/PATCH)    |
| `req.headers`     | Object containing request headers                 |
| `req.method`      | HTTP method used (GET, POST, etc.)                |
| `req.url`         | Full URL of the request                           |
| `req.path`        | Path part of the URL (`/users/1`)                 |
| `req.hostname`    | Hostname of the request                           |
| `req.protocol`    | Protocol used (`http` or `https`)                 |
| `req.cookies`     | Cookies sent with the request                     |
| `req.ip`          | Client IP address                                 |
| `req.originalUrl` | Original URL before any routing                   |
| `req.secure`      | `true` if HTTPS, else `false`                     |
