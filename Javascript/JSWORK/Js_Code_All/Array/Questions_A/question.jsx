❓ What is mutation in an array?


Array mutation means changing the original array 
directly instead of creating a new one.

🧠 Common mutating array methods

push()

pop()

shift()

unshift()

splice()

sort()

reverse()

🧠 Common non-mutating methods

map()

filter()

reduce()

slice()

concat()

🏁 One-line recap

Mutation changes the original array in memory.



❓ What is the meaning of Sparse Array?

A sparse array is an array where some
 indexes have no values (empty slots).

 🧠 Key points

Missing indexes are called holes

length becomes highest index + 1

Common in JavaScript arrays


Q what is main of slice ?

slice() returns a new array containing selected 
elements and does not modify the original array.

let arr = [1, 2, 3, 4, 5];

arr.slice(1, 4); // [2, 3, 4]





❓ What is the meaning of Polyfill?

A polyfill is code that provides modern JavaScript
 features in older browsers that don’t support them.


Q what is main pop push shift and unsfit ?

ush, Pop, Shift, Unshift are array methods used to add or remove elements.

👉 One-line answers (Interview ready):

push() → adds element(s) to the end of the array

pop() → removes the last element from the array

unshift() → adds element(s) to the start of the array

shift() → removes the first element from the array



Q why length start 1 ?

📌 Core rule

👉 Index starts from 0
👉 Length starts from 1

Because counting starts from 1 but indexing starts from 0.


Q what is main of index array ?

Index in an array is the zero-based position 
used to identify and access elements.

Q why index strat zero ?

Array index starts from zero because it simplifies memory
 address calculation and improves performance.



1️⃣ Mutable vs Immutable in Arrays
1. Mutable Methods

Definition: Methods that change the original array.

Effect: Original array is modified in-place.

Old JavaScript methods are mostly mutable.

Examples of mutable methods:


✅ Problem: Sometimes you don’t want to modify the original
 array (e.g., in React state or functional programming).


 2. Immutable Methods (ES2023)

Definition: Methods that do NOT change the original array
, but return a new array with the desired change.

Effect: Original array remains unchanged.

New ES2023 methods for immutable array operations:

toReversed() → reverses array without mutating

toSorted() → sorts array without mutating

toSpliced() → removes/replaces elements without mutating

with() → replaces a value at index without mutating


3️⃣ Key Differences: Mutable vs Immutable

| Feature                 | Mutable (old)                                        | Immutable (ES2023)                                         |
| ----------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| Changes original array? | ✅ Yes                                                | ❌ No                                                       |
| Returns a new array?    | ❌ Usually                                            | ✅ Yes                                                      |
| Examples                | `reverse()`, `sort()`, `splice()`, `push()`, `pop()` | `toReversed()`, `toSorted()`, `toSpliced()`, `with()`      |
| Use case                | When you **want to update array in-place**           | When you **want immutability**, safer for state management |
| Side effects            | Can cause bugs if array shared                       | No side effects                                            |



// Dense vs Sparse arrays
// How JS stores arrays internally



1. data[0] → First element

JavaScript arrays are 0-indexed.

Index: 0   1   2   3   4
Value: 10  20  30  40  50


2. data.length → total elements

Length counts number of items, not highest index.

Length = 5
Highest index = 4