| Feature                       | First Version                | Second Version                             |
| ----------------------------- | ---------------------------- | ------------------------------------------ |
| Inner function called?        | Yes (immediately)            | No, returned instead                       |
| Closure exposed?              | No (only used internally)    | Yes (accessible outside)                   |
| Can remember outer variables? | Only during that single call | Yes, keeps `x` alive across multiple calls |
| Multiple instances of outer() | Each call resets `x`         | Each call creates **independent `x`**      |
| console.log(outer()) output   | `undefined`                  | `[Function]` (the returned inner function) |





function outer() {
  let x = 10; // variable in outer scope
  return function () {  // inner function forms a closure
    console.log(x++, 'hello'); // accesses and modifies x
  }
}

// outer() returns a function, it does NOT execute it yet
console.log(outer());  // [Function: inner]

// Store the returned inner function in a variable
const count = outer();
console.log(count);   // [Function: inner]

// Now execute the closure
count(); // 10 'hello'
count(); // 11 'hello'
count(); // 12 'hello'

// Another closure instance (separate x)
const anotherCount = outer();
anotherCount(); // 10 'hello'
anotherCount(); // 11 'hello'



::::::::::::::::::::: --------------------------------->>
function outer() {
  let x = 10;                     // Private variable in outer's scope

  // Returning a new function (inner) that "closes over" the variable x
  return function inner() {       // You can name it for debugging (optional)
    console.log(x++, 'hello');    // Reads x, logs it, then increments it
  };
}

// Let's see what outer() returns
console.log(outer());             
// Output: [Function: inner]  (or just the function code in some consoles)

// Create a closure instance
const count = outer();            // outer() runs → creates a new scope with x=10
                                  // and returns the inner function

console.log(count);               
// Output: [Function: inner]  (the same function reference)

// Now call the returned function multiple times
count();  // 10 'hello'   → x becomes 11
count();  // 11 'hello'   → x becomes 12
count();  // 12 'hello'   → x becomes 13



❓ Your Question (Rephrased)

Why is only innerFunction shown in heap?
Why not also show counter in heap memory?

✅ SHORT, CORRECT ANSWER

counter is in heap — but it is NOT relevant anymore after 
counter() finishes execution.
Only the returned function survives, so we show only that.

Now let’s explain like a JS engine designer.

🧠 IMPORTANT RULE (MEMORIZE)

Functions are objects → stored in heap
Execution contexts are stack-only and temporary

1️⃣ When the program FIRST loads
function counter() {
  let x = 1
  return () => x++
}

Memory state at load time
STACK (Global EC)
counter ─────────────┐
                      ▼
                    HEAP
┌─────────────────────────────┐
│ counter Function Object     │
└─────────────────────────────┘


✔ counter IS in heap
✔ Stack holds reference

2️⃣ When counter() is called
const inc = counter()

Call stack
CALL STACK
┌─────────────────────────────┐
│ counter() Execution Context │
│ x = 1                       │
└─────────────────────────────┘
│ Global EC                  │
└─────────────────────────────┘


At this moment:

counter function object → still in heap

counter() execution context → stack

x → inside counter’s lexical environment

3️⃣ Inner function is created (CRITICAL)
return () => x++

Heap now looks like this
HEAP
┌─────────────────────────────┐
│ counter Function Object     │
└─────────────────────────────┘

┌─────────────────────────────┐
│ innerFunction               │
│ [[Scope]] ───────────┐      │
└──────────────────────┼──────┘
                       ▼
              Lexical Environment
              { x: 1 }


🔥 Closure is formed
🔥 x is captured

4️⃣ counter() execution finishes
What happens?
counter() Execution Context → ❌ POPPED from stack


But:

innerFunction still references x

GC cannot delete lexical environment

counter function object is not needed anymore

5️⃣ Why we don’t show counter anymore


| Item                          | Status                       |
| ----------------------------- | ---------------------------- |
| `counter` function object     | Exists, but unused           |
| `counter()` execution context | Destroyed                    |
| `x` lexical environment       | Kept alive                   |
| `innerFunction`               | Actively referenced by `inc` |


So diagrams focus only on reachable memory

🔑 FINAL MEMORY STATE (WHY YOUR DIAGRAM IS CORRECT)
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
               Lexical Environment
               { x: 1 }


✔ counter exists but not used
✔ inc → innerFunction → closure → x
✔ Diagram shows only what matters

🚨 VERY IMPORTANT DISTINCTION

❌ Heap ≠ Only “currently used objects”
✅ Heap = All allocated objects, but diagrams usually show reachable ones

🎯 INTERVIEW-PERFECT ANSWER

“The counter function object is stored in heap, but after counter() executes, it is no longer part of the active reference chain. Only the returned inner function and its lexical environment remain reachable, so memory diagrams typically show only those.”

🧠 One-line rule to remember

Execution contexts die on the stack, but heap objects live as long as they are referenced.

If you want next 🔥

GC reachability graph

Why closures cause memory leaks

WeakMap vs closure memory

How V8 young/old space works