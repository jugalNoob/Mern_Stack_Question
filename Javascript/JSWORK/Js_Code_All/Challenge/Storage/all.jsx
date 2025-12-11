1️⃣ Cookies
What are they?

Small pieces of data stored in the browser.

Sent automatically with every HTTP request to the server.

Characteristics:


| Feature           | Details                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Storage location  | Browser (key-value)                                                                      |
| Size limit        | ~4KB per cookie                                                                          |
| Accessible by     | Client (JS via `document.cookie`) & Server (HTTP headers)                                |
| Expiry            | Can be **session** (deleted on browser close) or **persistent** (expires after set date) |
| Sent with request | Yes, automatically with every HTTP request                                               |


Use cases:

Authentication tokens (small)

Session tracking


2️⃣ Local Storage
What is it?

Part of Web Storage API.

Stores key-value pairs in browser storage.

Persistent: survives page reloads and browser restarts.

Characteristics:

| Feature           | Details                             |
| ----------------- | ----------------------------------- |
| Storage limit     | ~5-10MB per origin                  |
| Accessible by     | JS only (`window.localStorage`)     |
| Lifetime          | Persistent until explicitly cleared |
| Synchronous?      | Yes                                 |
| Sent with request | No                                  |

// Set item
localStorage.setItem("name", "Jugal");

// Get item
console.log(localStorage.getItem("name")); // "Jugal"

// Remove item
localStorage.removeItem("name");

// Clear all
localStorage.clear();


Use cases:

Saving user preferences

Theme, language selection

Offline data caching

3️⃣ Session Storage
What is it?

Similar to Local Storage, but lifetime is limited to the browser tab session.

Data deleted when tab closes.


| Feature           | Details                           |
| ----------------- | --------------------------------- |
| Storage limit     | ~5MB per origin                   |
| Accessible by     | JS only (`window.sessionStorage`) |
| Lifetime          | Only for **current tab session**  |
| Synchronous?      | Yes                               |
| Sent with request | No                                |


Use cases:

Temporary form data

Session-specific state

Multi-tab independent sessions

4️⃣ IndexedDB
What is it?

Client-side database in the browser.

Stores structured data, including objects, blobs, and files.

Asynchronous and more powerful than Local Storage.


| Feature          | Details                              |
| ---------------- | ------------------------------------ |
| Storage limit    | Hundreds of MBs (depends on browser) |
| Accessible by    | JS (`window.indexedDB`)              |
| Lifetime         | Persistent until cleared             |
| Data type        | Key-value or object stores           |
| Async operations | Yes (Promise or event-based)         |



Example:
let request = indexedDB.open("MyDB", 1);
request.onsuccess = (event) => {
    let db = event.target.result;
    console.log("DB opened:", db);
};

Use cases:

Offline-first web apps

Storing large files or images

Complex structured data

5️⃣ Cache Storage (Service Workers)
What is it?

Part of Progressive Web Apps (PWA).

Stores responses and resources (HTML, CSS, JS, images) for offline use.

Managed via Service Workers.

Example:
caches.open("my-cache").then(cache => {
  cache.addAll(["index.html", "style.css", "script.js"]);
});

Use cases:

Offline apps

Fast resource loading

Network request caching

6️⃣ Web SQL (Deprecated)

SQL-based browser database.

Deprecated, not recommended for new apps.

Use IndexedDB instead.

7️⃣ File System Access / Storage API (Experimental)

Lets web apps read/write files directly on user system (with permission).

Limited support.

Example: Chrome apps, PWA with file access.


| Storage Type         | Size Limit | Persistence      | Accessible by | Sent with HTTP |
| -------------------- | ---------- | ---------------- | ------------- | -------------- |
| Cookies              | ~4KB       | Until expiry     | JS + server   | Yes            |
| Local Storage        | 5-10MB     | Persistent       | JS only       | No             |
| Session Storage      | 5MB        | Session tab only | JS only       | No             |
| IndexedDB            | 100s MB    | Persistent       | JS only       | No             |
| Cache Storage        | Depends    | Persistent       | JS via SW     | No             |
| Web SQL (deprecated) | ~5MB       | Persistent       | JS only       | No             |



⚡ Key Notes

Cookies → small, sent with every HTTP request → good for auth/session

LocalStorage → simple key-value, persistent → good for preferences

SessionStorage → tab-only → good for temporary session data

IndexedDB → large structured data → good for offline apps, caching complex data

Cache Storage → resource caching for PWAs

Web SQL → deprecated, don’t use