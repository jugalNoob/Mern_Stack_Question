| Scope Type   | Declared By                       | Access Area       | Example Keyword       |
| ------------ | --------------------------------- | ----------------- | --------------------- |
| **Global**   | Outside all blocks                | Everywhere        | `var`, `let`, `const` |
| **Function** | Inside function                   | Function only     | `var`, `let`, `const` |
| **Block**    | Inside `{}` block                 | That block        | `let`, `const`        |
| **Module**   | Inside ES module                  | That module       | `import/export`       |
| **Lexical**  | Nested function uses parent scope | Nested functions  | —                     |
| **Closure**  | Function retains outer scope      | After parent ends | —                     |
| **Script**   | Global `<script>` (browser)       | `window` scope    | `var` 


| Scope Type | Declared With            | Accessible Area | Example               |
| ---------- | ------------------------ | --------------- | --------------------- |
| Global     | var, let, const          | Entire code     | Outside all blocks    |
| Function   | var, let, const          | Inside function | `function demo(){}`   |
| Block      | let, const               | Inside `{}`     | `if(){}` / `for(){}`  |
| Lexical    | Function inside function | Parent scope    | Nested functions      |
| Closure    | Returned inner function  | Outer variables | `return function(){}` |
| Module     | import/export            | Only in module  | ES6 modules           |
| Script     | var                      | window/global   | `<script>` browser    |



|
🧭 1. Global Scope

👉 Scope in JavaScript means where a variable or function is accessible in your code.

It decides the visibility and lifetime of variables — whether they can be used inside a block, function, or everywhere.

Example:

Here’s a complete JavaScript Scope — Question & Answer set 💡
(Covers all levels: basic ➜ intermediate ➜ advanced, with examples for interviews)

🧭 1. What is Scope in JavaScript?

Answer:
Scope determines where a variable or function is accessible in your code.
It defines the visibility and lifetime of variables.

Example:

let a = 10;
function test() {
  let b = 20;
  console.log(a); // ✅ Accessible
  console.log(b); // ✅ Accessible
}
console.log(b); // ❌ Not defined

🌍 2. What is Global Scope?

Answer:
Variables declared outside any function or block are globally scoped and
 can be accessed from anywhere.

Example:

var globalVar = "Hello";
function show() {
  console.log(globalVar);
}
show(); // ✅ Hello

🏠 3. What is Function Scope?

Answer:
Variables declared inside a function are accessible only within that function.

Example:

function greet() {
  var name = "Jugal";
  console.log(name); // ✅ Accessible
}
greet();
console.log(name); // ❌ Error

🔒 4. What is Block Scope?

Answer:
Variables declared with let or const are restricted to the block {} where they are defined.

Example:

{
  let x = 5;
  const y = 10;
}
console.log(x); // ❌ ReferenceError



| Keyword   | Scope Type         | Re-declaration | Re-assignment | Hoisting |
| --------- | ------------------ | -------------- | ------------- | -------- |
| **var**   | Function or Global | ✅ Yes          | ✅ Yes         | ✅ Yes    |
| **let**   | Block              | ❌ No           | ✅ Yes         | ❌ (TDZ)  |
| **const** | Block              | ❌ No           | ❌ No          | ❌ (TDZ)  |


🧩 6. What is Lexical Scope?

Answer:
Lexical scope means inner functions can access variables from outer functions, based on where functions are written, not where they’re called.

Example:

function outer() {
  let name = "Lexical";
  function inner() {
    console.log(name);
  }
  inner();
}
outer(); // ✅ "Lexical"

🧠 7. What is Closure Scope?

Answer:
A closure is created when a function remembers variables from its outer scope even after the outer function has finished executing.

Example:

function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const add = counter();
add(); // 1
add(); // 2


🧠 Closure = Function + Lexical Scope.

📦 8. What is Module Scope (ES6)?

Answer:
Each JavaScript module (.mjs or with type="module") has its own private scope.
Variables are not global unless exported.

Example:

// file1.mjs
const secret = "hidden";
export const name = "Jugal";

// file2.mjs
import { name } from "./file1.mjs";
console.log(name); // ✅
console.log(secret); // ❌

🌐 9. What is Script Scope?

Answer:
When you use normal <script> tags (not modules), the top-level
 variables become properties of the global window object.

Example:

<script>
  var x = 10;
  console.log(window.x); // ✅ 10
</script>

🔗 10. What is the Scope Chain?

Answer:
When a variable is accessed, JavaScript looks:

In the local scope

In the outer (lexical) scope

In the global scope

Example:

let a = 1;
function outer() {
  let b = 2;
  function inner() {
    let c = 3;
    console.log(a, b, c); // ✅ 1, 2, 3
  }
  inner();
}
outer();


🧠 If variable not found in any scope, JS throws ReferenceError.

🧩 11. What is the Temporal Dead Zone (TDZ)?

Answer:
It’s the period between when a variable is declared and initialized with let or const, and when it becomes accessible.

Example:

console.log(a); // ❌ ReferenceError
let a = 5;

🧮 12. What happens if you declare a variable without var, let, or const?

Answer:
In non–strict mode, it becomes global automatically.
In strict mode, it throws an error.

function test() {
  x = 10; // ❌ Bad practice
}
test();
console.log(x); // ✅ Works (global)

💬 13. Can two functions have the same variable names?

Answer:
Yes, because each function has its own scope.

function f1() {
  let x = 10;
  console.log(x);
}
function f2() {
  let x = 20;
  console.log(x);
}
f1(); // 10
f2(); // 20

⚡ 14. What is Shadowing in JavaScript?

Answer:
When a variable in a local scope has the same name as a variable in an outer scope, it “shadows” (overrides) the outer variable within that scope.

let x = 10;
function demo() {
  let x = 20; // shadows outer x
  console.log(x); // 20
}
demo();
console.log(x); // 10

🔁 15. What is Hoisting in relation to scope?

Answer:
Variable and function declarations are moved (hoisted) to the top of their scope before execution.

console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;


🧠 var is hoisted but initialized with undefined;
let and const are hoisted but remain in the TDZ until initialized.