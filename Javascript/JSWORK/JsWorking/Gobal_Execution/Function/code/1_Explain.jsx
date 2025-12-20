Console.log(x)

var x=10



Function Name(){

conselog.log(10)

)

Name()




Great 👍
What you shared is an Excalidraw diagram of JavaScript Execution (Execution Context + Hoisting).
I’ll explain it cleanly, step-by-step, exactly how an interviewer expects.

I’ll also correct a few labels (small spelling issues) so your concept becomes 💯 solid.

🧠 JavaScript Execution Context (Based on Your Diagram)

Your diagram is showing Global Execution Context (GEC) split into:

JS Execution
 ├── Memory Phase (Creation Phase)
 └── Code Phase (Execution Phase)


You labelled them as:

✅ Memory Face → correct (should be Memory Phase)

✅ Code Face → correct (should be Code Phase)

🧩 Example Code (from your diagram)
console.log(x);

var x = 10;

function Name() {
  console.log(10);
}

Name();

1️⃣ Memory Phase (Creation Phase)

👉 JavaScript does NOT run code here
👉 It only allocates memory

What happens in Memory Phase?
Code	Memory Allocation
var x	x = undefined
function Name()	whole function stored
console.log(x)	ignored (no execution)
Memory Phase (Your left box)
x → undefined
Name → function () {
  console.log(10);
}


📌 Important

var → initialized as undefined

function → fully hoisted

let / const → hoisted but in TDZ (not shown here)

🔥 Interview One-liner

In the memory phase, variables are allocated memory and functions are stored entirely.

2️⃣ Code Phase (Execution Phase)

Now JavaScript executes line by line.

Step-by-step execution
▶️ Line 1
console.log(x);


JS looks for x

Finds x = undefined

Output:

undefined

▶️ Line 2
var x = 10;


Assigns value

x = 10

▶️ Line 3
function Name() { ... }


Already stored → skipped

▶️ Line 4
Name();


New Function Execution Context (FEC) created

Function runs

Output:

10

✅ Final Output
undefined
10

🧠 Execution Context Stack (Implicit in Your Diagram)
Global Execution Context
 ↓
Name() Execution Context
 ↓
popped after execution

🔥 VERY IMPORTANT INTERVIEW CLARIFICATIONS
❓ Why console.log(x) didn’t throw error?

Because:

var x = undefined; // hoisted

❓ What if let x = 10?
console.log(x); // ❌ ReferenceError
let x = 10;


Because:

let exists in Temporal Dead Zone

❓ Why function works before call?

Because:

function Name() {}


is fully hoisted

📌 Corrected Terminology (Use in Interview)

❌ Memory Face
✅ Memory Phase / Creation Phase

❌ Code Face
✅ Execution Phase

🎯 Final Interview Summary (Say This)

JavaScript first creates a global execution context. In the memory phase, variables are initialized as undefined and functions are hoisted completely. In the execution phase, code runs line by line, assigning values and executing functions.




┌─────────────────────────────────────────────────┐
│               JavaScript Execution               │
│           (Global Execution Context)             │
└─────────────────────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────┬──────────────────────┐
│     Memory Phase          │     Code Phase       │
│   (Creation Phase)        │  (Execution Phase)  │
├──────────────────────────┼──────────────────────┤
│                          │                      │
│  x      → undefined       │ console.log(x)       │
│                          │ → undefined           │
│  Name   → function(){}    │                      │
│                          │ x = 10                │
│                          │                      │
│  (No execution here)     │ Name()               │
│                          │ → console.log(10)    │
│                          │                      │
└──────────────────────────┴──────────────────────┘
