1️⃣ Step-by-step Execution

Emitter created → emitter object exists.

.once('greet', callback) → callback is registered, but not executed yet.

emitter.emit('greet') → triggers the callback immediately, because emit synchronously calls the listener.

Output:

jugal sharma


.once() removes the listener after first call, so second emit does nothing.

emitter.emit('greet') → no listener, nothing happens.

console.log('hello world') → prints last:

hello world

2️⃣ Important Concept

EventEmitter callbacks are synchronous by default.

When you call emit(), Node.js immediately calls all registered listeners for that event, before moving to the next line of code.

This is different from setTimeout or process.nextTick, which are asynchronous.

✅ Visual Timeline
1. Register 'greet' listener (once)
2. emit('greet') 
   → callback runs synchronously: console.log('jugal sharma')
3. emit('greet') 
   → no callback (already removed)
4. console.log('hello world')


Output:

jugal sharma
hello world
3

️⃣ Key Interview Point

EventEmitter callbacks run synchronously by default.
If you want async behavior, wrap your callback in setImmediate or process.nextTick:

emitter.once('greet', () => {
  setImmediate(() => console.log('async greet'));
});
emitter.emit('greet');
console.log('hello world');


Output:

hello world
async greet

::::::::::::::::::::::::::::::::::::::::::: 0000000000000000000000000000

🔹 Basic Level

What is the events module in Node.js?

Built-in module to handle asynchronous events.

What is an EventEmitter?

A class in Node.js used to emit and listen for events.

Difference between .on() and .once()?

.on() → runs every time the event is emitted

.once() → runs only once, then listener is removed

How do you emit an event?

emitter.emit('eventName', arg1, arg2);


How do you listen for an event?

emitter.on('eventName', (arg) => { console.log(arg); });


What happens if you emit an event with no listeners?

✅ Nothing happens, Node.js doesn’t throw an error.

🔹 Intermediate Level

How do you remove a specific listener?

const fn = () => console.log('Hi');
emitter.on('event', fn);
emitter.removeListener('event', fn);


How do you remove all listeners for an event?

emitter.removeAllListeners('eventName');


How do you get the list of listeners for an event?

emitter.listeners('eventName'); // returns array of functions


What is the max listener warning?

Default max is 10 listeners per event.

Can be changed: emitter.setMaxListeners(20);

Prevents memory leaks from too many listeners.

What happens if you throw an error inside an event listener?

If error event is not handled → Node.js process crashes.

Always listen to error events for streams/EventEmitters.

🔹 Advanced Level

Explain process.on('uncaughtException') vs try-catch in events.

uncaughtException handles errors not caught in synchronous code.

Try-catch cannot catch async errors inside event callbacks.

Can EventEmitter cause memory leaks? How?

If you attach too many listeners and never remove them, Node logs a MaxListenersExceededWarning.

Difference between process.nextTick() and EventEmitter callbacks?

nextTick() callbacks run before any event loop phase, giving higher priority than events.

How do you pass data with events?

emitter.on('greet', (name) => console.log(`Hello ${name}`));
emitter.emit('greet', 'Jugal');


Difference between .once() and .on() in a server scenario?

.once() → used for events that should happen only once (e.g., connection, initialization)

.on() → for events that happen multiple times (e.g., requests, data chunks)

🔹 Tricky / Interview Trap Questions

What happens if you emit error event but don’t listen for it?

Node.js throws uncaught 'error' exception → process crashes

Can EventEmitter starve the event loop?

Yes, if listeners execute blocking code or keep emitting events recursively

Difference between removeListener and removeAllListeners?

removeListener → remove specific function

removeAllListeners → remove all functions attached to an event

Explain EventEmitter vs streams events.

Streams are special EventEmitter objects with events like data, end, error

What is listener count and why it matters?

emitter.listenerCount('eventName'); // returns number of listeners


Useful to debug memory leaks or conditional logic depending on active listeners

🔹 Example Code Snippet
const EventEmitter = require('events');
const emitter = new EventEmitter();

// on vs once
emitter.on('greet', (name) => console.log('Hello', name));
emitter.once('welcome', () => console.log('Welcome!'));

// emit events
emitter.emit('greet', 'Jugal');   // Hello Jugal
emitter.emit('welcome');           // Welcome!
emitter.emit('welcome');           // Won't run

// listeners
console.log(emitter.listeners('greet')); // [ [Function] ]

// remove listener
const fn = () => console.log('Bye');
emitter.on('bye', fn);
emitter.removeListener('bye', fn);
