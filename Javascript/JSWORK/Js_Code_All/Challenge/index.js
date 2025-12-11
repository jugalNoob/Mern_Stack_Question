1️⃣ Using new Date() (Date object)

Creates a Date object representing current date and time.

Provides lots of methods to extract parts.

let now = new Date();
console.log(now);                // full date-time
console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 0-11
console.log(now.getDate());      // day of month
console.log(now.getDay());       // day of week 0-6
console.log(now.getHours());     // hours 0-23
console.log(now.getMinutes());   // minutes 0-59
console.log(now.getSeconds());   // seconds 0-59
console.log(now.getMilliseconds());// 0-999


✅ Most common way.

2️⃣ Using Date.now()

Returns current time in milliseconds since Jan 1, 1970 UTC.

Useful for timestamps and time calculations.

let timestamp = Date.now();
console.log(timestamp);  // e.g., 1739154930123

3️⃣ Using Date.UTC()

Returns milliseconds since Jan 1, 1970 UTC for a specific date.

Month is 0-indexed (Jan=0).

let utc = Date.UTC(2025, 11, 10, 0, 0, 0); // Dec 10, 2025
console.log(utc); // milliseconds

4️⃣ Using toISOString()

Converts a Date object to ISO 8601 string (UTC).

let now = new Date();
console.log(now.toISOString()); // "2025-12-10T02:15:30.123Z"

5️⃣ Using toLocaleString() / toLocaleDateString() / toLocaleTimeString()

Converts Date object to human-readable string based on locale.

let now = new Date();
console.log(now.toLocaleString());      // "12/10/2025, 7:45:30 AM"
console.log(now.toLocaleDateString());  // "12/10/2025"
console.log(now.toLocaleTimeString());  // "7:45:30 AM"

6️⃣ Using getTime()

Returns milliseconds since Jan 1, 1970 from a Date object.

let now = new Date();
console.log(now.getTime());  // same as Date.now()

7️⃣ Using performance timing (high-precision, optional)

For measuring time intervals (not date/time directly).

console.log(performance.now()); // milliseconds since page load
⚡ Summary

new Date() → object with current date/time

Date.now() → milliseconds from 1970 → now


There are essentially 2 main categories:

Date object methods → new Date() + getFullYear(), getHours(), etc.

Timestamps (numbers) → Date.now(), Date.UTC(), getTime()

| Method                      | Returns Type | Usage                          |
| --------------------------- | ------------ | ------------------------------ |
| `new Date()`                | Date object  | Full current date/time         |
| `Date.now()`                | Number       | Current timestamp (ms)         |
| `Date.UTC(year, ...)`       | Number       | Timestamp of specific UTC date |
| `date.toISOString()`        | String       | ISO formatted string           |
| `date.toLocaleString()`     | String       | Human-readable date/time       |
| `date.toLocaleDateString()` | String       | Human-readable date only       |
| `date.toLocaleTimeString()` | String       | Human-readable time only       |
| `date.getTime()`            | Number       | Timestamp (ms) from Date       |





// Want deeper explanation of:

// difference between '', null, undefined, NaN, 0, false

// how equality works (== vs ===)

// tricky interview questions like 0 == '' or null == false ?

// Just say YES.


// 🚀 Want Set-3 (Even more advanced tricky JS) ?

// Includes:

// NaN === NaN

// Object.is()

// 0 == "0"

// 0 == []

// "0" == []

// [] == ![] types explained deeply

// true + true

// {} == {}
// const array=[10  , 20 , 30 , 40]
// console.log(array.slice(0 ,2))
// console.log(array)
// console.log(array.splice(1 ,2 , 'jugal sharma'))
// console.log(array)


// const slowTask = new Promise(res =>
//   setTimeout(() => res("Slow done"), 1000)
// );
// const cancel = new Promise((_, reject) =>
//   setTimeout(() => reject("Cancelled"), 200)
// );
// Promise.allSettled([slowTask, cancel])
//   .then(console.log)
//   .catch(console.log);


// ✅ Your Code
// let data = [9, 3, 1];

// for (let i = 1; i < data.length; i++) {
//     let current = data[i];
//     let j = i - 1;

//     while (j >= 0 && current < data[j]) {
//         data[j + 1] = data[j];
//         j--;
//     }

//     data[j + 1] = current;
// }

// console.log(data); // [1, 3, 9]

// 🔍 Step-by-Step Execution
// Initial Array
// data = [9, 3, 1]

// Outer Loop: for (let i = 1; i < data.length; i++)

// Starts at i = 1 because the first element (index 0) is already considered “sorted”.

// Iteration 1 (i = 1)

// current = data[1] = 3

// j = i - 1 = 0

// While Loop: while (j >= 0 && current < data[j])

// Check: 3 < data[0] = 9 → true

// Shift element:

// data[j + 1] = data[j]; // data[1] = 9


// Array now:

// data = [9, 9, 1]


// Decrement j:

// j--; // j = -1


// Exit while loop because j < 0

// Place current in correct position:

// data[j + 1] = current; // data[0] = 3


// Array now:

// data = [3, 9, 1]


// ✅ First iteration done

// Iteration 2 (i = 2)

// current = data[2] = 1

// j = i - 1 = 1

// While Loop

// Check: 1 < data[1] = 9 → true

// Shift: data[2] = data[1] → data = [3, 9, 9]

// Decrement j = 0

// Check: 1 < data[0] = 3 → true

// Shift: data[1] = data[0] → data = [3, 3, 9]

// Decrement j = -1

// Exit while loop because j < 0

// Place current in correct position:

// data[j + 1] = current; // data[0] = 1


// Array now:

// data = [1, 3, 9]

// 🔑 How It Works Conceptually

// Divide array into “sorted” and “unsorted” parts

// [sorted | unsorted]


// Pick the first element of unsorted (current)

// Compare it backwards with the sorted part

// Shift all sorted elements that are greater than current to the right

// Insert current at the correct position

// Repeat until the unsorted part is empty


// let data=[9 , 3 , 1]


//      data[j+1]=data[j]
//      data[j]=data[j+1]

// data[1] = data[0]; // data[1] becomes 9
// data[0] = data[1]; // data[0] also becomes 9
