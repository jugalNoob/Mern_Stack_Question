| Feature                  | **Function Declaration**                          | **Function Expression**                        | **Arrow Function (ES6)**                          |
| ------------------------ | ------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------- |
| **Syntax**               | `function greet(){}`                              | `const greet = function(){}`                   | `const greet = () => {}`                          |
| **Example**              | `js function add(a,b){ return a+b } `             | `js const add = function(a,b){ return a+b } `  | `js const add = (a,b) => a+b `                    |
| **Name**                 | Has a name (e.g. `add`)                           | Can be named or anonymous                      | Always anonymous (assigned to a variable)         |
| **Hoisting**             | ✅ Fully hoisted — can be called before definition | ❌ Not hoisted (can’t call before definition)   | ❌ Not hoisted (same as expression)                |
| **`this` binding**       | Dynamic — depends on how function is called       | Dynamic — depends on caller                    | Lexical — inherits `this` from parent scope       |
| **`arguments` object**   | ✅ Available automatically                         | ✅ Available automatically                      | ❌ Not available (use rest `...args` instead)      |
| **Best used for**        | Regular reusable functions                        | Functions stored in variables or passed around | Short callbacks, event handlers, or concise logic |
| **Return behavior**      | Must use `return`                                 | Must use `return`                              | Implicit return possible if one-line (no `{}`)    |
| **Constructors (`new`)** | ✅ Can be used with `new`                          | ✅ Can be used with `new`                       | ❌ Cannot be used as constructor                   |
| **Scope type**           | Function scope                                    | Function scope                                 | Lexical scope (no `this`, `arguments`, `super`)   |
| **Readable / Short**     | Medium                                            | Medium                                         | ✅ Short and compact                               |
| **Use in Classes**       | Common for methods                                | Less common                                    | Great for inline callbacks (but not for methods)  |



| Part                | Name / Concept                   | Type             | Explanation                                                                                                   |
| ------------------- | -------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `function`          | **Function Keyword**             | Reserved Word    | Used to declare a function in JavaScript. It defines a reusable block of code.                                |
| `Main`              | **Function Name / Identifier**   | User-defined     | The name you assign to the function. Used to call (invoke) the function later.                                |
| `()` (after `Main`) | **Parameter List / Parentheses** | Syntax Structure | Holds parameters (if any). Example: `function Main(a, b) {}`. When calling, you pass arguments: `Main(1, 2)`. |
| `{ }`               | **Function Body / Block**        | Code Block       | Contains the executable statements that run when the function is called.                                      |
| Inside `{}`         | **Statements / Logic**           | Code             | Code that executes — like variable declarations, loops, conditions, etc.                                      |
| `Main()`            | **Function Call / Invocation**   | Operation        | Executes the function. The code inside `{}` runs when this is called.                                         |
| `;`                 | **Statement Terminator**         | Symbol           | Ends a statement (optional for function call but good practice).                                              |
| `//`                | **Single-line Comment**          | Comment          | Ignored by JS; used for documentation or notes.                                                               |
| *(implicit)*        | **Return Value**                 | Concept          | Every function returns something. If no `return` specified, it returns `undefined`.                           |
| *(concept)*         | **Hoisting**                     | Behavior         | Function declarations are hoisted — can be called before definition.                                          |
| *(concept)*         | **Scope**                        | Concept          | Variables declared inside function are accessible only inside it (local scope).                               |




🧩 Q1. What is the difference between console.log() and return?

| Feature                     | `console.log()`                                                | `return`                                              |
| --------------------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| **Purpose**                 | Used to **print** data to the console for debugging or display | Used to **send data out** of a function to the caller |
| **Effect**                  | Does **not stop** function execution                           | **Stops** the function immediately                    |
| **Scope**                   | Works only for developers (no effect on program logic)         | Controls program logic (function result)              |
| **Output visible to user?** | Only in console                                                | Can be used anywhere in code                          |
| **Example**                 | `js function test(){ console.log("Hi"); }`                     | `js function test(){ return "Hi"; }`                  |



🧠 Tip:
Use console.log() for debugging.
Use return when you need the value for further computation.

🧩 Q2. What is Expression vs Declaration?


| Type                     | Syntax                       | Hoisting      | Example                                      | Explanation                                         |
| ------------------------ | ---------------------------- | ------------- | -------------------------------------------- | --------------------------------------------------- |
| **Function Declaration** | `function greet(){}`         | ✅ Hoisted     | `js function greet(){ return "Hi" }`         | Can be called **before** definition                 |
| **Function Expression**  | `const greet = function(){}` | ❌ Not hoisted | `js const greet = function(){ return "Hi" }` | Must be called **after** definition                 |
| **Variable Expression**  | `let x = 5 + 10`             | ❌ Not hoisted |                                              | Any code that **produces a value** is an expression |


🧠 Remember:
A declaration defines something (function, variable).
An expression produces a value.



