✅ Simple Definition of Higher-Order Function (HOF)

A Higher-Order Function is a function that takes another
 function as an argument OR returns a function.


 🧠 One-line to remember (Interview-ready)

“A function that works with other functions is called a Higher-Order Function.”


✔ Used in middleware, decorators


9️⃣ Interview One-Liners (MEMORIZE)

✔ “A higher-order function is a function that operates on other functions.”
✔ “Map, filter, reduce are classic HOFs.”
✔ “Closures enable stateful higher-order functions.”
✔ “Middleware and decorators are real-world HOFs.”

10️⃣ Common Interview Trap ❌
setTimeout(console.log("Hi"), 1000);


❌ NOT HOF (function executed immediately)

✅ Correct:

setTimeout(() => console.log("Hi"), 1000);

| Feature          | Normal Function | HOF               |
| ---------------- | --------------- | ----------------- |
| Accepts function | ❌               | ✅                 |
| Returns function | ❌               | ✅                 |
| Reusability      | Low             | High              |
| Used in          | Simple logic    | Middleware, utils |


5️⃣ Custom HOF (Real-World Style)
🔹 Logging Wrapper
function withLogging(fn) {
  return function (...args) {
    console.log("Calling function");
    return fn(...args);
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);



1️⃣ Simple Definition
function higherOrder(fn) {   // takes function
  fn();
}

function sayHi() {
  console.log("Hi");
}

higherOrder(sayHi);


✔ higherOrder is a HOF
✔ sayHi is a callback


4️⃣ Built-in Higher-Order Functions (MOST USED)
🔹 map()
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

6️⃣ HOF in Node.js (Middleware Example)
const auth = (req, res, next) => {
  console.log("Authenticated");
  next();
};

app.get("/user", auth, (req, res) => {
  res.send("User data");
});


✔ app.get is HOF
✔ auth is callback




7️⃣ Async Higher-Order Function
function retry(fn, times) {
  return async function (...args) {
    for (let i = 0; i < times; i++) {
      try {
        return await fn(...args);
      } catch (e) {}
    }
    throw new Error("Failed");
  };
}


🔥 Used in microservices / APIs
