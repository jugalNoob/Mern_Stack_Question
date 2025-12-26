🔗 1. Scope Chain
✅ What is Scope Chain?

Scope chain is the order in which JavaScript looks for variables.

When a variable is used, JS searches:

Current scope

Outer scope

Global scope

If not found → ❌ ReferenceError

🔹 Example
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();

🔍 How JS searches (console.log(a, b, c))

Look in inner scope → c ✅

Look in outer scope → b ✅

Look in global scope → a ✅

This lookup path = Scope Chain

🏆 Interview One-Liner

Scope chain is the mechanism by which JavaScript resolves variables by searching from inner to outer scopes.

📌 2. Lexical Scoping
✅ What is Lexical Scoping?

Lexical scoping means scope is determined by where code is written,
 not how it is called.

“Lexical” = code location

🔹 Example
let x = 5;

function parent() {
  let y = 10;

  function child() {
    console.log(x, y);
  }

  child();
}

parent();


✔️ child() can access y
✔️ Because it is written inside parent()

❌ NOT dynamic
function child() {
  console.log(y);
}

function parent() {
  let y = 10;
  child();
}

parent(); // ❌ ReferenceError


Why?

child is not written inside parent

JS is lexically scoped, not dynamically scoped

🏆 Interview One-Liner

Lexical scoping means a function can access variables from the scope where it is defined.

🔥 Scope Chain + Lexical Scoping Together
let a = 1;

function one() {
  let b = 2;

  function two() {
    let c = 3;
    console.log(a, b, c);
  }

  two();
}

one();


Lexical scoping → determines allowed access

Scope chain → determines lookup order

🧠 Simple Difference Table


| Concept         | Meaning                 |
| --------------- | ----------------------- |
| Lexical Scoping | Where scope is decided  |
| Scope Chain     | How variables are found |

✅ Final Short Summary

Lexical scoping → scope decided at write time

Scope chain → search path at run time