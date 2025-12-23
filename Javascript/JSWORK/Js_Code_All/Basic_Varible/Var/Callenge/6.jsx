

3️⃣ OBJECTS: Why [] == 0 is true

This is where interviews get brutal 😈

[] == 0


[] == 0
↓
'' == 0
↓
0 == 0
↓
true

🔥 Extra Examples (Same Rule)
[] == ''      // true
[] == false   // true   (false → 0)
[1] == 1      // true   ('1' → 1)
[1,2] == '1,2' // true


👉 Rule: If one operand is an object, convert it to a primitive.


When one side is an object (like an array) and the other is a number, 
JavaScript first converts the object to a primitive. For arrays,
 this becomes an empty string, which is then converted to a number.
Key rule

Objects are compared by reference, not value —
but first they are converted to primitives when used with ==, +, or <.

:::::::::::::::::::::::::::::::::::::::::::::::::::
1️⃣ The + operator is special

In JS, + can mean:

String concatenation

Numeric addition

Which one it chooses depends on the type of operands.

2️⃣ Rule: Type coercion for +

If either operand is a string → + becomes string concatenation

JS converts the other operand to a string

If neither operand is a string → + becomes numeric addition

JS converts both operands to numbers

3️⃣ Example 1: true + 'true'
true + 'true'


One operand is a string ('true')

So + becomes string concatenation

Boolean true is converted to a string: "true"

Execution:

1️⃣ console.log(true + 'true')
🧠 What happens

One operand is a string

+ becomes string concatenation

true is converted to a string

Conversion
true  → "true"

Execution
"true" + "true"

✅ Output
truetrue

2️⃣ console.log(true + 4)
🧠 What happens

No string involved

+ becomes numeric addition

true is converted to a number


console.log(true + 'true')
console.log(true + 4)
🔄 Boolean coercion rules
Number(true)  // 1
Number(false) // 0

String(true)  // "true"
String(false) // "false"

6️⃣ Key takeaway

The + operator decides the type of conversion:

If any operand is a string → string concatenation

Else → numeric addition

So JS decides the conversion based on the operator context,
 not always number or string.

🔥 Interview one-liner

+ triggers type coercion: if a string is present → 
other operand becomes string; else → operands become numbers.


| Conversion | `true` | `false` |
| ---------- | ------ | ------- |
| Number     | 1      | 0       |
| String     | "true" | "false" |
