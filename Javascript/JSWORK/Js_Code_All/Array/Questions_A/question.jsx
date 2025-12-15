1️⃣ Mutable vs Immutable in Arrays
1. Mutable Methods

Definition: Methods that change the original array.

Effect: Original array is modified in-place.

Old JavaScript methods are mostly mutable.

Examples of mutable methods:


✅ Problem: Sometimes you don’t want to modify the original
 array (e.g., in React state or functional programming).


 2. Immutable Methods (ES2023)

Definition: Methods that do NOT change the original array, but return a new array with the desired change.

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