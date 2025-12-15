000000000000000000000000:::::::::::::::::::::::::

console.log(Number(true))
console.log(Number(null))
console.log(Number((undefined)))
console.log(Number(!NaN))
console.log(Number(NaN))






00000 :::::::::::::::::::::::::::::::::::::::
🔥 Core Rule to Remember (VERY IMPORTANT)

The + operator does TWO things in JavaScript:

1️⃣ String concatenation
2️⃣ Numeric addition

Decision rule:

If ANY operand is a string, + becomes string concatenation.

Also:

Evaluation happens left → right

1️⃣
console.log('10' + 10);

✅ Output
"1010"

🧠 Deep Explanation

First operand is a string

JS chooses string concatenation

Number 10 → converted to "10"

Internal steps:

'10' + 10
→ '10' + '10'
→ "1010"

2️⃣
console.log(10 + '10');

✅ Output
"1010"

🧠 Why same result?

One operand is a string

Order does NOT matter here

Number → string

Internal:

10 + '10'
→ '10' + '10'
→ "1010"

3️⃣ (INTERVIEW FAVORITE 🔥)
console.log(10 + 10 + '10');

✅ Output
"2010"

🧠 DEEP step-by-step (LEFT → RIGHT)

JS evaluates expressions sequentially:

Step 1:
10 + 10


Both are numbers

Numeric addition happens

Result:

20

Step 2:
20 + '10'


One operand is string

Switches to concatenation

Number → string

Result:

"2010"

🔥 Compare with THIS (extra clarity)
console.log('10' + 10 + 10);


Output:

"101010"


Why?

'10' + 10 → '1010'
'1010' + 10 → '101010'

⚠️ Why + is Special (Important)

Other operators DO NOT concatenate strings:

'10' - 5  // 5
'10' * 2  // 20
'10' / 2  // 5


Because:

- * / always force number conversion

🧠 Abstract Operations Behind the Scenes

JS internally does:

ToPrimitive

ToString (if string concatenation)

ToNumber (if numeric operation)

Defined by ECMAScript Abstract Operations
🧪 Mental Model (MEMORIZE)
+ → string wins
Left to right
Once string → always string
📌 Interview One-Liner
“The + operator performs numeric addition unless one operand is a string, in which case it performs string concatenation, evaluated left to right.”
🧠 Summary Table
| Expression       | Result   | Reason                    |
| ---------------- | -------- | ------------------------- |
| `'10' + 10`      | `"1010"` | String concatenation      |
| `10 + '10'`      | `"1010"` | String concatenation      |
| `10 + 10 + '10'` | `"2010"` | Number first, then string |

