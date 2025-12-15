// https://dev.to/aelassas/functional-programming-in-typescript-575j



JavaScript Built-in Higher-Order Functions
map
filter
reduce
forEach
find
findIndex
some
every
flatMap
sort
concat
slice
splice
Timer and Execution Functions
setTimeout
setInterval
clearTimeout
clearInterval
setImmd

Function Binding and Execution Control
bind
call
apply
Common Functional Programming Functions (usually in libraries)
compose
pipe
curry
partial
memoize
debounce
throttle
JavaScript Function Types and Patterns
Async Functions: Functions that handle asynchronous code, often using async/await.
Immediately Invoked Function Expression (IIFE): A function that runs as soon as it’s defined.
Express Functions: Functions within Express.js (e.g., middleware, route handlers).
Closure Functions: Functions that capture the lexical scope in which they were defined.
Arrow Functions: Concise function expressions with the => syntax.
Generator Functions: Functions that can yield multiple values using the * syntax and yield keyword.
Anonymous Functions: Functions without a name, often assigned to variables or passed as arguments.
Function Scope and Length
Function Scope: Refers to the scope in which variables and functions are accessible.
Function Length: 


::::::: curry function all in one  :::::::::::::


function curry() {
   return function(name) {
      console.log(`Name: ${name}`);
      return function(email) {
         console.log(`Email: ${email}`);
         return function(username) {
            console.log(`Username: ${username}`);
            return function(age) {
               console.log(`Age: ${age}`);
            }
         }
      }
   }
}

// Call the function
curry()('Jugal')('jugalsharm@gmail.com')('jugal786')('45');





::: function Closure all important   ::::::::::::::::::::::::::::::
Q Key use Case of closures  --> Data Privacy 

Ans:: Closure are commonly used to create private var that canot be 
accessed from out the function 

function createCounter(){
   let count=0

   return{
      increment: function(){count++},
      getcount: function(){return count}
     
   }


what is a javscript closure ? ..........................................

function outer(){
   let count=0

  return function inner(){
     count++

     return count
   }
}
let cont=outer()
console.log(cont()) // 1
console.log(cont()) // 2



:::::::::::::::::::::::::: event handler in loops ............
// for(let i=0; i<5; i++){

//    setTimeout(()=>{

//       console.log(i)
//    },1000*i)
// }

:::::::All Function In Jvaascript:::::::::::::::::::::


let person1 = {  //;JavaScript Factory Functions
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person1.getFullName())



function getNames() {  /// Returning multiple values from a function using an array
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];
}

let names = getNames();
const [firstName, lastName] = getNames();


function getNames() {//Returning multiple values from an function using an object
  // get names from the database or API
  let firstName = 'John',
      lastName = 'Doe';

  // return values
  return {
    'firstName': firstName,
    'lastName': lastName
  };

// return { firstName, lastName };
}
let { firstName, lastName } = getNames()

00::function CallBack  ::::::::::::::::::::::::::
function one(a, b) {
    console.log(a + b);
}

function two(a, b) {
    console.log(a * b);
}

function call(calls, a, b) {
    calls(a, b);
}

call(one, 2, 3); // Outputs: 5

call(two, 3, 3); // Outputs: 5


:::Const Function  ::::::::::::::::::::::::::::::::::::::
const one = () => () => () => console.log(5, 6, 7);
one()()();

const one=()=>{
   console.log("jugal")
}

one()






1::JavaScript Async

1::Function highOrder 

2::Function curing 
function one(a) {
   return function(b) {

       return function(c) {
           return function(d) {
               console.log(a, b, c, d);
           }
       }
   }
}

one(5)(4)(6)(7); // This would result in an error because the functions expect arguments


3::Function iiff
(function(){
   console.log("jugal")
})()


5::Function express
let one=function(){
   console.log("jugal")
}
one()

7::function call

2. call() Method
❓ What is the call() method, and how does it work?
✅ call() invokes a function with a specific this value and individual arguments.

function greet(age) {
  console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
}

const person = { name: "Alice" };
greet.call(person, 25);


4. bind() Method
❓ What does the bind() method do?
✅ bind() returns a new function with this perma

const boundGreet = greet.bind(person);
boundGreet(35);



8::function bind
9::function apply

3. apply() Method
❓ How is apply() different from call()?
✅ apply() is the same as call(), but arguments are passed as an array.
greet.apply(person, [30]);


The apply() Method with Arguments
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);


