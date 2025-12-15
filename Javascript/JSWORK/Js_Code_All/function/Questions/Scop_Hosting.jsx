✅ 1️⃣ Scope in JavaScript

Scope determines where a variable or function is accessible.

Types of Scope

Global Scope

Variables declared outside any function

Accessible anywhere

let name = "Jugal"; // global scope

function greet() {
  console.log(name); // accessible
}

greet(); // Jugal
console.log(name); // Jugal


Function (Local) Scope

Variables declared inside a function

Accessible only inside that function

function greet() {
  let message = "Hello"; // local scope
  console.log(message);
}

greet(); // Hello
console.log(message); // ❌ ReferenceError


Block Scope (ES6: let & const)

Variables declared inside {}

Not accessible outside

if (true) {
  let age = 25;
  const city = "Delhi";
  console.log(age, city); // 25 Delhi
}

console.log(age); // ❌ ReferenceError
console.log(city); // ❌ ReferenceError

🔹 Summary Table


| Scope Type     | Accessible Where  | Declaration Keyword |
| -------------- | ----------------- | ------------------- |
| Global         | Anywhere          | var, let, const     |
| Function/Local | Inside function   | var, let, const     |
| Block          | Inside block `{}` | let, const          |





✅ 2️⃣ Hoisting in JavaScript

Hoisting moves variable and function declarations to the top of their scope during compilation.

Only declarations are hoisted, not initializations

var → undefined

let & const → Temporal Dead Zone (TDZ)

Functions → fully hoisted (can call before definition)

2.1 Hoisting with var
console.log(a); // undefined
var a = 10;
console.log(a); // 10


Explanation:

var a;          // hoisted
console.log(a); // undefined
a = 10;         // assignment stays in place

2.2 Hoisting with let & const
console.log(b); // ❌ ReferenceError
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;


Access before declaration → Temporal Dead Zone (TDZ)

2.3 Hoisting with Functions
greet(); // Hello

function greet() {
  console.log("Hello");
}


Function declarations are hoisted with their body

Function expressions are NOT fully hoisted

sayHi(); // ❌ TypeError
var sayHi = function() {
  console.log("Hi");
};

🔹 Scope + Hoisting Interaction
function test() {
  console.log(x); // undefined
  var x = 10;

  // console.log(y); // ❌ ReferenceError
  let y = 20;
}
test();


x → hoisted, function-scoped

y → block-scoped, TDZ

🧠 Interview One-Liners

Scope: Where variables are accessible

Hoisting: JS moves declarations to top before execution

var → hoisted + initialized undefined

let & const → hoisted, but in TDZ

Function declarations → fully hoisted



If you want next:
✅ scope chain & closures deep dive




Perfect ✅ — let’s go through hoisting tricky interview questions that often appear in JS/Node.js interviews. I’ll explain each carefully.

🔥 Top Hoisting Tricky Questions
1️⃣ Var Hoisting Surprise
console.log(a); // ?
var a = 10;

Answer:
undefined


Why:

Declaration var a is hoisted

Assignment = 10 stays in place

2️⃣ Let / Const Hoisting (TDZ)
console.log(b); // ?
let b = 20;

Answer:
ReferenceError


Why:

let and const are hoisted, but not initialized

Access before declaration → Temporal Dead Zone

3️⃣ Function Declaration vs Expression
foo(); // ?
bar(); // ?

function foo() { console.log("foo"); }
var bar = function() { console.log("bar"); }

Answer:
foo  ✅
bar  ❌ TypeError


Why:

foo → function declaration, fully hoisted

bar → variable bar hoisted, but initialized as undefined → cannot call

4️⃣ Multiple Var Declarations
var x = 1;
var x = 2;
console.log(x); // ?

Answer:
2


Why:

var allows redeclaration

Last assignment overwrites previous value

5️⃣ Function Inside Function
function outer() {
  console.log(a); // ?
  var a = 10;
  inner();
  function inner() {
    console.log(a); // ?
  }
}
outer();

Answer:
undefined
10


Why:

var a is hoisted in outer → undefined at first console.log

inner() has access to outer’s a → 10

6️⃣ Hoisting + Block Scope
{
  console.log(a); // ?
  var a = 5;
}
console.log(a); // ?

Answer:
undefined
5


Why:

