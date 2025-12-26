var bar=function foo(){}
console.log(bar === foo)

2️⃣ What’s happening here

You created a function expression and assigned it to bar:

var bar = function foo(){};


bar → now holds a reference to the function.

foo is the name of the function only inside its own body.

foo is not available in the outer scope!




🚀 PART 2 — JAVASCRIPT FUNCTION INTERNALS (EXTREME DEPTH)
1️⃣ How Functions Live in Memory (V8 Internal Theory)

When JavaScript loads your script:

✔ A function is stored as a callable object with:

[[Environment]] (Lexical Environment Reference)

[[Scopes]]

[[CodeBlock]]

[[FormalParameters]]

[[Context]] (Execution Context for later)

Example:
function test(){ }


Behind the scenes, JS creates:

FunctionObject {
  Code: pointer_to_bytecode,
  Scope: outer_environment,
  Length: number_of_parameters,
  Name: "test"
}


This is why functions are first-class citizens — they are objects.

2️⃣ Hidden Classes (Why functions get faster)

V8 uses hidden classes to optimize objects.

Example:

function User(name) {
  this.name = name;
}


During execution:

V8 creates a hidden class for User

Adds property name

Creates optimized memory layout

This makes repeated function calls MUCH faster.

3️⃣ Inline Caching (IC) — Function Speed Booster

If JS sees the same function called many times with the same type of input:

function add(a,b) { return a + b; }


Then:

V8 caches how the function behaves.

Converts slow lookup into fast inline machine code.

This is why JS becomes faster after warm-up time.

4️⃣ Function Deoptimization Rules (Very Important)

Functions are de-optimized (slowed down) when:

You change object shapes dynamically

You use dynamic typing too much

You use eval / with

You use try/catch inside loops

Example of de-optimization:

function f(a){
  if(typeof a === 'string') { return a + "!!" }
  return a + 10;   // mixed types = deopt
}


JS can’t optimize unpredictability.

5️⃣ Function Execution Context (EC) — Real Internal Steps

When you call a function:

fn(10)


The engine creates FEC (Function Execution Context):

1. Memory (Creation) Phase

Allocate memory for:

parameters

variables

inner functions

Set all to undefined

Bind this

Create arguments object

2. Execution Phase

Assign actual values

Execute line-by-line

Push new EC into Call Stack

3. After return

EC is removed from the stack

Variables garbage collected (unless closure keeps them alive)

6️⃣ Closures — Internal Memory Rule

A closure is NOT “inner function remembers variables”.

The real system-level rule:

JS stores the outer function’s environment record with the inner function.
That environment object remains in memory as long as the inner function exists.

Example:

function outer() {
  let count = 0;

  return function inner() {
    return ++count;
  };
}


Here:

count lives in memory forever

Not in stack → moved to heap as closure storage

This is why closures can cause memory leaks.

7️⃣ How this Works in Deep Level
Rule 1: this is dynamic in normal functions

Depends on:

Who calls the function (left side of .)

call, apply, bind

Whether strict mode or not

Rule 2: Arrow functions never bind this

They take the this of the parent lexical environment.

That means:

() => {}  // no this
function() {} // dynamic this

8️⃣ Microtask Queue + Functions

In async functions:

async function run(){
   await fetch()
   console.log("after await")
}


Rules:

await breaks execution

The function returns a Promise

The rest of the function goes into microtask queue

Executes before any macrotasks (setTimeout)

This explains:

setTimeout(()=> console.log(1))
Promise.resolve().then(()=> console.log(2))
console.log(3)


Output:

3
2
1

9️⃣ Tail Call Optimization (TCO)

(only in strict mode + supported JS engines)

When a function calls itself as last statement:

"use strict";
function fact(n, acc=1){
  if(n===0) return acc;
  return fact(n-1, acc*n);
}


JS uses no new call stack frame
→ recursion without stack overflow.

🔟 Function Serialization Rules

Functions cannot be JSON stringified:

JSON.stringify({ fn: ()=>{} }) // removes fn


Because JS functions contain:

Code pointers

Environment links

Execution metadata

These cannot be represented as JSON.

1️⃣1️⃣ Function Binding Rules (call, apply, bind)
call → pass arguments individually
apply → pass arguments as array
bind → returns a new function

Example:

function greet(){ console.log(this.name) }

const obj = { name: "jugal" }

greet.call(obj)  // "jugal"

1️⃣2️⃣ Generator Function Internals
function* gen() { yield 1; yield 2; }


They create:

A paused execution context

Resumable stack frame

Internal pointer called generator object

Each call to .next() resumes execution from last yield.

1️⃣3️⃣ How Functions Become Async Internally

An async function:

is immediately turned into a promise

wraps all returns in Promise.resolve()

wraps errors in Promise.reject()

pauses at await using microtasks

1️⃣4️⃣ Function Optimization Best Practices

To keep functions optimized:

Do NOT mix data types in returns

Avoid dynamic object shapes

Avoid modifying objects inside loops

Avoid try/catch inside hot loops

Avoid reading arguments (use rest instead)

1️⃣5️⃣ Function = Object + Executable Code

Every JS function has:


| Property     | Meaning                |
| ------------ | ---------------------- |
| `name`       | function name          |
| `length`     | number of params       |
| `prototype`  | needed for `new`       |
| `[[Scopes]]` | closure scopes         |
| `[[Code]]`   | actual executable code |


🎉 Summary of Deep Part 2

You now know:

V8 memory model for functions

Hidden classes

Inline caching

Function optimization & de-optimization

Execution context internals

Microtask queue behavior

Closures memory storage

Tail-call optimization

Generator internals

Async/await engine-level behavior

Performance rules for writing fast functions