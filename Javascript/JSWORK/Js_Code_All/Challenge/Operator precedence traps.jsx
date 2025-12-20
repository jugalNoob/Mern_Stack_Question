// 🔥 11. Operator precedence nightmare
console.log( typeof 5 + 10 );

Operator Precedence Traps (JavaScript)
These are top-tier interview questions and real production bug sources, especially when mixed with async, &&, ||, ??, +, await.

🧠 Golden Rule (Memorize)

JS evaluates by precedence first, then associativity — NOT left to right.

When in doubt → use parentheses.

1️⃣ await vs && / || (🔥 MOST COMMON)
await isAuth && login();

Parsed as:
(await isAuth) && login();


❌ login() not awaited

✅ Correct
if (await isAuth) {
  await login();
}

2️⃣ await vs ?? (Very Sneaky)
await cache ?? fetchDB();


Parsed as:

(await cache) ?? fetchDB(); // ❌ fetchDB not awaited

✅ Correct
(await cache) ?? (await fetchDB());

3️⃣ + vs || (String Concatenation Trap)
console.log("hi" + "" || "bye");

Parsed as:
("hi" + "") || "bye"

Output
"hi"


❌ Many expect "bye"

4️⃣ + vs ==
console.log(1 + 2 == 3); // true


Parsed as:

(1 + 2) == 3

5️⃣ && vs || (Classic)
true || false && false

Parsed as:
true || (false && false)

Output
true

6️⃣ ?? vs || (Syntax Error Trap)
null ?? false || true; // ❌ SyntaxError

Must use parentheses
(null ?? false) || true;


📌 ?? cannot mix with && or || without parentheses.

7️⃣ Ternary vs ||
false ? "A" : "B" || "C"


Parsed as:

false ? "A" : ("B" || "C")

Output
"B"

8️⃣ Function Call vs Logical Operators
fn1 || fn2();

Parsed as:
fn1 || (fn2());


❌ fn2() only runs if fn1 is falsy

Safer
(fn1 || fn2)();

9️⃣ Assignment vs Logical Operators
a = b && c;


Parsed as:

a = (b && c);


✔ Not:

(a = b) && c;

🔟 Unary ! Precedence Trap
!0 == true


Parsed as:

(!0) == true

Output
true

🔢 Simplified Precedence Order (Top → Bottom)
()
!
**
* / %
+ -
< <= > >=
== != === !==
&&
||
??
?:
=

🧠 Interview Survival Rules ⭐

1️⃣ Never mix await with && || ??
2️⃣ Always parenthesize function selection
3️⃣ Avoid clever one-liners in async code
4️⃣ If readability drops → bug risk increases

🎯 One-Line Interview Answer

Operator precedence decides execution order before associativity, causing subtle bugs when mixing logical, async, and arithmetic operators.

If you want next:
🚀 Precedence vs associativity deep dive
🚀 Real Node.js production bugs
🚀 MCQ-style interview traps
🚀 Build-your-own precedence table