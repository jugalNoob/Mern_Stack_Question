✅ Summary (Most Important for Interviews)

| Feature             | Example                                            |
| ------------------- | -------------------------------------------------- |
| Integers & Floats   | `10`, `3.14`                                       |
| Scientific Notation | `5e3` → `5000`                                     |
| Special values      | `NaN`, `Infinity`, `-Infinity`                     |
| Number Properties   | `MAX_SAFE_INTEGER`, `MIN_VALUE`                    |
| Number Methods      | `.toFixed()`, `.toPrecision()`, `.toExponential()` |
| Conversion          | `Number()`, `parseInt()`, `parseFloat()`           |
| Math Rounding       | `Math.round()`, `Math.floor()`, `Math.ceil()`      |
| BigInt              | `1234567890123456789n`                             |



🔢 JavaScript Numbers
🔹 1. Number Types
let x = 100;       // Integer
let y = 3.14;      // Floating point
let z = 5e3;       // Scientific (5000)
let n = 5e-3;      // Scientific (0.005)

🔹 2. Special Numeric Values
console.log(1 / 0);      // Infinity
console.log(-1 / 0);     // -Infinity
console.log("abc" * 2);  // NaN (Not a Number)

console.log(NaN === NaN);  // false
console.log(Number.isNaN(NaN)); // true

🔹 3. Number Properties
console.log(Number.MAX_VALUE);      // Largest possible number
console.log(Number.MIN_VALUE);      // Smallest possible number > 0
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

🔹 4. Number Methods
let num = 123.456;

console.log(num.toString());     // "123.456"
console.log(num.toExponential(2)); // "1.23e+2"
console.log(num.toFixed(2));     // "123.46" (rounds to 2 decimals)
console.log(num.toPrecision(4)); // "123.5" (total digits)
console.log(Number.isInteger(123)); // true
console.log(Number.isFinite(1/0));  // false

🔹 5. Conversion
console.log(Number("123"));      // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

console.log(+ "42");             // 42 (unary + operator)

🔹 6. Math with Numbers
console.log(0.1 + 0.2);    // 0.30000000000000004 (precision issue)
console.log((0.1 + 0.2).toFixed(2)); // "0.30"

console.log(Math.round(4.7));  // 5
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.1));   // 5
console.log(Math.trunc(4.9));  // 4

🔹 7. BigInt (for huge integers)

👉 Introduced in ES2020 for numbers bigger than MAX_SAFE_INTEGER.

let big = 123456789012345678901234567890n;
console.log(big + 10n);  // Works fine
// console.log(big + 10); // ❌ Error (mixing BigInt and Number)