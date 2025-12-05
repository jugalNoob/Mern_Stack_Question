
🔹 Key ES6 Array Features
const arrays are mutable

Spread/rest operators (...)

Array destructuring

Array.from(), Array.of()

Iterators (keys(), values(), entries())

High-order functions (map(), filter(), reduce(), some(), every())

Flatten arrays with flat()




Sure! Let’s go step by step and explain arrays in ES6, including all the modern features and tricks.

✅ 1. const and let with Arrays

ES6 introduced const and let. Arrays can be mutable even if declared with const.

const arr = [1, 2, 3];
arr.push(4);     // works
arr[0] = 10;     // works
// arr = [5, 6]; // ❌ cannot reassign const

✅ 2. Spread Operator (...)

Used to copy, merge, or expand arrays.

const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]

const copy = [...arr1];
console.log(copy); // [1, 2]

✅ 3. Array Destructuring

Extract elements into variables.

const arr = [10, 20, 30];

const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

// Skip elements
const [first,, third] = arr;
console.log(first, third); // 10 30

// Rest operator
const [head, ...tail] = arr;
console.log(head); // 10
console.log(tail); // [20, 30]

✅ 4. Array.from()

Convert array-like objects (or iterable) into arrays.

const str = "hello";
const chars = Array.from(str);
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // [1, 2, 3]

✅ 5. Array.of()

Creates a new array from arguments.

const arr = Array.of(10, 20, 30);
console.log(arr); // [10, 20, 30]


Difference from new Array(3) → creates empty array of length 3 instead of [3].

✅ 6. find() and findIndex()

find() → returns the first element that matches condition

findIndex() → returns the index of the first match

const arr = [10, 20, 30];

console.log(arr.find(x => x > 15));      // 20
console.log(arr.findIndex(x => x > 15)); // 1

✅ 7. some() and every()

some() → true if any element passes condition

every() → true if all elements pass

const arr = [10, 20, 30];

console.log(arr.some(x => x > 25));  // true
console.log(arr.every(x => x > 5));  // true

✅ 8. map(), filter(), reduce()

map() → transform array

filter() → pick elements by condition

reduce() → aggregate values

const arr = [1, 2, 3, 4];

const squared = arr.map(x => x * x);      // [1, 4, 9, 16]
const even = arr.filter(x => x % 2 === 0);// [2, 4]
const sum = arr.reduce((acc, x) => acc + x, 0); // 10

✅ 9. includes()

Check if an array contains a value.

const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false

✅ 10. fill()

Fill array with static values.

const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // fill from index 1 to 2
console.log(arr);  // [1, 0, 0, 4]

✅ 11. entries(), keys(), values()

Iterators for looping:

const arr = ['a', 'b', 'c'];

for (let [index, value] of arr.entries()) {
  console.log(index, value);
}
// 0 'a'
// 1 'b'
// 2 'c'

console.log([...arr.keys()]);   // [0, 1, 2]
console.log([...arr.values()]); // ['a','b','c']

✅ 12. Flattening Arrays

flat() → flattens nested arrays

const arr = [1, [2, [3, 4]]];
console.log(arr.flat(1)); // [1, 2, [3, 4]]
console.log(arr.flat(2)); // [1, 2, 3, 4]
