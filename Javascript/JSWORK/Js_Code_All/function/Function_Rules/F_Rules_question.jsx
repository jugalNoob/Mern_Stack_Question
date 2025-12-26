🔥 THE COMPLETE RULEBOOK OF JAVASCRIPT FUNCTIONS (Deep Explanation)

This covers everything: scope, hoisting, memory, closures,
 default params, async, execution context, and more.

1️⃣ Function Declaration Rules
✔ Syntax:
function name(param1, param2) { ... }

✔ Rules:

Must have a valid identifier as name.

Hoisted fully → can call before it is defined.

Lives in the Global Lexical Environment or the nearest block/module.

✔ Example:
greet(); // works

function greet() {
  console.log("hello");
}

2️⃣ Function Expression Rules
✔ Syntax:
const fn = function() { ... }

✔ Rules:

Hoisted as a variable, not as a function.

Cannot be called before definition.

Name is optional (anonymous functions).

3️⃣ Arrow Function Rules
✔ Syntax:
const fn = () => {}

✔ Special rules:

No own this

No own arguments

Cannot be used as constructor

Implicit returns allowed

Bound lexically to outer scope

Example:
this.x = 10;

const obj = {
  x: 20,
  getX: () => this.x   // arrow inherits THIS → global 10
};

console.log(obj.getX()) // 10

4️⃣ Default Parameter Rules
✔ Only applied when argument is undefined
function fn(a = "default") { ... }

✔ Example:
fn(undefined) → uses default  
fn(null)      → does NOT use default

5️⃣ Rest Parameters Rules
function fn(...args) { }


Always an array

Must be last parameter

6️⃣ Return Rules

return stops execution immediately

Returning without value → undefined

Returning an object requires parentheses in arrow functions:

const obj = () => ({ name: 'jugal' })

7️⃣ Function Hoisting Rules
Function Declaration:

✔ Hoisted entirely
✔ Can call before definition
✔ Stored in memory first

Function Expression / Arrow:

❌ Not hoisted as function
✔ Variable hoisted → initialized as undefined
❌ Cannot run before assignment

8️⃣ Function Scope Rules

Every function creates its own:

Local scope

Local variables

Local arguments object

Own execution context

Example:
function a() {
  let x = 10;
}
console.log(x) // ❌ ReferenceError

9️⃣ Function Execution Context Rules (Important)

Every function call creates FEC:

Two phases:
1. Creation Phase

Create variable environment

Create lexical environment

Bind this

Hoist inner variables/functions

Prepare arguments

2. Execution Phase

Assign values

Run code

🔟 Closures Rules

A closure is formed when:

Inner function

Accesses outer function variables

Even after outer function is returned

Rules:

Variables remain alive in memory

Created automatically

Important in async, event handlers, currying

1️⃣1️⃣ Rules of this in Functions
Normal function:

this is dynamic
Depends on HOW it's called

Arrow function:

this is lexical
Depends on WHERE it's written

1️⃣2️⃣ Rules for Functions Inside Objects
const obj = {
  fn() { console.log(this) } 
}


this refers to object

Unless extracted:

const x = obj.fn;
x(); // this = global (undefined in strict mode)

1️⃣3️⃣ Constructor Function Rules
function User(name) {
  this.name = name;
}
const u = new User('Jugal');


Must use new

Returns this

Arrow functions ❌ cannot be constructors

1️⃣4️⃣ Async Function Rules
async function fn() {}


Always returns a Promise

await only allowed inside async functions

Execution stops at await

1️⃣5️⃣ Generator Function Rules
function* gen() {}


Can pause execution (yield)

Returns an iterator

Perfect for streams, data flow, pipelines

1️⃣6️⃣ Currying Rules
function add(a) {
  return function(b) {
    return a + b
  }
}


Must return another function

Forms closure

Useful for functional programming

1️⃣7️⃣ Pure Function Rules

Same input → same output

No side effects

No mutation of external variables

1️⃣8️⃣ Recursion Rules

Function calls itself

Must have base condition

Maintains its own call stack frames

1️⃣9️⃣ Function Overloading Rules

JS does not support overloading natively
BUT you can simulate using default params or arguments:

function fn(a,b){
  if(arguments.length === 1) { ... }
}

2️⃣0️⃣ Arguments Object Rules

Available only in normal functions

Not in arrow functions

Array-like (not array)

Holds provided arguments

🎉 Final Summary (Interview Level)

✔ JS functions are:

First-class citizens

Hoisted (rules vary)

Have closures

Create separate execution contexts

Have dynamic or lexical this

Support async/await, generators, recursion, currying, default params

✔ Every function call triggers:

Creation phase

Execution phase

Scope formation

this binding

Closure memory binding