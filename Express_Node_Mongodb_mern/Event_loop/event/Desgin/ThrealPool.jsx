[ THE MAIN THREAD ]
               |
    1. SYNCHRONOUS CODE (V8) ----------------> [ CALL STACK ]
               |                                     |
               | (If Async Task)                     |
    2. OFFLOAD TO LIBUV <----------------------------+
               |
    ___________v____________________________________________________
   |  [ LIBUV CONTAINER ]                                           |
   |                                                                |
   |   A. EVENT LOOP PHASES             B. WORKER THREAD POOL       |
   |  +--------------------+           +-----------------------+    |
   |  | 1. Timers          |           | [ Thread 1 ] (FS)     |    |
   |  | 2. I/O (Network)   |<----------| [ Thread 2 ] (Crypto) |    |
   |  | 3. Check (setImm)  |           | [ Thread 3 ] (DB)     |    |
   |  +---------|----------+           +-----------------------+    |
   |____________|___________________________________________________|
                |
    3. TASK COMPLETION 
                |
    ____________v___________________________________________________
   |  [ QUEUE SYSTEM ]                                              |
   |                                                                |
   |   A. MACRO-TASK QUEUE             B. MICRO-TASK QUEUE          |
   |      (Timer/IO callbacks)            (Promises / nextTick)     |
   |________________________________________________________________|
                |                                ^
    4. EVENT LOOP BRIDGE                         |
       (Checks if Stack is empty) ---------------+ (VIP Pass: Micro-tasks
                                                    run before next phase)