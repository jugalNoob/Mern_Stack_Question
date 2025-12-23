1️⃣ What is the meaning of try...catch?

👉 Purpose: Handle runtime errors safely.

try {
  JSON.parse("{ bad json }")
} catch (err) {
  console.log("Error handled")
}

Key points

Prevents app crash

Works with sync code

With async/await, it also catches Promise rejections

2️⃣ What is new Promise()?

👉 A Promise is an object that represents a future result.

const p = new Promise((resolve, reject) => {
  resolve("success")
})

Promise states

pending

fulfilled

rejected

3️⃣ Why await does not work outside async?

Because await needs a Promise context.

❌ Invalid:

await fetchData()


✅ Valid:

async function test() {
  await fetchData()
}


📌 Exception:

Top-level await works in ES modules

4️⃣ Difference between new Promise() and async function


| Feature        | `new Promise()`     | `async function`              |
| -------------- | ------------------- | ----------------------------- |
| Syntax         | Manual              | Automatic                     |
| Error handling | `reject()`          | `throw`                       |
| Return         | Must call `resolve` | Returns Promise automatically |
| Use case       | Low-level async     | High-level async              |



// async version (preferred)
async function getData() {
  return "data"
}
5️⃣ Meaning of .then() and .catch()
👉 Handle Promise result and errors

js
Copy code
fetchData()
  .then(data => console.log(data))
  .catch(err => console.log(err))
.then() → success

.catch() → failure

6️⃣ Can I use Promise inside async function?
✅ YES

js
Copy code
async function test() {
  const p = Promise.resolve(10)
  const result = await p
  console.log(result)
}
📌 async/await is just syntax sugar over Promises.

7️⃣ Why Promise.resolve() without .catch() can fail silently?
js
Copy code
Promise.reject("error")
❌ If no .catch() → Unhandled Promise Rejection

In Node.js:

Can crash app (depending on version)

✅ Always handle:

js
Copy code
Promise.reject("err").catch(console.error)
8️⃣ Meaning of resolve and reject
js
Copy code
new Promise((resolve, reject) => {
  resolve("success") // fulfilled
  reject("error")   // rejected
})

| Function  | Meaning |
| --------- | ------- |
| `resolve` | Success |
| `reject`  | Failure |


9️⃣ Meaning of finally()

👉 Runs always (success or error)

fetchData()
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("cleanup"))


📌 Used for:

closing DB

stopping loaders

cleanup

🔟 Difference between Promise Combinators
✅ Promise.all

All must succeed

Fails fast

Promise.all([p1, p2])

✅ Promise.any

First success wins

Ignores failures

Promise.any([p1, p2])

✅ Promise.race

First settled (success or fail)

Promise.race([p1, p2])

✅ Promise.allSettled

Waits for all

Never fails

Promise.allSettled([p1, p2])

🔥 Interview Table

| Method     | Fail Fast | Wait All | First Win |
| ---------- | --------- | -------- | --------- |
| all        | ✅         | ❌        | ❌         |
| any        | ❌         | ❌        | ✅         |
| race       | ❌         | ❌        | ✅         |
| allSettled | ❌         | ✅        | ❌         |



1️⃣1️⃣ Meaning of Promise chaining (then → catch)

👉 Pass result step-by-step

fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => console.log(posts))
  .catch(console.error)


📌 One .catch() handles all errors above.

➕ EXTRA IMPORTANT INTERVIEW QUESTIONS (Added)
🔹 Promise vs Callback?

Callback → hell

Promise → clean & readable

🔹 Async/Await vs Promise?

Same power

async/await = cleaner syntax

🔹 Does try...catch catch .then() errors?

❌ NO

try {
  promise.then(...)
} catch {}


✅ Use:

await promise

🎯 FINAL INTERVIEW ONE-LINERS

“Async functions always return a Promise.”

“await pauses execution, not the thread.”

“try...catch with async catches rejected Promises.”

“Promise chaining avoids callback hell.”

If you want next:

Event loop + Promise microtasks

Async interview traps

Node.js Promise best practices



🧠 “Zoology” (Nature) of async / await

await is async in implementation but synchronous in appearance

1️⃣ Why await looks synchronous
async function test() {
  console.log(1)
  await Promise.resolve()
  console.log(2)
}
test()
console.log(3)

Output
1
3
2

Explanation

await pauses only the async function

It does NOT block the call stack

Remaining code runs later via microtask queue

👉 Looks sync inside function, but async outside.




4️⃣ Why await works like sync inside loop (IMPORTANT)
async function test() {
  for (let i = 1; i <= 3; i++) {
    await Promise.resolve(i)
    console.log(i)
  }
}
test()


Output:

1
2
3


❓ Why sequential?

Each await waits before next iteration

Execution is linear inside function


// const cache = new Map()

// setInterval(() => {
//   const key = 'array' // stable key

//   if (cache.has(key)) {
//     console.log('Cache hit')
//     console.log(cache.get(data))
//     return cache.get(key)
//   }

//   console.log('Cache miss')

//   const data = [10, 20, 30, 40, 50]
//   cache.set(key, data)

// }, 1000)

// console.log('jugal')


// 🔑 Golden Rule (THIS answers everything)

// Map keys must match EXACTLY
// – Primitive → value comparison
// – Object/Array → reference comparison

// There is NO conversion between them.