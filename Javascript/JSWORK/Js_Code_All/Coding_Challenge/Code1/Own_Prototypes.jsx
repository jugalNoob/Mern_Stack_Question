Date.prototype.CheckYearklast = () => {
  return this.getFullYear() - 1;
};

let date = new Date();
console.log(date.CheckYearklast());
🔥 One-line Interview Answer

Arrow functions do not have their own this, so they 
#should not be used as prototype methods.


❌ Error / Wrong behavior

this.getFullYear is not a function

🧠 Root Cause (IMPORTANT)

Arrow functions do NOT have their own this

Arrow function takes this from lexical scope

Here, this is NOT the Date instance

In browser → this = window

In Node.js → this = {} (module scope)

So:


:::::::: Very Important in Jvacript ::::::::::::::::::::::::::::::::::::

///Create a custom create  a ProTotype |||||||||||||||||||||||||||||||||||
const one = [10, 20, 30, 40];
console.log(Object.getPrototypeOf(one)); 


Date.prototype.getLastYear = function() {
    return this.getFullYear() - 1; // Get the current year and subtract 1
  };
  
  let date = new Date();
  console.log(date.getLastYear()); // Output: Previous year



  ✅ Your Code
Date.prototype.getLastYear = function() {
  return this.getFullYear() - 1;
};

let date = new Date();
console.log(date.getLastYear());

🔍 What is happening step-by-step?
1️⃣ Date.prototype

Date is a constructor function

All Date objects inherit methods from Date.prototype

When you write:

Date.prototype.getLastYear = function() { ... }


You are:
✅ Adding a custom method
✅ Available to all Date instances

2️⃣ this keyword
return this.getFullYear() - 1;


this refers to the Date instance calling the method

Here:

date.getLastYear()


this === date

3️⃣ Execution flow
let date = new Date();  // current date, e.g. 2025
date.getFullYear();    // 2025
2025 - 1               // 2024

✅ Output
Previous year


Example:

2024

🧠 Interview Explanation (Pro Level)

We extended the built-in Date object by adding a method to its prototype.
This method uses this to access the current Date instance and returns the previous year by subtracting one from getFullYear().

⚠️ Important Interview Discussion
❌ Is modifying built-in prototypes safe?

👉 Generally NO (in production)

Why?

Can cause name collisions

Breaks third-party libraries

Hard to debug

✅ Better Practice (Recommended)
function getLastYear(date) {
  return date.getFullYear() - 1;
}

console.log(getLastYear(new Date()));

✅ OR Using Utility Wrapper
const DateUtils = {
  getLastYear(date) {
    return date.getFullYear() - 1;
  }
};

🔥 Interview Trap Question

Q: Why does this work even though getLastYear isn’t in Date docs?
A: Because JavaScript uses prototype chaining to look up methods.

🧩 Prototype Chain Visualization
date
 ↓
Date.prototype  → getLastYear()
 ↓
Object.prototype
 ↓
null

🚀 Advanced Version (Edge Safe)
Date.prototype.getLastYear = function () {
  if (!(this instanceof Date)) {
    throw new TypeError("Not a Date object");
  }
  return this.getFullYear() - 1;
};

🧠 One-Line Interview Summary

We added a reusable method to Date.prototype, allowing all Date instances to calculate the previous year using prototype inheritance.

If you want next:
🔥 Array.prototype custom methods
🔥 Prototype vs Class
🔥 __proto__ vs prototype
🔥 Polyfill interview questions