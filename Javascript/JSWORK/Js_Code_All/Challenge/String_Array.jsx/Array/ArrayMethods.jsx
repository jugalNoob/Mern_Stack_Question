0::::::::::::::::::::: ------------------>>

let data = [1, 2, 3, 4, 5];
let result = data
  .map(x => x * 2)       // [2, 4, 6, 8, 10]
  .filter(x => x > 5);   // [6, 8, 10]

console.log(result);

let users = [
  { name: "A", age: 10 },
  { name: "B", age: 20 },
  { name: "C", age: 30 }
];

let result = users
  .filter(u => u.age > 15)       // users above 15
  .map(u => u.name)              // return names
  .sort();                       // sort alphabetically

console.log(result);


🎯 SUPER SIMPLE DEFINITION
**Chaining = map → filter → reduce → map → filter …

Because each step returns a new value that the next step can use.**
🚀 Why chaining works?
Because methods like:
map() → returns array
filter() → returns array
slice() → returns array
concat() → returns array
flat() → returns array
➡️ These can chain.

00000000 :::::::::::::::::: ------------------------------>>
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

