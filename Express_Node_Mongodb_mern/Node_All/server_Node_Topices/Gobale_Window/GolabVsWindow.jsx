🌍 Global vs Window in JavaScript and Node.js

Both browser JavaScript and Node.js provide a global scope,
but they implement it differently based on their environments.



🧩 1️⃣ In the Browser


| Concept               | Description                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| **Global Object:**    | `window`                                                                                          |
| **Why:**              | In browsers, JavaScript runs inside a window/tab — the **`window` object** is the global context. |
| **Scope Behavior:**   | Any variable declared globally (`var`) becomes a **property of `window`**.                        |
| **APIs it Contains:** | `document`, `alert`, `location`, `setTimeout`, `console`, `localStorage`, etc.                    |
| **Environment:**      | Client-side (browser engine like Chrome’s V8 or Firefox’s SpiderMonkey).                          |



🧠 Example (Conceptually):

window represents your browser tab.

Every global variable (e.g. var x = 10;) is accessible as window.x.

So:

window === globalThis  ✅ true


🧩 2️⃣ In Node.js

| Concept               | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| **Global Object:**    | `global`                                                                                   |
| **Why:**              | Node.js runs JavaScript **outside of the browser**, so it provides its own global context. |
| **Scope Behavior:**   | Variables are **not automatically** added to `global` unless explicitly attached.          |
| **APIs it Contains:** | `process`, `Buffer`, `setTimeout`, `console`, `__dirname`, `__filename`, etc.              |
| **Environment:**      | Server-side (Node.js runtime based on V8 + libuv).                                         |



🧠 Example (Conceptually):
In Node.js:

globalThis === global  ✅ true


But:

var x = 10 → Not added to global.

You must explicitly write: global.x = 10 to make it global.

⚖️ 3️⃣ Key Differences — window vs global


| Feature                       | Browser (`window`)                                          | Node.js (`global`)                            |
| ----------------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| **Name of Global Object**     | `window`                                                    | `global`                                      |
| **Environment**               | Browser (Client-side)                                       | Node.js (Server-side)                         |
| **Global Variables**          | Automatically attached to `window` when declared with `var` | Not automatically attached to `global`        |
| **APIs Included**             | DOM, BOM, Fetch, localStorage, alert, etc.                  | process, Buffer, console, require, setTimeout |
| **Access Method**             | `window.variableName`                                       | `global.variableName`                         |
| **Document Object?**          | ✅ Yes (`document`, `navigator`, etc.)                       | ❌ No                                          |
| **Timers**                    | Provided by Browser                                         | Provided by Node.js `timers` module           |
| **Security Context**          | Sandbox inside browser                                      | Full system-level access                      |
| **Event Loop Implementation** | Browser event loop (via Web APIs)                           | Node.js event loop (via libuv)                |


💡 4️⃣ The Common Bridge — globalThis

Modern JavaScript (ES2020) introduced a universal global object — globalThis.


| Environment   | Equivalent           |
| ------------- | -------------------- |
| Browser       | `window`             |
| Node.js       | `global`             |
| Web Worker    | `self`               |
| Deno / Others | Their runtime global |



✅ So globalThis works everywhere — same code runs in browser and Node.

🧠 Example (Conceptual)
globalThis.setTimeout() ✅ works both in browser and Node.js


Because:

In Browser → It internally calls window.setTimeout()

In Node.js → It internally calls global.setTimeout()

🧩 5️⃣ Real-World Use Cases


| Use Case                     | Explanation                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| **Browser UI Scripts**       | Use `window` to access DOM, handle clicks, manage forms.                               |
| **Server Logic in Node.js**  | Use `global` to store shared configs or utilities (rare, better use modules).          |
| **Cross-Platform Libraries** | Use `globalThis` so the code works both in browser and Node.js.                        |
| **Timers and Async**         | `setTimeout`, `setInterval`, and `setImmediate` exist in both via global scope.        |
| **Environment-Safe Code**    | Detect environment: `if (typeof window !== "undefined") {...}` to run only in browser. |



⚡ 6️⃣ Why the Difference Exists

| Reason                                  | Explanation                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| **Different Runtimes**                  | Browser JS runs in a **UI sandbox**; Node.js runs as a **server process**.        |
| **Different Global APIs**               | Browser provides **DOM/BOM**; Node.js provides **File system, Process, OS** APIs. |
| **Different Security Context**          | Browser is **restricted** for safety; Node.js has **system access**.              |
| **Different Event Loop Implementation** | Browser uses **Web APIs**, Node.js uses **libuv**.                                |


v🧠 7️⃣ Interview-Focused Summary

| Question                                                                 | Conceptual Answer                                                                                         |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| **Q1:** What is the global object in a browser?                          | `window` — represents the browser window/tab and DOM context.                                             |
| **Q2:** What is the global object in Node.js?                            | `global` — represents Node’s global environment (no DOM).                                                 |
| **Q3:** Do global variables automatically attach to `global` in Node.js? | No — unlike browsers, Node.js isolates each module scope.                                                 |
| **Q4:** What is `globalThis`?                                            | A universal reference to the global object in any JS environment.                                         |
| **Q5:** What’s the difference between `window` and `global`?             | `window` → browser context; `global` → Node context; both represent top-level scope in their environment. |
| **Q6:** Why doesn’t Node.js have `document` or `window`?                 | Because Node.js runs **outside** the browser — no DOM or UI.                                              |
| **Q7:** Can you use `window` in Node.js?                                 | ❌ No — it doesn’t exist. You use `global` instead.                                                        |

🔥 8️⃣ Quick Summary Table

| Environment | Global Object | Example Property     | DOM Access | Event Loop |
| ----------- | ------------- | -------------------- | ---------- | ---------- |
| Browser     | `window`      | `window.document`    | ✅ Yes      | Web APIs   |
| Node.js     | `global`      | `global.process`     | ❌ No       | libuv      |
| Universal   | `globalThis`  | `globalThis.console` | Depends    | Universal  |

