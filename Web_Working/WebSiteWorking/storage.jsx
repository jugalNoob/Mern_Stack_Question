📌 Interview-ready Summary Table


| Storage Type        | Size Limit | Expiry       | Access Scope   | Security Risk | Use Case          |
| ------------------- | ---------- | ------------ | -------------- | ------------- | ----------------- |
| Local Storage       | \~5-10MB   | None         | Per origin     | XSS           | Preferences, cart |
| Session Storage     | \~5MB      | On tab close | Per tab        | XSS           | Multi-step forms  |
| Cookies             | 4KB        | Configurable | Sent to server | XSS, CSRF     | Sessions, auth    |
| IndexedDB           | 50MB+      | None         | Per origin     | XSS           | Offline apps      |
| Cache Storage       | Large      | None/manual  | Per origin     | XSS           | PWA caching       |
| WebSQL (deprecated) | —          | —            | Per origin     | XSS           | Legacy apps       |



1. Local Storage
What it is:

Persistent key-value storage in the browser.

Data is stored with no expiration and survives page reloads and browser restarts.

API Example:



// Store
localStorage.setItem("username", "Jugal");

// Retrieve
let user = localStorage.getItem("username");

// Remove
localStorage.removeItem("username");

// Clear all
localStorage.clear();



Use Cases:

Remembering theme settings

Saving cart items for logged-out users

Caching small static data

Security Implications:

Data is stored in plain text, accessible via JavaScript.

Vulnerable to XSS attacks (if attacker injects JS, they can read it).

Should never store sensitive information (passwords, tokens).




Use Cases:

Multi-step forms

Storing temporary authentication steps

Per-tab UI state

Security Implications:

Same XSS vulnerability as Local Storage

Safer for temporary states (reduces long-term exposure risk)



3. Cookies
What it is:

Small data (≤ 4KB) sent with every HTTP request.

Can have expiration dates, be HTTP-only, and Secure.

API Example:

javascript
Copy
Edit
// Set cookie
document.cookie = "theme=dark; path=/; max-age=3600; Secure; SameSite=Strict";

// Read cookies
console.log(document.cookie);
Use Cases:

Session management (session_id)

Authentication tokens

Remembering user preferences (language, theme)

Security Implications:

Can be HttpOnly (not accessible via JS → protects from XSS)

Without Secure, can be stolen over HTTP

Without SameSite, can be sent in CSRF attacks

4. IndexedDB
What it is:

Low-level API for storing large amounts of structured data.

Asynchronous, indexed storage — can store files/blobs.

API Example:

javascript
Copy
Edit
let request = indexedDB.open("MyDB", 1);
request.onsuccess = function (event) {
    let db = event.target.result;
    console.log("DB ready:", db);
};
Use Cases:

Offline-first apps (e.g., Progressive Web Apps)

Caching large datasets

Storing images, videos, or complex objects

Security Implications:

Data still accessible by JS (vulnerable to XSS)

Encrypted at rest by browser (but not by app)

5. Cache Storage (Service Workers)
What it is:

Stores HTTP responses (HTML, CSS, JS, images) for offline or faster load times.

API Example:

javascript
Copy
Edit
caches.open("v1").then(cache => {
    cache.add("/offline.html");
});
Use Cases:

Offline fallback pages

Static asset caching for performance

Progressive Web App offline mode

Security Implications:

Not directly accessible by other domains

Must handle cache invalidation to avoid stale/unsafe data

6. WebSQL (Deprecated)


SQL-like storage in browser.

Replaced by IndexedDB.