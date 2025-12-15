
000000000000::::::::::::: ---------------------->>>>>
1️⃣ console.log(1 , 2 , 3)
console.log(1 , 2 , 3);
✅ Output
1 2 3
🧠 Why?
console.log can accept multiple arguments
It prints them separated by spaces


000000000:::::::::::::::::: --------------------------------->>>

2️⃣ Comma operator
let x = (1 , 2 , 3);
console.log(x);

🧠 Why?
This uses the comma operator (NOT an array).
Comma operator rule:
It evaluates all expressions and returns the LAST one
Execution:
(1 , 2 , 3)
 → evaluate 1 (ignored)
 → evaluate 2 (ignored)
 → return 3
📌 Interview tip:
Comma operator is rarely used, but very common in tricky questions.


000000000000000000::::::::::::::::-------------------->>>>

3️⃣ console.log(1 < 1 < 2)
console.log(1 < 1 < 2);
✅ Output
true
🧠 Step-by-step
JS evaluates left to right:
🧠 Step-by-step
JS evaluates left to right:
1️⃣ 1 < 1
false
2️⃣ false < 2
false → 0
0 < 2 → true
✅ Final result → true

0000:::::::::::::::::: -------------------->>
4️⃣ console.log(1 > 1 > 2)
console.log(1 > 1 > 2);
✅ Output
false
🧠 Breakdown
1️⃣ 1 > 1
false
2️⃣ false > 2

false → 0
0 > 2 → false


000000:::::::::::::::::: --------------------------->>

5️⃣ console.log(1 > 2 > 3)
console.log(1 > 2 > 3);
✅ Output
false
🧠 Explanation
1️⃣ 1 > 2
false
2️⃣ false > 3
0 > 3 → false


000000 ::::::::::::::::::::::::------------------->>>

⚠️ IMPORTANT RULE (MEMORIZE)
❌ Never write chained comparisons in JS
1 < x < 10 ❌
✅ Correct way:
1 < x && x < 10

000000000000 ::::::::::::::::::::::::::------------------>>>
6️⃣ console.log(0 == false)
console.log(0 == false);
✅ Output
true
🧠 Why?
== does type coercion
false → 0
0 == 0 → true


00000000000000 :::::::::::::::::::::::---------------------->>>
7️⃣ console.log(0 === false)
console.log(0 === false);
✅ Output
false
🧠 Why?
=== checks:
value ❌
type ❌
Number !== Boolean
📌 Best practice:
Always use === in real projects



00000000:::::::::::: ------------->>