|||||||||
6::Function closure
function outerFunction() {
   let outerVariable = 'I am from the outer function';
   function innerFunction() {
       console.log(outerVariable); // innerFunction has access to outerVariable
   }
   return innerFunction;
}
const closureExample = outerFunction();
closureExample(); // This will log: "I am from the outer function"



7::Function prototype

8::Function thisKeyword


::Arrow Function
Arrow Functions Return Value by Default: ::hello = () => "Hello World!";

10::data Time
let date = new Date();
  console.log(date);



||||||||||Function Generator

async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = '';
for (const val of foo()) {
  str = str + val;
}

::::: Function Nmae 
const object = {
  func2: function () {},
};
console.log(func1.name);
// Expected output: "func1"
console.log(object.func2.name);


// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};

// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Traditional anonymous function
(function (a) {
  return a + 100;
});


::: function Length
function func1() {}
function func2(a, b) {}
console.log(func1.length);
// Expected output: 0
console.log(func2.length);
// Expected output: 2



::::::: async function ::::::::::::

async function one() {
  console.log("A")  // first 

await console.log("B")  //second  await

  console.log("C")  // five 
}

one();
console.log("D")  // three 
console.log("E")  //four



:::::: ---------------<><><><><<
Event Loop in javascript  
????????????  https://www.jsv9000.app/

function A(){
   console.log('A')
}
function B(){
   console.log('B')
}
function C(){
   console.log('C')
}
function D(){
   console.log('D')
}
A()
B()
Promise.resolve().then(C)
D()




::::: Function Call  bind apply -------<><><><>
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.call(person, 'jugal sharma'));
// Output: Hello, John! I am a developer.

....Apply
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.apply(person, ['John']));
// Output: Hello, John! I am a developer.

.................bind
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
const greetPerson = greet.bind(person);
console.log(greetPerson('karan'));




...Function Scope
Variables defined inside a function are not accessible
     (visible) from outside the function.
     function myFunction() {
        var carName = "Volvo";   // Function Scope
      }

      function myFunction() {
        let carName = "Volvo";   // Function Scope
      }


 ...     Global JavaScript Variables

 let carName = "Volvo";
    // code here can use carName
    
    function myFunction() {
    // code here can also use carName
    }]


:::::::::::::::::::: New function   Code :::::::::::::::::::::::::::::::::::::::::::



1. Function Declaration

A function declaration is a named function that is defined using the function keyword. It is hoisted,
 meaning you can call the function even before its definition in the code.

 // Function Declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!

// Function Declaration is hoisted
sayHello(); // Output: Hello!
function sayHello() {
  console.log("Hello!");
}





1. Function Declaration
A function declaration is a named function that is defined using the function keyword. It is hoisted, meaning you can call the function even before its definition in the code.

Code Example:
javascript
Copy code
// Function Declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!

// Function Declaration is hoisted
sayHello(); // Output: Hello!
function sayHello() {
  console.log("Hello!");
}


2. Function Expression
A function expression defines a function and assigns it to a variable. It is not hoisted, 
meaning you cannot call it before its definition.


// Function Expression
const greet = function () {
  console.log("Hello, Function Expression!");
};

greet(); // Output: Hello, Function Expression!

// Function Expression is not hoisted
// sayHello(); // Error: Cannot access 'sayHello' before initialization
const sayHello = function () {
  console.log("Hello!");
};




1. Function Declaration
A function declaration is a named function that is defined using the function keyword. It is hoisted, meaning you can call the function even before its definition in the code.

Code Example:
javascript
Copy code
// Function Declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!

// Function Declaration is hoisted
sayHello(); // Output: Hello!
function sayHello() {
  console.log("Hello!");
}
2. Function Expression
A function expression defines a function and assigns it to a variable. It is not hoisted, meaning you cannot call it before its definition.

Code Example:
javascript
Copy code
// Function Expression
const greet = function () {
  console.log("Hello, Function Expression!");
};

greet(); // Output: Hello, Function Expression!

// Function Expression is not hoisted
// sayHello(); // Error: Cannot access 'sayHello' before initialization
const sayHello = function () {
  console.log("Hello!");
};
3. Scope
Scope determines the accessibility of variables and functions. JavaScript has two
 main types of scope: Global Scope and Local Scope.

a. Global Scope
Variables declared outside any function or block are in the global scope. 
They are accessible throughout the program.


// Global Scope
let globalVar = "I am global!";

