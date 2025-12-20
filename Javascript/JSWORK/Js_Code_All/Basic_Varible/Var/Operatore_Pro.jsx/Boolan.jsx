In JavaScript, Boolean(value) converts any value to a boolean using truthy / falsy rules.

Let’s first look at your code 👇

console.log(Boolean(null))   // false
console.log(Boolean(45))     // true

Why?

null → falsy

45 → truthy (any non-zero number)

✅ All JavaScript Values → Boolean Conversion (INTERVIEW GOLD)
❌ Falsy Values (ONLY 7 — very important)

These always convert to false:

Boolean(false)        // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean(0n)           // false (BigInt zero)
Boolean("")           // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(NaN)          // false


📌 Interview fact:
👉 There are only these values that are falsy.
Everything else is truthy.

✅ Truthy Values (everything else)
Numbers
Boolean(1)        // true
Boolean(-1)       // true
Boolean(45)       // true
Boolean(0.5)      // true

Strings
Boolean("hello")  // true
Boolean(" ")      // true (space is NOT empty)
Boolean("0")      // true
Boolean("false")  // true

Objects & Arrays
Boolean({})       // true
Boolean([])       // true
Boolean([0])      // true
Boolean({ a: 1 }) // true


🔥 INTERVIEW TRAP

Boolean([]) == true   // true
Boolean({}) == true   // true


Even empty objects/arrays are truthy.

Functions
Boolean(function(){}) // true
Boolean(() => {})     // true

Special Cases (VERY IMPORTANT)
Boolean(" ")    // true
Boolean("0")    // true
Boolean([])     // true
Boolean({})     // true


But:

Boolean("")     // false
Boolean(0)      // false

🔥 Quick Interview Rule (Remember This)

❌ Falsy → 0, "", null, undefined, NaN, false, 0n
✅ Truthy → Everything else

🎯 Real-World Example
if (user) {
  // runs only if user is NOT null/undefined
}


This works because:

null → false

undefined → false

Object → true

🧠 Interview Question

Q: Why is Boolean([]) true but Boolean("") false?
A:

[] is an object → truthy

"" is an empty string → falsy

If you want next:
🔥 == vs === with Boolean
🔥 if(value) vs if(value === true)
🔥 Boolean coercion in && and ||
🔥 Tricky interview MCQs

Just say the word 🚀