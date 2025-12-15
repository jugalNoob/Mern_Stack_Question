🚦 JavaScript Conditional Statements (All Types)
🔹 1. if Statement

Runs a block of code if condition is true.

let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}



🔹 2. if...else

Adds an alternative path if condition is false.

let age = 16;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Too young to vote");
}



🔹 3. if...else if...else

Multiple conditions, executed in order.

let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}



🔹 4. switch Statement

Used when you have multiple exact matches.

let day = 2;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Unknown day");
}



🔹 5. Ternary Operator (?:)

Short-hand for if...else.

let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);



🔹 6. Logical Operators as Conditions

&& (AND) → all conditions must be true

|| (OR) → at least one condition must be true

! (NOT) → inverts the condition



let hasTicket = true;
let hasID = false;

if (hasTicket && hasID) {
  console.log("You can enter");
} else {
  console.log("Entry denied");
}



7. Optional Chaining with Condition

Checks if nested values exist safely.


let user = { profile: { name: "Jugal" } };

if (user?.profile?.name) {
  console.log("Name found:", user.profile.name);
} else {
  console.log("Name not available");
}



🔹 8. Nullish Coalescing (??)

Provides default value if null or undefined.

let input = null;
let result = input ?? "Default value";
console.log(result); // "Default value"




🔹 9. Short-Circuit Evaluation

Uses && or || directly without if.

let isLoggedIn = true;
isLoggedIn && console.log("Welcome back!"); // prints only if true

let username = "";
console.log(username || "Guest"); // "Guest"


🔹 10. try...catch (Error Condition)

Alternative flow when an error occurs.

try {
  let data = JSON.parse('{"name": "Jugal"}');
  console.log(data.name);
} catch (err) {
  console.error("Invalid JSON:", err.message);
}



🔹 11. throw (Custom Condition Error)

Manually raise an error based on condition.

function checkAge(age) {
  if (age < 0) throw new Error("Age cannot be negative");
  if (age < 18) throw new Error("Too young");
  return "Valid age";
}

try {
  console.log(checkAge(16));
} catch (err) {
  console.error("Error:", err.message);
}


🔹 12. Falsy & Truthy Condition

JS treats certain values as false in conditions:
false, 0, "", null, undefined, NaN

let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // runs
}



✅ Summary Table



| Condition Type          | Example Use Case           |       |                    |
| ----------------------- | -------------------------- | ----- | ------------------ |
| `if`                    | Single check               |       |                    |
| `if...else`             | Two-way decision           |       |                    |
| `if...else if...else`   | Multiple branches          |       |                    |
| `switch`                | Exact matches              |       |                    |
| Ternary `?:`            | Short inline check         |       |                    |
| Logical Ops \`&&,       |                            | , !\` | Combine conditions |
| Optional Chaining `?.`  | Safe nested check          |       |                    |
| Nullish Coalescing `??` | Default for null/undefined |       |                    |
| Short-circuiting        | Inline conditions          |       |                    |
| try...catch             | Error handling             |       |                    |
| throw                   | Custom error flow          |       |                    |
| Falsy/Truthy            | Implicit conditions        |       |                    |




