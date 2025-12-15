1. Basic Promise (resolve / reject)

A Promise is created with a function having resolve and reject.

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Operation Successful");
  } else {
    reject("❌ Operation Failed");
  }
});


2. Promise Chaining

One promise result feeds into another.

new Promise(resolve => resolve(2))
  .then(num => num * 2)
  .then(num => num * 3)
  .then(final => console.log(final)); // 12


promise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("✨ Done"));


  3. Promise.resolve() / Promise.reject()

Create pre-settled promises.

Promise.resolve("✅ Success").then(console.log);
Promise.reject("❌ Failed").catch(console.log);




4. Promise.all()

Runs multiple promises in parallel.

Resolves if all succeed.

Rejects if any fail.

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://jsonplaceholder.typicode.com/posts")
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(data => console.log("✅ Users & Posts:", data))
.catch(err => console.log("❌ Error:", err));




5. Promise.allSettled()

Waits for all promises (success or fail).
Always gives result of each promise.

Promise.allSettled([
  Promise.resolve("✅ Success"),
  Promise.reject("❌ Fail")
]).then(results => console.log(results));



6. Promise.race()

Resolves/rejects as soon as first promise settles.

Promise.race([
  new Promise(res => setTimeout(() => res("🚀 Fast"), 1000)),
  new Promise(res => setTimeout(() => res("🐢 Slow"), 3000))
]).then(console.log);




7. Promise.any()

Resolves with first fulfilled promise.
Rejects only if all fail.

Promise.any([
  Promise.reject("❌ Fail 1"),
  Promise.resolve("✅ Success"),
  Promise.reject("❌ Fail 2")
]).then(console.log);




8. Async / Await (Promise sugar)

Cleaner syntax for promises.

async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getData();
✅ Use Case: Any async operation (API call, DB query).





9. Promise.finally()

Runs regardless of success/failure.

Promise.reject("❌ Error")
  .catch(console.log)
  .finally(() => console.log("✨ Cleanup Done"));



  10. Nested Promises (not recommended, use chaining)
new Promise(resolve => resolve(10))
  .then(res => {
    return new Promise(resolve => resolve(res * 2));
  })
  .then(console.log); // 20
  // 
  
  
  
  

🔑 Summary of All Promise Types
new Promise() → create promise

.then(), .catch(), .finally()

Promise.resolve() / Promise.reject()

Promise.all() → all must succeed

Promise.allSettled() → wait for all, succeed or fail

Promise.race() → first to settle wins

Promise.any() → first success wins

async/await → modern syntax

Nested promises → possible, but chaining better

  🔹 Promise Lifecycle + Types Diagram

                ┌──────────────┐
                │  PENDING 🕒  │
                └──────┬───────┘
                       │
         ┌─────────────┴─────────────┐
         │                           │
 ┌───────▼─────────┐         ┌───────▼─────────┐
 │  FULFILLED ✅    │         │   REJECTED ❌    │
 └───────┬─────────┘         └────────┬────────┘
         │                             │
         │ then()                      │ catch()
         │                             │
         └──────────────┬──────────────┘
                        │
                    finally()




🔹 Promise Combinators
Promise.all([p1, p2, p3])
 └──> ✅ Resolves if ALL succeed
 └──> ❌ Rejects if ANY fails

Promise.allSettled([p1, p2, p3])
 └──> Always waits for ALL
 └──> Returns array of {status, value/reason}

Promise.race([p1, p2, p3])
 └──> Resolves/rejects as soon as FIRST settles

Promise.any([p1, p2, p3])
 └──> Resolves with FIRST success
 └──> Rejects only if ALL fail



 🔹 Async / Await Flow
async function example() {
   try {
      let result = await somePromise();
      console.log(result);  // same as .then()
   } catch (err) {
      console.log(err);     // same as .catch()
   } finally {
      console.log("cleanup"); // same as .finally()
   }

}


🧠 Quick Analogy

Promise.all → “All friends must arrive before party starts.”

Promise.allSettled → “We’ll note who arrived and who didn’t, but party goes on.”

Promise.race → “First taxi to arrive, we take it — no matter good or bad.”

Promise.any → “We’ll take the first working taxi, ignore the broken ones.”