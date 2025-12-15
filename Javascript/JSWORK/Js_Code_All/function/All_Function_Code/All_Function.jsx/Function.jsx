1::curry function 

2::1. Function Declaration

3:: Function Expression  

4::Name function expression 

4.arrow function 

5::IIFE 

6::Generator Function 

7::Async function 

8::Async generator function 

9::constructor function 

10::class Method 

11::Getter & settter functiuon 

12::Higher-order function 

13::callback function 

14::constructor function 

15::Variadic function 



call vs apply vs bind: All about controlling this.

Factory vs Constructor: Two ways to create objects.


0000000000 :::::::::::::: ---------------------------->>



1. Function Declaration

What: A standard named function using function keyword.

Hoisting: Fully hoisted (you can call it before definition).

Use Case: Best for reusable functions in global or local scope.



You want to understand the difference between:

Calling inside the function (console inside function)

Returning from the function (console outside function)

Let me explain clearly with your code 👇

✅ 1. Console INSIDE the function
function para() {
    console.log('jugal console')
}
para();

✔ What happens?

When you call para(), the function prints something internally.

It does not return anything.

So the output comes only from inside the function.

❗Return value?

undefined (because no return statement)

✅ 2. RETURN value and console OUTSIDE function
function opName(){
   return 'jugal return'
}

console.log(opName());

✔ What happens?

opName() returns the string 'jugal return'

You print the returned value outside using console.log().

🔥 Key point:

return gives output to the caller, not to the console.


⭐ Difference Summary (Very Important)


| Feature          | `console.log()` inside function | `return` inside function         |
| ---------------- | ------------------------------- | -------------------------------- |
| Purpose          | Only prints to console          | Sends data *out* of the function |
| Visible outside? | ❌ No                            | ✔ Yes                            |
| Function output  | `undefined`                     | Whatever you return              |
| Use case         | Debugging                       | Actual logic, data passing       |




⭐ Example to Understand Better
❌ Using only console inside the function:
function add(a, b) {
    console.log(a + b)   // prints but returns nothing
}

const result = add(5, 10)
console.log(result)   // undefined

✔ Using return:
function add(a, b) {
    return a + b
}

const result = add(5, 10)
console.log(result)   // 15

🔥 Final Answer
✔ console.log() → prints something
✔ return → sends data back to the caller

Both are completely different.





❓Q6: What will happen? ::::::::: -------------->>


function y() {
  return;
  return 10;
}
console.log(y());

✅ Answer
undefined


Because the first return stops execution.


00::::::::: ---------------->>

❓Q5: What is the output?
function x() {
  return "A";
  console.log("B");
}
console.log(x());

✅ Answer
A


Reason:
Anything after return is dead code.

000:::::::::::::::: --------------->>

❓Q1: What will be the output?
function test() {
  console.log("inside");
}
console.log(test());

✅ Answer
inside
undefined


Why?

First log prints "inside".

test() has no return → returns undefined.

So the second log prints undefined.

0000:::::::::::: ------------------>>

❓Q2: What will be printed?
function getValue() {
  return console.log("hello");
}
console.log(getValue());

✅ Answer
hello
undefined

Reason:

console.log("hello") prints "hello" → returns undefined.

So getValue() returns undefined.

Final console.log prints undefined.

0:::::::::::::::::::: ---------------->>
❓Q3: Which one is correct for sending data out of a function?


function sum(a, b) {
  console.log(a + b);
}


vs

function sum(a, b) {
  return a + b;
}

✅ Answer:

return a + b
Because console only prints, it does not give actual output
 to other functions.

❓Q4: What will this print? 000::::::::: ----------------->>>
function a() {
  return 10;
}

function b() {
  console.log(a());
}

console.log(b());

✅ Answer
10
undefined


b() prints 10

But b() returns nothing → undefined





This is a named function declaration. I’ll explain every word, how JS stores it, and how it executes — deep but simple (interview-ready).

Your code
function nameds(a){
    return a
}

console.log(nameds('karan'))

1️⃣ What does the word function mean?

function tells JavaScript:

“Create a reusable block of code and store it in memory.”

So this line:

function nameds(a) { ... }


➡️ creates a function object in memory

2️⃣ What is nameds?
function nameds(a) { ... }


nameds is the function name

JavaScript creates a variable called nameds

That variable points to a function object

Internally (conceptual):

nameds → ƒ (function object)


📌 Important:

This is why functions are called first-class citizens

You can pass nameds as a value

3️⃣ What is (a)?
function nameds(a)


a is a parameter

It acts like a local variable

It gets its value when the function is called

At definition time:

a = undefined

4️⃣ What happens in memory? (Creation Phase)

When JS starts, it creates a Global Execution Context (GEC)

Memory Phase (Hoisting)
nameds → function nameds(a) { return a }


✔️ Entire function body is stored
✔️ This is why function declarations are hoisted

5️⃣ What happens when you call the function?
nameds('karan')

Execution Phase

A new execution context is created

Parameter assignment:

a = 'karan'


Function body runs

6️⃣ What does return a do?
return a


Stops function execution

Sends value back to the caller

Destroys function execution context

Returned value:

'karan'

7️⃣ Final output
console.log(nameds('karan'))


Output:

karan

8️⃣ Function storage in memory (VERY IMPORTANT)
Functions are stored as objects
typeof nameds // "function"


But internally:

typeof nameds === "function" // special object


Equivalent to:

const nameds = function(a) {
    return a
}

9️⃣ Why function declarations are special (Hoisting)

This works:

sayHi()

function sayHi() {
    console.log('Hi')
}


Because during memory creation:

sayHi → function reference

🔥 Compare with function expression
console.log(test()) // ❌ Error

const test = function() {
    return 'hello'
}


Why?

test is hoisted as undefined

Function body not stored yet

🔟 Scope of a
function nameds(a) {
    console.log(a)
}
console.log(a) // ❌ ReferenceError


a exists only inside the function

Function creates its own scope

🧠 Interview One-liners

✔ Function declaration is hoisted completely
✔ Functions are stored in memory as objects
✔ Parameters are local variables
✔ Each function call creates a new execution context
✔ Return sends value and destroys context

🔥 Visualization
Global Memory:
nameds → ƒ

Call Stack:
nameds EC
  a = 'karan'
  return 'karan'


If you want next:

🔥 function expression vs declaration

🔥 arrow function deep internals

🔥 closures & function memory

🔥 how functions are passed as values

🔥 call stack diagrams

Just tell me 🚀