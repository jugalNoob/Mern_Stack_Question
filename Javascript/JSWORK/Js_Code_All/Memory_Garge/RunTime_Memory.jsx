1:::Here's a well-structured document covering JavaScript Runtime, including
 Execution Contexts, 
00::Call Stack,
00::Event Loop,
00::Hoisting,
00::Scopes,
00::Stack &Heap Memory, 
00::and V8 Memory Management
00:with clear explanations and code 
  examples.

2::JavaScript Runtime: Execution Contexts,
Call Stack,
Event Loop,
Hoisting, and
Memory Management


1. Execution Contexts

Execution Context is the environment in which JavaScript code runs. It includes:

Global Execution Context (GEC): The default execution context.

Function Execution Context (FEC): Created when a function is called.

Eval Execution Context: Created when executing eval().


console.log("Start");
function greet() {
    console.log("Hello, Jugal!");
}
greet();
console.log("End");



2. Call Stack

The Call Stack is a LIFO (Last In, First Out) structure used 
to manage execution contexts.


function one() {
    console.log("Function One");
    two();
}
function two() {
    console.log("Function Two");
    three();
}
function three() {
    console.log("Function Three");
}
one();

Call Stack Execution:

one() → Added to the stack.

console.log("Function One") → Executes and removed.

two() → Added to the stack.

console.log("Function Two") → Executes and removed.

three() → Added to the stack.

console.log("Function Three") → Executes and removed.


3. Hoisting

Hoisting moves variable and function declarations to the top
 of their scope during the compilation phase.


 console.log(a); // undefined
var a = 5;

one();  // Works because function declarations are hoisted
function one() {
    console.log("Hoisting Example");
}

two();  // Error: Cannot access 'two' before initialization
const two = () => {
    console.log("Arrow function hoisting");
};


4. Variable Scopes

Global Scope:

let globalVar = "I'm a global variable";
function showGlobalVar() {
    console.log(globalVar);  // Accessible inside the function
}
showGlobalVar();


Function Scope:
function localScopeExample() {
    var localVar = "I'm a local variable";
    console.log(localVar);
}
localScopeExample();
console.log(localVar);  // ReferenceError


Block Scope (ES6: let & const):

if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar);
}
console.log(blockVar);  // ReferenceError


5. Event Loop

The Event Loop handles asynchronous code execution.

Example:

console.log("Start");
setTimeout(() => console.log("Async Task"), 2000);
console.log("End");


Execution Flow:

console.log("Start") → Runs immediately.

setTimeout → Moves to Web API, waits 2 seconds.

console.log("End") → Runs immediately.

After 2 seconds, setTimeout callback moves to Callback Queue, then executes.


6. Stack vs Heap Memory

Stack (Primitive Data):

let x = 10;
let y = x; // Copy of value
x = 20;
console.log(y); // 10 (original value remains unchanged)


Heap (Non-Primitive Data):

let obj1 = { name: "Jugal" };
let obj2 = obj1; // Reference to the same object
obj1.name = "Karan";
console.log(obj2.name); // "Karan" (both refer to same object)




7. V8 Memory Management & Garbage Collection

V8 uses Mark-and-Sweep algorithm for garbage collection:

Mark Phase: Marks active objects.

Sweep Phase: Removes unreferenced objects.

Example of Unreachable Object (Garbage Collected):

let user = { name: "John" };
user = null; // Original object is now eligible for garbage collection

For more insights:

V8 Memory Management

Python Tutor

JavaScript Visualizer



Conclusion

Execution Contexts determine how JavaScript code runs.

Call Stack executes functions in LIFO order.

Hoisting moves declarations to the top.

Scopes determine variable accessibility.

Event Loop handles async operations.

Stack & Heap manage memory efficiently.

Garbage Collection frees unused memory automatically.


