function One(a=10,b=10){
return a+b
}

console.log(One())
console.log(One(1,null))

✅ 2. One(1, null) — Why Output = 1?

Let’s evaluate parameters:

🔹 a = 1

You passed 1 → default not used

🔹 b = null

You passed null, and this is important:

👉 null is NOT undefined
👉 So default parameter (10) is NOT applied.

So:

a = 1
b = null


Now what is:

1 + null

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

👉 When you do array + number, JavaScript converts the array to a string.
Let's see:
[10,20,30,40].toString()


Result:
"10,20,30,40"
Now the + operator with strings means string concatenation.

So:
"10,20,30,40" + 1

Becomes:
"10,20,30,401"

That's exactly what you saw ➜ "401" at the end of your array joining.

4::::::::::::: ---------------------------->>>
function Foo(){
    //     let a, b;
    // a = b = 0;
    let a=b=0
    a=a+1
    return a
}

console.log(Foo())
console.log(typeof a)
console.log(typeof b)

⭐ STEP–BY–STEP EXPLANATION
🔹 1. Inside Foo():
let a = b = 0;


This line does NOT declare b.
JavaScript sees it like this:

b = 0;   // NO let/const/var → becomes GLOBAL variable
let a = 0;  // local inside function Foo

So:
✔ Inside Foo()
a = 0 (local variable)
b = 0 (global variable)

🔹 2. a = a + 1
Local variable a becomes:
0 + 1 = 1


So Foo() returns 1.

🔹 3. After Foo() finishes:
Local variable a disappears (not accessible outside).

Global variable b still exists.
⭐ FINAL OUTPUTS
✔ console.log(Foo())
1

✔ console.log(typeof a)
a was local, so outside it's gone.

Result:

undefined

✔ console.log(typeof b)
b became global, so it still exists.
typeof b → "number"


Because you assigned:

b = 0
So b is:
b → 0 (number)
⭐ Final Output Exactly Matches Yours
1
undefined
number

5:::::::::::::::: ------------------------------------->>


function foo(){}
var bar = foo;

console.log(bar === foo)  // true


var bar=function foo(){}
console.log(foo);


⭐ Why??

This is called a Named Function Expression (NFE).
var bar = function foo() {}

Here:

The name foo is NOT created in the global scope
The name foo exists only inside the function itself, for recursion.

So:
bar → reference to the function
foo → NOT AVAILABLE outside the function

⭐ VISUAL DIAGRAM

Global Scope:
    bar → function foo() {}
    foo → ❌ NOT CREATED in global

Inside the function:
    foo → refers to itself



    6:::-------------------------::::::::::::::::::::::::::::::::------->>


    1️⃣ Function Declaration
✔ Syntax:
function sayHello() {
   console.log("Hello");
}

✔ Key Features:

Hoisted fully → You can call the function before its definition.

Function name is available everywhere in that scope.

Stored in memory during the compile (creation) phase.

✔ Example:
greet(); // works

function greet() {
  console.log("Hello!");
}

Output:
Hello!

📌 How JS sees it (ASCII):
Memory:
  greet → function(){...}

Execution:
  greet()

2️⃣ Function Expression
✔ Syntax:
const greet = function() {
   console.log("Hello");
};

✔ Key Features:

Not hoisted like declarations.

Only the variable greet is hoisted as undefined.

The function is assigned at runtime.

Must be called after the assignment.

✔ Example:
greet();  // ❌ TypeError: greet is not a function

const greet = function() {
  console.log("Hello!");
};

📌 How JS sees it (ASCII):
Memory:
  greet → undefined

Execution:
  greet = function(){...};


So calling before assignment = error.

3️⃣ NFE (Named Function Expression)

A function expression with a self-name.

✔ Syntax:
const greet = function hello() {
  console.log("Hello");
};

✔ Key Features:

Function has an internal name (hello).

hello is only available inside the function, not outside.

Useful for:
✓ recursion
✓ better stack traces

Not hoisted as a function.

✔ Example:
const greet = function hello() {
  console.log("Hello");
};

greet();  // works
hello();  // ❌ ReferenceError

📌 How JS sees it (ASCII):
Outside:
  greet → function hello(){...}
  hello → ❌ NOT AVAILABLE

Inside function:
  hello → refers to itself



    🔥 Super Simple Examples (Side-by-side)
✅ Function Declaration
function add(a, b) {
  return a + b;
}

✅ Function Expression
const add = function(a, b) {
  return a + b;
};

✅ Named Function Expression (NFE)
const add = function sum(a, b) {
  return a + b;
};


| Feature                              | Function Declaration | Function Expression               | NFE                                            |
| ------------------------------------ | -------------------- | --------------------------------- | ---------------------------------------------- |
| **Hoisted?**                         | ✔ Fully hoisted      | ❌ Only variable name hoisted      | ❌ Only variable name hoisted                   |
| **Call before definition?**          | ✔ Yes                | ❌ No                              | ❌ No                                           |
| **Function name available outside?** | ✔ Yes                | ✔ Via variable only               | ❌ Internal name only                           |
| **Good for recursion?**              | ✔ Yes                | ❌ No (unless assigned before use) | ✔ Yes (internal name used)                     |
| **Good for debugging?**              | Medium               | Medium                            | ✔ Best (internal name appears in stack traces) |
