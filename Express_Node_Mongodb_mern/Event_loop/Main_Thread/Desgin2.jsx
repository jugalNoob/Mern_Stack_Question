1️⃣ Global Execution Context (Top-Level Code)
console.log("Start");

let x = 10;

console.log(x);

console.log("End");

What happens on the Main Thread

JS engine creates Global Execution Context

Top-level code runs line by line

Everything is pushed to the Call Stack

📌 Output:

Start
10
End


➡️ Main thread is busy until top-level code finishes

2️⃣ Call Stack (Synchronous Execution)
function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two();

Main Thread Flow (Call Stack)
Global
→ two()
→ one()
→ one() ends
→ two() ends
→ Global ends


📌 Output:

One
Two


➡️ Only ONE function runs at a time
➡️ This proves Single Thread

3️⃣ Blocking Nature (Main Thread Gets Blocked)
console.log("Start");

for (let i = 0; i < 1e9; i++) {} // heavy task

console.log("End");

What happens

for loop runs on main thread

UI freezes ❄️

Nothing else executes until loop finishes

📌 Output (after delay):

Start
End


➡️ Main thread = blocking
➡️ Long tasks freeze everything

4️⃣ Async APIs Delegation (Main Thread Offloads Work)
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");

Main Thread Execution

console.log("Start") → runs

setTimeout() → registered, not executed

console.log("End") → runs

Main thread becomes free

📌 Output:

Start
End
Timer


➡️ Main thread does NOT wait
➡️ Timer callback is not on main thread yet
0000000000000000000000000000000000000000000000000000000000 ::::::::::::::::::::::::-------------->>
👉 Event loop does NOT “run after main thread”
👉 Event loop runs continuously, but callbacks run on the main thread

First, the SAME code
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");


Output:

Start
End
Timer

🧠 Key Rule (MEMORIZE THIS)

JavaScript has ONE main thread.
Callbacks NEVER run outside it.
Event loop only DECIDES WHEN to put callbacks back on the main thread.

Step-by-Step: What ACTUALLY happens
🟦 Step 1: Main thread starts (Call Stack)
console.log("Start");


Goes on call stack

Executes immediately

Pops off

📌 Output so far:

Start

🟦 Step 2: setTimeout is called (Main thread)
setTimeout(() => {
  console.log("Timer");
}, 1000);


⚠️ IMPORTANT:

setTimeout itself runs on the main thread

But the callback does NOT

What happens:

Main thread sees setTimeout

Browser Web API starts the timer (1000ms)

Callback is registered

Main thread moves on immediately

📌 Nothing is printed yet

🟦 Step 3: Main thread continues
console.log("End");


Runs immediately

Pops from call stack

📌 Output now:

Start
End

🟦 Step 4: Main thread finishes ALL code

Now:

Call Stack is EMPTY

Main thread is IDLE (free)

⚠️ This is the key moment

❓ Now where is the callback?
() => {
  console.log("Timer");
}


Timer finished in Web APIs

Callback is waiting in Task Queue

NOT executing yet

NOT on main thread yet

🟦 Step 5: Event Loop checks (continuously)

Event Loop is like a watchman
It keeps checking:

❓ “Is call stack empty?”

✔️ Stack is empty → YES
✔️ Queue has callback → YES

➡️ Event loop pushes callback to call stack

🟦 Step 6: Callback runs on MAIN THREAD
console.log("Timer");


Callback is now on call stack

Executes

Pops off

📌 Final output:

Timer

❌ Wrong Thinking (Common Mistake)

❌ “Event loop runs after main thread”
❌ “Callback runs outside main thread”

✅ Correct Thinking

✔️ Main thread runs all JS
✔️ Event loop only schedules
✔️ Callback executes on main thread

🔁 Visual Flow (Simple)
Main Thread:
Start → setTimeout → End → (idle)

Web API:
Timer counting...

Task Queue:
[ callback ]

Event Loop:
stack empty? → YES
push callback → main thread

Main Thread:
Timer

🎯 One-Line Interview Answer

Main thread executes synchronous code first.
Async callbacks wait in the queue.
When the call stack is empty, the event loop pushes callbacks back onto the main thread for execution.


5️⃣ Callback Registration (Waiting Outside Main Thread)
setTimeout(() => {
  console.log("Callback executed");
}, 0);

console.log("Main thread finished");

Main Thread Behavior

Callback is registered

Main thread finishes execution

Callback waits outside main thread

📌 Output:

Main thread finished
Callback executed


➡️ Callback does NOT interrupt main thread
➡️ Main thread must finish first

🔥 ONE FINAL CODE (Everything Together)
console.log("Start");

function task() {
  console.log("Task running");
}

setTimeout(() => {
  console.log("Async callback");
}, 0);

task();

console.log("End");

Main Thread Order

Start

task()

End

Async callback

📌 Output:

Start
Task running
End
Async callback

🎯 Interview One-Line Explanation

JavaScript runs on a single main thread.
It executes top-level code and functions synchronously using the call stack.
Async APIs delegate work, and callbacks wait until the main thread is free.