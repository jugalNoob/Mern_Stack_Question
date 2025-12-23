Perfect example 🔥
Now I’ll improve your ASCII design and then explain it like a pro (interview + engine-level).

We’ll explain WHY var causes same value and HOW heap + closure works.

✅ Code (Problem)
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

Output
3
3
3

🧠 CORE IDEA (One line)

All callbacks close over the SAME i because var creates 
ONE shared lexical environment.

🧱 IMPROVED ASCII MEMORY DESIGN

1️⃣ Global Execution Context (GEC)
STACK (Call Stack)
┌────────────────────────────┐
│ Global Execution Context   │
└────────────────────────────┘

2️⃣ Heap Memory (Objects + Closures)
HEAP
┌──────────────────────────────────────────┐
│ setTimeout callback #1                   │
│  [[Scope]] ────────────────┐             │
│                             │             │
│ setTimeout callback #2      │             │
│  [[Scope]] ────────────────┼─────────┐   │
│                             │         │   │
│ setTimeout callback #3      │         │   │
│  [[Scope]] ────────────────┘         │   │
└──────────────────────────────────────────┘
                                            ▼
                                   Lexical Environment
                                   { i: 3 }


🔥 ALL callbacks point to the SAME { i }

🔍 Step-by-Step Engine Explanation
▶ Step 1: var i creation
var i = 0


var is function-scoped

Only ONE i exists

Stored in Global Lexical Environment

Lexical Environment
{ i: 0 }

▶ Step 2: Loop runs

Each iteration:

setTimeout(() => console.log(i))


What happens:

Arrow function is created (heap)

Closure captures reference, not value

Reference → same i

Closure → i (same memory)

▶ Step 3: Loop ends
i === 3


Loop finishes before callbacks execute

▶ Step 4: Event loop executes callbacks

Each callback:

console.log(i)


But i now is:

{ i: 3 }


So output:

3
3
3

❌ Common Wrong Belief

❌ “Each loop iteration creates a new i”
❌ “setTimeout remembers the value”

✅ Closures remember variables, not values

✅ WHY let FIXES IT
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}

Memory difference 👇
HEAP
┌──────────────────────────┐
│ callback #1 → { i: 0 }   │
│ callback #2 → { i: 1 }   │
│ callback #3 → { i: 2 }   │
└──────────────────────────┘


✔ let creates NEW lexical environment per iteration

🎯 Interview-Perfect Answer

“Using var creates a single shared lexical environment, so all closures reference the same variable. By the time callbacks run, the loop has completed and i equals its final value.”

🔥 SUPER ADVANCED NOTE (GC)

Closures keep { i } alive in heap

GC cannot free it

Once callbacks finish → GC cleans memory

✅ Final Rule (Memorize)
var  → one shared scope
let  → new scope per iteration
closure → reference, not value


┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE GLOBAL EXECUTION CONTEXT                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  MEMORY FACE (Shared)         │         CODE FACE (Execution)               │
├───────────────────────────────┼─────────────────────────────────────────────┤
│                               │  for(var i=0; i<10; i++) {                  │
│  var i: 10 <──┐               │     setTimeout( callback )                  │
│               │               │  }                                          │
│               │               └──────────────────────┬──────────────────────┘
│               │                                      │
│               │            WEB APIS / WAITING ROOM   │
│               │           ┌──────────────────────────▼──────────┐
│               │           │ Timer 1: log(i) ──┐                 │
│               │           │ Timer 2: log(i) ──┤  Waiting for    │
│               └───────────┤ ...               │  Loop to finish │
│      (All point to        │ Timer 10: log(i) ─┘                 │
│       same memory)        └──────────────────────────┬──────────┘
│                                                      │
│                            EVENT LOOP PUSHES TO STACK│
│                                                      ▼
│                        ┌──────────────────────────────────────────┐
│                        │   CALL STACK (After Loop is Done)        │
│                        ├──────────────────────────────────────────┤
│                        │ 1. log(i) -> Sees 10, Prints 10          │
│                        │ 2. log(i) -> Sees 10, Prints 10          │
│                        │ ... (continues 10 times)                 │
└────────────────────────┴──────────────────────────────────────────┘


This is the "Loop + setTimeout" problem, which is one of the most famous JavaScript interview questions. In your code, it actually prints 10, 10, 10... (ten times), not 1.

Here is the step-by-step easy explanation and the advanced ASCII design to show why this happens.

