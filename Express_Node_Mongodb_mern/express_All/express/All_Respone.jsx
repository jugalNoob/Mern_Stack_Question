1️⃣ Fetch API (Client-Side)

fetch() is used to make HTTP requests in modern JavaScript.

fetch('/data.json')
  .then(res => {
    res.text()       // Returns response body as string (Promise)
    res.json()       // Parses response as JSON (Promise)
    res.status       // HTTP status code, e.g., 200
    res.statusText   // Status text, e.g., 'OK'
    res.redirected   // true if response was redirected
    res.ok           // true if status is 200–299
    res.url          // Full URL of the response
    res.type         // Response type: 'basic', 'cors', 'default', 'error', 'opaque', 'opaqueredirect'
    
    res.headers.get('Content-Type') // Access a specific header
  })

🔹 Key Points

res.text() → returns raw text

res.json() → parses JSON automatically

res.status & res.ok → check success/failure

res.headers.get('Content-Type') → useful for determining response type

2️⃣ Express Response Methods (Server-Side)

Express has many helper methods to send responses:

a) res.send()

Sends string, HTML, buffer, or JSON

res.send('Hello, world!');
res.send('<h1>Hello, world!</h1>');

b) res.json()

Sends JSON response automatically sets Content-Type: application/json

res.json({ message: 'Hello, world!' });

c) res.redirect()

Redirects client to a new URL

res.redirect('/new-url');

d) res.download()

Sends a file for download

res.download('/path/to/file.pdf');                       // default filename
res.download('./file.pdf', 'user-facing-filename.pdf');  // custom filename
res.download('./file.pdf', 'user-facing-filename.pdf', (err) => {
  if (err) {
    // handle error
  } else {
    // success callback
  }
});

🔹 Key Notes

res.send() → generic, can send text, HTML, or JSON (but JSON is better with res.json())

res.json() → automatically stringifies objects to JSON

res.redirect() → for HTTP redirects (302 by default)

res.download() → for sending files as attachment

🔹 How Fetch & Express Work Together

Client calls fetch('/data.json')

Server responds:

res.json({ message: 'Hello' }); 
// or res.send('<h1>Hello</h1>')


Client can access the response:

fetch('/data.json')
  .then(res => res.json())
  .then(data => console.log(data.message)); // "Hello"