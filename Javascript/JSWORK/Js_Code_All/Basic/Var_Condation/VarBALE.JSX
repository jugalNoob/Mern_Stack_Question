// 1️⃣ var, let, const
var x = 1; let y = 2; const z = 3;
x = 10; y = 20; // ok
// z = 30; ❌ Error

console.log(x, y, z); // 10 20 3


let str = "Hello";
str[0] = "J";  // ❌ No effect
console.log(str.includes('J')); // "Hello"




Q ::Primitives are immutable, meaning their values cannot be changed 
once created (though you can reassign variables that hold them).


| Type          | Example                              | Description                                                   |
| ------------- | ------------------------------------ | ------------------------------------------------------------- |
| **string**    | `'hello'`, `"abc"`, `` `template` `` | Represents text                                               |
| **number**    | `42`, `3.14`, `-7`                   | Represents integers and floating numbers                      |
| **boolean**   | `true`, `false`                      | Represents logical true/false                                 |
| **undefined** | `let x; // x is undefined`           | A variable declared but not assigned any value                |
| **null**      | `let y = null;`                      | Represents an intentional empty value                         |
| **symbol**    | `let s = Symbol('id');`              | Unique and immutable identifier (added in ES6)                |
| **bigint**    | `123n`, `9007199254740991n`          | Used for very large integers beyond `Number.MAX_SAFE_INTEGER` |



// Immutable → You cannot change a primitive value.

let str = "Hello";
str[0] = "J";  // ❌ No effect
console.log(str); // "Hello"


🎯 Summary for Interviews

| Concept            | Key Point                                                 |
| ------------------ | --------------------------------------------------------- |
| **Primitives**     | Immutable, compared by value                              |
| **Objects/Arrays** | Mutable, compared by reference                            |
| **`==` vs `===`**  | `==` allows coercion, `===` checks type too               |
| **`var`**          | Function-scoped, hoisted as `undefined`                   |
| **`let`**          | Block-scoped, hoisted but in TDZ                          |
| **`const`**        | Block-scoped, must be initialized and can’t be reassigned |




🧮 Part 1: Type Coercion and Equality
🧩 console.log([] + [[]] + !![])

Let’s evaluate this step by step:

Step 1: [] + [[]]

In JavaScript, when you use + with arrays or objects, they’re converted to strings.

[].toString() → ''

[[]].toString() → ''

So:

[] + [[]] → '' + '' → ''

Step 2: !![]

[] is a truthy value.
!![] → true

Step 3: Combine all:
'' + true → 'true'


✅ Output:

true

🧩 console.log('' + '' + true)

Both '' (empty strings) are concatenated with true:

'' + '' + true → '' + 'true' → 'true'


✅ Output:

true

🧩 console.log({} == [])

== checks after type coercion.
Objects are only equal to themselves (same reference).
But {} and [] are different object types.

✅ Output:

false

🧩 console.log({} === [])

=== checks strict equality, no type conversion.
Since {} and [] are different references (and types), it’s clearly false.

✅ Output:

false

🧩 console.log('12' == 12)

== allows type coercion.
'12' is converted to a number → 12 == 12.

✅ Output:

true

🧩 console.log(12 === '12')

=== checks both value and type.

Left: number

Right: string
→ Not same type

✅ Output:

false




🧩 console.log(12 === '12')
=== checks both value and type.

Left: number

Right: string
→ Not same type

✅ Output:

arduino
Copy code
false
⚙️ Part 2: var, let, and const



| Feature        | `var`                                  | `let`                                   | `const`                                 |
| -------------- | -------------------------------------- | --------------------------------------- | --------------------------------------- |
| **Scope**      | Function-scoped                        | Block-scoped                            | Block-scoped                            |
| **Re-declare** | ✅ Allowed                              | ❌ Not allowed                           | ❌ Not allowed                           |
| **Re-assign**  | ✅ Allowed                              | ✅ Allowed                               | ❌ Not allowed                           |
| **Hoisting**   | ✅ Hoisted (initialized as `undefined`) | ✅ Hoisted (but in *Temporal Dead Zone*) | ✅ Hoisted (but in *Temporal Dead Zone*) |



🧩 Example 1 — Hoisting

console.log(x);
var x = 10;


🧠 Explanation:

During the creation phase, var x is hoisted and initialized to undefined.

So JS reads it as:

var x;
console.log(x); // undefined
x = 10;


✅ Output:

undefined

🧩 Example 2 — Hoisting with let
// console.log(b);
let b = 10;


🧠 Explanation:

let is hoisted but not initialized.

It’s in the Temporal Dead Zone (TDZ) until the declaration line is executed.

Accessing it before declaration throws a ReferenceError.

✅ Output (if uncommented):

ReferenceError: Cannot access 'b' before initialization

🧩 Example 3 — Re-assignment
let b = 10;
b = 'jugal sharma b';
console.log(b);


✅ Allowed — let allows reassignment.

✅ Output:

jugal sharma b

🧩 Example 4 — const (constant)
const c = 12;
c = 'jugal';
console.log(c);


🧠 Explanation:

const cannot be reassigned once set.

Attempting to reassign throws a TypeError.

✅ Output:

TypeError: Assignment to constant variable.




🧩 5️⃣ Interview Summary Table


| Feature                      | Pass by Value      | Pass by Reference     |
| ---------------------------- | ------------------ | --------------------- |
| **Data Type**                | Primitive types    | Non-primitive types   |
| **Memory Stored As**         | Actual value       | Reference (address)   |
| **Copy Behavior**            | Creates a new copy | Points to same memory |
| **Changes Affect Original?** | ❌ No               | ✅ Yes                 |
| **Example**                  | `let x = 5`        | `let obj = { a: 1 }`  |



