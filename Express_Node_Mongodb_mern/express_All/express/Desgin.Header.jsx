🎯 ASCII Diagram: Response Headers Flow
 SERVER
   │
   │  Response Headers
   ▼
    ┌─────────────────────────────────┐
    │   HTTP/1.1 200 OK               │
    │   Content-Type: application/json│
    │   Content-Length: 123           │
    │   Set-Cookie: session=abcd      │
    │   Cache-Control: no-cache       │
    └─────────────────────────────────┘
   │
   ▼
 CLIENT receives headers + body

----------------------------------------------------------
🔥 Full Client ↔ Server Header Flow (Full Diagram)
                      CLIENT → SERVER
      ┌──────────────────────────────────────────┐
      │               REQUEST HEADERS            │
      │  Host, User-Agent, Accept, Cookie, Auth │
      └──────────────────────────────────────────┘
                         │
                         ▼
                      SERVER
                         │
                         ▼
     ┌──────────────────────────────────────────┐
     │               RESPONSE HEADERS           │
     │  Content-Type, Set-Cookie, CORS, Cache   │
     └──────────────────────────────────────────┘
                      SERVER → CLIENT

⭐ Simple Definition (Interview Answer)
✔ Request Headers:

Information sent by client to server about the request (type, auth, metadata).

✔ Response Headers:

Information sent by server to client about the response (type, cookies, caching, status).