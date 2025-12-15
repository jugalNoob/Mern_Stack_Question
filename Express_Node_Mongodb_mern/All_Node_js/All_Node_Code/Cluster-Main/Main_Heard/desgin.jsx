🧠 Node.js Main Thread — ASCII Design
🧩 1️⃣ Basic View (Main Thread Only)
┌────────────────────────────┐
│        Main Thread         │
│                            │
│  • JavaScript Execution    │
│  • Event Loop              │
│  • Handles I/O callbacks   │
│  • Single-threaded         │
└─────────────┬──────────────┘
              │
              ▼
        CPU Core (1)


✔ One thread
✔ One event loop
✔ Non-blocking I/O

🧩 2️⃣ Main Thread + Event Loop (Core Internals)
┌──────────────────────────────────────────┐
│              Main Thread                 │
│                                          │
│  ┌──────────── Event Loop ────────────┐ │
│  │  timers (setTimeout)               │ │
│  │  I/O callbacks                     │ │
│  │  poll phase                        │ │
│  │  check (setImmediate)              │ │
│  │  close callbacks                   │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Executes JS callbacks sequentially      │
└───────────────────┬──────────────────────┘
                    │
                    ▼
               OS / libuv


✔ JS runs one task at a time
✔ Event loop schedules work

🧩 3️⃣ Main Thread + Thread Pool
                ┌────────────────────┐
                │    Main Thread     │
                │   (Event Loop)     │
                └─────────┬──────────┘
                          │ async task
                          ▼
              ┌─────────────────────────┐
              │    libuv Thread Pool    │
              │  (4 threads default)   │
              └─────────┬──────────────┘
                          │ result
                          ▼
                ┌────────────────────┐
                │    Main Thread     │
                │  Callback queued  │
                └────────────────────┘


✔ Thread pool handles blocking I/O
✔ Main thread stays responsive

🧩 4️⃣ Main Thread + Worker Threads
           ┌─────────────────────────┐
           │        Main Thread      │
           │       (Event Loop)      │
           └──────────┬──────────────┘
                      │ postMessage()
                      ▼
      ┌───────────────────────────────┐
      │        Worker Thread           │
      │  CPU-Heavy JS Computation      │
      └──────────┬────────────────────┘
                      │ result
                      ▼
           ┌─────────────────────────┐
           │        Main Thread      │
           │     Continues I/O       │
           └─────────────────────────┘


✔ CPU work offloaded
✔ Event loop never blocks

🧩 5️⃣ Main Thread inside Cluster Worker
          ┌───────────────────────────┐
          │      Worker Process       │
          │                           │
          │   ┌───────────────────┐ │
          │   │   Main Thread     │ │
          │   │   Event Loop      │ │
          │   └───────────────────┘ │
          └───────────────────────────┘


✔ Every cluster worker has its own main thread
✔ Each has its own event loop

🧠 WHAT THE MAIN THREAD DOES (CLEAR)

| Responsibility    | Main Thread |
| ----------------- | ----------- |
| Run JavaScript    | ✅           |
| Event loop        | ✅           |
| Handle HTTP       | ✅           |
| CPU-heavy loops   | ❌           |
| Async I/O control | ✅           |



⚠️ IMPORTANT INTERVIEW TRAPS

❌ “Node.js is multi-threaded by default”
✔ Node.js runs JS on one main thread

❌ “Thread pool runs JavaScript”
✔ Thread pool runs native code

🎯 INTERVIEW ONE-LINERS (MEMORIZE)

✔ Main thread runs JS
✔ One event loop per main thread
✔ Blocking main thread blocks app
✔ Worker threads protect main thread
✔ Each cluster worker has its own main thread

