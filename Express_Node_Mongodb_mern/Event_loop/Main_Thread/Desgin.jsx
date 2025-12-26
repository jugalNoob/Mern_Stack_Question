✅ Improved & Interview-Ready Version (Main Thread Only)
🔹 Main Thread (Single Thread)

Use this structure & wording 👇


Main Thread (Single Thread)
│
├─ Global Execution Context
│   └─ Executes Top-Level Code
│
├─ Call Stack
│   └─ Executes functions synchronously (one at a time)
│
├─ Blocking Nature
│   └─ Long tasks block the UI
│
├─ Async APIs (Web APIs)
│   └─ Timers, Fetch, Events are delegated
│
└─ Callback Registration
    └─ Callbacks wait outside main thread



    🧠 Simple Interview Explanation (Use This)

JavaScript runs on a single main thread.
It executes top-level code inside the Global Execution Context.
All functions are executed synchronously via the Call Stack.

Long tasks block the main thread, so async APIs delegate work to Web APIs.
Once completed, callbacks are registered and later executed via the event loop.

🎯 One-Line Summary (Very Important)

JS is single-threaded, but non-blocking because async work is offloaded, not parallelized.