var is function-scoped, not block-scoped

a is hoisted to global / function scope

7️⃣ Const Reassignment Trap
const c = 5;
c = 10; // ?

Answer:
TypeError: Assignment to constant variable


Why:

const cannot be reassigned

Hoisting doesn’t change this behavior

8️⃣ Hoisting + Function Expressions in Loops
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

Answer:
3
3
3


Why:

var is function-scoped, same i shared

Loop finishes → i = 3 → all timeouts print 3

✅ Fix with let:

for (let i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 100);
}
// Output: 0 1 2

9️⃣ Hoisting + Default Parameters
function test(a = b, b = 2) {
  console.log(a, b);
}
test();

Answer:
ReferenceError: b is not defined


Why:

Default params are evaluated left-to-right

b is not defined when a = b is evaluated

🔟 Quick Interview Tricks

var → undefined

let / const → TDZ

Function declaration → fully hoisted

Function expression → behaves like var

Block vs function scope → var ignores blocks

Loops with var → shared variable, let → block scoped



 Imporetnat  ------------------------------------>>>
If you want next:
✅ Scope chain & closures tricky questions





🔥 Scope Chain & Closures — Tricky Questions
1️⃣ Basic Closure Recall
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  }
}

const fn = outer();
fn(); // ?

Answer:
10


Why:

Inner function “remembers” variables of outer function → closure

a is stored in heap memory, persists even after outer returns

2️⃣ Scope Chain Lookup
let a = 1;

function first() {
  let a = 2;
  function second() {
    console.log(a);
  }
  second();
}

first();

Answer:
2


Why:

JS looks for a in current scope → outer scopes → global

Found in first() scope → prints 2

3️⃣ Closure Over Loop Trap (Var vs Let)
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

Answer:
3
3
3


Why:

var is function-scoped

Single i shared → after loop i = 3

✅ Fix with let:

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0 1 2

4️⃣ Closure and Reference Variables
function createFuncs() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function() { console.log(i); });
  }
  return funcs;
}

const arr = createFuncs();
arr[0](); // ?
arr[1](); // ?
arr[2](); // ?

Answer:
3
3
3


Fix with IIFE (classic):

function createFuncs() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    (function(j) {
      funcs.push(function() { console.log(j); });
    })(i);
  }
  return funcs;
}

const arr = createFuncs();
arr[0](); // 0
arr[1](); // 1
arr[2](); // 2

5️⃣ Closure with Changing Outer Variable
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  }
}

const fn1 = outer();
const fn2 = outer();
fn1(); // ?
fn2(); // ?

Answer:
10
10


Why:

Each call to outer() creates new closure

fn1 and fn2 have independent memory

6️⃣ Tricky — Closure & Hoisting Together
function test() {
  console.log(x);
  var x = 5;
  return function() {
    console.log(x);
  }
}

const fn = test();
fn();

Answer:
undefined
5


Why:

var x is hoisted → undefined at first console.log(x)

Inner function remembers x → 5

7️⃣ Tricky — Closure with Multiple Variables
function makeCounter() {
  let count = 0;
  return {
    increment: function() { count++; },
    get: function() { return count; }
  }
}

const counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.get()); // ?

Answer:
2


Why:

count is private → closure protects it

Only accessible via increment and get

8️⃣ Closure in Async Calls
function delayLog() {
  let a = 10;
  setTimeout(() => console.log(a), 1000);
}

delayLog(); // ?

Answer:
10


Why:

Arrow function closes over a

Even after delayLog() finishes, a persists in closure

9️⃣ Scope Chain Lookup Order (Interview Classic)
let a = 1;
function foo() {
  let a = 2;
  function bar() {
    let a = 3;
    console.log(a); // ?
  }
  bar();
}
foo();

Answer:
3


Why:

JS searches current scope → outer → global

Finds a = 3 in bar → prints 3

🔟 Scope & Closure Memory Tip

Stack memory: function calls, primitive variables

Heap memory: closures, objects, functions

Closures keep references to outer variables in heap even after outer function ends

🧠 Interview One-Liners

✔ “Closure = function + preserved outer scope variables”
✔ “Scope chain = JS looks for variables from inner → outer → global”
✔ “Each function call creates a new scope”
✔ “Loop traps usually caused by var vs let”