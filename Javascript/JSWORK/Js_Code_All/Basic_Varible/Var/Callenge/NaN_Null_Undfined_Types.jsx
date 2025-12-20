1️⃣ typeof operator (WHAT is it?)
📌 Definition

typeof tells you the primitive type of a value
 (with some historical quirks).

It is:

Unary operator

Works at language level

Fast

Mostly for primitives


| Value          | `typeof`                    |
| -------------- | --------------------------- |
| `10`           | `"number"`                  |
| `"hi"`         | `"string"`                  |
| `true`         | `"boolean"`                 |
| `undefined`    | `"undefined"`               |
| `null`         | `"object"` ❌ (historic bug) |
| `[]`           | `"object"`                  |
| `{}`           | `"object"`                  |
| `function(){}` | `"function"`                |



2️⃣ Your examples: typeof
✅
console.log(typeof([]));


Output:

"object"

🧠 Why?

Arrays are objects internally

JS has no separate array type

Array is a special kind of object

✅
console.log(typeof({}));


Output:

"object"


📌 Both arrays and objects return "object" with typeof.

3️⃣ instanceof operator (WHAT is it?)
📌 Definition

instanceof checks the prototype chain.

It answers:

“Was this object created from this constructor?”

🔍 How instanceof works (internally)
obj instanceof Constructor


JS checks:

Constructor.prototype
↓
obj.__proto__
↓
obj.__proto__.__proto__
↓
...


If found → true

4️⃣ Your examples: instanceof
✅
console.log([] instanceof Array);


Output:

true


🧠 Why?

[] is created using Array

Array.prototype exists in its prototype chain

✅
console.log({} instanceof Object);


Output:

true


🧠 Why?

All normal objects inherit from Object.prototype

❌ Tricky one
console.log(10 instanceof Number);


Output:

false

🧠 Deep Reason

10 is a primitive

instanceof works only with objects

typeof 10        // "number"
10 instanceof Number // false

🔥 Wrapper Objects (Very Important)
let n = new Number(10);

typeof n            // "object"
n instanceof Number // true


📌 But:

You should NEVER use wrapper objects in real code


| Feature              | `typeof`         | `instanceof`              |
| -------------------- | ---------------- | ------------------------- |
| Checks               | Primitive type   | Prototype chain           |
| Works with           | Primitives       | Objects                   |
| Arrays               | `"object"` ❌     | `true` with Array         |
| Reliable for objects | ❌                | ✅                         |
| Use case             | Basic type check | Class / constructor check |

🧠 Why typeof [] === "object" ?

Because:

Arrays are objects with:

numeric keys

length

special prototype (Array.prototype)

JS does not treat arrays as primitives.

🧠 How to correctly check Array?
Array.isArray([]);


✅ This is the best practice.

🔥 Interview One-Liners

🔹 Why does typeof [] return object?
👉 Because arrays are special objects in JavaScript.

🔹 Why 10 instanceof Number is false?
👉 Because instanceof checks objects, not primitives.

🔹 Best way to check array?
👉 Array.isArray()

🧠 Final Mental Model
typeof     → WHAT primitive type?
instanceof → WHO created this object?

📌 Real-World Best Practice
typeof x === "string"        // primitives
Array.isArray(x)             // arrays
x instanceof SomeClass       // class-based checks


:::::::::::::::::::::::::::::::::::::::: -------------------------->>>>


Null and undefined 


1️⃣ Core definitions (Interview-ready)
🔹 undefined

undefined means a variable has been declared but has not been assigned a value yet.

JS assigns it automatically.

🔹 null

null means “no value on purpose”.

The developer assigns it intentionally.

2️⃣ Who sets them?

| Value       | Who assigns it    |
| ----------- | ----------------- |
| `undefined` | JavaScript engine |
| `null`      | Developer         |

3️⃣ Memory model (VERY IMPORTANT)
🔹 undefined in memory
let a;


Memory:

a → undefined


➡ Slot exists, value not initialized

🔹 null in memory
let b = null;


Memory:

b → null


➡ Slot exists, value is explicitly empty

4️⃣ typeof (FAMOUS TRAP 🔥)
typeof undefined // "undefined"
typeof null      // "object" ❌ (BUG)

Why is null an object?

Legacy bug from 1995

Cannot be fixed (backward compatibility)

📌 Interview line:

"typeof null === 'object' is a historical JavaScript bug."

5️⃣ Equality behavior (VERY IMPORTANT)
Loose equality (==)
null == undefined // true ✅


Because:

Both represent absence of value

Strict equality (===)
null === undefined // false ❌


Because:

Different types

6️⃣ Boolean conversion
Boolean(null)      // false
Boolean(undefined) // false


Both are falsy

7️⃣ Common real-world situations
🔹 When undefined appears
let x;
x; // undefined

function test(a) {
    console.log(a);
}
test(); // undefined

