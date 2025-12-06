🔥 SET–11: Array Methods — Real Interview Traps

Covers:

map, filter, reduce advanced

every(), some(), find(), sort() traps

Weird behavior with empty slots

Deep array questions

Example Q:

console.log([1, 2, 3].map(() => {})); // ?


❓ Q3: sort() trap
console.log([10,2,1,20].sort()); 

✅ Output
[1,10,2,20]


💡 Why?

Default sort → string comparison

Use compare function to fix:

arr.sort((a,b) => a-b);


❓ Q2: Empty slots
const arr = [1,,3];
console.log(arr.map(x => 2*x)); // ?

✅ Output
[2, , 6]


💡 Why?

Empty slots are skipped in map()




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




1️⃣ map vs forEach vs filter traps
const arr = [1,2,3,4];

const res1 = arr.map(x => x*2);   
const res2 = arr.forEach(x => x*2); 
const res3 = arr.filter(x => x*2);

console.log(res1); // ?
console.log(res2); // ?
console.log(res3); // ?

✅ Answer
[2,4,6,8]
undefined
[1,2,3,4]


💡 Why?

map() → returns new array

forEach() → returns undefined

filter() → returns array of elements where callback is truthy → all numbers are truthy

2️⃣ Sparse Arrays / Empty slots
const arr = [1,,3];
console.log(arr.map(x => 2*x)); // ?
console.log(arr.filter(x => true)); // ?

✅ Output
[2, , 6]
[1, 3]


💡 Why?

map() → keeps empty slots

filter() → skips empty slots

3️⃣ sort() default behavior
console.log([10,2,1,20].sort());

✅ Output
[1,10,2,20]


💡 Why?

Default sort → string comparison

To sort numerically:

arr.sort((a,b) => a-b);

4️⃣ reverse() mutates array
const arr = [1,2,3];
const rev = arr.reverse();
console.log(arr);
console.log(rev);

✅ Output
[3,2,1]
[3,2,1]


💡 Why?

reverse() mutates original array

Both arr and rev reference the same array

5️⃣ slice vs splice
const arr = [1,2,3,4,5];

console.log(arr.slice(1,3)); // ?
console.log(arr);            // ?

console.log(arr.splice(1,3)); // ?
console.log(arr);             // ?

✅ Output
[2,3]
[1,2,3,4,5]
[2,3,4]
[1,5]


💡 Why?

slice() → returns new array, does not mutate

splice() → mutates original array

6️⃣ Array.from and length traps
console.log(Array.from("abc")); // ?
console.log(Array.from({length:3}, (_,i)=>i)); // ?

✅ Output
["a","b","c"]
[0,1,2]


💡 Why?

Array.from → converts iterable or array-like object to array

7️⃣ Empty slots + join
const arr = [1,,3];
console.log(arr.join('-')); 

✅ Output
1--3


💡 Why?

Empty slots are treated as empty string during join

8️⃣ delete in arrays
const arr = [1,2,3];
delete arr[1];
console.log(arr);  
console.log(arr.length);

✅ Output
[1, , 3]
3


💡 Why?

delete removes value, does not shift elements

Length stays the same

9️⃣ concat + nested arrays
const arr = [1,2];
console.log(arr.concat([3,[4,5]]));

✅ Output
[1,2,3,[4,5]]


💡 Why?

concat() does not flatten nested arrays

Use flat() to flatten

1️⃣0️⃣ map + async functions
const arr = [1,2,3];

const res = arr.map(async x => x*2);
console.log(res); 

✅ Output
[Promise, Promise, Promise]


💡 Why?

map() does not await async functions

To get results:

await Promise.all(arr.map(async x => x*2));

✅ Quick Bonus Traps

[...new Set([1,2,2,3])] → [1,2,3] (removes duplicates)

[1,2,3].fill(0,1,3) → [1,0,0] (fill partial array)

[1,2,3].includes(2) → true

["1","2","10"].sort() → ["1","10","2"] (string sort!)