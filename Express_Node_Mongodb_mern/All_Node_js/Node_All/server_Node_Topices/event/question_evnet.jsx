🧩 🟢 BASIC LEVEL — Core Concept Questions


| #   | Question                                                          | Short Answer                                                                   |
| --- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1️⃣ | What is the **events module** in Node.js?                         | A built-in module that allows you to create, listen, and handle custom events. |
| 2️⃣ | Which class is used to work with events?                          | `EventEmitter` class from the `events` module.                                 |
| 3️⃣ | How do you **emit** an event in Node.js?                          | Using `.emit("eventName")` method.                                             |
| 4️⃣ | How do you **listen** for an event?                               | Using `.on("eventName", callback)` method.                                     |
| 5️⃣ | What is the difference between `.on()` and `.once()`?             | `.on()` listens every time the event is emitted; `.once()` runs only once.     |
| 6️⃣ | Can you pass arguments when emitting an event?                    | ✅ Yes. Example: `emit('data', value1, value2)`                                 |
| 7️⃣ | What happens if an **error event** is emitted without a listener? | ❌ Node.js process will crash.                                                  |
| 8️⃣ | What design pattern does the EventEmitter follow?                 | **Observer (Publisher–Subscriber)** pattern.                                   |
| 9️⃣ | How to remove a specific event listener?                          | `.removeListener(eventName, listener)` or `.off(eventName, listener)`          |
| 🔟  | How to check how many listeners an event has?                     | `emitter.listenerCount('eventName')`                                           |




⚙️ 🟡 INTERMEDIATE LEVEL — Practical & Code-Based


| #   | Question                                                | Example / Explanation                                                          |
| --- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1️⃣ | Write code to handle an event only once.                | `emitter.once('start', () => console.log('Start event'))`                      |
| 2️⃣ | How to extend EventEmitter in a class?                  | `class MyServer extends EventEmitter {}`                                       |
| 3️⃣ | Can multiple listeners be added to the same event?      | ✅ Yes, Node.js executes all registered listeners in order.                     |
| 4️⃣ | How can you avoid memory leaks with too many listeners? | Use `emitter.setMaxListeners(n)` to control the max count.                     |
| 5️⃣ | What is the default max listener count in Node.js?      | 10 listeners per event.                                                        |
| 6️⃣ | What module in Node.js internally uses EventEmitter?    | HTTP, FS, Stream, Process, and Socket modules.                                 |
| 7️⃣ | Can you remove all listeners for an event?              | `emitter.removeAllListeners('eventName')`                                      |
| 8️⃣ | What are the main methods of EventEmitter?              | `on()`, `once()`, `emit()`, `off()`, `removeAllListeners()`, `listenerCount()` |
| 9️⃣ | What is an async event listener?                        | A listener function that performs async operations (e.g., using promises).     |
| 🔟  | Can you emit events from inside another event listener? | ✅ Yes, events can trigger other events (chained emission).                     |



🧠 🔵 ADVANCED LEVEL — Real-World / Internal Concepts


| #   | Question                                                       | Explanation                                                                                  |
| --- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1️⃣ | How does Node.js use the event-driven architecture internally? | The **Event Loop** listens for events and executes callbacks asynchronously.                 |
| 2️⃣ | How does EventEmitter relate to the Event Loop?                | EventEmitter triggers callbacks that are placed in the **callback queue** of the event loop. |
| 3️⃣ | Is EventEmitter synchronous or asynchronous?                   | Emission (`emit()`) is **synchronous**, but listeners can perform async work.                |
| 4️⃣ | How can you make event handling asynchronous?                  | Use `process.nextTick()`, `setImmediate()`, or `Promise` in listener functions.              |
| 5️⃣ | What happens if a listener throws an exception?                | If not handled, it can crash the program — always use try-catch.                             |
| 6️⃣ | How can you debug or trace event emissions?                    | Use the `emitter.rawListeners(eventName)` or add console logs in listeners.                  |
| 7️⃣ | How do Streams and EventEmitter relate?                        | Streams are EventEmitters — they emit events like `'data'`, `'end'`, `'error'`.              |
| 8️⃣ | What is a “custom event”?                                      | A user-defined event name, e.g., `'userLoggedIn'` or `'fileUploaded'`.                       |
| 9️⃣ | Can EventEmitter be used between different processes?          | ❌ Not directly. You’d use `child_process` IPC (`process.send()` / `process.on('message')`).  |
| 🔟  | How do you handle event order and race conditions?             | Control logic in listener functions or use async/await carefully.                            |



🧩 🧱 Real Code Interview Example

Q: Write Node.js code that listens for a “userRegistered” event and sends a welcome email only once.

const EventEmitter = require('events');
const event = new EventEmitter();

event.once('userRegistered', (email) => {
  console.log(`Welcome email sent to: ${email}`);
});

event.emit('userRegistered', 'jugal@example.com');
event.emit('userRegistered', 'karan@example.com');


🧠 Output:

Welcome email sent to: jugal@example.com


✅ once() ensures it runs only one time.

🔥 🧠 High-Level Concept Questions (Asked in Big Tech Interviews)


| #   | Question                                                                       | Explanation                                                                              |
| --- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 1️⃣ | What is the difference between EventEmitter and the Observer Pattern?          | EventEmitter is Node’s implementation of the pattern — observer pattern is the concept.  |
| 2️⃣ | How does EventEmitter help build decoupled microservices?                      | Services emit and listen to events instead of directly calling each other.               |
| 3️⃣ | Compare `events` vs `callbacks`.                                               | Callbacks are one-to-one; events allow one-to-many communication.                        |
| 4️⃣ | How does EventEmitter improve scalability?                                     | Reduces tight coupling, increases modularity, and enables async flow.                    |
| 5️⃣ | What happens if a listener is slow or blocking?                                | It can block other listeners since `.emit()` is synchronous.                             |
| 6️⃣ | How to ensure event order?                                                     | Use `setImmediate()` or async queue to manage listener execution order.                  |
| 7️⃣ | Can EventEmitter be used with Promises or async/await?                         | Yes — wrap `.emit()` in a Promise or await inside listener functions.                    |
| 8️⃣ | How would you use EventEmitter in a logging or monitoring system?              | Emit events for user actions or system changes; listeners log them.                      |
| 9️⃣ | How do you prevent memory leaks with listeners in a long-running app?          | Use `.removeListener()` and `.setMaxListeners()` wisely.                                 |
| 🔟  | How does Node.js handle “UnhandledPromiseRejection” similar to “error” events? | It crashes unless you handle the rejection — same principle as missing `error` listener. |


 ┌──────────────┐     emit('event')     ┌──────────────┐
 │  Emitter     │ ───────────────────▶  │  Listeners   │
 │ (Publisher)  │                       │ (Subscribers)│
 └──────────────┘                       └──────────────┘
         │
         │ multiple events
         ▼
   Event Loop executes callbacks


   💡 Bonus Real-World Example:

Scenario: When a user uploads a file, trigger multiple listeners (log, email, DB update).

const EventEmitter = require('events');
const fileEvents = new EventEmitter();

fileEvents.on('fileUpload', (file) => console.log(`Log: ${file} uploaded`));
fileEvents.on('fileUpload', (file) => console.log(`DB: Saving metadata for ${file}`));
fileEvents.on('fileUpload', (file) => console.log(`Email: Sending confirmation for ${file}`));

fileEvents.emit('fileUpload', 'resume.pdf');


🧠 Output:

Log: resume.pdf uploaded
DB: Saving metadata for resume.pdf
Email: Sending confirmation for resume.pdf


✅ Real-world example of multi-listener communication.