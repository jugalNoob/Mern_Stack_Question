🧠 One-Line Definition (Interview Ready)

Abstract Equality (==) compares two values after applying
 JavaScript’s type coercion rules

 ⚡ Abstract Equality Operator (==)

👉 == compares values after type coercion
👉 It follows the Abstract Equality Comparison Algorithm

🧠 Mental Model (Golden 5 Steps)
1️⃣ Same type?

✔️ Yes → compare directly
❌ No → go to step 2

2️⃣ null & undefined?
null == undefined // true


✔️ ONLY true for each other
❌ Nothing else equals them

3️⃣ Boolean?

Convert Boolean → Number

true  == 1  // true
false == 0  // true

4️⃣ String ↔ Number?

Convert String → Number

"10" == 10   // true
"0"  == false // true

5️⃣ Object?

Convert Object → Primitive

valueOf()

then toString()

[] == ""     // true
[] == 0      // true
[1] == 1     // true

🚨 Things == NEVER Does
null == 0    // false
undefined == 0 // false
"" == 0      // true

🔥 Interview Trap Examples
[] == ![]    // true


Why?

![]      → false
[] == false
[] → "" → 0
false → 0
0 == 0 → true

0 == "0"     // true
0 == []      // true
"0" == []    // false

⚡ Difference: == vs ===


| Operator | Type Conversion | Safe? |
| -------- | --------------- | ----- |
| `==`     | Yes             | ❌     |
| `===`    | No              | ✅     |


🏆 Interview Gold Rule

Use === always — except when you INTENTIONALLY want coercion

Valid real use:

if (value == null) {
  // catches null OR undefined
}
