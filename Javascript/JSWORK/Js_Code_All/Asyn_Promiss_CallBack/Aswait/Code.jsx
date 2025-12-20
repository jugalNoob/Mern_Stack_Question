Excellent example 👌
This is async/await internals, Promise wrapping, and event loop microtask behavior — exactly “pro-level”.

I’ll explain EVERY line, what pauses, what goes to microtask, and why await 100 even works.

1️⃣ Your Code
const Test = async () => {

    try {
        let a = await 100 // pause and check another code
        console.log(a)
    } catch (error) {
        console.log(error)
    }
}

Test()

2️⃣ First golden rule (MEMORIZE)

await works with ANY value — not just Promises.

If the value is not a Promise, JavaScript does this internally:

await 100
↓
await Promise.resolve(100)

3️⃣ Step-by-step execution (VERY DEEP)
🔹 Step 1: Test() is called

Test is an async function

It immediately returns a Promise

Function body starts executing synchronously

🔹 Step 2: Enter try block
let a = await 100

🔹 Step 3: await 100 behavior (CRITICAL)

1️⃣ JS sees await 100
2️⃣ Converts it to:

await Promise.resolve(100)


3️⃣ Async function PAUSES here

📌 Important:

Even though 100 is available immediately

await always pauses

Remaining code is scheduled as a microtask

🔹 Step 4: Async function suspension

At this moment:

Test() has returned a Promise (still pending)

JS can run other synchronous code (if any)

🔹 Step 5: Microtask resumes async function

Promise resolves with value 100

Async function continues execution

a = 100

🔹 Step 6: console.log(a)
100

🔹 Step 7: No error → catch is skipped

Promise resolves successfully

Final Promise from Test() becomes fulfilled

4️⃣ Event Loop View (PRO LEVEL)
CALL STACK
---------
Test() starts
await → pause

MICROTASK QUEUE
---------------
resume async function (a = 100, console.log)

EVENT LOOP
----------
execute microtask

5️⃣ Why await ALWAYS pauses (even for 100)?

Because spec rule:

await always yields control back to the event loop

This guarantees:

Predictable async behavior

Consistent ordering with Promises

6️⃣ What if error happens?
Example:
let a = await Promise.reject('failed')


Internally:

throw 'failed'


Control jumps to catch.

7️⃣ Equivalent Promise-based code (INTERVIEW GOLD)

Your async function is roughly equivalent to:

function Test() {
  return Promise.resolve(100)
    .then(a => {
      console.log(a)
    })
    .catch(error => {
      console.log(error)
    })
}

8️⃣ Output
100

9️⃣ Common interview traps ⚠️
❌ Wrong belief

await blocks JavaScript

✅ Correct

await pauses only the async function, not the JS thread

🔟 One-line interview answer 🎯

await converts non-Promise values into resolved Promises, pauses the async function, and resumes execution as a microtask.

🧠 Mental model (remember forever)
await value
→ Promise.resolve(value)
→ pause
→ resume in microtask