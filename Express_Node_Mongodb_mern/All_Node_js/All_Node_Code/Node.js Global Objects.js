// globals.js
console.log(Object.getOwnPropertyNames(global));


| Question                                                     | Expected Answer                                 |
| ------------------------------------------------------------ | ----------------------------------------------- |
| What is the main global object in Node.js?                   | `global` — acts like `window` in browsers.      |
| What is the difference between a global object and a module? | Globals are built-in, modules must be imported. |
| Is `process` a global or a module?                           | It’s a **global object**, available everywhere. |
| Why avoid creating custom globals?                           | They pollute scope and can cause conflicts.     |
| How to see all global objects?                               | `Object.getOwnPropertyNames(global)`            |
| Can modules access globals?                                  | Yes, all modules can access Node.js globals.    |



.
🧩 Short Summary Answer (Perfect for Interview)

In Node.js, the main global object is global, which provides built-in
 objects like process, Buffer, console, and timers.

Globals are available everywhere, while modules must be imported using require() or import.
Globals provide the runtime environment; modules organize and reuse code safely.


Q what is main global?

Q what differnt betwwen global and modules

| Global Object / Function                                                                                            | Description                                 | Example                                     |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| **`global`**                                                                                                        | Like `window` in browsers; global namespace | `global.myVar = 100; console.log(myVar)`    |
| **`process`**                                                                                                       | Info & control of the Node process          | `process.env.NODE_ENV`, `process.exit()`    |
| **`console`**                                                                                                       | Logging output                              | `console.log('Hello')`                      |
| **`Buffer`**                                                                                                        | Handles raw binary data                     | `const buf = Buffer.from('hello')`          |
| **`setTimeout()` / `setInterval()` / `setImmediate()` / `clearTimeout()` / `clearInterval()` / `clearImmediate()`** | Timer functions                             | `setTimeout(() => console.log('Hi'), 1000)` |
| **`__dirname`**                                                                                                     | Current directory of the file               | `console.log(__dirname)`                    |
| **`__filename`**                                                                                                    | Current file name                           | `console.log(__filename)`                   |
| **`exports`**                                                                                                       | Shortcut for `module.exports`               | `exports.myFunc = () => {}`                 |
| **`module`**                                                                                                        | Represents the current module               | `module.exports = { foo: 'bar' }`           |
| **`require`**                                                                                                       | Function to import modules                  | `const fs = require('fs')`                  |
| **`URL` / `URLSearchParams`**                                                                                       | For URL handling                            | `new URL('https://example.com')`            |
