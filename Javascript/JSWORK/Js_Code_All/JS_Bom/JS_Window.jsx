🔹 10. Other Useful Objects Inside window

window.console → debugging (console.log, error, etc.)

window.navigator → browser/device info

window.screen → screen info

window.crypto → cryptographic functions

window.fetch → HTTP requests

✅ Summary: window = Browser Environment

It contains:

DOM access → window.document

Location & history → window.location, window.history

Screen & navigator → window.screen, window.navigator

Timers → setTimeout, setInterval

Storage → localStorage, sessionStorage

Popups → alert, confirm, prompt

Events → resize, scroll, load, etc.




🔹 1. Basic Properties
console.log(window.innerWidth);   // Viewport width
console.log(window.innerHeight);  // Viewport height

console.log(window.outerWidth);   // Browser window width (with toolbar)
console.log(window.outerHeight);  // Browser window height

console.log(window.screenX);      // Distance from left of screen
console.log(window.screenY);      // Distance from top of screen

🔹 2. Window Dialogs
alert("Hello!");                  // Alert popup
let ok = confirm("Are you sure?");// OK / Cancel
let name = prompt("Enter name:"); // Text input

🔹 3. Navigation & Location
console.log(window.location.href);   // Full URL
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);

window.location.reload();            // Reload page
window.location.assign("https://google.com"); // Redirect

🔹 4. History API
console.log(window.history.length); // Pages in history

history.back();   // Go back
history.forward();// Go forward
history.go(-2);   // Jump back 2 pages

🔹 5. Timers
let id = setTimeout(() => console.log("Hi after 2s"), 2000);
clearTimeout(id); // Cancel timeout

let interval = setInterval(() => console.log("Repeating..."), 1000);
clearInterval(interval); // Stop repeating

🔹 6. Storage
// Local Storage
localStorage.setItem("user", "Jugal");
console.log(localStorage.getItem("user"));

// Session Storage
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));

🔹 7. Window Open/Close/Move/Resize
let win = window.open("https://example.com", "_blank", "width=400,height=400");
win.resizeTo(600, 600);
win.moveTo(100, 100);
win.close();

🔹 8. Document Access
console.log(window.document.title);   // Page title
document.body.style.background = "lightblue"; // Change background

🔹 9. Events
window.addEventListener("resize", () => {
  console.log("Window resized:", window.innerWidth, window.innerHeight);
});

window.addEventListener("scroll", () => {
  console.log("Scrolled:", window.scrollY);
});



