Question: Does Node.js use the Thread Pool for everything? Answer: No. 
* Thread Pool is used for: File I/O (fs), DNS lookups, and Crypto.



UV_THREADPOOL_SIZE

Main Thread (Stack)
-------------------
console.log('start') -> prints "start"
setTimeout() -> scheduled in Timers phase
fs.readFile() -> sent to Thread Pool
setImmediate() -> scheduled in Check phase

Thread Pool (libuv)
-------------------
fs.readFile() -> Reads file asynchronously
Callback ready -> sent back to Poll phase

Event Loop Phases
-----------------
1. Timers      -> setTimeout (after 1000ms)
2. I/O Poll    -> fs.readFile callback
3. Check       -> setImmediate callback
4. Close Callbacks (not used here)



======================= NODE.JS RUNTIME =======================
MAIN THREAD (Call Stack)         LIBUV THREAD POOL (Hidden)
+-----------------------+       +-----------------------------+
| GEC (Running...)      |       | Thread 1: Reading jugal.txt | 
| console.log('start')  |──▶ ✅ |                             |
+-----------------------+       +-----------------------------+
           │
           ▼
EVENT LOOP PHASES (The Cycle)
_______________________________________________________________
| 1. TIMERS      | setTimeout callback? (Wait 1000ms)         |
|----------------|--------------------------------------------|
| 2. I/O POLLING | fs.readFile done? ──▶ Move to Callback Queue|
|----------------|--------------------------------------------|
| 3. CHECK       | setImmediate ──▶ console.log('setImmediated')|
|________________|____________________________________________|




MAIN THREAD (JS)          LIBUV (C++)            THREAD POOL
+--------------------+    +----------------+    +------------------+
| console.log('S')   |    |                |    | [Thread 1] IDLE  |
|                    |    |   OFFLOAD      |    |                  |
| fs.readFile()  ────┼───▶|  Requests ─────┼───▶| [Thread 2] BUSY  |
|                    |    |   Worker       |    |   (Reading Disk) |
| console.log('E')   |    |                |    |                  |
+--------------------+    +-------┬--------+    +--------┬---------+
          │                       │                      │
          ▼                       ▼                      │
    (CONTINUES)             (MONITORING)          (FILE DATA READY)
                                  │                      │
                                  └──────────────────────┘
                                           │
                                           ▼
                                    CALLBACK QUEUE
                          [ (err, data) => { console.log } ]






                                             ┌─────────────────────────────┐
                   │        MAIN THREAD          │
                   │  (Call Stack / JS Engine)   │
                   └─────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                 Global Execution Context                │
│---------------------------------------------------------│
│ console.log('start')   ──► prints "start"              │
│ setTimeout(() => {...},1000)  ──► Timers phase         │
│ fs.readFile(...)  ──► sent to Thread Pool (libuv)      │
│ setImmediate(...) ──► scheduled in Check phase         │
└─────────────────────────────────────────────────────────┘
                              │
                              ▼
                     ┌───────────────────┐
                     │    THREAD POOL     │
                     │   (libuv Workers) │
                     └───────────────────┘
                              │
         fs.readFile reads file asynchronously
                              │
                              ▼
┌─────────────────────────────────────────────────────────┐
│                   EVENT LOOP PHASES                     │
│---------------------------------------------------------│
│ 1️⃣ TIMERS (setTimeout)                                 │
│    - Runs callbacks whose timers expired               │
│    - setTimeout(() => console.log('jugal'), 1000)     │
│                                                         │
│ 2️⃣ PENDING I/O / POLL (fs.readFile)                   │
│    - File read finished? Yes → run callback            │
│    - console.log(file contents)                        │
│                                                         │
│ 3️⃣ CHECK (setImmediate)                                │
│    - Runs all setImmediate callbacks                   │
│    - console.log('setImmediate')                       │
│                                                         │
│ 4️⃣ CLOSE CALLBACKS (not used here)                    │
└─────────────────────────────────────────────────────────┘

