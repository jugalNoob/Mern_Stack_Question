1️⃣ map() → CREATES A NEW ARRAY
const arr = [1, 2, 3];

const result = arr.map(v => v * 2);

console.log(result); // [2, 4, 6]
console.log(arr);    // [1, 2, 3]

✅ What happened?

map():

Iterates

Applies logic

Returns a NEW array

Original array is untouched

📌 Length is always same as original

🧠 Memory view
arr     → [1, 2, 3]
result  → [2, 4, 6]   (new memory)

2️⃣ forEach() → DOES NOT CREATE A NEW ARRAY
const arr = [1, 2, 3];

const result = arr.forEach(v => v * 2);

console.log(result); // undefined

❌ Why undefined?

forEach():

Just loops

Ignores return value

Returns undefined always

🧠 Memory view
arr → [1, 2, 3]
(no new array created)

3️⃣ Common Interview Trap 😈
const arr = [1, 2, 3];

const res = arr.forEach(v => {
  return v * 2;
});

console.log(res); // undefined ❌


👉 Even though you wrote return,
👉 forEach() throws it away

4️⃣ If you want transformation → use map

❌ Wrong

const double = [];
arr.forEach(v => double.push(v * 2));


✅ Right

const double = arr.map(v => v * 2);


Why map is better

Cleaner

Functional

No mutation

Easy to chain

5️⃣ Can forEach() change array?
✅ YES — by mutation
const arr = [1, 2, 3];

arr.forEach((v, i) => {
  arr[i] = v * 2;
});

console.log(arr); // [2, 4, 6]


⚠️ This mutates original array
⚠️ Bad practice in functional programming

6️⃣ Interview Comparison Table 🔥


| Feature           | map()          | forEach()    |
| ----------------- | -------------- | ------------ |
| Returns value     | ✅ New array    | ❌ undefined  |
| Creates new array | ✅              | ❌            |
| Can be chained    | ✅              | ❌            |
| Functional style  | ✅              | ❌            |
| Mutates original  | ❌ (by default) | ✅ (possible) |
| Use case          | Transform data | Side effects |




7️⃣ One-Line Interview Answer 🏆

map() is used when you want to transform data and get a new array.
forEach() is used when you only want to perform actions, not produce a value.

8️⃣ Real-World Example 🌍
API response transform
const users = apiData.map(u => ({
  id: u.id,
  name: u.name
}));

Logging / analytics
users.forEach(u => {
  console.log(u.name);
});


If you want next:
🔥 map vs filter vs reduce in one example
🔥 why map is immutable-friendly
🔥 custom implementation of map & forEach