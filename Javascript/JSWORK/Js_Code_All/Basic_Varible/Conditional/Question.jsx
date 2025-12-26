1️⃣ General Operator Questions

Q: What is an operator in JavaScript?
A: A symbol or keyword used to perform operations on values (operands), e.g., arithmetic, comparison, assignment.

Q: How many types of operators are there?
A: 7 main types: Arithmetic, Assignment, Comparison, Logical, Bitwise, String, Ternary/Conditional.

2️⃣ Arithmetic Operators

Q: Name the arithmetic operators in JS.
A: + - * / % ++ --

Q: Difference between ++i and i++?
A: ++i increments before use, i++ increments after use.

3️⃣ Assignment Operators

Q: What are assignment operators?
A: Operators that assign values to variables.

Q: Give examples.
A: =, +=, -=, *=, /=, %=

Q: What does x += 5 do?
A: Adds 5 to x and assigns the result back to x.

4️⃣ Comparison Operators

Q: What are comparison operators?
A: Operators to compare values and return true or false.

Q: Examples?
A: ==, ===, !=, !==, >, <, >=, <=

Q: Difference between == and ===?
A:

== → compares value only (type coercion allowed)

=== → compares value + type (strict)

Q: What is 0 == false?
A: true (coerced to same type)

Q: What is 0 === false?
A: false (different types)

5️⃣ Logical Operators

Q: Name logical operators.
A: && (AND), || (OR), ! (NOT)

Q: What is short-circuit evaluation?
A:

false && anything → returns false immediately

true || anything → returns true immediately

6️⃣ Bitwise Operators

Q: What are bitwise operators?
A: Operators that work on binary representation of numbers.

Q: Examples?
A: & | ^ ~ << >> >>>

Q: When are bitwise operators used?
A: Low-level operations, flags, masks, performance optimization.

7️⃣ String Operators

Q: How do you operate on strings?
A: Using concatenation operators: + and +=

Q: Example trap?

'5' + 2 → '52' (string concatenation)

'5' - 2 → 3 (string converted to number)

8️⃣ Ternary / Conditional Operator

Q: What is the ternary operator?
A: Shortcut for if-else. Syntax:

condition ? valueIfTrue : valueIfFalse


Q: Can it be nested?
A: Yes, but nesting reduces readability.

9️⃣ Type Checking Operators

Q: What does typeof do?
A: Returns the type of a variable as a string: "number", "string", "object", etc.

Q: What does instanceof do?
A: Checks if an object is an instance of a constructor (works only for objects).

Q: Example traps:**

typeof null → "object" (JS bug)

'js' instanceof String → false (primitive string)

new String('js') instanceof String → true

10️⃣ Interview Quick Tips

== vs === → always prefer strict equality

Logical operators short-circuit

Strings are primitive; arrays and objects are reference types

instanceof works only with objects

typeof null → "object" (remember as JS quirk)

Arithmetic operators can behave differently with type coercion

If you want, I can make an even bigger “JavaScript Operators Master Q&A Sheet” covering:

All edge cases

Primitive vs object traps

Coercion examples

Memory behavior