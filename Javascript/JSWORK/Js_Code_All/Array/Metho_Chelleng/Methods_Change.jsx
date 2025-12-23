HOF = function that takes another function as an argument or returns one

In JS, array methods are the most used HOFs.

🧠 First: Mental Model (VERY IMPORTANT)
arr.method((value, index, array) => {
  // logic
}, thisArg)

Callback receives

value → current element

index → current index

array → original array




📦 Complete List of Array HOFs (Modern JS)

🔁 ITERATION (NO RETURN / SIDE EFFECTS)

1️⃣ forEach() ❌ (NO return)
Purpose

Loop through array

Perform side effects (log, update external state)


const arr = [1, 2, 3];

arr.forEach((val, i) => {
  console.log(val * 2);
});


🔴 Key Rules

❌ Cannot break or return

❌ Does NOT return a new array

❌ Async + await ❌ (common trap)

await arr.forEach(async v => {}); // ❌ DOES NOT WAIT

✅ Use when

Logging

Mutating external variables



🔁 TRANSFORMATION (RETURNS NEW ARRAY)
2️⃣ map() ✅
Purpose

Transform each element

Same length output

const nums = [1, 2, 3];
const doubled = nums.map(v => v * 2);

🔥 Behavior with holes
[1,,3].map(v => v) // [1, <hole>, 3]

🔴 Interview Trap
const res = arr.map(v => {
  v * 2; // ❌ forgot return
});


➡️ returns [undefined, undefined, ...]




🔍 FILTERING
3️⃣ filter() ✅
Purpose

Select elements

Can reduce length

const nums = [1, 2, 3, 4];
const even = nums.filter(v => v % 2 === 0);

🔥 Holes skipped
[1,,3].filter(Boolean) // [1, 3]



🧮 REDUCTION (MOST IMPORTANT)
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


🔎 SEARCHING
5️⃣ find()

Returns first matched value

arr.find(v => v > 10);

6️⃣ findIndex()

Returns index

arr.findIndex(v => v === 3);

7️⃣ findLast() (ES2023)
arr.findLast(v => v > 5);

8️⃣ findLastIndex()
arr.findLastIndex(v => v > 5);

✅ VALIDATION
9️⃣ some()

➡️ At least one true

arr.some(v => v > 5);


Stops early ⚡

🔟 every()

➡️ All must be true

arr.every(v => v > 0);


Stops early ⚡

🔢 ORDERING / STRING
1️⃣1️⃣ sort() ⚠️ MUTATES
[10, 2, 3].sort(); // ["10","2","3"]

Correct numeric sort
arr.sort((a,b)=>a-b);

1️⃣2️⃣ flat()
[1,[2,[3]]].flat(2);

1️⃣3️⃣ flatMap() ⭐

map + flat(1)

arr.flatMap(v => [v, v * 2]);

🔄 COPY / EXTRACTION
1️⃣4️⃣ slice() (Non-mutating)
arr.slice(1,3);

1️⃣5️⃣ splice() ⚠️ MUTATES
arr.splice(1,1,"X");

🔍 MEMBERSHIP
1️⃣6️⃣ includes()
arr.includes(3);


Uses SameValueZero (NaN works)

1️⃣7️⃣ indexOf()
arr.indexOf(3);


❌ NaN not found

🧠 BEHAVIOR WITH HOLES (🔥 INTERVIEW GOLD)


| Method  | Skips holes |
| ------- | ----------- |
| forEach | ✅           |
| map     | ❌           |
| filter  | ✅           |
| reduce  | ❌           |
| some    | ✅           |
| every   | ✅           |



🔥 Async Interview Trap

❌ WRONG

arr.forEach(async v => await api(v));


✅ RIGHT

await Promise.all(arr.map(v => api(v)));

🏆 Ultimate Interview One-Liner

Use map for transform, filter for selection, reduce for everything else.



::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-----------------------...always.>


