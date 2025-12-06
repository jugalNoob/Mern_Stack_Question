import EventEmitter from 'node:events'
const userEvents = new EventEmitter();

// 👂 Listen only once
userEvents.once('greet', (username) => {
  console.log(username+'👋 Hi Jugal Sharma (this runs only once)');
});

// 🔥 Fire (emit) the same event multiple times
userEvents.emit('greet');
userEvents.emit('greet');
userEvents.emit('greet' , 'jugal shatr');



const EventEmitter = require('events');
const appEvents = new EventEmitter();

appEvents.once('start', () => {
  console.log('🚀 Server started successfully');
});

// Simulate multiple startup calls
appEvents.emit('start');
appEvents.emit('start');


| Method               | Behavior                                                                      |
| -------------------- | ----------------------------------------------------------------------------- |
| `.on('event', fn)`   | Runs **every time** the event is emitted                                      |
| `.once('event', fn)` | Runs **only the first time** the event is emitted, then automatically removed |



:::::::::::::::::::::::::::::::::::::::::::::::::


import fs from 'node:fs'
import EventEmitter from 'node:events'


const emitter=new EventEmitter()


// emitter.on('greet' , ()=>{
//     console.log('hello jugal sharma')
// })



// emitter.emit('greet')

// -->>You can also pass argumnet while emitting 





// emitter.on('greet' , (username)=>{
//     console.log(username)
// })
// emitter.emit('greet' , 'jugal sharma')


| Concept                  | Description                                   |
| ------------------------ | --------------------------------------------- |
| **EventEmitter**         | Core Node.js class for event-driven design    |
| **Modular Design**       | Separated logic into multiple files           |
| **emit()**               | Trigger events                                |
| **on()**                 | Listen for events                             |
| **Real-time Simulation** | Used `setTimeout()` to simulate real activity |

👉 Use .on() to listen,
👉 Use .emit() to fire,
👉 And use events when many actions depend on one activity — it keeps your code clean, async, and modular.


| You Want To...               | Then Use...         |
| ---------------------------- | ------------------- |
| React when something happens | `.on()`             |
| Trigger that “something”     | `.emit()`           |
| Run listener only once       | `.once()`           |
| Detach listener              | `.removeListener()` |


Q why use this in Node.js ;
✅ With Events
const EventEmitter = require('events');
const userEvents = new EventEmitter();

userEvents.on('greet', () => console.log('hi jugal sharma'));
userEvents.emit('greet');
userEvents.emit('greet');


Q Now your code is event-driven:

Multiple parts of your app can listen for 'greet'.

You can add or remove listeners without changing the main flow.

Perfect for real-time or async tasks.