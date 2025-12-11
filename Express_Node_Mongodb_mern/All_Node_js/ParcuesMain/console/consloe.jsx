ChatGPT said:

Here is a complete list of all important console methods in Node.js
with short, clear examples — perfect for interviews and practice.

🚀 1. console.log()

Print normal messages.

console.log("Hello World");

🚀 2. console.error()

Print errors in red.

console.error("Something went wrong!");

🚀 3. console.warn()

Print warnings.

console.warn("This is a warning!");

🚀 4. console.info()

Same as log(), used for info messages.

console.info("Server Started");

🚀 5. console.debug()

Debug messages (may not show unless NODE_DEBUG enabled).

console.debug("Debugging info");

🚀 6. console.table()

Display arrays/objects in table format.

console.table([
  { name: "jugal", age: 21 },
  { name: "karan", age: 23 }
]);

🚀 7. console.time() & console.timeEnd()

Measure time taken by code.

console.time("loop");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("loop");

🚀 8. console.count()

Counts how many times it was called.

console.count("click");
console.count("click");
console.count("click");


Output:

click: 1
click: 2
click: 3

🚀 9. console.countReset()

Reset counter.

console.count("hit");
console.count("hit");
console.countReset("hit");
console.count("hit");

🚀 10. console.clear()

Clears the console.

console.clear();

🚀 11. console.assert()

Print only if expression is false.

console.assert(5 > 10, "5 is NOT greater than 10");


If true, nothing prints.

🚀 12. console.dir()

Better object inspection.

const obj = { a: 1, b: { c: 2 } };
console.dir(obj, { depth: 2 });

🚀 13. console.trace()

Prints stack trace.

function test() {
  console.trace("Trace here");
}

test();

🚀 14. console.group() / groupEnd()

Group logs.

console.group("User Info");
console.log("Name: Jugal");
console.log("Age: 21");
console.groupEnd();

🚀 15. console.groupCollapsed()

Same as group but collapsed.

console.groupCollapsed("API Response");
console.log({ success: true, data: [] });
console.groupEnd();

🚀 16. console.log("%s %d", "Age:", 21)

String formatting.

console.log("Name: %s, Age: %d", "Jugal", 21);

🚀 17. console.profile() & profileEnd() (Chrome/Browser mostly)

Used for performance profiling.

🚀 18. console.timeLog()

Log intermediate time.

console.time("process");

setTimeout(() => {
  console.timeLog("process");
  console.timeEnd("process");
}, 1000);

⭐ Full Working Example (everything together)
console.log("log");
console.error("error");
console.warn("warn");
console.info("info");

console.table([{ x: 1 }, { x: 2 }]);

console.time("task");
for (let i = 0; i < 50000; i++) {}
console.timeEnd("task");

console.count("hit");
console.count("hit");
console.countReset("hit");
console.count("hit");

console.assert(false, "This will print");
console.trace("trace");

console.group("User");
console.log("Name: Jugal");
console.log("Age: 21");
console.groupEnd();

✅ Want a PDF of all console methods?
Or want Node.js interview questions on debugging?