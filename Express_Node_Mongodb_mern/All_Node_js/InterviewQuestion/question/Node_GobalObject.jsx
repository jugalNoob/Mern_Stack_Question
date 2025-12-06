
🔹 3️⃣ Main Difference Table

| Feature  | Global Object                                         | Built-in Module                     |
| -------- | ----------------------------------------------------- | ----------------------------------- |
| Access   | Automatically available                               | Must `require`/`import`             |
| Scope    | Global (all files)                                    | Only where imported                 |
| Examples | `global`, `process`, `console`, `Buffer`, `__dirname` | `fs`, `http`, `path`, `os`, `zlib`  |
| Purpose  | Common utility functions / variables                  | Extra functionality / APIs for Node |





Here’s a clear explanation of Node.js global objects and their meaning.

🔹 1️⃣ What is a Global Object in Node.js?

💡 One-line summary:
“Global objects in Node.js are built-in objects available anywhere 
in your app without importing them.”


In Node.js, a global object is an object that is available everywhere,
 without requiring import or require.

It provides built-in functions, variables, 
and constants you can use in any file.

Think of it as “window” in the browser, but for Node.js it is called global.

🔹 2️⃣ The global Object
console.log(global);


global is the top-level object in Node.js.

Anything attached to global can be accessed anywhere:

global.myVar = "Hello Node";

console.log(myVar); // Works in the same file

🔹 3️⃣ Some Important Global Objects in Node.js



| Global Object               | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| `global`                    | The global namespace object in Node.js                  |
| `process`                   | Provides info about the Node process (env, pid, memory) |
| `Buffer`                    | Used to work with binary data                           |
| `console`                   | For logging (`console.log`, `console.error`)            |
| `setTimeout`, `setInterval` | Timers available globally                               |
| `__dirname`                 | Current directory path of the file                      |
| `__filename`                | Full path of the current file                           |
| `module`                    | Current module info (`exports`, `id`)                   |
| `exports`                   | Shortcut for `module.exports`                           |




🔹 5️⃣ Key Notes

global vs window

In browsers → window is global object

In Node.js → global is the global object

Global variables

Avoid polluting global, use module.exports instead

Available everywhere

No need to require or import





🔹 8️⃣ What is console?

Global object for logging.

Includes console.log, console.error, console.warn, etc.

🔹 9️⃣ What is the difference between global and local variables?

Global variable: accessible everywhere

Local variable: accessible only in the scope it was declared

Example:

let localVar = "I am local";
global.globalVar = "I am global";



🔹 7️⃣ Timers (setTimeout, setInterval)

These are global functions, no import needed.

Example:

setTimeout(() => console.log("Hello after 2s"), 2000);
setInterval(() => console.log("Every 1s"), 1000);