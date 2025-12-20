for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


Perfect 👍
Here are all three, explained short, clear, and interview-ready.

🔥 1️⃣ Closure — 1 Interview Line

A closure is a function that remembers and accesses variables from its lexical scope even after the outer function has finished executing.

✅ That single line is enough in most interviews.

🔥 2️⃣ Closure Diagram (Mental Model)
Code
function outer() {
  let x = 10;

  return function inner() {
    return x;
  };
}

const fn = outer();
fn();

Diagram
fn
 ↓
inner function
 ↓
[[Lexical Environment]]
 {
   x: 10
 }


👉 Even though outer() is done, x stays in memory
👉 Because inner() still needs it
👉 This is closure

🔥 3️⃣ Closure Mistake Questions (INTERVIEW TRAPS)
❌ Mistake #1: var inside loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

Output:
3
3
3

Why?

var is function-scoped

All closures share same i

✅ Fix:

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

❌ Mistake #2: Expecting closure without inner function
function test() {
  let x = 10;
  return x;
}


❌ No closure
👉 Closure requires function inside function

❌ Mistake #3: Memory leak
function heavy() {
  let bigData = new Array(1000000);
  return () => bigData;
}


👉 bigData never released
👉 Fix: remove references when done

❌ Mistake #4: Losing closure by reassignment
let fn = outer();
fn = null; // closure lost


👉 Memory is freed

❌ Mistake #5: Thinking closure copies values
function test() {
  let x = 10;
  return () => x++;
}


❌ x is NOT copied
✅ It is shared & mutated

🔑 Interview Rapid-Fire Q&A

Q: Is closure created only when function returns?
👉 ❌ No, closure is created when function is defined

Q: Does every function create closure?
👉 ✅ Yes, but only noticeable when accessing outer variables

Q: Is closure slow?
👉 ❌ No, unless misused

🎯 Final Interview Summary

Closure = function + lexical memory

Used in callbacks, async, data privacy

Can cause bugs with var loops

Can cause memory leaks if not handled