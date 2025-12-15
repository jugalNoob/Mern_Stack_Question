Below are Filter and Reduce examples — starting from beginner →
 intermediate → hard real-world examples.
All examples use very simple, clean JavaScript.

✅ 1. FILTER — Base to Advanced
🔹 Base Example – Filter even numbers
const nums = [1, 2, 3, 4, 5, 6];

const evens = nums.filter(n => n % 2 === 0);

console.log(evens); // [2, 4, 6]

🔹 Base Example – Filter strings longer than 3 letters
const words = ["hi", "hello", "cat", "javascript"];

const longWords = words.filter(w => w.length > 3);

console.log(longWords);

🔹 Mid Example – Filter objects by age > 18
const users = [
  { name: "A", age: 17 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];

const adults = users.filter(u => u.age > 18);

console.log(adults);

🔹 Mid Example – Remove falsy values

Falsy: 0, "", null, undefined, false, NaN

const arr = [0, 1, "", "hi", null, "ok", false];

const clean = arr.filter(Boolean);

console.log(clean); // [1, "hi", "ok"]

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

🔹 Count frequency of items
const items = ["a", "b", "a", "c", "b", "a"];

const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { a: 3, b: 2, c: 1 }

🔹 Group objects by a key

Group users by country.

const users = [
  { name: "A", country: "India" },
  { name: "B", country: "USA" },
  { name: "C", country: "India" },
];

const grouped = users.reduce((acc, user) => {
  acc[user.country] = acc[user.country] || [];
  acc[user.country].push(user);
  return acc;
}, {});

console.log(grouped);

🔥 Hard & Real-World Reduce Examples
1️⃣ Sum nested values (cart total)
const cart = [
  { item: "Laptop", price: 50000, qty: 1 },
  { item: "Mouse", price: 500, qty: 2 },
  { item: "Keyboard", price: 1000, qty: 1 }
];

const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price * item.qty;
}, 0);

console.log(totalAmount);

2️⃣ Flatten a nested array
const nested = [1, [2, 3], [4, 5, [6]]];

const flat = nested.reduce((acc, item) => {
  return acc.concat(Array.isArray(item) ? item.flat(Infinity) : item);
}, []);

console.log(flat);

3️⃣ Build a lookup table (ID → user)
const users = [
  { id: 101, name: "Tom" },
  { id: 102, name: "Jerry" },
  { id: 103, name: "Spike" }
];

const map = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(map);

⭐ BONUS — Combining Filter + Reduce
Filter expensive items → Reduce total price
const products = [
  { name: "Phone", price: 20000 },
  { name: "Watch", price: 5000 },
  { name: "Laptop", price: 60000 }
];

const total = products
  .filter(p => p.price > 10000)
  .reduce((sum, p) => sum + p.price, 0);

console.log(total); // 20000 + 60000 = 80000

Want more?