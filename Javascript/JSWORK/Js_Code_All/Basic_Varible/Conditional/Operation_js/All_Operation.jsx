🧠 Simple One-Line Summary (Interview)

JavaScript operations are actions performed on 
values using operators, such as arithmetic, logical,
 comparison, assignment, and type operations.


 If you want next:
✅ Operator precedence table
✅ Unary vs Binary vs Ternary difference
✅ Most confusing operators explained
✅ Real interview MCQs

Just say next 🔥

✅ Types of Operations in JavaScript (Simple + Interview-Ready)

In JavaScript, operations are actions performed on values using operators.

1️⃣ Arithmetic Operations

Used for mathematical calculations.


| Operator | Example  | Result |
| -------- | -------- | ------ |
| `+`      | `10 + 5` | `15`   |
| `-`      | `10 - 5` | `5`    |
| `*`      | `10 * 5` | `50`   |
| `/`      | `10 / 5` | `2`    |
| `%`      | `10 % 3` | `1`    |
| `**`     | `2 ** 3` | `8`    |


2️⃣ Assignment Operations

Used to assign values to variables.


| Operator | Example  |
| -------- | -------- |
| `=`      | `x = 10` |
| `+=`     | `x += 5` |
| `-=`     | `x -= 2` |
| `*=`     | `x *= 3` |
| `/=`     | `x /= 2` |



3️⃣ Comparison Operations

Used to compare two values (returns true or false).


| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Equal (with coercion) |
| `===`    | Strict equal          |
| `!=`     | Not equal             |
| `!==`    | Strict not equal      |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater or equal      |
| `<=`     | Less or equal         |



4️⃣ Logical Operations

Used to combine conditions.

Operator

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |



5️⃣ Unary Operations

Work on one operand.

Operator

| Operator | Example     |
| -------- | ----------- |
| `typeof` | `typeof 10` |
| `!`      | `!true`     |
| `++`     | `x++`       |
| `--`     | `x--`       |
| `+`      | `+"10"`     |



6️⃣ Bitwise Operations

Operate on binary representations.

| Operator | Meaning     |    |
| -------- | ----------- | -- |
| `&`      | AND         |    |
| `        | `           | OR |
| `^`      | XOR         |    |
| `<<`     | Left shift  |    |
| `>>`     | Right shift |    |


7️⃣ String Operations

Used for string manipulation

| Operator | Example        |
| -------- | -------------- |
| `+`      | `"Hi" + " JS"` |
| `+=`     | `str += "!"`   |




8️⃣ Ternary (Conditional) Operation

Short form of if-else.

condition ? value1 : value2

9️⃣ Type Operations



| Operator     | Example               |
| ------------ | --------------------- |
| `typeof`     | `typeof []`           |
| `instanceof` | `[] instanceof Array` |


9️⃣ Type Operations

Used to check or convert types.


| Operator     | Example               |
| ------------ | --------------------- |
| `typeof`     | `typeof []`           |
| `instanceof` | `[] instanceof Array` |




🔟 Special Operations

Less common but important.

| Operator | Example          |
| -------- | ---------------- |
| `delete` | `delete obj.key` |
| `in`     | `"name" in obj`  |
| `new`    | `new Date()`     |
| `void`   | `void 0`         |
| `,`      | `(1,2,3)`        |



1️⃣ What is an Operator in JS?

Q: What is an operator in JavaScript?
A: An operator is a special symbol or keyword used to perform operations on values (operands), such as arithmetic, comparison, logical, or assignment.

Q: How many types of operators are there?
A: 7 main types:

Arithmetic

Assignment

Comparison

Logical

Bitwise

String

Ternary / Conditional

2️⃣ Arithmetic Operators

Q: What are arithmetic operators?
A: Operators used to perform mathematical operations.

Common ones:

+ addition

- subtraction

* multiplication

/ division

% remainder

++ increment

-- decrement

Interview tip:

++ vs -- can be prefix or postfix, affecting evaluation order.

3️⃣ Assignment Operators

Q: What are assignment operators?
A: Operators used to assign values to variables.

Common ones:

= simple assignment

+= add and assign

-= subtract and assign

*= multiply and assign

/= divide and assign

Example:

x += 5 → same as x = x + 5

4️⃣ Comparison Operators

Q: What are comparison operators?
A: Operators used to compare two values and return true/false.

Common ones:

== equal (value, ignores type)

=== strict equal (value + type)

!= not equal (ignores type)

!== strict not equal

> greater than

< less than

>= greater than or equal

<= less than or equal

Interview trap:

0 == false → true (type coercion)

0 === false → false (strict, no coercion)

5️⃣ Logical Operators

Q: What are logical operators?
A: Used to combine or invert boolean values.

&& → AND (true if both true)

|| → OR (true if one is true)

! → NOT (invert boolean)

Interview tip:

Short-circuit evaluation:

false && anything → returns false immediately

true || anything → returns true immediately

6️⃣ Bitwise Operators

Q: What are bitwise operators?
A: Operate at binary level on numbers.

& AND

| OR

^ XOR

~ NOT

<< left shift

>> right shift

>>> zero-fill right shift

Interview tip:

Rarely used, but can optimize some performance-critical code

7️⃣ String Operators

Q: How do you operate on strings?
A: Strings mainly use concatenation operator:

+ → joins strings

+= → append string to existing variable

Interview trap:

"5" + 2 → "52" (string concatenation)

"5" - 2 → 3 (string converted to number)

8️⃣ Ternary / Conditional Operator

Q: What is the ternary operator?
A: A shortcut for if-else. Syntax:

condition ? valueIfTrue : valueIfFalse


Interview tip:

Always returns a value

Can be nested but avoid for readability

9️⃣ Typeof & instanceof Operators

Q: What is typeof?
A: Returns a string indicating the type of a variable (number, string, object, function, etc.)

Q: What is instanceof?
A: Checks if an object is derived from a constructor (object instanceof Constructor)

🔟 Interview Summary Table

| Operator Type | Example                   | Returns / Use       |                 |         |
| ------------- | ------------------------- | ------------------- | --------------- | ------- |
| Arithmetic    | `+ - * / % ++ --`         | Number              |                 |         |
| Assignment    | `= += -= *= /=`           | Assign values       |                 |         |
| Comparison    | `== === != !== > < >= <=` | Boolean             |                 |         |
| Logical       | `&&                       |                     | !`              | Boolean |
| Bitwise       | `&                        | ^ ~ << >> >>>`      | Number (binary) |         |
| String        | `+`                       | Concatenate strings |                 |         |
| Ternary       | `cond ? a : b`            | Conditional value   |                 |         |
| Type Checking | `typeof`, `instanceof`    | Type info           |                 |         |
