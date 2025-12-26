MAIN THREAD (JS)                  EVENT LOOP
   +-----------------------+       +------------------------+
   |  Call: Test()         |       |  1. Timers             |
   |  await fss.readFile   |──┐    |                        |
   |  (Function Paused)    |  │    |  2. I/O Poll Phase  ◀──┼──┐
   +-----------┬-----------+  │    |     (Data Arrives)     |  │
               │              │    +-----------┬------------+  │
               ▼              │                │               │
        [ STACK EMPTY ]       │                ▼               │
     (Can run other JS)       │       [ MICROTASK QUEUE ]      │
               │              │       +------------------+     │
               │              └──────▶| Resume Test()    |     │
               │                      +--------┬---------+     │
               │                               │               │
               ▼                               ▼               │
       [ CALL STACK ]                  [ THREAD POOL ]         │
   +-----------------------+       +------------------------+  │
   | console.log(first)    | ◀─────| Worker Thread (C++)    |──┘
   +-----------------------+       | Reads jugal.txt        |
                                   +------------------------+