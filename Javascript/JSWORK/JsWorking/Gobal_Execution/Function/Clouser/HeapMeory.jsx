2️⃣ What happens when you create a function
function outer() {
  let x = 1
  return function inner() {
    return x++
  }
}


outer itself → function object → stored in heap

inner function → function object → stored in heap

Variables inside outer (x) → initially in stack, moved to heap if inner escapes (closure)

Lexical environment (scope info) → stored in heap for closures

3️⃣ Heap stores “function objects” as

A function object contains:
 
Code – the actual instructions (what the function does)

[[Scope]] / Lexical environment – references to outer variables accessible to it

Internal properties – like .prototype for normal functions

So the heap does NOT store just “variables” — it stores the function code and its scope references.

4️⃣ Example: Closure + Heap
const inc = outer() // outer executed


Memory:

Heap:
- inner function object
   - code: "return x++"
   - [[Scope]]: { x: 1 }  ← x is preserved
Stack:
- Global execution context


When you call inc():

Stack:
- inc() execution context
Heap:
- x = 1 → x++

5️⃣ Multiple closures
const a = outer() // x1 in heap
const b = outer() // x2 in heap


Heap stores two separate function objects with their own [[Scope]]:

a -> [[Scope]]: { x: 1 }
b -> [[Scope]]: { x: 1 }


Each closure retains its own lexical environment

Updates in a do not affect b

6️⃣ Summary: What heap stores for functions/closure

| Item                                                 | Stored in heap? | Notes                              |
| ---------------------------------------------------- | --------------- | ---------------------------------- |
| Function object                                      | ✅               | Code + internal properties         |
| Lexical environment (for closures)                   | ✅               | Outer variables captured           |
| Primitive variable inside outer (if closure escapes) | ✅               | Preserved for inner function       |
| Stack-only variable                                  | ❌               | Destroyed after function execution |

6️⃣ Summary: What heap stores for functions/closures


0000000000000000000 ::::::::::::::::::::0------------------------- >>If I am use Sample Function -------------------->>>


Global execution context (Stack):
- name → reference to function object in heap

Heap:
- Function object:
   - code: console.log('jugal')
   - internal properties

Call Stack (after name() call):
- name() execution context:
   - arguments: none
   - local variables: none
3️⃣ Memory view
Global execution context (Stack):
- name → reference to function object in heap

Heap:
- Function object:
   - code: console.log('jugal')
   - internal properties

Call Stack (after name() call):
- name() execution context:
   - arguments: none
   - local variables: none


After name() finishes, stack frame is popped

Heap remains unchanged

4️⃣ Key points

Function objects always live in heap

The variable that references it lives in stack (or outer lexical scope)

Calling the function does not recreate the function object

If the function creates closures, only then some lexical variables may also move to heap




Q simple explain store a lexical Scop ?]

What happens:

name → function object in heap

Reference to function → in stack (global scope)

Function executes → stack frame is created

2️⃣ Lexical scope / closure

Lexical scope is about inner functions accessing outer variables

Simple function with no inner functions cannot store a scope, because there’s no outer variables to preserve

function outer() {
  let x = 10
  return function inner() {
    return x++
  }
}

const fn = outer()


Here, inner captures x → creates closure → stored in heap

Lexical environment survives → memory preserved

3️⃣ Key difference


| Function type                     | Can store scope / closure? | Notes                              |
| --------------------------------- | -------------------------- | ---------------------------------- |
| Simple function                   | ❌ No                       | Nothing to capture                 |
| Function returning inner function | ✅ Yes                      | Captures outer variables (closure) |
