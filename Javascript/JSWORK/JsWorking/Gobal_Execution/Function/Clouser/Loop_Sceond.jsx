3️⃣ Key points (INTERVIEW READY
Ah! You want to understand why the outputs differ numerically for let and var loops with async callbacks. Let’s explain clearly.

1️⃣ let loop
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0)
}

Behavior

let is block-scoped

Each iteration creates its own i in heap (closure) for the callback

Callbacks executed later by event loop

Output:

1
2
3


✅ Each callback remembers its own i

2️⃣ var loop
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 0)
}

Behavior

var is function-scoped

Only one i exists, shared by all callbacks

Loop finishes first → i = 4 after last iteration

Callbacks execute after loop ends, all read the final i

Output:

4
4
4


❌ Not 1+2+3 — all callbacks see the same variable

3️⃣ Why it seems “1+2+3” for var?

Some people expect the sum of iterations, but JS does not snapshot var per iteration.

Only let creates separate bindings per iteration

var shares the same binding → all callbacks see final value

4️⃣ Fix var to behave like let

Using IIFE (closure):

for (var i = 1; i <= 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 0)
  })(i)
}


Output:

1
2
3


Here, IIFE creates a new scope for each iteration

Each callback closes over its own j

5️⃣ Key principle (INTERVIEW)
| Feature                     | `let`                        | `var`               | Fix for `var`      |
| --------------------------- | ---------------------------- | ------------------- | ------------------ |
| Scope per iteration         | ✅ Block-scoped               | ❌ Function-scoped   | ✅ Use IIFE         |
| Callback sees correct value | ✅                            | ❌                   | ✅                  |
| Heap storage                | Each callback stores its `i` | Only one shared `i` | ✅ New `j` per IIFE |



4️⃣ Mental model
let i loop:
Heap:
- callback0 → i = 0
- callback1 → i = 1
- callback2 → i = 2

var i loop:
Heap:
- callback0 → i reference (global)
- callback1 → i reference (global)
- callback2 → i reference (global)

🔥 Interview one-liner

In a let loop, each async callback gets its own heap-stored 
lexical environment. In a var loop, all callbacks share the 
same variable in stack/global, only the function object is in heap.


