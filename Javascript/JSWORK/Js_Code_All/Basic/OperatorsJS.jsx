JS Operators
JS Assignment
JS Arithmetic
JS Comparison
JS Logical Operators
JS Bitwise Operators
JS Operator Reference
JS Operator Precedence


⚡ JavaScript Operators (All Types)

Operators = symbols that perform operations on values or variables.

🔹 1. Arithmetic Operators

Used for math operations.

let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)

🔹 2. Assignment Operators

Assign values (with shortcuts).

let x = 5;

x += 3;  // 8
x -= 2;  // 6
x *= 4;  // 24
x /= 6;  // 4
x %= 3;  // 1
x **= 2; // 1

🔹 3. Comparison Operators

Used in conditions → return true or false.

let a = 5, b = "5";

console.log(a == b);   // true  (loose equality - type conversion)
console.log(a === b);  // false (strict equality - no conversion)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 3);    // true
console.log(a < 10);   // true
console.log(a >= 5);   // true
console.log(a <= 4);   // false


⚠️ Best practice: Use === and !== (strict checks).

🔹 4. Logical Operators

Combine multiple conditions.

let isLoggedIn = true, isAdmin = false;

console.log(isLoggedIn && isAdmin); // false (AND)
console.log(isLoggedIn || isAdmin); // true  (OR)
console.log(!isLoggedIn);           // false (NOT)

🔹 5. Unary Operators

Work on a single operand.

let x = 5;

console.log(+x);   // 5 (unary plus)
console.log(-x);   // -5 (unary minus)
console.log(++x);  // 6 (pre-increment)
console.log(x++);  // 6 (post-increment, then x=7)
console.log(--x);  // 6 (pre-decrement)
console.log(x--);  // 6 (post-decrement, then x=5)

console.log(typeof x); // "number"
console.log(delete x); // true (delete property in object, not variable)

🔹 6. Bitwise Operators

Work on binary bits. Rare but useful.

let a = 5, b = 1;  // (binary: 101 and 001)

console.log(a & b);  // 1  (AND)
console.log(a | b);  // 5  (OR)
console.log(a ^ b);  // 4  (XOR)
console.log(~a);     // -6 (NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2  (Right shift)

🔹 7. Conditional (Ternary) Operator

Short-hand if...else.

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

🔹 8. Type Operators
console.log(typeof "hello"); // "string"

let arr = [];
console.log(arr instanceof Array); // true

🔹 9. String Operators
let first = "Hello", second = "World";

console.log(first + " " + second); // "Hello World"
console.log("Hi".repeat(3));       // "HiHiHi"

🔹 10. Nullish Coalescing (??)

Provides default only for null or undefined.

let user;
console.log(user ?? "Guest"); // "Guest"

🔹 11. Optional Chaining (?.)

Avoids errors when accessing deep properties.

let user = { profile: { name: "Jugal" } };
console.log(user?.profile?.name); // "Jugal"
console.log(user?.address?.city); // undefined (instead of error)

🔹 12. Comma Operator (,)

Evaluates multiple expressions, returns last.

let x = (2, 3, 4);
console.log(x); // 4

🔹 13. Spread & Rest Operators (...)
Spread (expands values)
let nums = [1, 2, 3];
console.log(...nums); // 1 2 3

Rest (collects values)
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

🔹 14. Destructuring with =
let [a, b = 10] = [5];
console.log(a, b); // 5, 10



| Type              | Operators                 |                  |     |
| ----------------- | ------------------------- | ---------------- | --- |
| Arithmetic        | `+ - * / % **`            |                  |     |
| Assignment        | `= += -= *= /= %= **=`    |                  |     |
| Comparison        | `== != === !== > < >= <=` |                  |     |
| Logical           | \`&&                      |                  | !\` |
| Unary             | `+ - ++ -- typeof delete` |                  |     |
| Bitwise           | \`&                       | ^ \~ << >> >>>\` |     |
| Conditional       | `?:`                      |                  |     |
| Type              | `typeof`, `instanceof`    |                  |     |
| String            | `+`, `.repeat()`          |                  |     |
| Nullish           | `??`                      |                  |     |
| Optional Chaining | `?.`                      |                  |     |
| Comma             | `,`                       |                  |     |
| Spread/Rest       | `...`                     |                  |     |
