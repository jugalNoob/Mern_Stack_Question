✅ What are Primitive Types?

Primitive types are basic data types in JavaScript that:

single store value
✔ store a single simple value
✔ are immutable (cannot be changed)
✔ are stored by value (not by reference)

🔹 Primitive Types in JavaScript (7)

1️⃣ Number → 10, 3.5
2️⃣ String → "hello"
3️⃣ Boolean → true, false
4️⃣ Undefined → variable declared but not assigned
5️⃣ Null → intentional empty value
6️⃣ BigInt → very large integers
7️⃣ Symbol → unique identifiers

🔹 Example (Stored by VALUE)
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


👉 Changing b does not affect a

🔹 Immutable (cannot be changed)
let str = "Hi";
str[0] = "h";

console.log(str); // "Hi"


👉 You cannot modify a primitive value

🔹 Primitive vs Object (simple understanding)
let x = "hello";      // primitive
let y = { msg: "hello" }; // object

| Feature   | Primitive | Object    |
| --------- | --------- | --------- |
| Stored as | Value     | Reference |
| Mutable   | ❌ No      | ✅ Yes     |
| Size      | Fixed     | Dynamic   |


⭐ Interview One-Line Answer

Primitive types are basic immutable data types that store a
single value and are stored by value in memory.



// Immutable → You cannot change a primitive value.

let str = "Hello";
str[0] = "J";  // ❌ No effect
console.log(str); // "Hello"


🧩 5️⃣ Interview Summary Table


| Feature                      | Pass by Value      | Pass by Reference     |
| ---------------------------- | ------------------ | --------------------- |
| **Data Type**                | Primitive types    | Non-primitive types   |
| **Memory Stored As**         | Actual value       | Reference (address)   |
| **Copy Behavior**            | Creates a new copy | Points to same memory |
| **Changes Affect Original?** | ❌ No               | ✅ Yes                 |
| **Example**                  | `let x = 5`        | `let obj = { a: 1 }`  |



Q what meian Non primitive ?

🧠 Why?
Because objects, arrays, and functions are non-primitive → stored by 
reference (a pointer to a memory address).

📍 Both user1 and user2 point to the same memory location.

⚙️ 3️⃣ Visual Memory Representation



| Type           | Variable | Memory Value | Actual Value          |
| -------------- | -------- | ------------ | --------------------- |
| Primitive      | a        | `10`         | stored directly       |
| Primitive copy | b        | `10`         | independent copy      |
| Object         | user1    | `0x01`       | → { name: "Jugal" }   |
| Reference      | user2    | `0x01`       | points to same object 




👉 Why String is Primitive but Array is NOT in JavaScript?
Short answer (interview-ready):

A string represents a single immutable value, while an array is a mutable 
collection of multiple values, so strings are primitives and arrays are
 objects.




 Q what is Meain ✅ Used for objects or classes


console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true
console.log(new Date() instanceof Date); // true
console.log('js' instanceof String); // false (primitive, not object)
console.log(new String('js') instanceof String); // true


⭐ Interview Answer:

instanceof checks if an object is derived from a specific constructor’s 
prototype. It works only for objects, not primitives.

✅ instanceof – Meaning

instanceof checks whether an object is an instance of a constructor function/class.

Syntax:

object instanceof Constructor


Returns true if the object’s prototype chain includes Constructor.prototype

Returns false otherwise

🔹 Example with your code
console.log([] instanceof Array);   // true


[] is an array object

Array is the constructor

✅ true because array inherits from Array.prototype

console.log({} instanceof Object);  // true


{} is a plain object

Object is the constructor

✅ true because {} inherits from Object.prototype

console.log(new Date() instanceof Date); // true


new Date() creates a Date object

✅ true because it inherits from Date.prototype

console.log('js' instanceof String); // false


'js' is a primitive string, not an object

❌ false because primitive strings do not have a prototype chain

console.log(new String('js') instanceof String); // true


new String('js') creates a string object, not a primitive

✅ true because it inherits from String.prototype


| Example            | Type             | `instanceof` Result | Why                                    |
| ------------------ | ---------------- | ------------------- | -------------------------------------- |
| `'js'`             | primitive string | false               | No prototype chain                     |
| `new String('js')` | object string    | true                | Object created, inherits prototype     |
| `[]`               | object array     | true                | Array object, inherits Array.prototype |
| `{}`               | object literal   | true                | Inherits Object.prototype              |
| `new Date()`       | object Date      | true                | Inherits Date.prototype                |


| Feature    | Primitive               | Object                        |
| ---------- | ----------------------- | ----------------------------- |
| Stored by  | Value                   | Reference                     |
| Mutable?   | ❌ No                    | ✅ Yes                         |
| Prototype? | ❌ No                    | ✅ Yes (can use `instanceof`)  |
| Examples   | string, number, boolean | Array, Date, Function, Object |





Q what is NaN isNaN Number.isNaN()
| Item             | Means                                                    | Example               | Result |
| ---------------- | -------------------------------------------------------- | --------------------- | ------ |
| `NaN`            | actual value meaning Not-a-number                        | `console.log(NaN)`    | NaN    |
| `isNaN()`        | function checking if value is NaN (with type conversion) | `isNaN("abc")`        | true   |
| `Number.isNaN()` | strict version (no conversion)       



let a = "hello" / 2; // NaN
console.log(a)
console.log(Number.isNaN("abc") )
console.log(isNaN(a) )
console.log(isNaN('jugal') )