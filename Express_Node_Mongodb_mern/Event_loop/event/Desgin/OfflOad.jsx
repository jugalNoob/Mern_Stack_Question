MAIN THREAD (JS)                  LIBUV (C++)
   +-----------------------+       +------------------------+
   |   Task: Read File     |       |   [ Task Manager ]     |
   |   Status: Heavy!      |       |                        |
   |   Action: OFFLOAD ────┼──────▶| 1. Assign to Worker    |
   |                       |       | 2. Monitor Progress    |
   | **STAYS RESPONSIBLE** |       | 3. Signal when Done    |
   +-----------┬-----------+       +-----------┬------------+
               │                               │
               │                               ▼
               │                    THREAD POOL (Workers)
               │                   +-----------------------+
               │                   |  Thread 1: [Working]  |
               │                   |  Thread 2: [Working]  |
               └─▶ [Continues] ──▶ |  Thread 3: [Idle]     |
                   Runs more JS    +-----------------------+





                   THREAD POOL (C++)          LIBUV MANAGER           EVENT LOOP PHASES
+-----------------------+    +----------------+    +-------------------------+
| [Thread 2]            |    |                |    | 1. TIMERS               |
| Work Done! ✅         |    |   RESULT       |    |                         |
| (File Data Ready)     |────▶   COLLECTOR    |    | 2. I/O POLLING ◄──┐     |
+-----------------------+    |                |    |    (Checks Queue) │     |
                             +-------┬--------+    |                   │     |
                                     │             | 3. SET IMMEDIATE  │     |
                                     ▼             +----------┬--------+     |
                              CALLBACK QUEUE                  │              |
                      +-----------------------------+         │              |
                      | [(err, data) => { log }]    | ◀───────┘              |
                      |   (Waiting for turn...)     |   (Pickup happening)   |
                      +-----------------------------+                        |
                                     │                                       |
                                     ▼                                       |
                              [ CALL STACK ]                                 |
                      +-----------------------------+                        |
                      | console.log(data)           |                        |
                      | (Main Thread finally runs)  |                        |
                      +-----------------------------+                        |