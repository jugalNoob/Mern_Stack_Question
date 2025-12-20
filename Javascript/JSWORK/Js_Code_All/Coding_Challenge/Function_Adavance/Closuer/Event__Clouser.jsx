🔥 Closure + Event Loop (INTERVIEW GOLD)
I’ll explain this step-by-step, then give classic traps interviewers love.

1️⃣ Quick Refresher (1 line each)

Closure
👉 A function remembers variables from its outer scope.

Event Loop
👉 A mechanism that executes async callbacks after the call stack is empty.

2️⃣ Closure + Event Loop = Why bugs happen
Example 1 (CLASSIC INTERVIEW QUESTION)
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

test();

❓ What is output?
3
3
3

🔍 Why? (CLOSURE + EVENT LOOP)
Step-by-step:

for loop runs synchronously

var i → one shared variable

setTimeout callbacks go to Web APIs

After 1 second → callbacks move to callback queue

Event loop pushes them to call stack

Loop already finished → i === 3

All closures read the same i

👉 Closure captured reference, not value

3️⃣ Correct Fix using let (BEST ANSWER)
function test() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

Output:
0
1
2

Why?

let is block scoped

Each iteration gets a new i

Each closure captures its own value

4️⃣ Fix using IIFE (OLD SCHOOL – INTERVIEW)
function test() {
  for (var i = 0; i < 3; i++) {
    (function (x) {
      setTimeout(() => console.log(x), 1000);
    })(i);
  }
}

5️⃣ Closure + Event Loop with setTimeout(0)
function demo() {
  let x = 10;

  setTimeout(() => {
    console.log(x);
  }, 0);

  x = 20;
}

demo();

Output:
20

Why?

Closure references x

x updated before callback runs

Event loop executes callback later

6️⃣ Closure + Microtasks (Promise vs setTimeout)
function test() {
  let x = 10;

  Promise.resolve().then(() => console.log(x));

  setTimeout(() => console.log(x), 0);

  x = 20;
}

test();

Output:
20
20

Order:

Call stack empty

Microtask queue (Promise)

Macrotask queue (setTimeout)

Both see updated x

7️⃣ 🔥 Trick Question (VERY POPULAR)
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

Output:
4
4
4


Why?

Loop finishes → i = 4

Closures access same i

8️⃣ Real-World Example (WHY IT MATTERS)
❌ Buggy Code
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => console.log(i);
}

✅ Fixed
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => console.log(i);
}

9️⃣ Interview One-Liner (VERY IMPORTANT)

Closures capture variable references, and due to the event loop’s delayed execution, async callbacks may observe updated values instead of expected ones.

10️⃣ Mental Model (REMEMBER THIS)
Closure → WHAT variable is remembered
Event Loop → WHEN callback runs
Bug → remembered variable changed before callback runs

🔥 Rapid Interview Q&A

Q: Does closure store value or reference?
👉 Reference

Q: Why does let fix closure issues?
👉 Block-scoped binding per iteration

Q: Which runs first: Promise or setTimeout?
👉 Promise (microtask)

🎯 Final Summary

Closures + async = common bugs

Event loop delays execution

Variables may change before callback runs

let or IIFE fixes most issues

If you want next 🔥:
🔥 Closure + React hooks
🔥 Event loop deep internals
🔥 Output-based puzzles (hard)
🔥 Memory leak debugging

Just say 🚀