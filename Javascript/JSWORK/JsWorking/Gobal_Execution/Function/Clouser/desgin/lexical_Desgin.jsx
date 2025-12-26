+--------------------------------------------------+
|              GLOBAL EXECUTION CONTEXT            |
+--------------------------------------------------+
| Memory Phase                                     |
| ------------------------------------------------ |
| Outer  --->  [Function Object]  (Heap)           |
+--------------------------------------------------+
| Code Phase                                       |
| ------------------------------------------------ |
| console.log(Outer())                             |
| console.log(Outer(), 'lexical scope')            |
+--------------------------------------------------+



📦 Heap Memory (Functions Stored Here)
+-------------------- HEAP MEMORY --------------------+
|                                                      |
|  Outer()  --->  function object                      |
|                  +-----------------------------+    |
|                  |  let x = 12                  |    |
|                  |  inner() function            |    |
|                  +-----------------------------+    |
|                                                      |
|  inner()  --->  function object                      |
|                  +-----------------------------+    |
|                  | console.log(x++)             |    |
|                  +-----------------------------+    |
+------------------------------------------------------+


📚 Call Stack (Execution Order)
When Outer() is called



+------------------+
|  Inner() EC      |
|------------------|
| console.log(x++) |
+------------------+
|  Outer() EC      |
|------------------|
| x = 12           |
| inner() call     |
+------------------+
|  Global EC       |
+------------------+



🔗 Lexical Scope Chain (VERY IMPORTANT)
inner() Scope
     |
     v
Outer() Scope
     |
     v
Global Scope


➡️ inner() does NOT find x locally
➡️ Looks upward → finds x in Outer()
➡️ This is Lexical Scoping

🔁 What Happens Internally
Outer() called
   |
   |--> create Outer EC
   |--> x = 12
   |--> inner() called
            |
            |--> create Inner EC
            |--> x found via lexical scope
            |--> print 12
            |--> x becomes 13
   |
   |--> Outer returns undefined

🎯 Short Interview-Friendly Diagram
Heap Memory           Call Stack

Outer()  -------->    Global EC
inner()  -------->    Outer EC
                      Inner EC



                      📝 One-Line Exam Answer

Inner functions are allocated in heap memory, but their references are created only inside the parent function’s execution context when the parent function is executed.





================================================================================
                           JS EXECUTION CONTEXT STACK
================================================================================

   [ GLOBAL EXECUTION CONTEXT ]
   ┌─────────────────────────────┬──────────────────────────────────────────┐
   │ MEMORY FACE (Heap/Global)   │ CODE FACE (Execution)                    │
   ├─────────────────────────────┼──────────────────────────────────────────┤
   │ Outer: [Function Object]    │ 1. console.log(Outer())  ──┐ (Call #1)    │
   │                             │ 2. console.log(Outer())  ──┼─┐ (Call #2)  │
   └─────────────────────────────┴────────────────────────────┼─┼────────────┘
                                                              │ │
       ┌──────────────────────────────────────────────────────┘ │
       ▼                                                        │
   [ EXECUTION CONTEXT: Outer #1 ]                              │
   ┌─────────────────────────────┬──────────────────────────┐   │
   │ MEMORY FACE                 │ CODE FACE                │   │
   ├─────────────────────────────┼──────────────────────────┤   │
   │ x: 12                       │ let x = 12;              │   │
   │ inner: [Function Object]    │ inner(); ──┐ (Calls)     │   │
   └───────────────▲─────────────┴────────────┼─────────────┘   │
                   │                          ▼                 │
                   │             [ EXECUTION CONTEXT: inner ]   │
                   │             ┌──────────────────────────┐   │
                   │             │ CODE FACE                │   │
                   │             ├──────────────────────────┤   │
                   └─────────────┤ console.log(x++)          │   │
                    (Scope Chain)│ // Finds x=12 in Outer   │   │
                                 └──────────────────────────┘   │
                                                                │
       ┌────────────────────────────────────────────────────────┘
       ▼
   [ EXECUTION CONTEXT: Outer #2 ]
   ┌─────────────────────────────┬──────────────────────────┐
   │ MEMORY FACE (New Allocation)│ CODE FACE                │
   ├─────────────────────────────┼──────────────────────────┤
   │ x: 12                       │ let x = 12;              │
   │ inner: [Function Object]    │ inner(); ──┐ (Calls)     │
   └───────────────▲─────────────┴────────────┼─────────────┘
                   │                          ▼                 │
                   │             [ EXECUTION CONTEXT: inner ]   │
                   │             ┌──────────────────────────┐   │
                   │             │ CODE FACE                │   │
                   │             ├──────────────────────────┤   │
                   └─────────────┤ console.log(x++)          │   │
                    (Scope Chain)│ // Finds x=12 (New Box)   │   │
                                 └──────────────────────────┘   │
================================================================================