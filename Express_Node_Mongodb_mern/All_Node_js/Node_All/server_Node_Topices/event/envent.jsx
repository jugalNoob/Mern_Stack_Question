⚙️ 1️⃣ What is the events Module in Node.js?

👉 The events module allows you to create, emit, and listen for custom events in your application.
It’s based on the Observer / Pub-Sub Design Pattern — one object emits an event, and others “subscribe” to react.

Think of it like:

“When something happens (event), do something (listener).”

✅ Basic Example
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("greet", () => {
  console.log("Hello, Jugal!");
});

event.emit("greet");


🧠 Output:

Hello, Jugal!


👉 Here:

.on() → subscribes (listener)

.emit() → triggers (publisher)

🔹 2️⃣ Real-World Analogy



| Concept      | Example                                            |
| ------------ | -------------------------------------------------- |
| EventEmitter | A YouTube Channel                                  |
| `on()`       | User subscribes                                    |
| `emit()`     | Channel uploads a new video (notifies subscribers) |



Concept	Example
EventEmitter	A YouTube Channel
on()	User subscribes
emit()	Channel uploads a new video (notifies subscribers)
🧩 3️⃣ Multiple Listeners Example
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("order", () => console.log("Order received!"));
event.on("order", () => console.log("Preparing order..."));
event.on("order", () => console.log("Order ready for delivery!"));

event.emit("order");


🧠 Output:

Order received!
Preparing order...
Order ready for delivery!


✅ Multiple listeners can listen to the same event.

🧠 4️⃣ Passing Arguments with Events
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("user", (name, age) => {
  console.log(`User: ${name}, Age: ${age}`);
});

event.emit("user", "Jugal", 25);


🧠 Output:

User: Jugal, Age: 25


✅ Use case: notifying multiple parts of an app with event data.

⚙️ 5️⃣ Listen Once with .once()
event.once("connect", () => {
  console.log("Connected (only once)!");
});

event.emit("connect");
event.emit("connect"); // Won’t run again


✅ Useful for one-time initialization or startup events.

⚙️ 6️⃣ Remove Event Listeners
function greet() {
  console.log("Hello!");
}

event.on("hello", greet);
event.emit("hello");

event.removeListener("hello", greet);
event.emit("hello"); // No output


✅ Use .off() or .removeListener() to clean up old listeners.

🧩 7️⃣ Check Listener Count
console.log(event.listenerCount("hello"));


🧠 Helpful to prevent memory leaks when too many listeners are attached.

⚡ 8️⃣ Custom Class Extending EventEmitter

Very common interview question 👇

const EventEmitter = require("events");

class Server extends EventEmitter {
  start() {
    console.log("Server starting...");
    setTimeout(() => this.emit("ready"), 2000);
  }
}

const server = new Server();

server.on("ready", () => console.log("Server is ready!"));
server.start();


🧠 Output:

Server starting...
Server is ready!


✅ Asked to test: inheritance and asynchronous events.

🧠 9️⃣ Error Handling in Events

If an error event is emitted without a listener, Node.js crashes.

const event = new EventEmitter();

event.on("error", (err) => {
  console.log("Error caught:", err.message);
});

event.emit("error", new Error("Something went wrong"));


✅ Always handle error events!

💥 🔟 Real-Life Example – Order System
const EventEmitter = require("events");

const orderSystem = new EventEmitter();

orderSystem.on("orderPlaced", (orderId) => {
  console.log(`Order ${orderId} placed`);
});

orderSystem.on("orderPlaced", (orderId) => {
  console.log(`Sending confirmation email for order ${orderId}`);
});

orderSystem.emit("orderPlaced", 101);


🧠 Real-World Use Cases:

Notification systems

Logging

File uploads

Server connections

Async event-based APIs

📘 11️⃣ Key EventEmitter Methods


| Method                      | Description                  |
| --------------------------- | ---------------------------- |
| `on(event, listener)`       | Register an event listener   |
| `once(event, listener)`     | Register one-time listener   |
| `emit(event, [args])`       | Trigger event                |
| `off(event, listener)`      | Remove a listener            |
| `removeAllListeners(event)` | Remove all listeners         |
| `listenerCount(event)`      | Get number of listeners      |
| `setMaxListeners(n)`        | Prevent memory leak warnings |



⚙️ 12️⃣ Real-World System Flow Example

Imagine an order microservice → emits events → other services react.

OrderService.emit('orderCreated')
    ↓
InventoryService.on('orderCreated')
    ↓
PaymentService.on('orderCreated')
    ↓
NotificationService.on('orderCreated')


✅ This decouples services → no direct dependency!

🧠 13️⃣ ASCII Diagram
        ┌─────────────────────────┐
        │   EventEmitter Object   │
        └────────────┬────────────┘
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
   listener1()   listener2()   listener3()
                     ▲
                     │
                 emit("event")

🎯 14️⃣ Interview Questions (with Short Answers)


| #  | Question                                                | Answer                                    |
| -- | ------------------------------------------------------- | ----------------------------------------- |
| 1  | What is the `events` module?                            | Core module to handle custom async events |
| 2  | What class does it provide?                             | `EventEmitter`                            |
| 3  | How do you trigger an event?                            | `.emit("event")`                          |
| 4  | How do you listen for an event?                         | `.on("event", callback)`                  |
| 5  | What’s the difference between `on` and `once`?          | `once` executes only once                 |
| 6  | What happens if an error is emitted without a listener? | Process crashes                           |
| 7  | How do you remove an event listener?                    | `.off()` or `.removeListener()`           |
| 8  | How do you extend EventEmitter in a class?              | `class MyClass extends EventEmitter`      |
| 9  | How to avoid memory leaks in events?                    | Use `setMaxListeners()`                   |
| 10 | Which design pattern does EventEmitter use?             | **Observer / Pub-Sub Pattern**            |



💡 15️⃣ Bonus: Check Max Listeners
const EventEmitter = require("events");
const e = new EventEmitter();

e.setMaxListeners(5);


✅ Prevents Node warnings like:

(MaxListenersExceededWarning)

🧩 16️⃣ Real Integration Example

You can combine events with other core modules — e.g., file upload notifications:

const fs = require("fs");
const EventEmitter = require("events");

const fileEvents = new EventEmitter();

fileEvents.on("fileRead", (file) => console.log(`Read completed: ${file}`));

fs.readFile("data.txt", "utf8", (err, data) => {
  if (!err) fileEvents.emit("fileRead", "data.txt");
});


✅ Real-world: Logging, Monitoring, WebSocket notifications.