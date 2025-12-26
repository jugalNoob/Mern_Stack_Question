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


:::::::::::::::::::::::::::::: ---------------------------------- >>>>>>>>>>>>>>>>


✅ Lexical Scope vs Closure (Simple & Clear)
1️⃣ Lexical Scoping
❓ When does child access parent variables?

When the child function is written inside the parent function.

This is lexical scoping.

🔹 Example
function parent() {
  let a = 10;

  function child() {
    console.log(a); // ✅ access parent variable
  }

  child();
}
parent();

🧠 What’s happening?

child is defined inside parent

JS creates a lexical link

child can access a

📌 Parent is still running, so this is NOT closure yet.

2️⃣ Closure
❓ When does inner function use outer variables AFTER parent finishes?

When the inner function is returned, stored, or used later.

This is closure.

🔹 Example
function parent() {
  let a = 10;

  function child() {
    console.log(a);
  }

  return child;
}

const fn = parent(); // parent finished
fn(); // ✅ still accesses `a`

🧠 What’s happening?

parent() finishes execution

Normally a should be destroyed

But child still needs a

JS keeps parent scope alive

📌 This memory retention = closure

🔑 Key Difference (Very Important)
Concept	What it means
Lexical Scope	Child can access parent variables
Closure	Child remembers parent variables even after parent ends
🧠 Simple Rule to Remember (Interview Gold)

Every closure uses lexical scoping, but not every lexical access is a closure.

🔥 Visual Memory Model
Lexical Scope (parent still alive)
parent()
 └── child() → uses parent var

Closure (parent finished)
parent() ❌ finished
 └── child() ✅ still uses parent var

🏆 One-Line Interview Answers

Lexical scoping → access due to code structure

Closure → access due to preserved scope

⚠️ Common Interview Trap

❌ “Closure and lexical scope are same”
✅ Wrong

Closure depends on lexical scoping but adds memory retention.