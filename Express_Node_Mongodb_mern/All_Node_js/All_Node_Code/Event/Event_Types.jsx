
| Method                             | Description                    |
| ---------------------------------- | ------------------------------ |
| `.on(event, listener)`             | Adds listener, can be multiple |
| `.once(event, listener)`           | Fires only once                |
| `.emit(event, args...)`            | Trigger event                  |
| `.removeListener(event, listener)` | Remove specific listener       |
| `.removeAllListeners(event)`       | Remove all listeners           |
| `.listeners(event)`                | Get list of listeners          |




const emitter = new EventEmitter();

// 1️⃣ .once() → runs only the first time the event is emitted
emitter.once('greet', () => {
  console.log('jugal sharma');
});

// 2️⃣ Emit the event
emitter.emit('greet'); // Output: 'jugal sharma'
emitter.emit('greet'); // No output, because .once() removes listener after first call

// 3️⃣ .listeners() → returns an array of listeners for the event
console.log(emitter.listeners('greet')); // []

// 4️⃣ .removeAllListeners() → removes all listeners for an event
emitter.removeAllListeners('greet'); // No effect here, already empty

// 5️⃣ .removeListener() → remove a specific listener
const greetFn = () => console.log('Hello again');
emitter.on('greet', greetFn);
emitter.removeListener('greet', greetFn);

// 6️⃣ Check listeners again
console.log(emitter.listeners('greet')); // []



| Method                              | Purpose                                              |
| ----------------------------------- | ---------------------------------------------------- |
| `emitter.on(event, fn)`             | Adds a listener for `event` (multiple times allowed) |
| `emitter.once(event, fn)`           | Adds a listener that runs **only once**              |
| `emitter.emit(event, args...)`      | Triggers the event, calling all listeners            |
| `emitter.listeners(event)`          | Returns an array of listeners for that event         |
| `emitter.removeListener(event, fn)` | Removes a **specific listener**                      |
| `emitter.removeAllListeners(event)` | Removes **all listeners** for that event             |



3️⃣ Common Mistakes in Your Code

emiter..removeListene() → ❌ Typo, should be emitter.removeListener()

emiter..listeners() → ❌ Typo, should be emitter.listeners('eventName')

removeAllListeners('grret') → ❌ Typo in event name → will not remove greet listeners

4️⃣ Key Notes for Interviews

.once() is often asked: “What happens if I emit twice?” → ✅ Only triggers the first time.

.listeners() → useful to debug active listeners.

Always check event name spelling. EventEmitter is case-sensitive.

.removeListener() needs exact function reference; arrow functions inline cannot be removed directly.

If you want, I can make a diagram showing .on(), .once(), .emit(), .removeListener() workflow — it’s very helpful for interviews.