The Easy Explanation: The "Waiting Room"
The Loop runs fast: The for loop finishes almost instantly. It counts from 0 to 9, and then i becomes 10, which stops the loop.

The var issue: Because you used var, there is only one single i variable for the whole script. It is shared.

The setTimeout Delay: setTimeout tells the function inside it: "Go wait in the hallway. I'll call you when the loop is totally finished."

The Result: By the time the first setTimeout function walks back into the room to run console.log(i), the loop is already over and the shared i is already 10. Every single one of the 10 functions looks at the same i and sees 10.

Advanced ASCII Design: The Shared Memory Trap
Plaintext

┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE GLOBAL EXECUTION CONTEXT                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  MEMORY FACE (Shared)         │         CODE FACE (Execution)               │
├───────────────────────────────┼─────────────────────────────────────────────┤
│                               │  for(var i=0; i<10; i++) {                  │
│  var i: 10 <──┐               │     setTimeout( callback )                  │
│               │               │  }                                          │
│               │               └──────────────────────┬──────────────────────┘
│               │                                      │
│               │            WEB APIS / WAITING ROOM   │
│               │           ┌──────────────────────────▼──────────┐
│               │           │ Timer 1: log(i) ──┐                 │
│               │           │ Timer 2: log(i) ──┤  Waiting for    │
│               └───────────┤ ...               │  Loop to finish │
│      (All point to        │ Timer 10: log(i) ─┘                 │
│       same memory)        └──────────────────────────┬──────────┘
│                                                      │
│                            EVENT LOOP PUSHES TO STACK│
│                                                      ▼
│                        ┌──────────────────────────────────────────┐
│                        │   CALL STACK (After Loop is Done)        │
│                        ├──────────────────────────────────────────┤
│                        │ 1. log(i) -> Sees 10, Prints 10          │
│                        │ 2. log(i) -> Sees 10, Prints 10          │
│                        │ ... (continues 10 times)                 │
└────────────────────────┴──────────────────────────────────────────┘
How to Fix It (Improvement)
If you want it to print 0, 1, 2, 3..., you just need to change one word: Change var to let.

Why let works: Unlike var, let creates a new memory box for i every single time the loop repeats. Each setTimeout gets its own private "snapshot" of i at that moment.


Feature,var i,let i
Scope,Function/Global (Shared),Block (New for each loop)
Memory,1 box for all loops,10 separate boxes
Output,"10, 10, 10...","0, 1, 2, 3..."


This is the "Loop + setTimeout" problem, which is one of the most famous JavaScript interview questions. In your code, it actually prints 10, 10, 10... (ten times), not 1.Here is the step-by-step easy explanation and the advanced ASCII design to show why this happens.The Easy Explanation: The "Waiting Room"The Loop runs fast: The for loop finishes almost instantly. It counts from 0 to 9, and then i becomes 10, which stops the loop.The var issue: Because you used var, there is only one single i variable for the whole script. It is shared.The setTimeout Delay: setTimeout tells the function inside it: "Go wait in the hallway. I'll call you when the loop is totally finished."The Result: By the time the first setTimeout function walks back into the room to run console.log(i), the loop is already over and the shared i is already 10. Every single one of the 10 functions looks at the same i and sees 10.Advanced ASCII Design: The Shared Memory TrapPlaintext┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE GLOBAL EXECUTION CONTEXT                          │
├─────────────────────────────────────────────────────────────────────────────┤
│  MEMORY FACE (Shared)         │         CODE FACE (Execution)               │
├───────────────────────────────┼─────────────────────────────────────────────┤
│                               │  for(var i=0; i<10; i++) {                  │
│  var i: 10 <──┐               │     setTimeout( callback )                  │
│               │               │  }                                          │
│               │               └──────────────────────┬──────────────────────┘
│               │                                      │
│               │            WEB APIS / WAITING ROOM   │
│               │           ┌──────────────────────────▼──────────┐
│               │           │ Timer 1: log(i) ──┐                 │
│               │           │ Timer 2: log(i) ──┤  Waiting for    │
│               └───────────┤ ...               │  Loop to finish │
│      (All point to        │ Timer 10: log(i) ─┘                 │
│       same memory)        └──────────────────────────┬──────────┘
│                                                      │
│                            EVENT LOOP PUSHES TO STACK│
│                                                      ▼
│                        ┌──────────────────────────────────────────┐
│                        │   CALL STACK (After Loop is Done)        │
│                        ├──────────────────────────────────────────┤
│                        │ 1. log(i) -> Sees 10, Prints 10          │
│                        │ 2. log(i) -> Sees 10, Prints 10          │
│                        │ ... (continues 10 times)                 │
└────────────────────────┴──────────────────────────────────────────┘



