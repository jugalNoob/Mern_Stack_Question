✅ What is CORS (Cross-Origin Resource Sharing)?

CORS is a security rule in the browser.

It decides whether a web page is allowed to request data from another domain or not.

🔥 Simple Explanation
✔️ Step 1 — Client sends a request

When your frontend (React, Angular, HTML, etc.) sends a request to an API:

Example:
Frontend: http://localhost:3000
Backend: http://localhost:5000

These are different origins (different ports → different domain in browser security).

✔️ Step 2 — Browser checks CORS

Before giving the request to your backend, the browser stops and asks:

“Hey server! Do you allow this domain (http://localhost:3000) to access your data?”


    This step is called Preflight Request
It is an HTTP request with method OPTIONS

✔️ Step 3 — Server responds

The server must reply with headers like:

Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type


✔️ Step 4 — If OK → browser allows response

If the server sends correct CORS headers:

➡️ Browser gives the data to your frontend.

❌ If NOT OK

If the backend does NOT send correct CORS headers:

➡️ Browser blocks the response
➡️ Even if your server responded correctly
➡️ Browser will not show it to your frontend
➡️ You see CORS error in console

🧠 Very Short Formula

✔ Frontend sends request
✔ Browser checks origin and sends preflight OPTIONS request
✔ Server must allow that domain using CORS headers
✔ If allowed → browser delivers response
✔ If not → CORS error

🧒 Super Simple Example

Imagine your server is a house.
Your browser is a security guard.

Person from another colony (other domain) wants to enter.

The guard asks the house owner:

"Do you allow people from this colony?"

If owner says YES → person enters.
If owner says NO → guard blocks them.

This is CORS.



import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/", (req, res) => {
  res.send("CORS working!");
});

app.listen(5000, () => console.log("Server running"));