const obj = {};
obj.key; // undefined

function fn() {}
fn(); // undefined (no return)

🔹 When null is used
let user = null; // no user yet

document.getElementById('x'); // null if not found

JSON:
{
  "middleName": null
}


📌 APIs prefer null to show intentional absence

8️⃣ null vs undefined in JSON
JSON.stringify({ a: undefined }) // "{}"
JSON.stringify({ a: null })      // '{"a":null}'


🔥 Interview gold

9️⃣ Function parameters defaulting
function test(a = 10) {}

test(undefined); // a = 10 ✅
test(null);      // a = null ❌


📌 undefined triggers default
📌 null does NOT

🔟 Arithmetic behavior
null + 1        // 1  (null → 0)
undefined + 1  // NaN


Why?

null coerces to 0

undefined coerces to NaN

1️⃣1️⃣ Object access (CRITICAL)
let x = null;
x.name // ❌ TypeError

let y;
y.name // ❌ TypeError


⚠️ Both cause runtime error

Safe check:

if (x != null) {
   x.name
}

1️⃣2️⃣ Best practices (INTERVIEW)

✔ Use undefined for uninitialized state
✔ Use null for intentional empty value
✔ Use === always
✔ APIs → null
✔ Internal JS → undefined

1️⃣3️⃣ Comparison table (MEMORIZE)


| Feature     | null              | undefined    |
| ----------- | ----------------- | ------------ |
| Meaning     | Intentional empty | Not assigned |
| Assigned by | Developer         | JS engine    |
| typeof      | object ❌          | undefined    |
| ==          | equals undefined  | equals null  |
| ===         | not equal         | not equal    |
| JSON        | preserved         | removed      |
| Boolean     | false             | false        |



🔥 Tricky interview questions
Q1
console.log(null == 0) // false
console.log(null >= 0) // true ❌


Why?

>= converts null to 0

== does not

Q2
let a;
if (a == null) console.log('yes');


✔ This checks both null & undefined

🧠 One-line PRO answer (use this)

undefined means JavaScript hasn’t assigned a value yet, while null
 means the developer has intentionally assigned “no value”.




0000000000000000000000 ::::::::::::::::::::: -------------------------->>>
🧠 What is NaN?

NaN stands for Not a Number

It’s a special value in JavaScript used to represent invalid number results.

Example:
console.log(0 / 0);      // NaN
console.log("abc" / 2);  // NaN
console.log(NaN);        // NaN


Key facts about NaN:

NaN is of type number

console.log(typeof NaN); // "number"


NaN is the only value that is NOT equal to itself

console.log(NaN === NaN); // false



🧠 What is isNaN()?

isNaN() is a function that checks whether a value is NOT a number

It returns true or false


console.log(isNaN(10));      // false (10 is a number)
console.log(isNaN("hello")); // true (not a number)
console.log(isNaN(NaN));     // true


console.log(isNaN("123")); // false → "123" converts to number 123
console.log(isNaN("abc")); // true  → cannot convert


| Item             | Means                                                    | Example               | Result |
| ---------------- | -------------------------------------------------------- | --------------------- | ------ |
| `NaN`            | actual value meaning Not-a-number                        | `console.log(NaN)`    | NaN    |
| `isNaN()`        | function checking if value is NaN (with type conversion) | `isNaN("abc")`        | true   |
| `Number.isNaN()` | strict version (no conversion)                           | `Number.isNaN("abc")` | false  |



// NaN is never equal to anything, not even itself.

// console.log(NaN == NaN);
// console.log(NaN === NaN);



Your Code
console.log(isNaN(10));      // false
console.log(isNaN("hello")); // true

🧠 Key Rule

isNaN(value) first tries to convert the value to
 a number, then checks if the result is NaN.

1️⃣ isNaN(10)

10 is already a number

Is it NaN? ❌ No

✅ Result: false

Number(10) => 10
Number(10) is NaN? false

2️⃣ isNaN("hello")

"hello" is a string

JS tries to convert it to a number:

Number("hello") // NaN


Is it NaN? ✅ Yes

✅ Result: true

🔑 Mental Model
isNaN(x)
= Number(x)
= check if result === NaN

⚠️ Common Confusion
1️⃣ Strings containing numbers
isNaN("123") // false


✅ "123" → Number("123") → 123 → not NaN

2️⃣ Empty string
isNaN("") // false


✅ "" → Number("") → 0 → not NaN

3️⃣ Null
isNaN(null) // false


✅ null → Number(null) → 0 → not NaN

🔬 Newer, safer method

Number.isNaN()

Does not coerce

Only returns true if value is actually NaN

Number.isNaN(10)      // false
Number.isNaN("hello") // false  ✅ safer
Number.isNaN(NaN)     // true

🎯 Interview One-Liner

isNaN coerces the value to a number first; 10 becomes 10 (not NaN → false), "hello" becomes NaN → true.