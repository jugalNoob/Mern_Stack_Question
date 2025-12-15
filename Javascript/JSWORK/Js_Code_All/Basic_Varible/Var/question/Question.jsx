
000000000000000 ::::::::::::::::::::: ---------------------->>>>
If you want next:
✅ Why typeof null is object (biggest JS bug)
✅ Internal array memory optimization
✅ Map vs Object vs Array internals
✅ Prototype chain visualization


❓ Why does typeof [] show "object"?
Short answer (interview one-liner):

Because arrays are a special kind of object in JavaScript, not a separate primitive type.

Now the deep explanation 👇

🔹 Why does typeof array return object?
👉 Because arrays are non-primitive objects in JavaScript.


🔹 Is array an object?
👉 Yes, but a specialized object with array-specific behavior.

🔹 Correct way to check array?
👉 Array.isArray()



000000000000000 :::::::::: ----------------------------->>>

6️⃣ Abstract Equality Algorithm (How == works)

Simplified steps:

If types are same → compare values

If boolean → convert to number

If string & number → convert string → number

If object → convert to primitive

Compare again

📌 Interview gold sentence:

"== follows the Abstract Equality Comparison Algorithm defined in ECMAScript."