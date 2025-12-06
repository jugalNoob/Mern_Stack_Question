Perfect 👏 — util in Node.js is a hidden gem that many developers overlook,
but interviewers love asking about it — especially in intermediate to advanced backend rounds.

Let’s go through it step-by-step — from definition → examples → real-world use → interview Q&A.

⚙️ What is util in Node.js?

👉 The util module provides utility functions that support:

Debugging

Inheritance

Promisifying callbacks

String formatting

Type checking

It’s part of Node.js core, so no installation is needed:

const util = require("util");

🔹 1️⃣ Commonly Used Utility Functions

Let’s explore the most asked ones.

🧩 1. util.format()

Used for string formatting, similar to printf in C.

const util = require("util");

let name = "Jugal";
let age = 25;
console.log(util.format("My name is %s and I am %d years old.", name, age));


🧠 Output:

My name is Jugal and I am 25 years old.


| Placeholder | Meaning |
| ----------- | ------- |
| `%s`        | String  |
| `%d`        | Number  |
| `%j`        | JSON    |



🧩 2. util.debuglog()

Creates a debugging function that logs messages only when a specific environment variable is set.

const util = require("util");

const debug = util.debuglog("server");

debug("This message is only visible if NODE_DEBUG=server");


🧠 Run:

NODE_DEBUG=server node app.js


✅ Output:

SERVER 1234: This message is only visible if NODE_DEBUG=server

🧩 3. util.promisify()

🔥 Converts a callback-based function into a Promise-based one (very common in interview tasks).

Example with fs:

const fs = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);

(async () => {
  const data = await readFilePromise("data.txt", "utf8");
  console.log(data);
})();


🧠 Asked in interviews:

“How do you convert callback functions to Promises without rewriting them?”

✅ Answer: Use util.promisify().

🧩 4. util.types

Used for type checking in advanced scenarios.

const util = require("util");

console.log(util.types.isDate(new Date()));  // true
console.log(util.types.isRegExp(/abc/));     // true
console.log(util.types.isPromise(Promise.resolve())); // true


🧠 Useful in debugging or validating runtime types.

🧩 5. util.inspect()

Used to inspect objects (especially nested or circular ones) for debugging.

const util = require("util");

const obj = { name: "Jugal", nested: { a: 10, b: 20 } };
console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));


🧠 Real use: view large or complex objects during debugging (e.g., MongoDB results).

🧩 6. util.inherits()

Used for class inheritance (pre-ES6) — still asked for historical or legacy code understanding.

const util = require("util");

function Parent() {
  this.name = "parent";
}
Parent.prototype.sayHello = function () {
  console.log("Hello from parent");
};

function Child() {
  Parent.call(this);
}
util.inherits(Child, Parent);

const c = new Child();
c.sayHello(); // Hello from parent


🧠 In interview:

“How was inheritance handled before ES6 classes?”
✅ With util.inherits().

🧩 7. util.callbackify()

Converts a Promise-based function back to a callback-style one (rare, but asked in system compatibility rounds).

const util = require("util");

async function getData() {
  return "Hello";
}

const callbackFn = util.callbackify(getData);

callbackFn((err, data) => {
  if (err) throw err;
  console.log(data);
});


🧠 Use case: when integrating with legacy callback APIs.

🧠 2️⃣ Advanced / Real-World Uses


| Scenario                        | Util Function            |
| ------------------------------- | ------------------------ |
| Convert fs callback → Promise   | `promisify(fs.readFile)` |
| Debug logs only for envs        | `debuglog()`             |
| Deep inspect object             | `inspect()`              |
| Type check runtime objects      | `util.types.isDate()`    |
| Backward-compatible inheritance | `inherits()`             |



🧩 3️⃣ Example: Combining util.promisify with fs
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

(async () => {
  await writeFile("note.txt", "Node.js util demo");
  const content = await readFile("note.txt", "utf8");
  console.log("File Content:", content);
})();


✅ Converts old callback code into clean async/await.

📊 4️⃣ Interview Questions — util Module


| #  | Question                                                       | Short Answer                                               |
| -- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| 1  | What is the purpose of `util`?                                 | Utility functions for debugging, inheritance, and Promises |
| 2  | How to convert callback → Promise?                             | `util.promisify()`                                         |
| 3  | How to convert Promise → callback?                             | `util.callbackify()`                                       |
| 4  | What is `util.inherits()`?                                     | Legacy way to set up prototype inheritance                 |
| 5  | How to debug selectively using env vars?                       | `util.debuglog()`                                          |
| 6  | How to inspect a deep object?                                  | `util.inspect(obj, { depth: null })`                       |
| 7  | What is `util.format()` used for?                              | Format strings like `printf`                               |
| 8  | How to check if something is a Date?                           | `util.types.isDate(obj)`                                   |
| 9  | Is `util` part of Node core?                                   | ✅ Yes                                                      |
| 10 | What’s the difference between `promisify` and manual Promises? | `promisify` wraps existing callback APIs automatically     |



┌────────────────────────────┐
│       Node.js Core         │
│────────────────────────────│
│ process  | fs | events | util │
└──────────┬─────────────────┘
           │
           ▼
     ┌─────────────┐
     │  util API   │
     │─────────────│
     │ format()    │
     │ debuglog()  │
     │ promisify() │
     │ inherits()  │
     │ inspect()   │
     └─────────────┘
💡 Real Interview Trick Question

“If a company still uses old callback-style Node code, how would you upgrade it to use async/await?”

✅ Answer:

I’d use util.promisify() to wrap functions like fs.readFile, enabling async/await without rewriting all logic.

