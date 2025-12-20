function Test(){

    let x=10

    console(x++)
}

Test()
Test()
Test()

🔥 WHY THIS HAPPENS (ONE LINE)

Each function call creates a fresh execution context, 
so x always starts from 10.

🧠 Key Rule (THIS is the reason)

Every function call creates a NEW execution context with its OWN memory.

So x does NOT persist between calls.

🧩 Step-by-step execution (ASCII Diagram)

Perfect 👍
Here is a clean, interview-ready ASCII design for your case — execution context + why values don’t persist.

🧠 JavaScript Execution (ASCII Design)
Code
function Test() {
  let x = 10
  console.log(++x)
}

Test()
Test()
Test()

🟦 GLOBAL EXECUTION CONTEXT (GEC)
┌─────────────────────────────┐
│  GLOBAL EXECUTION CONTEXT   │
├─────────────────────────────┤
│  Memory Phase               │
│  ─────────────────────────  │
│  Test → function reference  │
├─────────────────────────────┤
│  Code Phase                 │
│  ─────────────────────────  │
│  Test() calls               │
└─────────────────────────────┘

🟩 FIRST Test() CALL
CALL STACK
──────────
| Test() |
|  GEC   |
──────────

Memory Phase
x → undefined

Code Phase
x = 10
++x → 11
console.log(11)

After Execution
CALL STACK
──────────
|  GEC   |
──────────


❌ x destroyed

🟩 SECOND Test() CALL (NEW CONTEXT)
CALL STACK
──────────
| Test() |
|  GEC   |
──────────

Memory Phase
x → undefined

Code Phase
x = 10
++x → 11
console.log(11)


❌ x destroyed again

🟩 THIRD Test() CALL (NEW CONTEXT)
CALL STACK
──────────
| Test() |
|  GEC   |
──────────

Code Phase
x = 10
++x → 11
console.log(11)

📌 FINAL OUTPUT
11
11
11

🔥 WHY THIS HAPPENS (ONE LINE)

Each function call creates a fresh execution context, so x always starts from 10.

🧠 BONUS: Stack vs Heap (ASCII)
Primitive (Stack)
Test() EC
┌─────────┐
│ x = 11  │  ← destroyed after call
└─────────┘

Object (Heap)
STACK            HEAP
─────            ─────────
obj ──────────▶  { value: 10 }
ref ──────────▶  same memory

🎯 Interview Tip

If you draw this exact ASCII in interviews —
you will outperform 90% candidates.

Want ASCII for:

🔥 Closures (11 12 13)

🔥 var vs let

🔥 Event Loop

🔥 Stack overflow

🔥 Heap reference mutation