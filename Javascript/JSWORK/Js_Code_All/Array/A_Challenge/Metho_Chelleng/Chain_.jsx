
🏆 One-Line Interview Answer

map transforms, filter selects, and reduce combines — chaining
 them creates clean, functional pipelines.

🔗 What is a chain?

Calling multiple array HOFs one after another, where the output of one becomes the input of the next.

array
  .map(...)
  .filter(...)
  .reduce(...)

✅ Simple Example (Numbers)
🎯 Goal

Double numbers

Keep numbers > 10

Calculate total

const result = [2, 5, 8, 10]
  .map(v => v * 2)        // [4, 10, 16, 20]
  .filter(v => v > 10)   // [16, 20]
  .reduce((sum, v) => sum + v, 0);

console.log(result); // 36

🧠 Step-by-step (Interview Explanation)
1️⃣ map() → transform
.map(v => v * 2)


➡️ Changes each value
➡️ Same length array

2️⃣ filter() → select
.filter(v => v > 10)


➡️ Keeps only matching values
➡️ Length may reduce

3️⃣ reduce() → combine
.reduce((sum, v) => sum + v, 0)


➡️ Converts array → single value

✅ Real-World Example (Users)
🎯 Goal

Get active users

Extract their ages

Calculate average age

const users = [
  { name: 'Jugal', age: 25, active: true },
  { name: 'Karan', age: 30, active: false },
  { name: 'Anku', age: 35, active: true }
];

const avgAge =
  users
    .filter(u => u.active)            // keep active users
    .map(u => u.age)                  // extract age
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

console.log(avgAge); // 30

🔥 Advanced Chain Example (Frequency Map)
🎯 Goal

Count word frequency (ignore short words)

const text = ['js', 'node', 'js', 'react', 'node', 'js'];

const freq =
  text
    .filter(word => word.length > 2)
    .map(word => word.toLowerCase())
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

console.log(freq);
// { node: 2, react: 1 }

⚠️ Common Interview Mistakes

❌ Forget return in map
❌ Using forEach in chains
❌ Mutating data inside map
❌ Forgetting initial value in reduce

🏆 One-Line Interview Answer

map transforms, filter selects, and reduce combines — chaining them creates clean, functional pipelines.