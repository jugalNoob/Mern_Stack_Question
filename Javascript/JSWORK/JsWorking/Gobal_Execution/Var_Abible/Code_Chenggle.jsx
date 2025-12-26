console.log(undefined || false)
console.log(true || false)

console.log(false|| true) 
console.log(undefined || false)
console.log(undefined || true)
console.log(true || false)



🔹 Rule of ||

A || B → returns the first truthy value, or the last value if all are falsy.
Evaluation is left to right.

🔹 Example 1
console.log(undefined || false);

Step-by-step

First operand → undefined ❌ (falsy)
→ JS cannot decide yet, so it checks the second operand

Second operand → false ❌ (falsy)
→ No truthy value found, return last value

✅ Output:

false

🔹 Example 2
console.log(true || false);

Step-by-step

First operand → true ✅ (truthy)
→ JS short-circuits
→ does not check the second operand

✅ Output:

true

🔹 ASCII Flow (Short-Circuit)
undefined || false
│
├─ undefined? ❌ → continue
└─ false? ❌ → return last value → false

true || false
│
├─ true? ✅ → short-circuit → return true
└─ false → NOT evaluated

🏆 Interview Golden Rule

|| evaluates left-to-right, returns the first truthy value, or the last value if all are falsy, and skips evaluating remaining operands once result is known.