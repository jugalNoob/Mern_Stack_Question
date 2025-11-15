/// ----- >Real wORLD Use Calll __________________________>>>

1️⃣ call()
🔹 Meaning:

Calls a function immediately with a given this context.

Passes arguments separately.

🔹 Syntax:
func.call(obj, arg1, arg2, ...)

🔹 Use Cases:

Reusing functions across different objects.

Borrowing methods from one object to use on another.

🔹 Example:
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet(greeting) {
  return `${greeting}, ${this.name}`;
}

console.log(greet.call(person1, "Hello")); // "Hello, Alice"
console.log(greet.call(person2, "Hi"));    // "Hi, Bob"

Common Interview Question:

What is the difference between call and apply?


2️⃣ apply()
🔹 Meaning:

Works like call, but arguments are passed as an array.

Also calls the function immediately.

🔹 Syntax:
func.apply(obj, [arg1, arg2, ...])

🔹 Use Cases:

When arguments are already in an array.

Using Math.max or Math.min on arrays:

const numbers = [5, 10, 2];
console.log(Math.max.apply(null, numbers)); // 10


🔹 Common Interview Question:

When would you use apply over call?




3️⃣ bind()
🔹 Meaning:

Returns a new function with this bound to a specific object.

Does not call immediately — call it later when needed.

Can preset arguments (partial application).

🔹 Syntax:
const boundFunc = func.bind(obj, arg1, arg2, ...);
boundFunc(); // now calls the function

🔹 Use Cases:

Event handlers in JavaScript / React

button.onclick = getInfo.bind(userObj);


Partial function application (preset arguments)

const multiply = (a, b) => a * b;
const double = multiply.bind(null, 2);
console.log(double(5)); // 10

🔹 Common Interview Question:

Explain the difference between bind, call, and apply.
Give a real-world use case for each.










let Obj = { name: 'juigal', age: 45 };

function getInfo(greet) {
  return `${greet}! My name is ${this.name}, age ${this.age}`;
}



console.log(getInfo.call(Obj, "Hello"));
// ✅ Output: "Hello! My name is juigal, age 45"


1️⃣ call()

Meaning:

Invokes a function immediately

Sets this to the object you provide

Accepts arguments separately

let Obj = { name: 'juigal', age: 45 };

function getInfo(greet) {
  return `${greet}! My name is ${this.name}, age ${this.age}`;
}

console.log(getInfo.call(Obj, "Hello"));
// ✅ Output: "Hello! My name is juigal, age 45"


Use case:

You have a standalone function, but you want it to work as if it’s a method of a specific object.

Interview question:

What’s the difference between call and apply?




2️⃣ apply()

Meaning:

Works almost like call, but arguments are passed as an array

Invokes the function immediately

console.log(getInfo.apply(Obj, ["Hi"]));
// ✅ Output: "Hi! My name is juigal, age 45"


Use case:

Useful when you have arguments in an array

Example: Math.max.apply(null, [1, 5, 3]) → returns 5

Interview question:

How to use a function for another object and pass arguments as an array?




3️⃣ bind()

Meaning:

Returns a new function

Sets this to the object you provide

Does not call immediately — you must call it later

let binds = getInfo.bind(Obj); // returns a new function
console.log(binds()); 
// ✅ Output: "undefined! My name is juigal, age 45"
// because we didn’t pass greet argument

let binds2 = getInfo.bind(Obj, "Hey"); // preset argument
console.log(binds2()); 
// ✅ Output: "Hey! My name is juigal, age 45"


Use case:

Very useful for event handlers in UI frameworks (React, DOM),

Example:

button.onclick = getInfo.bind(Obj);


Ensures this inside getInfo always refers to Obj, not the button element.

Interview question:

Explain the difference between call, apply, and bind.


//////////////////////// -------------------------------->>


let Obj = { name: 'juigal', age: 45 };

function getInfo(greet) {
  return `${greet}! My name is ${this.name}, age ${this.age}`;
}



console.log(getInfo.call(Obj, "Hello"));
// ✅ Output: "Hello! My name is juigal, age 45"


//2️⃣ apply()

Meaning:

//Works almost like call, but arguments are passed as an array
//Invokes the function immediately

console.log(getInfo.apply(Obj , ['jugal'])) //------------- > 


// ------>>>> 
let binds2 = getInfo.bind(Obj, "Hey"); // preset argument
console.log(binds2()); 