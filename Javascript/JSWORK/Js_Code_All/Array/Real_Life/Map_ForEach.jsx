✅ 1. MAP — Simple to Advanced

Map creates a NEW array by transforming each element.

⭐ Very Simple Examples
🔹 1. Double numbers
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]

🔹 2. Convert numbers to strings
const nums = [1, 2, 3];

const str = nums.map(n => String(n));

console.log(str); // ["1", "2", "3"]

🔹 3. Extract only names from objects
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 }
];

const names = users.map(u => u.name);

console.log(names); // ["A", "B"]

🟦 Intermediate Map Examples
🔹 4. Add new property to each object
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];

const updated = users.map(u => ({
  ...u,
  country: "India"
}));

console.log(updated);

🔹 5. Map with index
const arr = ["a", "b", "c"];

const result = arr.map((val, i) => `${i} → ${val}`);

console.log(result);
// ["0 → a", "1 → b", "2 → c"]

🔹 6. Convert string array → object array
const colors = ["red", "blue", "green"];

const objArray = colors.map(c => ({ color: c }));

console.log(objArray);

🔥 Advanced Map Examples (Real Life)
🔹 7. Format API response
const api = [
  { fname: "Jugal", lname: "Sharma" },
  { fname: "Ankur", lname: "Patel" }
];

const formatted = api.map(u => ({
  fullName: `${u.fname} ${u.lname}`,
  initials: u.fname[0] + u.lname[0]
}));

console.log(formatted);

🔹 8. Map nested objects
const products = [
  { id: 1, info: { price: 200 } },
  { id: 2, info: { price: 500 } }
];

const onlyPrice = products.map(p => p.info.price);

console.log(onlyPrice);

🔹 9. Transform array → DOM structure (frontend example)
const items = ["Home", "About", "Contact"];

const list = items.map(i => `<li>${i}</li>`);

console.log(list);

✅ 2. forEach — Simple to Advanced

forEach is used for doing actions (NO return).

⭐ Very Simple Examples
🔹 1. Print each value
[1, 2, 3].forEach(n => console.log(n));

🔹 2. Sum values (not recommended but valid)
let sum = 0;

[1, 2, 3].forEach(n => sum += n);

console.log(sum);

🔹 3. Update array values manually
const arr = [1, 2, 3];
arr.forEach((n, i) => arr[i] = n * 2);

console.log(arr); // [2, 4, 6]

🟩 Intermediate forEach Examples
🔹 4. Loop through object array
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 }
];

users.forEach(u => console.log(u.name));

🔹 5. Modify nested values
const cart = [
  { item: "Laptop", qty: 1 },
  { item: "Mouse", qty: 2 }
];

cart.forEach(c => c.qty++);

console.log(cart);

🔹 6. Create logs with index
["a", "b", "c"].forEach((val, i) => {
  console.log(`${i} → ${val}`);
});

🔥 Advanced forEach Examples (Real Life Use Cases)
🔹 7. Validate form fields
const fields = ["name", "email", "password"];

fields.forEach(f => {
  console.log(`${f} is required`);
});

🔹 8. Multi-step processing simulation
const tasks = ["connect DB", "read file", "send email"];

tasks.forEach((t, i) => {
  console.log(`Step ${i + 1}: ${t}`);
});

🔹 9. Real API data processing
const api = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" }
];

api.forEach(o => {
  if (o.status === "completed") {
    console.log(`Order ${o.id} can be shipped.`);
  }
});

🚀 BONUS — Map vs forEach (Quick Interview Table)


| Feature           | map()                          | forEach()                 |
| ----------------- | ------------------------------ | ------------------------- |
| Returns new array | ✅ Yes                          | ❌ No                      |
| Ideal usage       | Transform data                 | Perform actions           |
| Chainable         | Yes                            | No                        |
| Mutates original? | No (unless you do it manually) | Yes (if you modify array) |
