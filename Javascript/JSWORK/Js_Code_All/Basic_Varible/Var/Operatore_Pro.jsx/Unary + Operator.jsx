 Quick Rules of Unary + Operator

 🔑 What is the Unary + Operator?

Unary + converts its operand into a number
(It is the fastest and simplest numeric coercion in JavaScript.)




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



🔍 Your Examples (Verified)
console.log(+true);     // 1
console.log(+false);    // 0
console.log(+'10');     // 10
console.log(+'-10');    // -10

Why?

Internally, JavaScript does:

+value  →  Number(value)


So:

Number(true)   → 1
Number(false)  → 0
Number("10")   → 10
Number("-10")  → -10

📊 Conversion Table (Correct)




| Value Type  | `+value` Result |
| ----------- | --------------- |
| `true`      | `1`             |
| `false`     | `0`             |
| `"10"`      | `10`            |
| `"-10"`     | `-10`           |
| `"hello"`   | `NaN`           |
| `null`      | `0`             |
| `undefined` | `NaN`           |




🧠 Key Difference (Unary + vs + Operator)
+'5' + 5   // 10
'5' + 5    // "55"


Unary + → convert to number

Binary + → add or concatenate

🔥 Tricky Examples (Interview Favorites)
+[]        // 0
+[1,2]     // NaN
+{}        // NaN
+''        // 0
+' '       // 0

Why?
Number([])   → 0
Number('')   → 0
Number(' ')  → 0
Number({})   → NaN

🎯 Interview One-Liner (MEMORIZE)

Unary + is a shorthand for Number(). It converts booleans, strings, and null into numbers, and returns NaN for invalid numeric values.

You’re now covering advanced coercion concepts 👊
If you want next:

+[] vs Number([]) vs parseInt([])

Difference between Number, parseInt, parseFloat

Real bugs caused by unary + in production

Unary operators (+, -, !, ~) deep dive