❓ Q1: map() vs forEach()
const arr = [1, 2, 3];
const res1 = arr.map(x => x * 2);
const res2 = arr.forEach(x => x * 2);
console.log(res1); // ?
console.log(res2); // ?

✅ Output
[2,4,6]
undefined
💡 Why?
map() returns a new array

forEach() returns undefined



const arr = [1,2,3];
const res = arr.map(async x => x*2);
console.log(res); 
✅ Why does it show [Promise, Promise, Promise]?

Because:
1. async functions ALWAYS return a Promise
Even if you write:
async x => x * 2
…it is automatically converted by JavaScript into:

async x => {
  return Promise.resolve(x * 2);
}


So each call returns a Promise, not a number.
2. map() does not wait for Promises
.map() just collects the return values as they are.
Since each iteration returns a Promise, your result becomes:
[Promise, Promise, Promise]

✅ Correct way to get resolved values
Option 1: Use Promise.all()
const arr = [1,2,3];
const res = await Promise.all(arr.map(async x => x * 2));
console.log(res); // [2, 4, 6]
Option 2: Remove async if you don’t need it
If there is nothing asynchronous inside:
const arr = [1,2,3];
const res = arr.map(x => x * 2);
console.log(res); // [2,4,6]

🔥 Real Interview Explanation

Q: Why does map(async) return an array of Promises?
Answer:
Because an async function always wraps its return value inside a Promise.
map() does not unwrap or await these Promises; it just returns them as-is.
To resolve all results, you need Promise.all().



1:::::::: -------------------------->>>
const data=[10 , 20 , 30 , 40 , 50 , 60 , 70 , 80].map((elm)=>{
    return elm > 20
})
console.log(data)
🔍 Step 1: Understand .map()
.map() creates a new array by applying a function to each element.
Original array: [10, 20, 30, 40, 50, 60, 70, 80]
Callback function: (elm) => elm > 20
🔍 Step 3: Resulting array
[false, false, true, true, true, true, true, true]
Each element is boolean: true/false
.map() does not filter out anything, it just transforms each element.
.map() evaluates elm > 20 for each element, producing true or false

:#: const filtered = [10,20,30,40,50,60,70,80].filter(elm => elm > 20);
console.log(filtered); // [30, 40, 50, 60, 70, 80]
🔑 Key Point
.map() → transforms each element into something else → 
always returns same length array
.filter() → removes elements based on condition → length may change
If you wanted only elements greater than 20, you would use .filter():

| Method      | Behavior                                 | Example Output              |
| ----------- | ---------------------------------------- | --------------------------- |
| `.map()`    | transforms each element, keeps length    | `[false, false, true, ...]` |
| `.filter()` | keeps only elements that match condition | `[30, 40, 50, ...]`         |

0:::::::: ------------------->>

console.log([10 , 20 , 30 , 40].map(elem => elem*2));
console.log([10, 20, 30, 40].reduce((acc, val) => acc + val, 2));

// .map() changes each element
// .reduce() combines all elements starting with 2


1::::::::::::::::::: ----------------------->>

| Step | acc (before) | val | acc * val  | acc (after) |
| ---- | ------------ | --- | ---------- | ----------- |
| 1    | 2            | 10  | 2 * 10     | 20          |
| 2    | 20           | 20  | 20 * 20    | 400         |
| 3    | 400          | 30  | 400 * 30   | 12000       |
| 4    | 12000        | 40  | 12000 * 40 | 480000      |

🔍 Step 1: Understand reduce with initial value

Syntax of reduce:

array.reduce((accumulator, currentValue) => { ... }, initialValue)


accumulator (acc) → holds accumulated result

currentValue (val) → current array element

initialValue = 2 → starting point for accumulator



So the correct answer is 480,000 (not 48,000).
console.log([10, 20, 30, 40].reduce((acc, val) => acc * val, 2));
🔍 Step 3: Why not 100 * 2?
Some people think .reduce((acc,val)=>acc*val) = multiply all elements together
 first, then multiply by initial value.
❌ This is wrong!
.reduce applies the function step by step:
((2*10)*20)*30*40

