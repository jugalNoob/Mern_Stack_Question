JavaScript follows BODMAS / PEMDAS rules:


| Operator           | Priority |
| ------------------ | -------- |
| `/` Division       | Higher   |
| `*` Multiplication | Higher   |
| `+` Addition       | Lower    |
| `-` Subtraction    | Lower    |


Q 🔹 Quick Rules of Unary + Operator

console.log(+ true)
console.log(+ false)
console.log(+ '10')
console.log(+ '-10')


| Value Type  | Conversion with `+` |
| ----------- | ------------------- |
| `true`      | 1                   |
| `false`     | 0                   |
| `"10"`      | 10                  |
| `"-10"`     | -10                 |
| `"hello"`   | NaN                 |
| `null`      | 0                   |
| `undefined` | NaN                 |




| Item             | Means                                                    | Example               | Result |
| ---------------- | -------------------------------------------------------- | --------------------- | ------ |
| `NaN`            | actual value meaning Not-a-number                        | `console.log(NaN)`    | NaN    |
| `isNaN()`        | function checking if value is NaN (with type conversion) | `isNaN("abc")`        | true   |
| `Number.isNaN()` | strict version (no conversion)                           | `Number.isNaN("abc")` | false  |



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





| Feature        | `var`                                  | `let`                                   | `const`                                 |
| -------------- | -------------------------------------- | --------------------------------------- | --------------------------------------- |
| **Scope**      | Function-scoped                        | Block-scoped                            | Block-scoped                            |
| **Re-declare** | ✅ Allowed                              | ❌ Not allowed                           | ❌ Not allowed                           |
| **Re-assign**  | ✅ Allowed                              | ✅ Allowed                               | ❌ Not allowed                           |
| **Hoisting**   | ✅ Hoisted (initialized as `undefined`) | ✅ Hoisted (but in *Temporal Dead Zone*) | ✅ Hoisted (but in *Temporal Dead Zone*) |




TypeError: Assignment to constant variable.




🧩 5️⃣ Interview Summary Table


| Feature                      | Pass by Value      | Pass by Reference     |
| ---------------------------- | ------------------ | --------------------- |
| **Data Type**                | Primitive types    | Non-primitive types   |
| **Memory Stored As**         | Actual value       | Reference (address)   |
| **Copy Behavior**            | Creates a new copy | Points to same memory |
| **Changes Affect Original?** | ❌ No               | ✅ Yes                 |
| **Example**                  | `let x = 5`        | `let obj = { a: 1 }`  |




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




🧩 2️⃣ instanceof → checks object type

✅ Used for objects or classes


console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true
console.log(new Date() instanceof Date); // true
console.log('js' instanceof String); // false (primitive, not object)
console.log(new String('js') instanceof String); // true



| Feature  | `typeof`               | `instanceof`                 |
| -------- | ---------------------- | ---------------------------- |
| Checks   | Data type              | Constructor                  |
| Works on | Primitives & objects   | Only objects                 |
| Example  | `typeof [] → "object"` | `[] instanceof Array → true` |
| Use case | Type check             | Object/class check           |
