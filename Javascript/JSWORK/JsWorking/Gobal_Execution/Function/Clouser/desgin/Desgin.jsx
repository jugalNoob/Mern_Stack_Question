┌─────────────────────────────────────────────────────────────────────────────┐
│                            THE CLOSURE LIFECYCLE                            │
└─────────────────────────────────────────────────────────────────────────────┘

 STEP 1: GLOBAL EXECUTION (Creation)
 ┌───────────────────┬────────────────────────────────────────────────────────┐
 │ GLOBAL MEMORY     │ counter: { f }  | inc: <uninitialized>                 │
 └───────────────────┴────────────────────────────────────────────────────────┘

 STEP 2: const inc = counter()
 ┌───────────────────┐      ┌────────────────────────────────────────────────┐
 │  CALL STACK       │      │   EXECUTION CONTEXT: counter()                 │
 ├───────────────────┤      ├────────────────────────┬───────────────────────┤
 │ counter()         │◄──── │ MEMORY: x = 1          │ CODE: return fn       │
 ├───────────────────┤      └────────────────────────┴───────────────────────┘
 │ Global            │         │
 └───────────────────┘         └─► [Inner function is born with a reference to x]

 STEP 3: inc() is called (The "Persistent Memory" Phase)
 ┌───────────────────┐      ┌────────────────────────────────────────────────┐
 │  CALL STACK       │      │   EXECUTION CONTEXT: inc()                     │
 ├───────────────────┤      ├────────────────────────┬───────────────────────┤
 │ inc()             │◄──── │ MEMORY: (empty)        │ CODE: return [[x]]++  │
 ├───────────────────┤      └───────────┬────────────┴───────────────────────┘
 │ Global            │                  │
 └───────────────────┘                  ▼
                          ┌────────────────────────────┐
                          │   CLOSURE (The "Backpack") │
                          ├────────────────────────────┤
                          │  x: 1  ──► becomes 2       │
                          └────────────────────────────┘

 FINAL OUTPUT:
 console.log(inc()) // Prints 1 (then x becomes 2)
 console.log(inc()) // Prints 2 (then x becomes 3)


 :::::::::::::::::::::: 0000000000000000000::

 🧩 Example 4 — Heap + Closure (CRITICAL)

 function counter() {
  let x = 1
  return () => x++
}
const inc = counter()



STACK
inc ───────────────┐
                   ▼
                 HEAP
┌─────────────────────────────┐
│ innerFunction               │
│ [[Scope]] ───────────┐      │
└──────────────────────┼──────┘
                       ▼
               Lexical Env
               { x: 1 }
