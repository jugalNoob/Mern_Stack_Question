+-------------------------------------------------------------+
|                    THE EVENT LOOP (libuv)                  |
|  1. TIMERS       : setTimeout(), setInterval()            |
|  2. PENDING I/O  : OS callbacks (errors, TCP)             |
|  3. IDLE/PREPARE : Internal use only                       |
|  4. POLL         : Retrieve new I/O events                |
|  5. CHECK        : setImmediate() callbacks               |
|  6. CLOSE        : socket.on('close')                     |
+-------------------------------------------------------------+




1️⃣ TIMERS Phase

Role: Executes callbacks scheduled by setTimeout and setInterval.

console.log('Start');

setTimeout(() => console.log('Timer done'), 0);

console.log('End');


Output:

Start
End
Timer done


Explanation:

Timer callbacks wait in Timers phase

Executed after synchronous code and microtasks

2️⃣ PENDING I/O Phase

Role: Handles callbacks from asynchronous operations like network requests or filesystem errors.

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log('File read done'); // Pending I/O phase
});


Output:

File read done


Explanation:

OS signals completion

libuv pushes callback to Pending I/O phase

3️⃣ IDLE / PREPARE Phase

Role: Internal libuv operations.

Not directly visible to developers

Prepares event loop for next cycle

💡 No code needed — internal housekeeping

4️⃣ POLL Phase

Role: Retrieves new I/O events, executes callbacks from completed I/O

This is main I/O wait phase

const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', data => console.log('Received:', data.toString())); // Poll phase
});

server.listen(3000);


Explanation:

Poll checks for new network connections or I/O

Executes corresponding callbacks

5️⃣ CHECK Phase

Role: Executes setImmediate() callbacks

Runs after poll phase, regardless of timers

setImmediate(() => console.log('Immediate callback'));


Output:

Immediate callback


Explanation:

Always runs after poll, even if timers exist

Good for scheduling code after I/O

6️⃣ CLOSE Phase

Role: Handles cleanup for closed sockets or handles

const net = require('net');

const server = net.createServer(socket => {
  socket.end(); // triggers 'close'
  socket.on('close', () => console.log('Socket closed')); // Close phase
});

server.listen(3000);


Output:

Socket closed

🔑 Summary Table (Simplified)


| Phase        | Role                                 | Example                    |
| ------------ | ------------------------------------ | -------------------------- |
| TIMERS       | Executes `setTimeout`, `setInterval` | `setTimeout(() => {})`     |
| PENDING I/O  | Handles async OS callbacks           | `fs.readFile()`            |
| IDLE/PREPARE | Internal housekeeping                | —                          |
| POLL         | Waits & executes I/O events          | `net` connections, sockets |
| CHECK        | Executes `setImmediate`              | `setImmediate(() => {})`   |
| CLOSE        | Executes close callbacks             | `socket.on('close')`       |


🔥 Interview Tip

Timers → I/O → Poll → Check → Close
TIMERS = scheduled timers
POLL = main I/O wait phase
CHECK = setImmediate()
CLOSE = socket / handle cleanu