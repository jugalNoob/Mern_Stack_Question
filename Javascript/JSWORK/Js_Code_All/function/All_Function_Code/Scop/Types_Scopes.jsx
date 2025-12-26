❓ Why can child() access parent() variables?
Short Answer (Interview-ready)

Because child is written inside parent, JavaScript links child to 
parent’s scope at creation time.

This link is created by lexical scoping.

🧠 How JavaScript actually does this
Step 1️⃣ Code is parsed (before running)

JS engine reads the code structure.

It sees:

function child() {
  console.log(x, y);
}


📌 child is defined inside parent

➡️ JS decides:

“child’s outer scope is parent.”

This decision is made once, at compile time, not runtime.

Step 2️⃣ Lexical Environment is created

When parent() runs:

Parent Lexical Environment
---------------------------
y → 10
outer → Global


When child() is created:

Child Lexical Environment
--------------------------
(no local variables)
outer → Parent Lexical Env


That outer reference is the key 🔑

Step 3️⃣ Variable lookup using scope chain

Inside child():

console.log(x, y);


JS looks for variables like this:

1️⃣ In child scope ❌
2️⃣ In parent scope → y ✅
3️⃣ In global scope → x ✅

This lookup path = scope chain

🔥 Important Rule (Memorize)

Functions do NOT look at who calls them.
They look at where they are written.

That’s why it’s called lexical scoping.

❌ Why call location does NOT matter
function child() {
  console.log(y);
}

function parent() {
  let y = 10;
  child();
}

parent(); // ❌ ReferenceError


Even though child() is called inside parent,
it was NOT written inside parent.

➡️ No lexical link
➡️ No access

🏆 Interview One-Liner (Gold)

child can access parent variables because JavaScript uses lexical scoping, where a function’s scope is determined by its position in the source code.

🧠 Final Mental Model

Code is nested → scopes are nested

Nested functions → nested lexical environments

Scope chain follows code structure, not call stack