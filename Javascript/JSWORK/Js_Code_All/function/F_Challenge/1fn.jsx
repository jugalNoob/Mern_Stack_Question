function allone(a , b){

    return  a + b
}

console.log(allone(10 , 20))
console.log(allone(1 , null))
console.log(allone(1 + true))

console.log(allone(1 + true)) //but true is 1 so answer is 2 cwhy Nan
console.log(allone(1, true));  // 2

⭐ WHY 30?
10 + 20  → 30

Both values are numbers, so normal arithmetic addition happens.

⭐ WHY 1 when doing 1 + null?
Because JavaScript converts null → 0 when doing numeric addition.
So:
1 + null
1 + 0
= 1
🔥 Why does null become 0?
Because JavaScript does Type Coercion.
Rules:
Number(null) → 0
Number(true) → 1
Number(false) → 0
Number("") → 0
Number("10") → 10
Number(undefined) → NaN
So the expression becomes:
1 + Number(null) // 0
= 1
⭐ Quick Examples for clarity
console.log(5 + null);     // 5
console.log(5 + true);     // 6
console.log(5 + false);    // 5
console.log(5 + "5");      // "55"  (string)
console.log(null + null);  // 0
console.log(undefined + 5) // NaN

| Expression | Converted To    | Result |
| ---------- | --------------- | ------ |
| `10 + 20`  | number + number | **30** |
| `1 + null` | null → **0**    | **1**  |

2:::::::::::::::::::::::::::

📌 Why it works: Lexical Scope + Hoisting

✔ Functions in JavaScript form a scope chain.
✔ Inner functions can access variables from outer scopes.
✔ age is a global variable, so dev() can access it.

function ans(){
    dev()
    function dev(){
        console.log(age)
    }
}
var age=10
ans()
execution context step-by-step (Memory phase + Execution phase)


3::: -------------------------->>

function getAge(...age){

    console.log(typeof age)

    console.log(age )

    console.log(age+1)
    
}

getAge(10 , 20 , 30,40)


✅ 1. Why typeof age = "object"?

Because:
...age

rest parameter creates an array.

So here:
age = [10, 20, 30, 40]


And in JavaScript:

typeof array → "object"

Because arrays are objects internally.

✅ 2. Why age = [10, 20, 30, 40]?

You passed 4 arguments, rest parameter packs them into one array.

age = [10, 20, 30, 40]

✅ 3. Why age + 1 gives "401"?

Very simple:

👉 When you do array + number, JavaScript
 converts the array to a string.

Let's see:
[10,20,30,40].toString()
console.log(typeof([10,20,30,40].toString()))

Result:
"10,20,30,40"
Now the + operator with strings means string concatenation.

So:
"10,20,30,40" + 1

Becomes:
"10,20,30,401"

That's exactly what you saw ➜ "401" at the end of your array joining.

4::::::::::::: ---------------------------->>>
✅ Why a is undefined but b becomes global?
function Foo() {
    let a = b = 0;  // ⚠️ tricky line

    a = a + 1;
    console.log(typeof(a)); // number
    return a;
}

console.log(Foo());
console.log(typeof a); // undefined
console.log(typeof b); // number

✅ Explanation
✔ let a = b = 0 is NOT what you think.

It does NOT mean:

let a = 0;
let b = 0;


It actually means:

b = 0;   // assignment WITHOUT var/let/const → becomes GLOBAL
let a = 0;  // block scoped

🧠 JavaScript evaluates assignments right → left

So:

First:
b = 0
→ No let/const/var
→ JavaScript creates a global variable b

Then:
let a = (b = 0)
→ a becomes a function-scoped variable
→ NOT available outside Foo()

🟦 After calling Foo():
a → function-scoped (created with let inside Foo)

So outside Foo:

typeof a  // undefined

b → global (since assigned without let/var/const)

So:

typeof b  // number
🎯 Interview Explanation (short & strong)

let a = b = 0 first assigns 0 to b which becomes a global variable (no let/var).
Then a gets the same value but stays inside function scope.
So a is undefined outside, while b becomes number.

✔ Correct way to declare both variables locally
let a = 0, b = 0;

5:::::::::::::::: ------------------------------------->>

✅ Your Code
function name(){} // function named "name"
let names = name; // assign the SAME function into another variable
console.log(names === name); 

⭐ Output:
true

🧠 WHY is it true?
✔ When you do:
let names = name;


You are not copying the function.
You are assigning the SAME function reference to another variable.
So:
name → points to the function in memory
names → now ALSO points to the SAME function in memory
They are two labels pointing to the same function.
⭐ Visual Diagram

Memory:

   [ Function Object ]  <--- name
                         <--- names


Both variables point to the same location.

So:

names === name   // true


This checks whether both variables point to the same reference → they do.

⭐ Compare with normal values
let a = 10;
let b = a;

console.log(a === b);  // true


Primitive values → copied

But with functions/objects/arrays → reference is copied.

⭐ Example where it becomes false
function name(){}

let names = function name(){};

console.log(names === name); // false

Because now they are two different function objects.

| Statement             | Meaning                           |
| --------------------- | --------------------------------- |
| `let names = name`    | Both point to same function       |
| `names === name`      | true because references are equal |
| Functions are objects | Assigned by reference             |


🚀 Final Summary

    6:::-------------------------::::::::::::::::::::::::::::::::------->>


⭐ Why does greet() work?
Because greet is the variable that actually stores the function.
So this works:
greet();  // prints "Hello"
❗ Why does hello() NOT work? (ReferenceError)
Because hello is NOT created in the outer scope.
In a named function expression:
In a named function expression:
const greet = function hello() { ... }
hello exists ONLY inside the function body (local internal name)
It does NOT become a global variable
It is used mainly for recursion or stack traces
So outside the function:
hello(); 
throws:
ReferenceError: hello is not defined

⭐ Visual Diagram
Outer Scope:
    greet → [function hello]

Inner Function Scope:
    hello → [same function]


hello is not available outside.

🧠 Named Function Expression = Internal name only

Example:

const add = function plus(x, y) {
  return x + y;
};

console.log(add(2, 3)); // ✔ 5
console.log(plus(2, 3)); // ❌ ReferenceError

🆚 Compare with Function Declaration
Function declaration creates a global name:
function hello() {
  console.log("Hello");
}

hello();  // ✔ works


Here hello is hoisted and available everywhere.

🧠 When do we use names inside function expressions?

For recursion:

const countDown = function inner(n) {
  if (n === 0) return;
  console.log(n);
  inner(n - 1); // recursive call using inner name
}

🚀 Final Summary

| Type                                | Syntax                              | Name Available Outside? |
| ----------------------------------- | ----------------------------------- | ----------------------- |
| **Function Expression (named)**     | `const greet = function hello() {}` | ❌ No                    |
| **Function Expression (anonymous)** | `const greet = function() {}`       | ❌ No                    |
| **Function Declaration**            | `function hello(){}`                | ✔ Yes                   |