🧩 Q3. What is a const function?
const greet = function(name) {
  return "Hello " + name;
}

| Concept    | Meaning                                                                            |
| ---------- | ---------------------------------------------------------------------------------- |
| `const`    | Makes the **variable reference immutable**, not the function itself.               |
| Function   | You can’t reassign `greet`, but the function body can still run and return values. |
| Example    | `js greet = 5 // ❌ Error (can’t reassign)`                                         |
| Common use | To prevent accidental reassignment of functions.                                   |


🧠 Interview Tip:
const makes the binding constant, not the value.
It improves safety in large codebases.



🧩 Q4. What is an IIFE (Immediately Invoked Function Expression)? Why use it?

(function() {
  console.log("IIFE runs immediately");
})();


| Feature                 | Explanation                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| **Full form**           | Immediately Invoked Function Expression                                                     |
| **Syntax**              | Function wrapped in `( )` and called immediately with `()`                                  |
| **Runs**                | Instantly when code loads                                                                   |
| **Purpose**             | - Avoid global variable pollution <br> - Create a private scope <br> - Initialize data once |
| **Example with return** | `js const data = (() => 42)(); console.log(data);`                                          |


Older JS modules, initialization scripts, private variable scopes.

🧩 Q5. What is a Callback Function? Why use it?


| Concept                | Explanation                                              |
| ---------------------- | -------------------------------------------------------- |
| **Definition**         | A function passed **as an argument** to another function |
| **Purpose**            | To execute code **after** another function completes     |
| **Common Uses**        | Asynchronous code, Event handling, API calls             |
| **Real-world Example** | `setTimeout(() => console.log('done'), 1000);`           |



Tip:
Callbacks are building blocks for Promises and async/await.

🧩 Q6. What is a Higher-Order Function (HOF)? Why use it?
function show(){ // --> Higher-Order Function
  return function inner(){
    console.log("Inner Function");
  }
}
show()(); // Calling HOF then inner function

| Concept                  | Explanation                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Definition**           | A function that **takes another function as argument** or **returns a function**                 |
| **Purpose**              | To make code modular, reusable, and functional                                                   |
| **Example (takes fn)**   | `js function hof(fn){ fn(); } hof(() => console.log('run'));`                                    |
| **Example (returns fn)** | `js function makeAdder(x){ return y => x+y; } const add5 = makeAdder(5); console.log(add5(10));` |
| **Common Uses**          | `map()`, `filter()`, `reduce()`, event handlers, middlewares                                     |
| **Why use**              | Clean abstraction, reusable logic, functional programming patterns                               |



🧠 Extra Common Function Interview Questions (Basic → Advanced)

| Level           | Question                                                                       |
| --------------- | ------------------------------------------------------------------------------ |
| 🟢 Basic        | What is a function?                                                            |
| 🟢 Basic        | What is the difference between `function` and `arrow function`?                |
| 🟢 Basic        | What is hoisting?                                                              |
| 🟡 Intermediate | What is scope vs closure?                                                      |
| 🟡 Intermediate | What is a pure function?                                                       |
| 🟡 Intermediate | What is the difference between `call()`, `apply()`, `bind()`?                  |
| 🟡 Intermediate | What is function currying?                                                     |
| 🟡 Intermediate | What is the difference between synchronous and asynchronous functions?         |
| 🟠 Advanced     | What are first-class functions?                                                |
| 🟠 Advanced     | What is closure and how is it formed?                                          |
| 🟠 Advanced     | What is recursion?                                                             |
| 🟠 Advanced     | What is memoization?                                                           |
| 🔴 Expert       | How does JavaScript manage the call stack and event loop with async functions? |
| 🔴 Expert       | How do promises, async/await, and callbacks differ internally?                 |
| 🔴 Expert       | How can we create our own polyfill for `map()` or `bind()`?                    |




