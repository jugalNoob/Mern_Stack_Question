✅ filter() — Simple Definition

filter() is an array method that creates a new array containing
 only the elements that pass a condition.


 const nums = [1, 2, 3, 4, 5];

const even = nums.filter(n => n % 2 === 0);

console.log(even); // [2, 4]


:::::::::::::::::::::::::::::::::::::::::::::------------
const users = [
  { name: "A", age: 17 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];

const adults = users.filter(u => u.age > 18);
console.log(adults)


00000000000000000000 ::::::::::::::::: --------------------------->>>

// 🔹 Mid Example – Remove falsy values

Falsy: 0, "", null, undefined, false, NaN

const arr = [0, 1, "", "hi", null, "ok", false];

const clean = arr.filter(Boolean);

console.log(clean); // [1, "hi", "ok"]



0000000000000000000000 ----------------------------->>>


🔹 Hard Example – Filter nested object data

Scenario: get products that are in stock AND price > 1000.

const products = [
  { 
    id: 1,
    info: { price: 2000, stock: 10 }
  },
  {
    id: 2,
    info: { price: 500, stock: 0 }
  },
  {
    id: 3,
    info: { price: 1500, stock: 3 }
  }
];

const result = products.filter(p => 
  p.info.price > 1000 && p.info.stock > 0
);

console.log(result);

🔹 Real-life Example – Search filter
const items = [
  "Laptop",
  "Mobile",
  "Camera",
  "Charger"
];

const search = "ca";

const result = items.filter(i =>
  i.toLowerCase().includes(search.toLowerCase())
);

console.log(result); // ["Camera", "Charger"]


000000000000000000000000000000 -------------------------->>>


✅ 2. REDUCE — Base to Advanced
🔹 Base Example – Sum of array
const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, n) => acc + n, 0);

console.log(total); // 10

🔹 Base Example – Find max
const nums = [2, 8, 5, 12, 3];

const max = nums.reduce((acc, n) => acc > n ? acc : n);

console.log(max); // 12

🎯 Intermediate Reduce Examples
🔹 Convert array → object
const arr = ["a", "b", "c"];

const obj = arr.reduce((acc, item, i) => {
  acc[i] = item;
  return acc;
}, {});

console.log(obj);
// {0: "a", 1: "b", 2: "c"}



4️⃣ reduce() ⭐⭐⭐
Purpose

Convert array → ANYTHING
(number, object, array, string)

const nums = [1, 2, 3];

const sum = nums.reduce((acc, cur) => {
  return acc + cur;
}, 0);

⚠️ Initial Value Rule (INTERVIEW)
[].reduce((a,b)=>a+b); // ❌ ERROR

🔥 Common Patterns
Sum
arr.reduce((a,b)=>a+b, 0)

Flatten
[[1,2],[3,4]].reduce((a,b)=>a.concat(b), [])

Frequency Map
['a','b','a'].reduce((acc,v)=>{
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {})
