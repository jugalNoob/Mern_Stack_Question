🧠 Topic: global vs window in JavaScript & Node.js
1️⃣ What is the difference between window and global?

Answer:

In Browser JavaScript, the global object is window.

In Node.js, the global object is global.
They both serve as the top-level object that holds all global variables, functions, and properties.

Example:

// Browser
console.log(window === this); // true

// Node.js
console.log(global === this); // false (in module scope)


Explanation:
In Node.js, each file is treated as a separate module, so this inside a file is not the global scope.

2️⃣ Can we access window in Node.js?

Answer: ❌ No, window is not defined in Node.js.
window is part of the browser environment, representing the browser window/tab.

Example:

console.log(window); // ❌ ReferenceError: window is not defined


Use Case:
If you need a global object in Node.js, use global instead of window.

3️⃣ What is the equivalent of window in Node.js?

Answer:
👉 The equivalent of window in Node.js is global.

Example:

global.name = "Jugal Sharma";
console.log(global.name); // "Jugal Sharma"


Explanation:
global stores values accessible across the Node.js process (like window in browser).

4️⃣ What is globalThis and why was it introduced?

Answer:
globalThis is a universal global object introduced in ES2020.
It works in both browser and Node.js, avoiding environment-specific code.

Example:

globalThis.app = "Universal App";
console.log(globalThis.app); // "Universal App"


Use Case:
✅ Use globalThis when writing code that runs in both browser and Node.js.

5️⃣ What happens if we use var globally in browser vs Node.js?

Answer:

In browser, var variables become part of window.

In Node.js, var variables are not added to global.

Example:

// Browser
var name = "ChromeUser";
console.log(window.name); // "ChromeUser"

// Node.js
var user = "NodeUser";
console.log(global.user); // undefined


Explanation:
Node.js modules isolate their variables — they don’t leak into the global scope.

6️⃣ Can we add custom properties to global or window?

Answer:
Yes — but it’s not recommended (bad practice).
You can add properties, but it can cause conflicts or bugs.

Example:

global.config = { db: "mongo" }; // Node.js
window.config = { theme: "dark" }; // Browser


Best Practice:
Use module exports or import/export instead of modifying global scope.

7️⃣ How are global timers different in browser and Node.js?

Answer:

In browser: setTimeout and setInterval come from window.

In Node.js: they come from the global object.

Example:

// Both work:
setTimeout(() => console.log("Timer done!"), 1000);

// In Node.js:
console.log(global.setTimeout === setTimeout); // true


Use Case:
Helps understand async behavior in both environments.

8️⃣ Why is global safer than window for backend code?

Answer:
Because global is isolated per Node.js process — it doesn’t interfere with other modules.
Browser’s window is shared across all scripts loaded in that page.

Example:

// Node.js
global.apiKey = "secure";
console.log(global.apiKey); // secure


Use Case:
Use in logging, constants, or configuration accessible app-wide.

9️⃣ Is globalThis equal to global in Node.js?

Answer: ✅ Yes

console.log(globalThis === global); // true


And in browser:

console.log(globalThis === window); // true


Use Case:
globalThis gives you one consistent global object for all JavaScript environments.

🔟 Why shouldn’t we rely on global variables in Node.js?

Answer:
Global variables can cause naming conflicts, memory leaks, and make code hard to test or maintain.
It’s better to import/export modules instead of storing values globally.

Example (bad):

global.count = 10;


Better:

module.exports = { count: 10 };

🧩 Summary Table


| Feature            | Browser             | Node.js               | Universal            |
| ------------------ | ------------------- | --------------------- | -------------------- |
| Global Object      | `window`            | `global`              | `globalThis`         |
| Access `this`      | `this === window`   | `this !== global`     | ✅ `globalThis` works |
| Timer Source       | `window.setTimeout` | `global.setTimeout`   | ✅ same               |
| `var` Scope        | Added to `window`   | Not added to `global` | ❌                    |
| Recommended Global | `window`            | `global`              | ✅ `globalThis`       |