| Topic                                              | Definition / Concept                                        | Example                                                  | Key Notes / Why Use                                                        |
| -------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Function Declaration**                           | Named function declared using `function` keyword            | `function greet() { return "Hi"; }`                      | Hoisted, can call before definition                                        |
| **Function Expression**                            | Function assigned to a variable                             | `const greet = function() { return "Hi"; }`              | Not hoisted, useful as callback                                            |
| **Arrow Function**                                 | Short syntax `(args) => expr`                               | `const sum = (a,b) => a+b;`                              | Lexical `this`, no `arguments` object, concise                             |
| **Const Function**                                 | Function assigned to a `const`                              | `const greet = () => "Hi";`                              | Prevents reassignment, body still executes normally                        |
| **IIFE (Immediately Invoked Function Expression)** | Function runs immediately                                   | `(function(){ console.log("Hi"); })();`                  | Creates private scope, avoids globals, used in module pattern              |
| **Callback Function**                              | Function passed as argument                                 | `setTimeout(() => console.log("Hi"), 1000);`             | Executes after another function completes, common in async code            |
| **Higher-Order Function (HOF)**                    | Takes function as argument or returns function              | `function hof(fn){ return fn; }`                         | Enables functional programming, modular & reusable code                    |
| **Currying Function**                              | Converts multi-arg function → chain of single-arg functions | `const add = a => b => a+b; add(2)(3)`                   | HOF because returns function, useful for partial application & composition |
| **Pure Function**                                  | Always returns same output for same input, no side effects  | `const sum = (a,b)=>a+b;`                                | Predictable, testable, reusable, safe for concurrency                      |
| **Impure Function**                                | Modifies external state, I/O, or random output              | `let x=0; function inc(){ x++; }`                        | Output not deterministic, can cause bugs                                   |
| **Closure**                                        | Inner function accesses outer function variables            | `function outer(){ let a=1; return ()=>a; }`             | Maintains state, common in HOFs, callbacks, currying                       |
| **Recursion**                                      | Function calling itself                                     | `function fact(n){ return n<=1?1:n*fact(n-1); }`         | Useful for tree, DFS, algorithms                                           |
| **Partial Application**                            | Pre-filling some arguments of a function                    | `const add5 = add.bind(null,5); add5(3)`                 | Makes reusable specialized functions                                       |
| **`this` in function**                             | Refers to caller object (dynamic)                           | `obj.method()`                                           | Arrow functions inherit `this` from parent (lexical)                       |
| **`arguments` object**                             | Array-like object of function arguments                     | `function(a,b){ console.log(arguments[0]); }`            | Not available in arrow functions                                           |
| **Function Hoisting**                              | Function declaration is hoisted                             | `greet(); function greet(){}`                            | Expression/arrow not hoisted                                               |
| **Memoization**                                    | Caching function results                                    | `const fib = n => n<=1?1:fib(n-1)+fib(n-2);`             | Optimize repeated calls, can combine with pure functions                   |
| **Functional Composition**                         | Combining functions                                         | `const compose = (f,g) => x => f(g(x));`                 | Works best with pure functions & currying                                  |
| **Async Function**                                 | Returns Promise, can use `await`                            | `async function fetchData(){ return await fetch(url); }` | Modern async handling, cleaner than callbacks                              |
| **Generator Function**                             | Function yielding values one by one                         | `function* gen(){ yield 1; yield 2; }`                   | Lazy evaluation, iteration control                                         |
| **Event Handler Function**                         | Function triggered by events                                | `button.onclick = () => console.log("Clicked");`         | Often used with callbacks                                                  |
| **Middleware / Factory Functions**                 | Function returning function for configuration               | `const auth = role => (req,res,next)=>{}`                | Common in Express.js & API design, HOF + currying combo                    |


✅ Key Differences

| Feature        | Closure Example                                   | HOF Example                                  |
| -------------- | ------------------------------------------------- | -------------------------------------------- |
| Inner function | Named (`twoClouser`)                              | Anonymous                                    |
| Invocation     | Called explicitly inside outer function           | Returned and immediately invoked             |
| Purpose        | Demonstrates inner function accessing outer scope | Demonstrates returning a function (HOF)      |
| Closure usage  | Could capture outer variables                     | Could also capture outer variables if needed |
| Syntax         | `outer(){ inner() }`                              | `outer(){ return function(){}() }`           |





🔥 Excellent — this is a super important JavaScript topic: understanding
👉 Global Scope, Local Scope, Lexical Scope, and Block Scope.

| Scope Type | Where Declared                    | Accessible From       | Example                     |
| ---------- | --------------------------------- | --------------------- | --------------------------- |
| 🌍 Global  | Outside any function/block        | Everywhere            | `let name = "Jugal"`        |
| 🧩 Local   | Inside a function                 | Only that function    | `function f(){ let x=10; }` |
| 📦 Block   | Inside `{}` with `let` or `const` | Only inside that `{}` | `{ let a=5; }`              |
| 🧠 Lexical | Inner function uses outer vars    | Inner function        | Closure: nested functions   |



Global Scope
 ├── outer()
 │     ├── Local Scope (outer)
 │     │     ├── inner()
 │     │     │     └── Lexical Scope (can access outer’s vars)
 │     │
 │     └── Block Scope { let x }
 │
 └── Global vars (let, const)


Q ::: Step-by-Step Explanation
1️⃣ Normal function call

If you call Fn() without .call():

Fn();


Then:

In strict mode, this = undefined

In non-strict mode (default), this = window (in browser) or global (in Node.js)

2️⃣ With .call()

When you call:

Fn.call({ name: 'jugals' });

So inside Fn,
this now refers to the object { name: 'jugals' }.

Q 🎯 MAIN DIFFERENCE BETWEEN SCOPE AND HOISTING


| Concept      | Meaning                          | Affects What?           |
| ------------ | -------------------------------- | ----------------------- |
| **Scope**    | Where variables can be accessed  | Visibility              |
| **Hoisting** | How JS moves declarations to top | Initialization & errors |
