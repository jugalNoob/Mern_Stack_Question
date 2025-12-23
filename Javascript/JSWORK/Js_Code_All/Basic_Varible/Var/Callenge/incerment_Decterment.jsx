🔥 10 Increment / Decrement Puzzles (Interview-Level)
All evaluated left → right (JavaScript rule)

let x=1

console.log(x++ - ++x)
1 - 3 = -2

x++   → use 1, then x = 2
++x   → x = 3, use 3

1 - 3 = -2

1️⃣
let a = 1;
console.log(a++ + ++a);


Answer: 4
Why: a++ → 1 (a=2), ++a → 3

2️⃣
let a = 1;
console.log(++a + a++);


Answer: 4
Why: ++a → 2, a++ → 2 (a=3)

3️⃣
let a = 1;
console.log(a++ + a++ + ++a);

🔍 Step-by-Step Execution
Initial value
a = 1

1️⃣ First part: a++

Value used → 1

Then a becomes 2

Expression now:

1 + a++ + ++a

2️⃣ Second part: a++

Current a → 2

Value used → 2

Then a becomes 3

Expression now:

1 + 2 + ++a

3️⃣ Third part: ++a

Current a → 3

Increment first → 4

Value used → 4

Expression becomes:

1 + 2 + 4

4️⃣ Final calculation
1 + 2 + 4 = 7

a = 1

a++ → use 1, a = 2
a++ → use 2, a = 3
++a → a = 4, use 4

1 + 2 + 4 = 7


Answer: 7
Why: 1 + 2 + 4

4️⃣
let a = 2;
console.log(a++ * ++a);


Answer: 12
Why: a++ → 2 (a=3), ++a → 4 → 2 * 4

5️⃣
let a = 1;
console.log(a++ + a++ + a++);


Answer: 6
Why: 1 + 2 + 3

6️⃣
let a = 1;
let b = a++ + ++a;
console.log(a, b);


Answer: 3 4

00000000000000000000 ---------------------->>>
7️⃣
let a = 5;
console.log(--a + a--);


Answer: 8
Why: --a → 4, a-- → 4 (a=3)

8️⃣
let a = 1;
console.log(a++ + ++a + a++);


Answer: 7
Why: 1 + 3 + 3

9️⃣
let a = 0;
console.log(a++ + ++a + a++ + ++a);


Answer: 6
Why: 0 + 2 + 2 + 4

🔟 (Deadly)
let a = 1;
a = a++;
console.log(a);


Answer: 1 😈
Why: a++ returns old value → assignment overwrites increment

🧠 Universal Mental Rule
x++ → use value, then increment
++x → increment, then use
JS evaluates left → right

🎯 Interview Mic-Drop Line

Increment operators are predictable once you remember left-to-right 
evaluation and the difference between pre and post increment.



00000000000000000 ------------------------------->>>



let data = 1;
console.log(data++ + ++data);


let data=1
console.log(data++ ) //value 1  after inc
console.log(data) // value 2

let data=1
console.log(data++ ) //value 1  after inc
console.log(data) // value 2
console.log(1+ ++data)


data = 1
│
├─ data++  → use 1, data = 2
│
├─ ++data  → data = 3, use 3
│
└─ 1 + 3 = 4




000000000000 --------------------------->>>

🔥 Interview Trap Example
let x = 1;
x = x++;
console.log(x); // 1 😱


Why?

x++ returns old value

assignment overwrites increment

000000000000000 ------------------------>>>






00000000000000000000000 --------------------------->>>>
let data=1

console.log(++data) //before inc 1=+1
console.log(data)
// 1️⃣ console.log(++data)
// 🔹 Pre-increment (++data)
Post-increment rule

Return the current value, then increment

Value returned to console.log → 1

Side effect → data becomes 2

// Rule:

// Increment first → then return the value

// 2️⃣ console.log(data++ + 1)

// Current value:

// data = 2

// 🔹 Post-increment (data++)

// Rule:

// Return current value → then increment

// Evaluation order:
// data++ + 1
// → 2 + 1        // data++ returns 2
// → 3


// Then increment happens:

// data becomes 3


// The increment does not reset between logs — the variable keeps its updated value.

// 🔥 Interview Trap Example
// let x = 1;
// x = x++;
// console.log(x); // 1 😱


// Why?

// x++ returns old value

// assignment overwrites increment