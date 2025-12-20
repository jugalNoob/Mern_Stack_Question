Perfect 👌
Now this makes sense — you added two function calls, and your diagram is actually conceptually right.
Let me explain why this is correct, then give you a clean, final PERFECT ASCII that you can reproduce in interviews.

1️⃣ WHY TWO FUNCTION CALLS CREATE TWO EXECUTION CONTEXTS
Your code logic (simplified)
console.log(x);

var x = 10;

function Name() {
  console.log(10);
}

Name();
Name();

🔥 What REALLY happens
✅ Global Execution Context (GEC)

Created once

Inside it:

Memory Phase

Code Phase

✅ Each Name() call creates a NEW Function Execution Context (FEC)

So with two calls:

Name()  ← 1st Function Execution Context
Name()  ← 2nd Function Execution Context


They are separate, independent, and created fresh every time.

👉 That is exactly why duplicating the Memory + Code box is CORRECT.

2️⃣ Call Stack Flow (VERY IMPORTANT)
🧱 Call Stack (Step-by-Step)
Call Stack
────────────────────
| Name()  (2nd)     |
────────────────────
| Name()  (1st)     |
────────────────────
| Global            |
────────────────────


Execution order:

1️⃣ First Name() pushed
2️⃣ It finishes → popped
3️⃣ Second Name() pushed
4️⃣ It finishes → popped

Finally:

Call Stack
────────────────────
| Global            |
────────────────────

3️⃣ WHY YOUR DESIGN IS LOGICALLY PERFECT

You showed:

✔ Global Execution Context
✔ Memory Phase & Code Phase
✔ Function stored in memory
✔ Two separate execution blocks for two calls
✔ Same function body, different executions

This is exactly how V8 thinks.

4️⃣ FINAL — PERFECT ASCII VERSION (INTERVIEW GOLD 🥇)
🧠 JavaScript Execution Context (Two Function Calls)
┌───────────────────────────────────────────────┐
│        Global Execution Context (GEC)          │
├─────────────────────────┬─────────────────────┤
│     Memory Phase         │     Code Phase      │
├─────────────────────────┼─────────────────────┤
│ x    → undefined         │ console.log(x)      │
│ Name → function(){}      │ → undefined         │
│                         │ x = 10               │
│                         │ Name()               │
│                         │ Name()               │
└─────────────────────────┴─────────────────────┘

🧱 Function Execution Context – 1st Call
┌─────────────────────────────────────┐
│   Function Execution Context #1     │
├──────────────────┬──────────────────┤
│ Memory Phase     │ Code Phase       │
├──────────────────┼──────────────────┤
│ (no variables)   │ console.log(10)  │
└──────────────────┴──────────────────┘

🧱 Function Execution Context – 2nd Call
┌─────────────────────────────────────┐
│   Function Execution Context #2     │
├──────────────────┬──────────────────┤
│ Memory Phase     │ Code Phase       │
├──────────────────┼──────────────────┤
│ (no variables)   │ console.log(10)  │
└──────────────────┴──────────────────┘

🖨 Output
undefined
10
10

5️⃣ INTERVIEW ONE-LINER (🔥 MUST MEMORIZE)

Every function call creates a new execution context with its own memory and execution phase, even if the function code is the same.

6️⃣ SMALL LABEL FIXES (IMPORTANT)

Use interview-correct terms:

❌ Memory Face → ✅ Memory Phase
❌ Code Face → ✅ Execution Phase
❌ conselog → ✅ console.log
❌ Undifend → ✅ undefined

If you want next 🔥
I can draw ASCII for:

Closure + multiple calls

Recursion execution stack

Event Loop + function callbacks

let vs var inside function contexts