Exactly! You've got the core concept. By using let, you are essentially creating a unique Closure for every single iteration of the loop.

Since you asked for the HEAP view with let, here is the advanced ASCII design showing how memory is partitioned.

The "Block Scope" Memory Layout (let version)
When you use let, the engine creates a new Lexical Environment for every loop. Each setTimeout callback points to a different memory record.

Plaintext

┌─────────────────────────────────────────────────────────────────────────────┐
│                           JS HEAP & SCOPE CHAIN (LET)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│   CALL STACK          │          MEMORY (Lexical Environments)              │
├───────────────────────┼─────────────────────────────────────────────────────┤
│                       │                                                     │
│ [ Empty ]             │  Iteration 0: { i: 0 } <───┐                        │
│ (Loop finished)       │  Iteration 1: { i: 1 } <───┼─┐                      │
│                       │  Iteration 2: { i: 2 } <───┼─┼─┐                    │
│                       │  ...                       │ │ │                    │
│                       │  Iteration 9: { i: 9 }     │ │ │                    │
│                       │                            │ │ │                    │
├───────────────────────┴────────────────────────────┼─┼─┼────────────────────┤
│                    TASK QUEUE (Waiting Room)       │ │ │                    │
├────────────────────────────────────────────────────┼─┼─┼────────────────────┤
│ 1. [ () => console.log(i) ] ───(Refers to)─────────┘ │ │                    │
│ 2. [ () => console.log(i) ] ───(Refers to)───────────┘ │                    │
│ 3. [ () => console.log(i) ] ───(Refers to)─────────────┘                    │
└─────────────────────────────────────────────────────────────────────────────┘

 RESULT: When the Event Loop pushes these to the Stack, each log 
 looks at its own unique "i" box.

 Exactly! You've got the core concept. By using let, you are essentially creating a unique Closure for every single iteration of the loop.

Since you asked for the HEAP view with let, here is the advanced ASCII design showing how memory is partitioned.

The "Block Scope" Memory Layout (let version)
When you use let, the engine creates a new Lexical Environment for every loop. Each setTimeout callback points to a different memory record.

Plaintext

┌─────────────────────────────────────────────────────────────────────────────┐
│                           JS HEAP & SCOPE CHAIN (LET)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│   CALL STACK          │          MEMORY (Lexical Environments)              │
├───────────────────────┼─────────────────────────────────────────────────────┤
│                       │                                                     │
│ [ Empty ]             │  Iteration 0: { i: 0 } <───┐                        │
│ (Loop finished)       │  Iteration 1: { i: 1 } <───┼─┐                      │
│                       │  Iteration 2: { i: 2 } <───┼─┼─┐                    │
│                       │  ...                       │ │ │                    │
│                       │  Iteration 9: { i: 9 }     │ │ │                    │
│                       │                            │ │ │                    │
├───────────────────────┴────────────────────────────┼─┼─┼────────────────────┤
│                    TASK QUEUE (Waiting Room)       │ │ │                    │
├────────────────────────────────────────────────────┼─┼─┼────────────────────┤
│ 1. [ () => console.log(i) ] ───(Refers to)─────────┘ │ │                    │
│ 2. [ () => console.log(i) ] ───(Refers to)───────────┘ │                    │
│ 3. [ () => console.log(i) ] ───(Refers to)─────────────┘                    │
└─────────────────────────────────────────────────────────────────────────────┘

 RESULT: When the Event Loop pushes these to the Stack, each log 
 looks at its own unique "i" box.
Why this is the "Advanced" way to think about it:
Block Scoping: In your previous var example, there was only one box for i. With let, the { } brackets of the for loop act like a "factory" creating a new scope box every time the loop repeats.

Closure Capture: When the arrow function () => { console.log(i) } is created, it captures the variable i that exists in that specific moment.

No more 10, 10, 10: Since Callback #1 is linked to the box where i is 0, it will always print 0, even if Callback #10 is linked to a box where i is 9.


Feature,var Loop,let Loop
Memory Allocation,One shared box (Global/Function),10 separate boxes (Block)
Callback Connection,All callbacks point to the same box,Each callback points to its own box
Final Value of i,10 (The loop exit condition),Each box keeps the value it had