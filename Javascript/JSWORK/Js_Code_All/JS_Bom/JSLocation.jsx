✅ Summary (Most Useful location Properties & Methods)

| Property   | Example Value                                | Description  |
| ---------- | -------------------------------------------- | ------------ |
| `href`     | `https://example.com:3000/page?x=10#section` | Full URL     |
| `protocol` | `https:`                                     | Protocol     |
| `hostname` | `example.com`                                | Domain name  |
| `host`     | `example.com:3000`                           | Host + Port  |
| `port`     | `3000`                                       | Port number  |
| `pathname` | `/page`                                      | Path         |
| `search`   | `?x=10`                                      | Query string |
| `hash`     | `#section`                                   | Fragment ID  |




🌍 JavaScript location Object
🔹 1. Get URL Information
console.log(location.href);      // Full URL → "https://example.com:3000/page?x=10#section"
console.log(location.protocol);  // Protocol → "https:"
console.log(location.hostname);  // Hostname → "example.com"
console.log(location.host);      // Hostname + Port → "example.com:3000"
console.log(location.port);      // Port number → "3000"
console.log(location.pathname);  // Path → "/page"
console.log(location.search);    // Query string → "?x=10"
console.log(location.hash);      // Anchor → "#section"

🔹 2. Redirect to Another Page
location.href = "https://google.com";   // Redirect
location.assign("https://google.com");  // Redirect (keeps history)
location.replace("https://google.com"); // Redirect (no history, replaces current)


✅ Use replace() for login/logout flows so the user can’t go back.

🔹 3. Reload Page
location.reload();       // Reload (sometimes from cache)
location.reload(true);   // Reload from server (force, legacy)

🔹 4. Change Parts of URL
location.hash = "#newSection";     // Jump to an element with id="newSection"
location.search = "?user=123";     // Update query string (reloads page)
location.pathname = "/dashboard";  // Navigate to another path

🔹 5. Practical Examples
// Redirect after 3s
setTimeout(() => {
  location.href = "https://example.com/welcome";
}, 3000);

// Auto-refresh every 10s
setInterval(() => {
  location.reload();
}, 10000);

// Check if HTTPS
if (location.protocol !== "https:") {
  console.warn("You are not on a secure connection!");
}

