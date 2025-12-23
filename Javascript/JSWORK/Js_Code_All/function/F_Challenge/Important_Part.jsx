1️⃣ Arrow Function Rules

Single expression → implicit return:

const double = x => x * 2; // automatically returns x*2


Multiple statements → need {} and return:

const double = x => { 
  const y = x * 2;
  return y; 
};

2️⃣ Your code fixed
let data = [1, 2, 3, 4, 0, null]
  .map(elem => elem * 2)             // multiply each by 2
  .filter(item => Boolean(item))      // remove falsy values (0, null, undefined, false)
  .reduce((acc, item) => acc + item, 0); // sum all items

console.log(data); // 20


✅ Works perfectly because:

elem => elem * 2 → single expression, so return is automatic.

item => Boolean(item) → also single expression.

reduce((acc, item) => acc + item, 0) → single expression.

3️⃣ Common Mistakes

Using => with braces {} but forgetting return:

.map(elem => { elem * 2 }) // ❌ returns undefined


Correct version:

.map(elem => { return elem * 2 }) // ✅ returns value


Or just remove braces for single expressions:

.map(elem => elem * 2) // ✅ clean and short

4️⃣ Tip for chaining .map, .filter, .reduce

Always use single expression if possible → less syntax

Use implicit return with =>

Use braces + return only for multi-line logic

let data = arr
  .map(x => x * 2)
  .filter(x => x)  // shorthand for Boolean(x)
  .reduce((a,b) => a + b, 0);


Clean, readable, and works in interviews.