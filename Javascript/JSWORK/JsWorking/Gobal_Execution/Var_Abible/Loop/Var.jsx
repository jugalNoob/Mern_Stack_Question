Let’s explain exactly what happens in your code 👇

for (var i = 0; i < 3; i++) { 
  console.log(i);
}

🧠 Key Rule (before execution)

var is NOT block-scoped
👉 It is function-scoped (or global if not inside a function)

So this for loop does NOT create a new scope for i.

🧩 Memory Phase (Creation Phase)

JavaScript scans the code first.

Global Memory
└── i → undefined


✔️ var i is hoisted
✔️ Initialized to undefined
✔️ Lives in global / function scope

▶️ Code Phase (Execution Phase)

Execution happens line by line:

Iteration 1
i = 0
console.log(i) // 0

Iteration 2
i = 1
console.log(i) // 1

Iteration 3
i = 2
console.log(i) // 2

Loop Ends
i = 3

🖨️ Final Output
0
1
2

⚠️ Important Side Effect of var

After the loop:

console.log(i); // ✅ 3


Because:

i is still in the same scope

Loop didn’t create a block scope

i was last updated to 3

🔁 Conceptual Model (How JS Treats It)
var i;              // hoisted

for (i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);     // 3

🆚 Compare with let


| Feature                 | `var`             | `let`     |
| ----------------------- | ----------------- | --------- |
| Scope                   | Function / Global | Block     |
| Hoisted                 | Yes (`undefined`) | Yes (TDZ) |
| New binding per loop    | ❌ No              | ✅ Yes     |
| Accessible outside loop | ✅ Yes             | ❌ No      |


🏆 Interview One-Liner

A for loop with var does not create a new block scope, so the loop variable remains accessible after the loop and ends with its final value.

🔥 Golden Rule

Never use var in loops — it leaks variables and breaks closures.