
Stack only stores:

Function execution contexts

Local variables (primitives)

References

Heap stores:

Objects

Arrays

Functions

Closures



Q what is function name a reference and object store in heap memory?
HEAP
--------------------------------
Nmae of function referser :0xF123 → Function Object {
            [[Code]]: console.log(10)
            [[Scope]]: Global
         }


🔹 Where is the function stored?
✅ Function object → HEAP
✅ Function name (Name) → STACK / Variable Environment
Memory picture:
STACK (Global Execution Context)
--------------------------------
Name  ──────►  0xF123  (reference)

HEAP
--------------------------------
0xF123 → Function Object {
            [[Code]]: console.log(10)
            [[Scope]]: Global
         }



         🔹 What does the function name mean?

Name is NOT the function itself
Name is a variable that holds a reference to a function object in heap

🔹 Step-by-step execution
1️⃣ Creation Phase (Hoisting)
function Name() { ... }


JS creates a function object in heap

Stores its reference in Name

Name is hoisted and initialized



2️⃣ Execution Phase
Name()


JS looks up Name in stack

Finds heap reference

Pushes function execution context to stack

Executes code

:::::::::::::: ------------------->>> :::::::::::::::::::::::::::::::::::


✅ Correct Answer (Short & Clear)

In JavaScript, a function is an object stored in heap memory.
The function name is a variable that holds a reference (memory address) 
to that function object.

❌ Small correction in your diagram

You wrote:

HEAP
--------------------------------
Name of function referer : 0xF123 → Function Object


👉 Correction:
The reference is NOT stored in the heap.
The function object is in heap, the reference (name) is in the stack / variable environment.

✅ Correct Memory Diagram
STACK (Global Execution Context)
--------------------------------
Name  ──────►  0xF123   (reference)

HEAP
--------------------------------
0xF123 → Function Object {
            [[Code]]: console.log(10)
            [[Scope]]: Global
         }

🔍 Step-by-step explanation
1️⃣ Function declaration
function Name() {
  console.log(10)
}


JS creates a Function Object

Stored in heap memory

Variable Name is created

Name stores reference → heap address

2️⃣ Function call
Name()


JS looks up Name in stack

Follows reference to heap

Pushes function execution context to stack

Executes console.log(10)

🧠 Important clarifications (INTERVIEW GOLD)
🔹 Is the function name an object?

❌ No
✔ It is a variable holding a reference

🔹 Is the function object in heap?

✔ Yes — always

🔹 Is the reference stored in heap?

❌ No — references live in stack / lexical environment

🔹 Function expression example (same rule)
const fn = function () {}


Memory:

STACK: fn  →  0xA111
HEAP : 0xA111 → Function Object

🔹 One-line Interview Answer

“A function in JavaScript is an object stored in heap memory.
The function name is a variable that holds a reference to that function object.”

🔹 Ultra-short version (for fast interviews)

Function → heap
Function name → reference
Reference → stack

If you want next:

🔥 Named vs anonymous functions memory

🔥 Closure memory diagram

🔥 Stack vs heap crash scenarios