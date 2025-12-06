🔥 Perfect — Here is the next set of TRICKIEST JavaScript operator questions (INTERVIEW LEVEL)
These are the ones senior developers get wrong in interviews.

⚡ SET–5: Extremely Tricky JavaScript Operator Questions
❓ Q1: What will be the output?
console.log(1 < 2 < 3);
console.log(3 < 2 < 1);

✅ Answer
true
true

💡 Why?

1 < 2 → true
Then:
true < 3 → 1 < 3 → true

3 < 2 → false
false < 1 → 0 < 1 → true

❓ Q2: What is the output?
console.log([] == ![]);

✅ Answer
true

💡 Why?

![] → false

[] == false

[] → "" when converted to primitive

"" == false → true

❓ Q3: What will this print?
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

✅ Answer
false
false
true

💡 Why?

null == 0 → false

For comparisons (>, <) → null becomes 0

For equality → it does NOT convert

So null >= 0 → 0 >= 0 → true

❓ Q4: What is the output?
console.log(typeof NaN);
console.log(NaN === NaN);

✅ Answer
"number"
false

💡 Why?

NaN is weird → it is a number

NaN is the only value in JS that is not equal to itself

❓ Q5: What is the output?
console.log([] + {});
console.log({} + []);

✅ Answer
"[object Object]"
0

💡 Why?

[] + {}
→ [] becomes ""
→ " " + "[object Object]"
→ "[object Object]"

{} + []
Is parsed like:

{}   // empty block
+[]  // unary plus → 0


So result = 0

❓ Q6: What is the output?
console.log([] == []);
console.log({} == {});

✅ Answer
false
false

💡 Why?

Objects & arrays are compared by reference, not value.

❓ Q7: What will be printed?
console.log("5" - 2);
console.log("5" + 2);

✅ Answer
3
"52"

💡 Why?

- forces numeric conversion

+ prefers string concatenation

❓ Q8: What is the output?
console.log(0 == "0");
console.log(0 === "0");

✅ Answer
true
false

💡 Why?

== does type conversion

=== does NOT

❓ Q9: What’s the output?
console.log(true + true + true);

✅ Answer
3

💡 Why?

true → 1
So → 1 + 1 + 1 = 3

❓ Q10: Very Tricky
console.log("hello" instanceof String);
console.log(new String("hello") instanceof String);

✅ Answer
false
true

💡 Why?

"hello" is a primitive

new String("hello") is an object

🧠 Want more?

I can give:

✅ Set–6 (Closures, Scopes, Hoisting traps)
✅ Set–7 (Prototype & this tricky questions)
✅ Set–8 (Async, Promise, Event Loop tricky questions)

Just say "Next Set" or mention which topic you want next.