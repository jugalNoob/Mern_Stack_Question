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






🔥 All Functions in JavaScript — Complete Guide (Interview Prep)

00.. constructor function 

const cum=new function ('a' , 'b' , return a+ b)

console.log(sum(10 , 20))


1. Function Declaration

What: A standard named function using function keyword.

Hoisting: Fully hoisted (you can call it before definition).

Use Case: Best for reusable functions in global or local scope.

2. Function Expression

What: Function assigned to a variable (anonymous or named).

Hoisting: Not hoisted. Must be defined before use.

Use Case: Useful for conditional function definitions or callbacks.

3. Arrow Function

What: Introduced in ES6, concise => syntax.

Key Features:

No own this, arguments, or super.

Inherits this from surrounding context (lexical scope).

Use Case: Great for callbacks, array methods (map, filter).

4. Anonymous Function

What: Function without a name, often used inline.

Use Case: Used as arguments for higher-order functions, event listeners.

5. Higher-Order Function

What: A function that takes another function as an argument OR returns one.

Use Case: Functional programming (map, filter, reduce, middleware).

6. IIFE (Immediately Invoked Function Expression)

What: Function that executes right after being defined.

Use Case:

Create isolated scope.

Avoid polluting global namespace.

7. Async Function

What: Declared with async, always returns a Promise.

Use Case: Handle asynchronous operations with await for cleaner code.

8. Generator Function

What: Declared with function*, uses yield to pause/resume execution.

Use Case: Lazy evaluation, handling infinite sequences, async-like flows.

9. Closure

What: Function that remembers variables from its outer scope, even after that scope is gone.

Use Case:

Data privacy (private variables).

Persistent state across function calls.

10. Callback Function

What: Function passed as an argument to another function.

Use Case: Event handling, asynchronous programming (before Promises).

11. Constructor Function

What: Functions used with new keyword to create objects.

Use Case: Object-oriented programming before ES6 class.

12. Factory Function

What: Function that returns an object without new.

Use Case: Object creation patterns, especially for encapsulation.

13. Function Scope

What: Variables declared inside a function are not accessible outside.

Types:

Global scope.

Local scope.

Block scope (with let and const).

14. Function Length

What: Property that tells how many parameters a function is expecting.

Use Case: Useful in function overloading or frameworks.

15. Function Name

What: Property that gives the name of a function.

Use Case: Debugging, stack traces, reflection.

16. Function Prototype

What: Every function has a prototype object (used with new keyword).

Use Case: Add methods to objects created by constructor functions.

17. Special Function Methods

call(): Invokes a function with a given this and individual arguments.

apply(): Same as call, but arguments passed as an array.

bind(): Returns a new function with permanently bound this.

Use Case: Explicitly controlling context (this).

18. Function as First-Class Citizen

Functions in JavaScript are first-class objects:

Can be assigned to variables.

Passed as arguments.

Returned from other functions.

19. Function Constructors (new Function)

What: Functions can be created dynamically using the Function constructor.

Use Case: Rare, mostly for dynamic execution (not recommended).

20. Async Generators

What: Combination of async + generator (async function*).

Use Case: Handle streams of asynchronous data.