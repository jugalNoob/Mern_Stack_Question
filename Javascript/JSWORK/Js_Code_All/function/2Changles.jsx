

//////////////// ---->Important ------------------------------------>>
💡 Definition:

A pure function is a function that:

Always gives the same output for the same input

Does not change anything outside itself (no side effects)

✅ Example — Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (same input → same output)


🧠 Why it’s pure:

It doesn’t depend on any external variable.

It doesn’t modify anything outside.

Always predictable.



❌ Example — Impure Function
let num = 10;

function addImpure(a) {
  return a + num; // depends on external variable
}

console.log(addImpure(5)); // 15
num = 20;
console.log(addImpure(5)); // 25 (same input → different output ❌)

🧠 Why impure:

Depends on global variable num

Output changes if global variable changes


let bonus = 10;

function add(a, b) {
  return a + b + bonus;  // depends on external variable ❌
}



✅ Summary ---------------->?>


| Concept                                       | Rule         |
| --------------------------------------------- | ------------ |
| Same input → same output                      | ✅ pure       |
| Different input → different output            | ✅ still pure |
| Uses or modifies global data                  | ❌ impure     |
| Causes side effects (console, API, DOM, etc.) | ❌ impure     |




------------->>⚖️ Difference Summary
funcs() 

function funcs(){ console.log('jugal sharma') } 

🧠 Step-by-Step Execution
1️⃣ funcs() → ✅ Works

Because funcs is a function declaration,
and declarations are hoisted completely to the top of their scope.

So JS engine internally sees it as:

one() 
const one=()=>console.log('karan')//hosting how differrnt
So JS engine internally sees it as:

function funcs() {
  console.log('jugal sharma');
}
funcs();


✅ Output:

jugal sharma

2️⃣ one() → ❌ Error

Because one is a const variable holding an arrow function (function expression).

Function expressions are not hoisted like declarations.
Only the variable name one is hoisted (in a “temporal dead zone”) —
the function body is not yet assigned when one() runs.

So this line:

one();


causes:

ReferenceError: Cannot access 'one' before initialization

⚖️ Difference Summary

| Type                     | Example                    | Hoisted?                      | Can Call Before Defined? | Explanation                          |
| ------------------------ | -------------------------- | ----------------------------- | ------------------------ | ------------------------------------ |
| **Function Declaration** | `function fn() {}`         | ✅ Fully hoisted               | ✅ Yes                    | Function is defined before execution |
| **Function Expression**  | `const fn = function() {}` | 🚫 Only variable name hoisted | ❌ No                     | Function assigned later              |
| **Arrow Function**       | `const fn = () => {}`      | 🚫 Only variable name hoisted | ❌ No                     | Same as function expression          |


🧠 In Short:

Function declarations → fully hoisted

Function expressions / arrow functions → partially hoisted (variable only, not value)

