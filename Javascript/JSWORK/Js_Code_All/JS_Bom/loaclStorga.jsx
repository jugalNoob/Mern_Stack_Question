

🔹 1. localStorage

Stores data as key-value pairs in string format.

Persistent → data stays even after closing the browser.

Capacity: ~5–10 MB (depends on browser).

// Save
localStorage.setItem("name", "Jugal");

// Get
console.log(localStorage.getItem("name")); // "Jugal"

// Remove one item
localStorage.removeItem("name");

// Clear all
localStorage.clear();




🔹 2. sessionStorage

Similar to localStorage, but only for the current tab/session.

Data is cleared when tab/window is closed.

Capacity: ~5 MB.

sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));
sessionStorage.removeItem("token");
sessionStorage.clear();




🔹 3. Cookies

Oldest storage mechanism.

Sent automatically with every HTTP request.

Small size (4 KB).

Can have expiry date (persistent) or session-based.

// Set cookie
document.cookie = "user=Jugal; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Read cookies
console.log(document.cookie);





🔹 4. IndexedDB

A NoSQL database inside the browser.

Stores structured data (objects, files, blobs).

Very large capacity (hundreds of MB).

Asynchronous API.

let request = indexedDB.open("MyDatabase", 1);

request.onsuccess = function (event) {
  console.log("Database opened:", event.target.result);
};

request.onerror = function (event) {
  console.error("Database error:", event.target.error);
};


✅ Best for offline apps, large data, caching API responses.

🔹 5. Cache Storage (Service Workers)

Part of Progressive Web Apps (PWA).

Used to store HTTP responses, assets, APIs for offline usage.

caches.open("my-cache").then(cache => {
  cache.add("/index.html");
});


✅ Best for offline-first web apps.

🔹 6. WebSQL (Deprecated 🚨)

SQL-based storage.

Removed from modern browsers.

Use IndexedDB instead.

🔹 7. File System Access API

Allows web apps to read/write actual files on user’s device (with permission).

const fileHandle = await window.showSaveFilePicker();
const writable = await fileHandle.createWritable();
await writable.write("Hello World");
await writable.close();


✅ Best for apps like editors, file managers.




| Storage Type       | Size Limit   | Lifetime         | Accessible From  | Use Case                      |
| ------------------ | ------------ | ---------------- | ---------------- | ----------------------------- |
| **localStorage**   | 5–10 MB      | Permanent        | Same origin      | Simple key-value, settings    |
| **sessionStorage** | 5 MB         | Until tab closes | Same tab only    | Temp session data             |
| **Cookies**        | 4 KB         | Configurable     | Sent with server | Auth, server-side data        |
| **IndexedDB**      | Hundreds MB  | Permanent        | Same origin      | Complex/large structured data |
| **Cache Storage**  | Large        | Permanent        | Service Workers  | Offline PWA, API caching      |
| **File API**       | User granted | Until deleted    | User device      | File editing apps             |




👉 Quick rule of thumb:

Small, simple → localStorage / sessionStorage

Auth/session → Cookies

Large structured data → IndexedDB

Offline apps → Cache Storage

File operations → File API



⚡ Do you want me to also create a real-world example project (like “To-Do app using localStorage + IndexedDB”) so you can practice all types of storage?



