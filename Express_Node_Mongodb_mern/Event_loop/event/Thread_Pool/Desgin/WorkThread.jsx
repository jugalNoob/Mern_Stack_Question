┌─────────────────────────────────────────────────────────┐
       │                   MAIN THREAD (V8 Engine)               │
       │  (Executes your JavaScript, handles the Event Loop)     │
       └─────────────┬───────────────────────────────┬───────────┘
                     │                               │
           [ THE OFFLOAD ]                   [ THE PARALLELISM ]
                     │                               │
      ┌──────────────▼──────────────┐   ┌────────────▼────────────┐
      │     LIBUV THREAD POOL       │   │     WORKER THREADS      │
      │      (Native Workers)       │   │    (Child JS Engines)   │
      ├─────────────────────────────┤   ├─────────────────────────────┤
      │ Task: Read 1GB File         │   │ Task: Image Compression     │
      │ Task: Hash a Password       │   │ Task: Prime Number Search   │
      │ Task: Compress a Folder     │   │ Task: Data Analysis         │
      └─────────────────────────────┘   └─────────────────────────────┘
             (Internal C++)                   (Custom JavaScript)