🧩 1️⃣ What does “Pass by Value” mean?

When a variable is passed by value, a copy of the value is created.
Changing the copy does not affect the original variable.

✅ Example — Pass by Value (Primitives)
let a = 10;
let b = a;   // Copy of 'a' is stored in 'b'

b = 20;

console.log(a); // 10 → Original not affected
console.log(b); // 20


🧠 Why?
Because number, string, boolean, undefined, null, symbol, and bigint are primitive → stored directly in memory by value.

📦 Each variable gets its own box (memory space).

🧩 2️⃣ What does “Pass by Reference” mean?

When a variable is passed by reference, it stores a reference (memory address) to the actual object.
If you modify the object via one variable, it affects all variables pointing to it.

✅ Example — Pass by Reference (Objects / Arrays)
let user1 = { name: "Jugal" };
let user2 = user1;  // user2 stores reference of user1

user2.name = "Sharma";

console.log(user1.name); // "Sharma" ← changed!
console.log(user2.name); // "Sharma"


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
| Reference      | user2    | `0x01`       | points to same object |






🧩 4️⃣ How to Create a Copy (Not Reference)

Sometimes you want a real copy of an object or array (not a reference).

🧠 Shallow Copy (1-level only)
let obj1 = { name: "Jugal", age: 25 };
let obj2 = { ...obj1 }; // Spread operator

obj2.name = "Sharma";

console.log(obj1.name); // "Jugal" ✅ not changed

🧠 Deep Copy (Nested objects)
let deep1 = { user: { name: "Jugal" } };
let deep2 = structuredClone(deep1); // or JSON methods

deep2.user.name = "Sharma";

console.log(deep1.user.name); // "Jugal" ✅ not changed


| Feature                      | Pass by Value      | Pass by Reference     |
| ---------------------------- | ------------------ | --------------------- |
| **Data Type**                | Primitive types    | Non-primitive types   |
| **Memory Stored As**         | Actual value       | Reference (address)   |
| **Copy Behavior**            | Creates a new copy | Points to same memory |
| **Changes Affect Original?** | ❌ No               | ✅ Yes                 |
| **Example**                  | `let x = 5`        | `let obj = { a: 1 }`  |


:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



🧩 What is Type Coercion in JavaScript?

Type coercion means automatically converting one data type into another when an 
operation involves different types.

JavaScript is a loosely typed or dynamically typed language —
so it automatically converts types when needed (for example, number → string).

⚙️ Two Types of Coercion


| Type                  | Description                 | Example           |
| --------------------- | --------------------------- | ----------------- |
| **Implicit Coercion** | JS converts automatically   | `'5' + 2 → '52'`  |
| **Explicit Coercion** | Developer converts manually | `Number('5') → 5` |






🧠 1️⃣ Implicit Coercion (Automatic Conversion)

JavaScript performs conversions automatically based on context —
especially with operators like +, -, ==, and !.

🧩 Example 1 — String + Number
console.log('5' + 2);


+ triggers string concatenation

'5' + 2 → '52'

✅ Output: '52' (string)

🧩 Example 2 — Subtraction forces numeric conversion
console.log('5' - 2);


- works only on numbers, so '5' becomes 5.

5 - 2 = 3

✅ Output: 3 (number)

🧩 Example 3 — Boolean to Number
console.log(true + 1);  // true → 1
console.log(false + 10); // false → 0


✅ Output:

2
10

🧩 Example 4 — Logical NOT
console.log(!'');   // true, because '' is falsy
console.log(!'Hi'); // false, because 'Hi' is truthy

🧩 Example 5 — Equality (==)
console.log('5' == 5);  // true → '5' converted to number
console.log(0 == false); // true → both become 0

🧠 2️⃣ Explicit Coercion (Manual Conversion)

You manually convert using functions or operators.


| Conversion         | Method           | Example                   | Result  |
| ------------------ | ---------------- | ------------------------- | ------- |
| String → Number    | `Number()`       | `Number('123')`           | `123`   |
| Number → String    | `String()`       | `String(123)`             | `'123'` |
| Boolean → Number   | `Number(true)`   | `1`                       |         |
| Anything → Boolean | `Boolean(value)` | `Boolean('hello') → true` |         |
| Quick coercion     | Unary `+`        | `+'123' → 123`            |         |




🧩 Example
let x = '10';
let y = Number(x);   // explicit
let z = +x;          // shorthand

console.log(y, z);   // 10 10 (numbers)

⚖️ 3️⃣ Coercion Rules Summary

| Value       | To Boolean | To Number | To String           |
| ----------- | ---------- | --------- | ------------------- |
| `false`     | `false`    | `0`       | `'false'`           |
| `true`      | `true`     | `1`       | `'true'`            |
| `''`        | `false`    | `0`       | `''`                |
| `'123'`     | `true`     | `123`     | `'123'`             |
| `null`      | `false`    | `0`       | `'null'`            |
| `undefined` | `false`    | `NaN`     | `'undefined'`       |
| `[]`        | `true`     | `0`       | `''`                |
| `[1]`       | `true`     | `1`       | `'1'`               |
| `{}`        | `true`     | `NaN`     | `'[object Object]'` |




🧩 4️⃣ Common Interview Examples
🔸 [] + {}
[] + {} → '' + '[object Object]' → "[object Object]"

🔸 {} + []
{} + [] → {} interpreted as block → +[] → 0

🔸 true == '1'

'1' becomes number 1

true becomes number 1
✅ true
