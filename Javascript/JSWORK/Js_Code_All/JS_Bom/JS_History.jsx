| Method                   | Description                                        |
| ------------------------ | -------------------------------------------------- |
| `history.length`         | Number of entries in history                       |
| `history.back()`         | Go back one page                                   |
| `history.forward()`      | Go forward one page                                |
| `history.go(n)`          | Move n steps (negative = back, positive = forward) |
| `history.pushState()`    | Add new history entry (no page reload)             |
| `history.replaceState()` | Replace current entry (no page reload)             |



📜 JavaScript history Object
🔹 1. History Length
console.log(history.length); 
// Number of pages in the session history (for this tab)

🔹 2. Navigation (Back / Forward)
history.back();     // Same as clicking browser "Back"
history.forward();  // Same as clicking browser "Forward"

🔹 3. Go to a Specific Page
history.go(-2);  // Go 2 pages back
history.go(1);   // Go forward 1 page
history.go(0);   // Reload current page

🔹 4. Push & Replace State (Modern HTML5 History API)

👉 Useful for Single Page Applications (SPA) (React, Angular, Vue).

// Push a new state into history
history.pushState({ user: "Jugal" }, "Profile", "/profile");

// Replace the current state (does not add new entry)
history.replaceState({ page: 2 }, "Page 2", "/page2");

// Handle back/forward button
window.addEventListener("popstate", (event) => {
  console.log("Back/Forward navigation:", event.state);
});


✅ pushState → Adds a new entry to history (user can go back).
✅ replaceState → Replaces current entry (user cannot go back).

🔹 5. Reload with History
history.go(0); // reload page (like location.reload())

🔹 6. Example: SPA Navigation
function navigate(page) {
  history.pushState({ page }, "", page);
  document.body.innerHTML = `<h1>You are on ${page}</h1>`;
}

navigate("/home");   // Goes to /home without reload
navigate("/about");  // Goes to /about without reload

window.onpopstate = (event) => {
  console.log("User navigated back/forward", event.state);
};


👉 This is how frameworks like React Router work internally.


