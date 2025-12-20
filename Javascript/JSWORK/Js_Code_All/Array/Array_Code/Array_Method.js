


console.log('1'.repeat(100).length);

const data = [10, 20, 30, 40];

data.push(50);     // adds 50 at the end → [10, 20, 30, 40, 50]
data.pop();        // removes last element (50) → [10, 20, 30, 40]
data.unshift(5);   // adds 5 at the start → [5, 10, 20, 30, 40]
data.shift();      // removes first element (5) → [10, 20, 30, 40]
console.log(data);



// --->> Samll vaild of array 
const data = [10, 20, 20, 30, 40];
let io=Array.isArray(data)
console.log(io)


/// Arry convert to string ----------->>

const data = [10, 20, 30, 40];

let arr_str=data.join('  ')

console.log(arr_str)


/// --- >>>>New Mthods flat-------------------------->>>

[1, 2, 3, 4].fill(9)        // [9, 9, 9, 9]  (fills entire array)
[1, 2, 3, 4].fill(5, 2)     // [1, 2, 5, 5]  (fills from index 2 to end)
[1, 2, 3, 4, 5].fill(7, 1, 3) // [1, 7, 7, 4, 5]

🔍 Meaning of fill()

The fill() method in JavaScript replaces elements in an array with a
 specified value, starting from a
 given start index up to (but not including) an end index.

 array.fill(value, start, end)


✅ Your Example

data.fill(0, 1, 4) means:

Fill with 0

Starting from index 1

Up to index 4 (not including 4)

So the positions 1, 2, and 3 become 0.

Result:


2:: --> Flat 

✅ Summary:
👉 flat() converts nested (multi-dimensional) arrays into a flat 1D array.
👉 Use .flat(1) for simple arrays, .flat(Infinity) for deeply nested ones.



✅ Example 1 – 2D Array
const data = [10, [20, 30], [40, 50]];
console.log(data.flat(1));

Output:
[10, 20, 30, 40, 50]
Here, .flat(1) flattens one level deep.


✅ Example 2 – 3D Array
const data = [10, [20, [30, [40]]]];
console.log(data.flat(2));

Output:
[10, 20, 30, [40]]


.flat(2) flattens two levels.

const data = [10, [20, [30, [40]]]];
console.log(data.flat(Infinity));
.flat(Infinity) removes all levels of nesting — gives you a pure 1D array.



| Level   | Code              | Output                 |
| ------- | ----------------- | ---------------------- |
| 2D → 1D | `.flat(1)`        | `[10, 20, 30, 40, 50]` |
| 3D → 1D | `.flat(Infinity)` | `[10, 20, 30, 40, 50]` |




--->>Array copyWithin


const data = [10, 20, 20, 30, 40];

data.copyWithin(0, 3);

console.log(data);

array.copyWithin(target, start, end)

| Parameter            | Meaning                              |
| -------------------- | ------------------------------------ |
| **target**           | Index where copying starts           |
| **start**            | Index to start copying elements from |
| **end** *(optional)* | Index to stop copying (not included) |

🧩 Step-by-step:

data.copyWithin(0, 3) means:

target = 0 → start pasting from index 0

start = 3 → start copying from index 3 (30)

end = data.length (default = 5)

So it copies elements from index 3 → end ([30, 40])
and pastes them starting at index 0.


---- >>At In array 

const data = [10, 20, 20, 30, 40];

console.log(data.at(-1))
// all to access a elemnt in array 
// important at support a nagitvae index 
✅ In short:
at() → safely access array elements, including
 from the end using negative indexes.
💡 Example: array.at(-1) = last element.






// ==========================
// Section 3: Finding
// ==========================
['a', 'b', 'c'].indexOf('b');          // 1
['a', 'b', 'c'].includes('c');         // true


// ==========================
// Section 9: Reversing
// ==========================

1️⃣ reverse()

Mutates the original array.

Reverses elements in-place.

let data = [10, 20, 30, 40];
console.log(data.reverse()); // [40, 30, 20, 10]
console.log(data);           // [40, 30, 20, 10] → original changed



let data = [10, 20, 30, 40];
console.log(data.toReversed()); // [40, 30, 20, 10]
console.log(data);              // [10, 20, 30, 40] → original unchanged


| Feature                | `reverse()`               | `toReversed()` |
| ---------------------- | ------------------------- | -------------- |
| Mutates original array | ✅ Yes                     | ❌ No           |
| Returns a new array    | ❌ No (returns same array) | ✅ Yes          |
| ES version             | Old JS                    | ES2023+        |

[1, 2, 3].reverse();                   // [3,2,1] (modifies)
[1, 2, 3].toReversed();                // [3,2,1] (new array)


// ==========================
// Section 10: Sorting New
// ==========================
1️⃣ sort() (old JS method)
Mutates the original array (in-place).
Default behavior sorts lexicographically (as strings), not numerically.

Returns the same array.
let data = [100, 20, 30, 40];
console.log(data.sort());  // [100, 20, 30, 40] → lexicographical
console.log(data);         // [100, 20, 30, 40] → original changed


2️⃣ toSorted() (ES2023)

Does NOT mutate the original array.

Returns a new sorted array.

Works similarly to sort(), but immutable.

let data = [100, 20, 30, 40];
console.log(data.toSorted((a, b) => a - b)); // [20, 30, 40, 100]
console.log(data);                             // [100, 20, 30, 40] → original unch


:::::::: spliced  and to scliced
now that ES2023 added toSpliced.
let data=[10 , 20 , 30 , 40 , 50]

// Mutable: splice() changes original array
data.splice(0, 1, 'jugal'); // start at index 0, delete 1 element, insert 5
console.log(data);     // [5, 20, 30, 40, 50]




// Immutable: toSpliced() returns new array
let newData = data.toSpliced(0, 4, 5); // start 0, delete 4, insert 5
console.log(newData);  // [5, 50]
console.log(data);     // [5, 20, 30, 40, 50] → original unchanged


5:: -->>With 

let data = [10, 20, 30, 40];

//Not exactly — .with() does not update the original array. ✅
// Key Point:
// .with(index, value) = non-mutating update
// If you want the array to "update", you must assign the result back:
let updated = data.with(1, 99);
console.log(updated); // [10, 99, 30, 40]
console.log(data);    // [10, 20, 30, 40]  (unchanged)