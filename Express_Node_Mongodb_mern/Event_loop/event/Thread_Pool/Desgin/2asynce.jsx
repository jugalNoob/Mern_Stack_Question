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