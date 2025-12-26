
🎯 INTERVIEW ONE-LINER (GOLD)

Arrays stringify to empty strings, objects stringify to 
[object Object], and == compares objects by reference 
but primitives by value after coercion.

🎯 INTERVIEW ONE-LINER (GOLD)

Arrays stringify to empty strings, objects stringify to 
[object Object], and == compares objects by reference 
but primitives by value after coercion.

✅ Coercion — Simple Definition (Interview-friendly)

Coercion means JavaScript automatically converts 
one data type into another when performing an 
operation.

🧠 In one line

Type coercion = automatic type conversion done by 
avaScript

🔹 Simple Examples
"5" + 2   // "52"   → number → string
"5" - 2   // 3      → string → number
true + 1  // 2      → boolean → number

🔹 Why coercion exists

JavaScript is loosely typed, so it tries to “make 
things work” instead of throwing errors.

🔥 Interview Gold Line

Coercion happens automatically; explicit 
conversion is done by the developer

Number("5")   // explicit
"5" - 0       // coercion

🔐 Two Types of Coercion

Implicit → done by JS (==, +, -)

Explicit → done by you (Number(), String())


How it works (The Simple Rule)
When you try to perform an operation on two different types,
 JavaScript doesn't want the program to crash. Instead, it
  "coerces" one of the values to match the other.

1. Numeric Coercion (The Subtraction/Comparison Rule)
When using math operators (except +) or loose comparison (==),

 JavaScript usually converts everything to a Number.

Example: '5' - 1

Action: JavaScript turns the string '5' into the number 5.


Result: 4

2. String Coercion (The Addition Rule)
When you use the + sign with a string, JavaScript assumes
you want to combine words (concatenation). It converts
 everything to a String.

Example: '5' + 1

Action: JavaScript turns the number 1 into the string '1'.

Result: '51'

Why '' == 0 is true (Visualized)
Here is the "Invisible Step" JavaScript takes behind the scenes:

Code: '' == 0

Coercion Step: JavaScript sees a String and a Number. It calls Number('').

The Math: Number('') equals 0.

The Result: 0 == 0 is True.

Summary: Explicit vs. Implicit
Implicit Coercion: JavaScript does it automatically 
(like '' == 0). This is often where bugs come from.

Explicit Conversion: You do it manually using code
 like Number('10') or String(5). This is much safer!

Would you like to see a table of the most common
(and weirdest) coercion examples in JavaScript?




:::::::::::::::: Rules  ==============================>>

Q why == string number ?
== converts strings to numbers for comparison,

🎯 One-line Interview Answer

== converts strings to numbers for comparison, while + converts numbers to
 strings if a string is present because + supports concatenation. 
 Operator decides coercion, not data type.

1. The Comparison Rule (==)
When using loose equality, JavaScript tries to find a common ground, 
usually by converting everything to Numbers.   

String to Number: '' becomes 0, '42' becomes 42.

Boolean to Number: true becomes 1, false becomes 0.

Objects to Primitives: If you compare an object (like an array) to a
 string or number, the object is converted to a string first. [] becomes 
 '', which then becomes 0.

2. The Addition Rule (+)
The + operator is "greedy" for Strings. If any side of the + is a 
string, JavaScript converts the other side to a string too.

5 + '5' → '55' (Number becomes String)

true + ' units' → 'true units' (Boolean becomes String)

3. The Math Rule (-, *, /, %)
All other math operators are "greedy" for Numbers. They will force
 everything into a numeric value.

'10' - 2 → 8

'10' * '2' → 20

true + true → 2 (Because 1 + 1)

4. The Logic Rule (Truthy vs. Falsy)
When you put a value inside an if() statement or use logical operators
 like !, JavaScript coerces the value to a Boolean.

There are only 8 Falsy values that turn into false:

false

0 (and -0)

0n (BigInt zero)

"" (Empty string)

null

undefined

NaN

document.all (a rare legacy case)

Everything else is Truthy, including '0' (string with a zero), [] (empty array), and {} (empty object).

[Image table of truthy and falsy values in JavaScript]



== triggers coercion if types differ.


| Expression          | Result | Why?                            |
| ------------------- | ------ | ------------------------------- |
| `0 == ''`           | true   | '' → 0                          |
| `0 == '0'`          | true   | '0' → 0                         |
| `false == ''`       | true   | '' → 0, false → 0               |
| `false == []`       | true   | [] → '', then '' → 0, false → 0 |
| `null == undefined` | true   | special JS rule                 |




3️⃣ String Coercion
When JS converts other types → string:

| Expression        | Result            | Explanation                            |
| ----------------- | ----------------- | -------------------------------------- |
| `'' + 5`          | "5"               | number → string                        |
| `'Hello ' + true` | "Hello true"      | boolean → string                       |
| `[] + {}`         | "[object Object]" | array → "", object → "[object Object]" |






🔥 JavaScript Type Coercion — ALL RULES

JavaScript has 3 core coercions:

ToPrimitive

ToNumber

ToBoolean

Everything else builds on these.

1️⃣ ToBoolean (Truthiness Rules)
❌ Falsy values (ONLY these 7)
false
0
-0
0n
''
null
undefined
NaN

✅ Truthy

Everything else (objects, arrays, functions, non-empty strings)

Boolean([])      // true
Boolean({})      // true
Boolean('0')     // true

2️⃣ ToNumber Rules
Primitive → Number
Number(null)       // 0
Number(undefined)  // NaN
Number(true)       // 1
Number(false)      // 0
Number('')         // 0
Number(' ')        // 0
Number('10')       // 10
Number('10a')      // NaN

Unary + uses ToNumber
+null   // 0
+true   // 1
+[]     // 0

3️⃣ ToString Rules
String(null)        // "null"
String(undefined)   // "undefined"
String(true)        // "true"
String([])          // ""
String([1,2])       // "1,2"
String({})          // "[object Object]"

4️⃣ ToPrimitive (OBJECT → PRIMITIVE)

Used when:

==

+

< > <= >=

Order

obj[Symbol.toPrimitive]

valueOf()

toString()

[1] == 1
→ '1' == 1
→ 1 == 1

5️⃣ + Operator Rules
If any operand is string

👉 String concatenation

1 + '2'   // "12"
null + '' // "null"

Else → Numeric addition
null + 1  // 1
true + 1  // 2

6️⃣ == (Abstract Equality) — FULL RULE SET
Decision Tree
1. Same type? → compare
2. null == undefined → true
3. Boolean? → Boolean → Number
4. String & Number? → String → Number
5. Object? → ToPrimitive
6. Compare strictly

Key Examples
'' == 0           // true
false == 0        // true
[] == 0           // true
null == 0         // false

7️⃣ === (Strict Equality)

No coercion

Different type → false

2 === '2' // false

8️⃣ Relational Operators (< > <= >=)

👉 Always numeric coercion

null >= 0   // true
null > 0    // false

9️⃣ Logical Operators (|| && !)
They return VALUES, not booleans
0 || 10     // 10
10 && 20   // 20
!'hello'   // false
