let data = ['jugal', 'karan', 'anku', 'nikhile'];

console.log("FOR…IN → index:");
for (let index in data) {
  console.log(index);
}

console.log("FOR…OF → value:");
for (let value of data) {
  console.log(value);
}


🔥 FOR INTERVIEW — Difference Between for…in vs for…

| Feature             | `for…in`            | `for…of`                 |
| ------------------- | ------------------- | ------------------------ |
| Iterates over       | **Indexes / keys**  | **Values**               |
| Works on            | Objects, Arrays     | Arrays, strings, maps    |
| Use case            | When you need index | When you need value      |
| Returns for array   | `"0", "1", "2"`     | `"jugal", "karan", ..."` |
| Suitable for array? | ❌ Not recommended   | ✅ Ideal                  |



🔥 PART 1 — Deep Interview Questions on Loops
Q1. What is the difference between for…in and for…of?

Expected Answer:

for…in → iterates keys / indexes

for…of → iterates values

for…in not recommended for arrays

for…of works on iterable objects (Array, Map, Set, String)


Q2. Why is for…in dangerous for arrays?

Expected Answer:
Because it also iterates:

inherited prototype keys

custom properties added to array

keys are strings, not numbers

Example:

Array.prototype.x = 10;
let arr = [1,2];

for (let key in arr) console.log(key);
// 0, 1, x


Q3. What is an iterable in JavaScript?

Any object that implements Symbol.iterator method.

Example:

const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
};

for (const x of obj) console.log(x); 

Q4. What is the difference between forEach and for…of?

| Feature        | forEach        | for…of                |
| -------------- | -------------- | --------------------- |
| break/continue | ❌ Not allowed  | ✔ Allowed             |
| async/await    | ❌ Doesn’t work | ✔ Works               |
| readability    | Good           | Better for async work |



Q5. Why does async/await not work inside forEach()?

Because forEach doesn’t wait for Promises.

arr.forEach(async (x) => {
  await delay(); // not awaited by outer function
});

Q6. Difference between while and do…while?

while: pre-check → may run 0 times

do…while: post-check → runs at least once

Q7. How do you create a custom loop without for/while?

Recursion:

function loop(i, limit) {
  if (i > limit) return;
  console.log(i);
  loop(i + 1, limit);
}
loop(0, 5);

Q8. Why does for…in return string keys, not numbers?

Because array keys are actually strings internally:

typeof "0" // string

Q9. How does for (let x in obj) work internally?

Gets enumerable property names

Includes inherited enumerable properties

Iterates in unspecified order

Q10. Which loop is best for huge data?

for loop → fastest and most optimized by JS engines (V8).

for (let i = 0; i < arr.length; i++) { ... }

🔥 PART 2 — Real-World Use Cases (Advanced)
1. Using for…of for async operations
async function processUsers(users) {
  for (const user of users) {
    await sendNotification(user);
  }
}


Why? — Because forEach cannot handle async/await.

2. Using for…in to iterate object properties
const user = { name: "jugal", age: 22 };

for (let key in user) {
  console.log(key, user[key]);
}

3. Using a custom loop to retry API requests
async function retry(fn, attempts) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
    }
  }
}

4. Using for for performance-heavy loops

Best for large arrays (100k+)

for (let i = 0; i < bigArray.length; i++) {
  // fastest iteration
}

5. do…while for user input

Useful in CLI tools, games, prompts.

let answer;
do {
  answer = prompt("Enter password:");
} while (answer !== "1234");

6. Custom async loop using recurrence

Equivalent to custom setInterval:

function repeat(fn, delay) {
  function run() {
    fn();
    setTimeout(run, delay);
  }
  run();
}

7. Using while to poll database or state
while (!isFileReady()) {
  await wait(1000);
}

8. Looping Maps and Sets
const users = new Map([["id1", "jugal"], ["id2", "karan"]]);

for (let [id, name] of users) {
  console.log(id, name);