function displayGlobal() {
  console.log(globalVar); // Accessing global variable
}

displayGlobal(); // Output: I am global!

// Modifying global variable
globalVar = "I am modified globally!";
console.log(globalVar); // Output: I am modified globally!



1. Function Declaration
A function declaration is a named function that is defined using the function keyword. It is hoisted, meaning you can call the function even before its definition in the code.

Code Example:
javascript
Copy code
// Function Declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!

// Function Declaration is hoisted
sayHello(); // Output: Hello!
function sayHello() {
  console.log("Hello!");
}
2. Function Expression
A function expression defines a function and assigns it to a variable. It is not hoisted, meaning you cannot call it before its definition.

Code Example:
javascript
Copy code
// Function Expression
const greet = function () {
  console.log("Hello, Function Expression!");
};

greet(); // Output: Hello, Function Expression!

// Function Expression is not hoisted
// sayHello(); // Error: Cannot access 'sayHello' before initialization
const sayHello = function () {
  console.log("Hello!");
};
3. Scope
Scope determines the accessibility of variables and functions. JavaScript has two main types of scope: Global Scope and Local Scope.

a. Global Scope
Variables declared outside any function or block are in the global scope. They are accessible throughout the program.

Code Example:
javascript
Copy code
// Global Scope
let globalVar = "I am global!";

function displayGlobal() {
  console.log(globalVar); // Accessing global variable
}

displayGlobal(); // Output: I am global!

// Modifying global variable
globalVar = "I am modified globally!";
console.log(globalVar); // Output: I am modified globally!


b. Local Scope
Variables declared inside a function or block are in the local scope. They are accessible 
only within that function or block.


function localExample() {
  let localVar = "I am local!";
  console.log(localVar); // Accessible here
}

localExample(); // Output: I am local!

// console.log(localVar); // Error: localVar is not defined




1. Function Declaration
A function declaration is a named function that is defined using the function keyword. It is hoisted, meaning you can call the function even before its definition in the code.

Code Example:
javascript
Copy code
// Function Declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!

// Function Declaration is hoisted
sayHello(); // Output: Hello!
function sayHello() {
  console.log("Hello!");
}
2. Function Expression
A function expression defines a function and assigns it to a variable. It is not hoisted, meaning you cannot call it before its definition.

Code Example:
javascript
Copy code
// Function Expression
const greet = function () {
  console.log("Hello, Function Expression!");
};

greet(); // Output: Hello, Function Expression!

// Function Expression is not hoisted
// sayHello(); // Error: Cannot access 'sayHello' before initialization
const sayHello = function () {
  console.log("Hello!");
};
3. Scope
Scope determines the accessibility of variables and functions. JavaScript has two main types of scope: Global Scope and Local Scope.

a. Global Scope
Variables declared outside any function or block are in the global scope. They are accessible throughout the program.

Code Example:
javascript
Copy code
// Global Scope
let globalVar = "I am global!";

function displayGlobal() {
  console.log(globalVar); // Accessing global variable
}

displayGlobal(); // Output: I am global!

// Modifying global variable
globalVar = "I am modified globally!";
console.log(globalVar); // Output: I am modified globally!
b. Local Scope
Variables declared inside a function or block are in the local scope. They are accessible only within that function or block.

Code Example:
javascript
Copy code
function localExample() {
  let localVar = "I am local!";
  console.log(localVar); // Accessible here
}

localExample(); // Output: I am local!

// console.log(localVar); // Error: localVar is not defined
4. Global and Local Scope Interaction

Global variables can be accessed in local scope, but local variables cannot be accessed in global scope.


let globalVar = "I am global!";

function testScope() {
  let localVar = "I am local!";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();

// console.log(localVar); // Error: localVar is not defined


5. Block Scope with let and const
Variables declared with let and const are block-scoped, meaning they are limited
 to the block in which they are defined.

 if (true) {
  let blockVar = "I am block scoped!";
  console.log(blockVar); // Accessible
}

// console.log(blockVar); // Error: blockVar is not defined






    Feature  	             Example   	          Hoisted     ScopeAccessible	   Reassignment

    FunctionDeclaration	  :function greet() {}	 :Yes	    Global, Local	          N/A

    Function Expression	  const greet = function	No	    Block/Local	            Yes

    Global Scope	           let x = 10	          N/A	     Everywhere          	  Yes

    Local Scope	           Inside a function	      N/A	    Inside Function	      Yes
