

Perfect — this is the best way to understand closure 👍
Let’s explain Closure using Scope Chain, step by step.

🔒 Closure Explained Using Scope Chain
✅ What is a Closure?

A closure is when a function remembers and can access variables from its outer scope, even after the outer function has finished executing.

🔹 Example (Simple)
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2

🧠 Step-by-Step (Scope Chain View)
1️⃣ outer() is called

Creates outer execution context

Creates outer lexical environment

Outer Lexical Environment
-------------------------
count → 0

2️⃣ inner() is created

inner is lexically inside outer

Its scope chain includes:

Inner scope

Outer scope

Inner Lexical Environment
-------------------------
(no variables)
outer → Outer Lexical Env

3️⃣ outer() returns inner

Normally:

outer should be destroyed

But ❗:

inner still references count

👉 JS keeps outer lexical environment alive

This is closure

4️⃣ Calling fn()

JS looks for count:

Inner scope ❌

Outer scope ✅ → same count

Updates value

🔥 Key Insight (IMPORTANT)

Closure is possible because of the scope chain + lexical scoping

Lexical scoping → inner knows where it was written

Scope chain → allows variable lookup

Closure → keeps memory alive

🏆 Interview One-Liner (Gold)

A closure is formed when a function retains access to its lexical scope via the scope chain even after the outer function has returned.

🔹 Another Example (Classic)
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
add5(3); // 8


x is preserved

Each call creates a new closure

⚠️ Common Misunderstanding

❌ Closure does NOT copy values
✔️ Closure keeps references

function test() {
  let a = 1;
  return () => console.log(a);
}

🧠 Memory Diagram (Mental)
Global
 |
 |-- outer Lexical Env (kept alive)
      |
      |-- inner function (closure)

✅ Final Summary

Closure = function + preserved outer scope

Scope chain enables access

Lexical scoping decides visibility

Memory is retained until reference is gone