// ==========================
// Section 1: Higher-Order Functions
// ==========================

// map → creates new array by transforming each element
[1, 2, 3].map(n => n * 2);            // [2, 4, 6]

// filter → creates new array with elements passing condition
[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// reduce → reduces array to a single value
[1, 2, 3, 4].reduce((acc, n) => acc + n, 0); // 10

// forEach → loops through array (no return)
[1, 2, 3].forEach(n => console.log(n * 2));

// find → returns first element matching condition
[5, 10, 15].find(n => n > 7);          // 10

// findIndex → returns index of first match
[5, 10, 15].findIndex(n => n > 7);     // 1

// some → true if at least one matches
[1, 2, 3].some(n => n > 2);            // true

// every → true if all match
[2, 4, 6].every(n => n % 2 === 0);     // true

// flatMap → map + flatten one level
[1, 2, 3].flatMap(n => [n, n * 2]);    // [1,2,2,4,3,6]

// sort → in-place sort
[3, 1, 2].sort((a, b) => a - b);       // [1, 2, 3]

// concat → merges arrays (no modify)
[1, 2].concat([3, 4]);                 // [1,2,3,4]

// slice → returns a portion (no modify)
[1, 2, 3, 4].slice(1, 3);              // [2,3]

// splice → add/remove/replace (modifies original)
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99);                  // [1, 99, 4]