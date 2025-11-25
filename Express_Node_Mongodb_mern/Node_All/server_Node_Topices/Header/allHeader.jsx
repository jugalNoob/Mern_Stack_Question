✅ Complete List of 60+ HTTP Request Headers

(🔥 Categorized for easy learning)

1️⃣ General Request Headers

| Header            | Meaning                                      |
| ----------------- | -------------------------------------------- |
| Cache-Control     | Client caching rules                         |
| Connection        | `keep-alive` or `close`                      |
| Date              | Request timestamp                            |
| Pragma            | Legacy cache control                         |
| Trailer           | Specifies trailer fields in chunked requests |
| Transfer-Encoding | `chunked`, `gzip`, etc.                      |
| Upgrade           | Request to switch protocols                  |
| Via               | Proxy or gateway info                        |
| Warning           | Cache/cache freshness warnings               |



2️⃣ Request Control / Targeting Headers

| Header        | Meaning                                 |
| ------------- | --------------------------------------- |
| Host          | Requested domain                        |
| Range         | Request partial response                |
| If-Range      | Partial response only if entity matches |
| Accept-Ranges | Accepted range types                    |
| TE            | Transfer encodings accepted             |


3️⃣ Content / Body Headers

| Header           | Meaning                                       |
| ---------------- | --------------------------------------------- |
| Content-Type     | Body format (`application/json`, `form-data`) |
| Content-Length   | Body size in bytes                            |
| Content-Encoding | Compression type (`gzip`, `br`)               |
| Content-Language | Language of body (rare in requests)           |
| Content-Location | Alternate location for returned data          |
| Content-MD5      | MD5 hash for body integrity                   |
| Content-Range    | Partial content position (rare in requests)   |



4️⃣ Conditional Request Headers

| Header              | Meaning                                        |
| ------------------- | ---------------------------------------------- |
| If-Match            | Process only if ETag matches                   |
| If-None-Match       | Process only if ETag DOES NOT match            |
| If-Modified-Since   | Only if resource is newer                      |
| If-Unmodified-Since | Only if not modified                           |
| If-Range            | Return full or partial based on resource state |



5️⃣ Authentication / Authorization Headers

| Header              | Meaning                                        |
| ------------------- | ---------------------------------------------- |
| Authorization       | Bearer/JWT/Basic token                         |
| Proxy-Authorization | Auth for proxy                                 |
| WWW-Authenticate    | Server tells client what auth method is needed |


6️⃣ Cookie & Session Headers

| Header               | Meaning           |
| -------------------- | ----------------- |
| Cookie               | Client cookies    |
| Cookie2 (deprecated) | Old cookie header |


7️⃣ Security Headers
| Header                   | Meaning                                    |
| ------------------------ | ------------------------------------------ |
| Origin                   | Source domain (important for CORS)         |
| Referer                  | Page that sent the request                 |
| DNT                      | Do Not Track preference                    |
| Sec-Fetch-Site           | same-origin / cross-site                   |
| Sec-Fetch-Mode           | cors / navigate / no-cors                  |
| Sec-Fetch-User           | ?1 when triggered by user                  |
| Sec-Fetch-Dest           | destination type (image, script, document) |
| Sec-WebSocket-Key        | WS handshake                               |
| Sec-WebSocket-Version    | WS version                                 |
| Sec-WebSocket-Protocol   | WS protocols                               |
| Sec-WebSocket-Extensions | WS extensions                              |



8️⃣ CORS (Cross-Origin) Request Headers

| Header                         | Meaning                            |
| ------------------------------ | ---------------------------------- |
| Access-Control-Request-Method  | Preflight requested method         |
| Access-Control-Request-Headers | Preflight requested custom headers |


9️⃣ Client Identification Headers

| Header            | Meaning                         |
| ----------------- | ------------------------------- |
| User-Agent        | Browser/device identifier       |
| X-Forwarded-For   | Client IP (proxy/load balancer) |
| X-Forwarded-Host  | Host (via proxy)                |
| X-Forwarded-Proto | http/https                      |
| X-Real-IP         | Actual client IP                |
| X-Request-ID      | Unique request ID (logging)     |
| X-Client-Data     | Chrome client data              |
| From              | Email of user agent robot       |
| Max-Forwards      | For `TRACE` requests            |


🔟 Accept Headers (Client Preference)

| Header          | Meaning                                        |
| --------------- | ---------------------------------------------- |
| Accept          | MIME types accepted (`application/json`, etc.) |
| Accept-Charset  | Allowed charsets                               |
| Accept-Encoding | Compression accepted (`gzip`, `br`)            |
| Accept-Language | Languages accepted (`en-US`, `hi-IN`)          |



1️⃣1️⃣ Deprecated but still seen

| Header           | Meaning                       |
| ---------------- | ----------------------------- |
| X-Powered-By     | Framework used (Express, PHP) |
| X-Requested-With | AJAX request identifier       |
| X-Do-Not-Track   | Old DNT version               |
| Keep-Alive       | Connection persistence        |
| Proxy-Connection | Non-standard                  |



1️⃣2️⃣ Web Push / Service Worker Headers

| Header                            | Meaning                           |
| --------------------------------- | --------------------------------- |
| Save-Data                         | Ask server for low-data responses |
| Service-Worker-Navigation-Preload | SW preload requests               |


✔ Total count: 65+ request headers
⭐ Want this in a printable PDF?

I can generate:

✔ Full table

✔ Descriptions

✔ Code examples

✔ Real-world usage (Node.js + Express + JWT + CORS)

Just say “PDF yes” and I’ll generate it.