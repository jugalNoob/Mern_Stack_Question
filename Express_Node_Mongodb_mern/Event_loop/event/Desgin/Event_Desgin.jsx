+-------------------------------------------------------------+
      |                       NODE.JS RUNTIME                       |
      +-------------------------------------------------------------+
      |  [ CALL STACK ]  <--- (Top Level Code / Functions)          |
      |        |                                                    |
      |        v                                                    |
      |  [ NODE/WEB APIs ] ---> (Timers, File I/O, Network, etc.)   |
      +--------+----------------------------------------------------+
               |
               | (When finished, callbacks are sent to phases)
               v
      +-------------------------------------------------------------+
      |                    THE EVENT LOOP (libuv)                   |
      |  +-------------------------------------------------------+  |
      |  |  1. TIMERS       : setTimeout(), setInterval()        |  |
      |  +-------------------------------------------------------+  |
      |  |  2. PENDING I/O  : OS callbacks (errors, TCP)         |  |
      |  +-------------------------------------------------------+  |
      |  |  3. IDLE/PREPARE : Internal use only                  |  |
      |  +-------------------------------------------------------+  |
      |  |  4. POLL         : Retrieve new I/O events            |  |
      |  +-------------------------------------------------------+  |
      |  |  5. CHECK        : setImmediate() callbacks           |  |
      |  +-------------------------------------------------------+  |
      |  |  6. CLOSE        : socket.on('close')                 |  |
      |  +---------------------------+---------------------------+  |
      +------------------------------|------------------------------+
               ^                     |
               |       (Loop)        |
               +---------------------+
      
      [ MICROTASK QUEUE ] (process.nextTick & Promises)
      *Executed BETWEEN every phase of the Event Loop*


      🚀 The "Queue Priority" Hierarchy
When the Main Thread finishes its current task, it checks the queues in this strict order:

process.nextTick Queue: (Highest Priority - handled immediately after the current operation).

Microtask Queue: (Promises / await resolutions).

Macrotask Queue: (Timers, I/O Callbacks, setImmediate).

🎨 The "Complete" Raw ASCII Design
This diagram shows how nextTick can actually "starve" your I/O and Thread Pool results because it keeps cutting in line.



MAIN THREAD (JS)                  QUEUES (Priority Order)
   +-----------------------+       +-------------------------------+
   | console.log('S')      |       | 1. nextTick Queue  [🔥🔥🔥]    |
   | process.nextTick(cb)  |──▶ ✅ |    (Runs after current op)    |
   |                       |       +-------------------------------+
   | await fss.readFile()  |──▶ 📦 | 2. Microtask Queue [⭐⭐]      |
   |                       |       |    (Promises/Await)           |
   +-----------┬-----------+       +-------------------------------+
               │                   | 3. Callback Queue  [🕒]       |
               ▼                   |    (Timers/IO/setImmediate)   |
        [ CHECKING QUEUES ]        +-------------------------------+
               │                                   │
               └───────────────────┬───────────────┘
                                   │
      (Node will EMPTY Queue 1, then Queue 2, then move to Loop Phases)