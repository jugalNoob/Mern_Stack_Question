

000000000000000000 ------------------------------------------------>>>>>>>>
Q Importan ? 5

console.log(2+2/5)

Step-by-step:

First evaluate division → 2 / 5 = 0.4

Then evaluate addition → 2 + 0.4 = 2.4

🧠 How JavaScript Evaluates It

JavaScript follows BODMAS / PEMDAS rules:


| Operator           | Priority |
| ------------------ | -------- |
| `/` Division       | Higher   |
| `*` Multiplication | Higher   |
| `+` Addition       | Lower    |
| `-` Subtraction    | Lower    |



console.log(10 + 6 / 2 * 3);

6 / 2 = 3
3 * 3 = 9
10 + 9 = 19

Always remember operator precedence:

()  →  * /  →  + -


Q what ? 10 --------------------------<><><><><></></></></>
let x=5
let y=(x=10)+3
console.log(x , y)


let x=5
let y=(x=10)+3
console.log(x , y)

🧠 Why does this happen?
Because an assignment (x = 10) returns the assigned value:
(x = 10)   → 10
So the expression becomes:
y = 10 + 3


0000000000000000000000 :::::::::::::::::::::::::

const insta=null
// console.log(typeof insta === 'object')
// console.log(insta === null)

// console.log(typeof null )
// console.log(typeof null === typeof Object)

// console.log(typeof Object)




00000000000000000000000000000 --------------------------------------->>>
Q what ? 1
const insta=null
console.log(typeof insta === 'object')
console.log(insta === null)

🎯 Interview Summary (Very Important)

| Check                | Result     | Why                                 |
| -------------------- | ---------- | ----------------------------------- |
| `typeof null`        | `"object"` | JavaScript historical bug           |
| `null === null`      | `true`     | Same value and type                 |
| `null == undefined`  | `true`     | Loose equality treats them as equal |
| `null === undefined` | `false`    | Types are different                 |


✅ Q What ? — null vs typeof null
Code:
const insta = null;
console.log(typeof insta === 'object');
console.log(insta === null);

✅ Output
true
true

🧠 Why does typeof null === 'object' ?

This is a famous JavaScript bug that exists since 1995.

✔ Reason:

In the original JS implementation, values were stored as binary tags.
null accidentally got the tag object (000) because of a bug.

That bug was never fixed because:

Too many websites depended on this behavior

Fixing it would break old code

So JS kept it forever

📌 This is officially documented as a “historical bug.”

🟢 But null === null is true
insta === null → true


Because:

=== checks value + type

Both sides are exactly null



Q what ? 2
// 1️⃣ var, let, const
var x = 1; let y = 2; const z = 3;
x = 10; y = 20; // ok
// z = 30; ❌ Error


Q what ? 3


let str = "Hello";
str[0] = "J";  // ❌ No effect
console.log(str.includes('J')); // "Hello"



🧠 Why does this NOT change the string?
✔ Strings in JavaScript are immutable

You cannot change characters inside a string using indexing.

str[0] = 'K';   // ❌ does nothing

✔ Output:
jugal


Because JS creates a new string each time you modify it.
str[0] = 'K' is simply ignored.


🎯 Interview Summary

| Type       | Mutable? | Can change via index? |
| ---------- | -------- | --------------------- |
| **String** | ❌ No     | ❌ No                  |
| **Array**  | ✔ Yes    | ✔ Yes                 |



Q why Chnage String Orginal ?




let str='jugal sharma'

console.log(str.replace('j' , 'K'))
console.log(str) 


🧠 Why original string does NOT change?

Because strings in JavaScript are immutable.

That means:

You cannot modify a string directly
0000000000000000 ---------------------------------->>>>>>>>>>>>>>>>>>

var x=10
var x=20
console.log(x)

🔍 Why this happens (engine-level)
Rule:

var allows redeclaration in the same scope



1️⃣ Memory Creation Phase (Hoisting)

Before execution, JavaScript does this internally:

var x;   // first declaration
var x;   // ignored (already exists)


Memory:

x → undefined


✔ Only one variable slot is created

2️⃣ Execution Phase
x = 10;  // first assignment
x = 20;  // second assignment (overwrites)

3️⃣ console.log
console.log(x); // 20

🧠 Internal rewrite (interview-friendly)

JavaScript treats your code like:

var x;
x = 10;
x = 20;
console.log(x);

❗ Why this is dangerous
var isAdmin = true;

// hundreds of lines later
var isAdmin = false; // ❌ silently overwrites


No error → hidden bugs

🆚 Compare with let and const
❌ let
let x = 10;
let x = 20; // SyntaxError

❌ const
const x = 10;
const x = 20; // SyntaxError

🔥 Scope difference (IMPORTANT)
if (true) {
    var a = 5;
}
console.log(a); // 5

if (true) {
    let b = 5;
}
console.log(b); // ReferenceError

🧠 Interview one-liner

var allows redeclaration and later assignments overwrite earlier values, which is why let and const are preferred.

✅ Best practice

🚫 Avoid var
✅ Use let / const

If you want next:


00000000000000000000000000000 :::::::::::::::::::::::::::::::::::: ------------------------------->>>

Your code
console.log([] == {})
console.log([] === {})

✅ Final Output
false
false


But the reason for each false is different 👇

1️⃣ [] === {} (STRICT equality)
Rule of ===

No type conversion. Compare type + value + reference

What happens:

[] → Array object

{} → Object object

Both are different objects in memory

[] === {} // false


📌 Even if they look empty, they are two different references

Memory view
[]  → 0x001
{}  → 0x002


Different addresses → ❌ false

✅ Conclusion
[] === {} // false

2️⃣ [] == {} (LOOSE equality) 🔥🔥

This is where interviews get tricky.
Step-by-step coercion (IMPORTANT)
Step 1: Types are different
[] → object
{} → object
❗ Both are objects → JS tries to convert them to primitive values
Step 2: Object → Primitive conversion
JavaScript calls:
obj.valueOf()
obj.toString()
For array []
[].toString() → ""
For object {}
{}.toString() → "[object Object]"
Step 3: Compare primitives
"" == "[object Object]"
➡️ false
✅ Conclusion
[] == {} // false
🔥 WHY THIS QUESTION IS IMPORTANT
Many people think:
[] == {} // true ❌
But NO — because:
Both objects convert to different strings

🧠 Comparison Summary Table
| Expression  | Reason                    | Result  |
| ----------- | ------------------------- | ------- |
| `[] === {}` | Different references      | ❌ false |
| `[] == {}`  | `"" != "[object Object]"` | ❌ false |



🔥 Related tricky comparisons (INTERVIEW GOLD)
[] == ""        // true  😱
[] == 0         // true
"" == 0         // true
{} == {}        // false
[] == []        // false

null == undefined // true
null === undefined // false
🧠 One-liner interview answer

[] === {} is false because they are different object references, and [] == {} is false because they coerce to different primitive values ("" vs "[object Object]").