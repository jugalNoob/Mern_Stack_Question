✅ Summary Table

| Category      | Data Types                                                              |
| ------------- | ----------------------------------------------------------------------- |
| Primitive     | Number, String, Boolean, Undefined, Null, Symbol, BigInt                |
| Non-Primitive | Object, Array, Function, Date, RegExp, Map, WeakMap, Set, WeakSet, etc. |




JavaScript Statements

let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4


🔹 1. Primitive Data Types

Primitive = immutable (cannot be changed directly), stored by value.

Number

Represents integers, floats, NaN, Infinity.


let age = 25;  
let pi = 3.14;  
let temp = -5;  
let notANumber = NaN;  
let infinite = Infinity;


String

Sequence of characters in " ", ' ', or ` ` (template literal).


let name = "Jugal";  
let message = 'Hello World';  
let greet = `Hi, ${name}!`;


Boolean

True or False values.

let isLoggedIn = true;  
let isVerified = false;



Undefined

Declared variable without value.


let x;  
console.log(x); // undefined


Null

Intentional empty value.


let data = null;


Symbol (ES6)

Unique and immutable value, often used as object keys.


let sym1 = Symbol("id");  
let sym2 = Symbol("id");  
console.log(sym1 === sym2); // false


console.log(sym1 === sym2); // false
BigInt (ES11 / ES2020)

Represents very large integers beyond Number.MAX_SAFE_INTEGER.


let big = 123456789012345678901234567890n;  
let anotherBig = BigInt(9876543210);


console.log(typeof 42);        // "number"
console.log(typeof "hi");      // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  ❌ (quirk in JS)
console.log(typeof Symbol());  // "symbol"
console.log(typeof 123n);      // "bigint"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function"





1. var (Function-Scoped)
Can be redeclared and updated.
Function-scoped: Available throughout the function in which it is declared.
Hoisted to the top of its scope but initialized as undefined.

function example() {
    console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
}
example();



2. let (Block-Scoped)
Cannot be redeclared in the same scope but can be updated.
Block-scoped: Only available within the {} block where it is declared.
Hoisted but not initialized (causes a ReferenceError if accessed before declaration).

function example() {
    console.log(b); // ReferenceError
    let b = 20;
    console.log(b); // 20
}
example();



3. const (Block-Scoped and Immutable)
Must be initialized when declared.
Cannot be reassigned after initialization.
Block-scoped, just like let.


const PI = 3.14;
PI = 3.1415; // TypeError: Assignment to constant variable.



🔹 2. Non-Primitive (Reference) Data Types

Reference = mutable, stored by reference (memory address).

Object

Collection of key-value pairs.

let person = { name: "Jugal", age: 25 };


Array (special kind of object)

Ordered list of values.

let colors = ["red", "green", "blue"];


Function (callable object)

function greet() { return "Hello"; }


Date

let today = new Date();


RegExp

let pattern = /abc/;


Map / WeakMap

let map = new Map();
map.set("key", "value");


Set / WeakSet

let set = new Set([1, 2, 3, 3]); // {1,2,3}





