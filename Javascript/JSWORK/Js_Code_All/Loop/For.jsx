✅ 1. FOR LOOP
📌 Definition

Used when you know the exact number of iterations ahead of time.

📌 Syntax
for (initialization; condition; increment) {
  // code
}

📌 Features

All control parts (init, condition, increment) are in one line

Very clean and readable for counting loops

Condition is checked before entering the loop — pre-check loop

If the condition is false → loop executes 0 times

✔ Example
for (let i = 0; i < 5; i++) {
  console.log(i);
}

🚀 Use Cases

Iterating arrays

Running loops with known range

Running loop of fixed length

✅ 2. WHILE LOOP
📌 Definition

Used when you don’t know how many times the loop should run.

📌 Syntax
while (condition) {
  // code
}

📌 Features

Only condition is written at the top

Condition checked before the loop runs — pre-check loop

May execute 0 times

You must manually handle increment, otherwise infinite loop may occur

✔ Example
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

🚀 Use Cases

Reading data from API until complete

Waiting for condition to become true

Real-time event watcher

✅ 3. DO…WHILE LOOP
📌 Definition

Runs the block at least once, even if the condition is false.

📌 Syntax
do {
  // code
} while (condition)

📌 Features

Condition checked after running the loop — post-check loop

Guarantees one execution

Useful when you want the code to run first and check later

✔ Example


let i = 0;
do {
    i++;
  console.log(i);

} while (i < 5);

🔥 INTERVIEW-READY COMPARISON TABLE


| Feature             | for Loop                  | while Loop             | do…while Loop                              |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------ |
| Condition check     | Before execution          | Before execution       | After execution                            |
| Runs at least once? | ❌ No                      | ❌ No                   | ✅ Yes                                      |
| Best for            | Known iterations          | Unknown iterations     | Mandatory first-time execution             |
| Structure           | Compact (all in one line) | Condition only         | Condition after block                      |
| Risk                | Low                       | Medium (infinite loop) | Medium (runs once even if condition fails) |
| Executes 0 times?   | Yes                       | Yes                    | ❌ No                                       |


💡 Interview Short Answer (1–2 lines)

Q: What is the difference between for, while, and do…while?

A:

for → used when number of iterations is known

while → used when number of iterations is unknown

do…while → executes at least once because the condition is checked after the loop

🧠 Deep Interview Trick Question

Q: Which loop is best when you want the body to run at least once?
✔ do…while

Q: Why is for loop safer than while loop?
✔ Because increment and condition stay together, reducing chances of infinite loops.