
console.log(typeof Object)

1️⃣ console.log(typeof Object)
✅ Output
"function"

❓ Why is Object a function?

Because in JavaScript:

Object


is a constructor function, not a plain object.

typeof Object        // "function"
typeof Object()      // "object"
typeof {}            // "object"

Internally:
function Object() { [native code] }


| Built-in   | typeof                    |
| ---------- | ------------------------- |
| `Object`   | `"function"`              |
| `Array`    | `"function"`              |
| `Function` | `"function"`              |
| `Date`     | `"function"`              |
| `Math`     | `"object"` (special case) |



📌 Many built-ins behave like this:





let data=[10 , 20][10,20]
console.log(data)




Interview one-liner (MEMORIZE)

The comma operator evaluates all expressions and returns the last
 one, so [10,20][10,20] becomes [10,20][20], which is undefined.

00000000000000000000000000:::::::::::::


🎯 Interview One-Liner (MEMORIZE)

When objects are coerced with +, arrays convert
 via toString(), but plain objects default to
  [object Object] and do not expose their
   properties.
   

   🔑 Core Rules Involved
1️⃣ + with non-primitives

Both operands are objects, so JS must convert them to primitives first.

2️⃣ Default object → string conversion

If no custom toString exists:

{}.toString() → "[object Object]"

🔍 Step-by-Step Execution
🔹 Step 1: Convert [10] to primitive
[10].toString() → "10"


Arrays join elements with commas → "10"

🔹 Step 2: Convert { name: 10 } to primitive
({ name: 10 }).toString() → "[object Object]"


❌ Object does NOT stringify its properties by default

🔹 Step 3: Apply +

Now both are strings:

"10" + "[object Object]" → "10[object Object]"

❓ Why NOT "name:10"?

Because plain objects do not serialize their properties when coerced to string.

{}.toString()
// "[object Object]"


JavaScript does not auto-call JSON.stringify().

   console.log([10] + {name:10}) //why only shwo array string but not object string 'name:10

console.log([10] + JSON.stringify({ name: 10 }));
// "10{"name":10}"
:::::::::::::::::::::::::::::::::::::::::::::

Let’s break new Number(10) vs 10 in a clear, no-confusion way.

🧩 Basic Difference
let a = 10;
let b = new Number(10);

| Expression       | Type       | What it is                |
| ---------------- | ---------- | ------------------------- |
| `10`             | `"number"` | **Primitive number**      |
| `new Number(10)` | `"object"` | **Number wrapper object** |

🔍 typeof Check
typeof 10;             // "number"
typeof new Number(10); // "object"
🧠 Memory & Nature
10 (Primitive)
Stored as a primitive value
Immutable
Fast, lightweight
Recommended ✅
new Number(10) (Object)
Stored as an object
Has properties and methods
Slower, unnecessary
Almost never needed ❌
⚠️ Equality Comparison (INTERVIEW TRAP)
10 == new Number(10);  // true
10 === new Number(10); // false
Why?
==
Object → primitive conversion
new Number(10).valueOf() → 10
10 == 10 → true
===
Type check first
number !== object
false
🔥 Even More Dangerous
new Number(10) === new Number(10); // false
Because:
Objects are compared by reference
Two different objects in memory
🧪 Method Access (Auto Boxing)
(10).toString(); // "10"
Why does this work?
JS temporarily wraps 10 into a Number object
Calls toString()
Destroys wrapper immediately
📌 This is called auto-boxing
❌ Common Bug Example
if (new Number(0)) {
  console.log("Runs!");
}
Output:
Runs!
Why?
Objects are always truthy
Even new Number(0) 😱
But:
if (0) { } // false
✅ Best Practice (IMPORTANT)
✔ Always use:
let x = 10;
❌ Avoid:
let x = new Number(10);
🎯 Interview One-Liner (MEMORIZE)
10 is a primitive number, while new Number(10) creates a wrapper object. They behave differently in equality checks, truthiness, and performance, so wrapper objects should be avoided.



00000000000000000000000000000000000000000000000

console.log(typeof(undefined) + 20)


console.log(null == 1 === 1)
console.log(0 + 1 === 1)

console.log(undefined + 1 === NaN)
console.log(Number(undefined) + 1 === NaN  )


console.log(typeof ( true + true + '5'))
console.log(1 + 1 + '5')

00000000000000000000 ::::::::::::::::::::::::: ----------------->>>

You’re now touching real JS internals 👊
If you want next:

Why null.toString() throws error

Primitive boxing explained

new Number(10) vs 10

typeof NaN 🤯



🎯 Interview One-Liner (MEMORIZE)

🧩 Code
console.log(typeof (10..toString()))
console.log(10.toString())

1️⃣ console.log(typeof (10..toString()))
✅ Output
"string"

❓ Why does 10..toString() work?

JavaScript parses numbers like this:

10. → a valid numeric literal

The second . is treated as property access

So the engine reads it as:

(10.).toString()


Internally:

10 → Number object (temporary boxing)
toString() → "10"


Then:

typeof "10" → "string"


✔ That’s why this line works perfectly.

2️⃣ console.log(10.toString())
❌ Result
SyntaxError: Invalid or unexpected token

❓ Why does this FAIL?

Because the JS parser reads:

10.


and assumes:

. belongs to the number literal

There is no second dot to indicate property access

So the parser gets confused:

10. toString() ❌


➡️ Syntax error occurs before execution

🧠 Why Double Dot Is Needed

| Code             | Meaning            |
| ---------------- | ------------------ |
| `10.`            | numeric literal    |
| `.`              | property accessor  |
| `10..toString()` | `(10.).toString()` |



10..toString() works because the first dot
 completes the number literal and the second accesses the method, while
  10.toString() fails due to JavaScript parsing ambiguity.

  🧪 Extra Proof Examples
console.log(5..toString());   // "5"
console.log(5.0.toString()); // "5"
console.log((5).toString()); // "5"