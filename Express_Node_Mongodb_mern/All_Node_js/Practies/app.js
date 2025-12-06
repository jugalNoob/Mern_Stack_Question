

Q what is package.json?
Ans:
🧠 Simple Definition:

package.json is a JSON file that tells Node.js 
and npm everything about your project —
its name, version, author, libraries you use,
 and commands to run.

 | Purpose                | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| **1. Project Info**    | Defines the project’s name, version, and description       |
| **2. Dependencies**    | Lists all npm packages your project needs                  |
| **3. Scripts**         | Defines custom commands like `npm start`, `npm test`       |
| **4. Entry Point**     | Specifies the main file (like `app.js` or `index.js`)      |
| **5. Module Type**     | Defines ES module or CommonJS using `"type": "module"`     |
| **6. Version Control** | Helps share consistent setups across teams or environments |
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "test": "node test.js"
  },
  "author": "Jugal Sharma",
  "license": "MIT",
  "dependencies": {
    "express": "^4.19.0",
    "mongoose": "^8.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}


Q what is  package-lock.json

🧠 Simple Definition:

package-lock.json tells npm exactly which versions of every
 package (and their sub-packages) to install.

| Purpose                        | Description                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------- |
| **1️⃣ Lock Versions**          | Ensures that dependencies and sub-dependencies always install the same versions. |
| **2️⃣ Faster Installs**        | npm can skip version resolution and install directly from this file.             |
| **3️⃣ Security & Consistency** | Protects your app from unexpected updates that could break code.                 |
| **4️⃣ Tracks Integrity**       | Contains cryptographic hashes to verify that packages aren’t tampered with.      |



Q what is fs system in node.js?
It allows you to read, write, update, delete, and
 manage files directly from your Node.js code.


 Q what is asyn fs vs fs?
🧠 Simple Definition:

Asynchronous (fs) methods run in the background without blocking other code.
⚙️ 1️⃣ Asynchronous fs (Non-blocking)

Synchronous (fsSync) methods block execution until the operation finishes.


Q what is module?
✅ Answer:

Modules in Node.js are reusable blocks of code that
 you can import and use in other files.
| Type                     | Example                    | Description                |
| ------------------------ | -------------------------- | -------------------------- |
| **Built-in Modules**     | `fs`, `http`, `path`, `os` | Provided by Node.js itself |
| **User-defined Modules** | `./myModule.js`            | Created by you             |
| **Third-party Modules**  | `express`, `mongoose`      | Installed using npm        |





Q what is npm (Node Package Manager)
npm helps you download and manage third-party code (packages) 
from the internet so you don’t have to write everything from scratch.
It’s like an app store for Node.js libraries.


Q what is difefrnt between npm vs module

| Feature              | **npm**                                                  | **Module**                                          |
| -------------------- | -------------------------------------------------------- | --------------------------------------------------- |
| **Meaning**          | npm = Node Package Manager                               | A reusable piece of code or file in Node.js         |
| **Purpose**          | Used to **install, update, or manage** external packages | Used to **organize and reuse** code in your project |
| **Example**          | `npm install express`                                    | `const fs = require('fs')`                          |
| **Type**             | A **tool / command-line utility**                        | A **code file or library**                          |
| **Who provides it?** | npm (online registry)                                    | You or Node.js itself                               |



Q what is REPL?
✅ Answer:

REPL stands for Read–Eval–Print–Loop.
It is a built-in Node.js tool that lets you run JavaScript code 
directly in the terminal and see the output immediately.

| Step  | Meaning | What it does                       |
| ----- | ------- | ---------------------------------- |
| **R** | Read    | Takes your input (JavaScript code) |
| **E** | Eval    | Evaluates (executes) the code      |
| **P** | Print   | Shows the result                   |
| **L** | Loop    | Repeats the process for next input |



Q what is middlware?

Simple Definition:

Middleware is a function that handles requests before they 
reach your route or before the response is sent back.

| Type                     | Description              | Example                              |
| ------------------------ | ------------------------ | ------------------------------------ |
| **1. Application-level** | Runs for all routes      | `app.use()`                          |
| **2. Router-level**      | Runs for specific routes | `router.use()`                       |
| **3. Built-in**          | Provided by Express      | `express.json()`, `express.static()` |
| **4. Third-party**       | Installed via npm        | `morgan`, `cors`, `body-parser`      |
| **5. Error-handling**    | Catches errors           | `(err, req, res, next)`              |



Q what is bodyPARE?
Ans:🧠 Simple Definition:

body-parser helps Express apps understand data 
sent by the client (like form data or JSON).

Q what is commn.js
CommonJS is the module system used by Node.js to load and
 share code between files using
require() and module.exports.

It’s the older module format (before ES Modules), but still widely used in Node.js projects.





| Module          | Purpose            |
| --------------- | ------------------ |
| `fs`            | File operations    |
| `os`            | System info        |
| `http`          | Web server         |
| `path`          | File paths         |
| `url`           | URL parsing        |
| `events`        | Event handling     |
| `crypto`        | Encryption         |
| `child_process` | Run other programs |
| `util`          | Utility functions  |
| `stream`        | Stream data        |
| `zlib`          | Compression        |
