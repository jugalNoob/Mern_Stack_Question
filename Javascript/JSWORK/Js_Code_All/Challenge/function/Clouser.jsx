🟩 SET–6: Closures, Scope, Hoisting — MOST TRICKY 
INTERVIEW QUESTIONS
❓ Q1: What will be the output?
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}
test();

✅ Answer
undefined

💡 Why?

var x is hoisted inside the function

Code becomes:

function test() {
  var x;        // hoisted
  console.log(x); // undefined
  x = 20;
}

❓ Q2: What’s the output?
let x = 10;

function test() {
  console.log(x);
  let x = 20;
}
test();

❌❌ ERROR
ReferenceError: Cannot access 'x' before initialization

💡 Why?

let variables exist in Temporal Dead Zone (TDZ) until initialized.

❓ Q3: Closure Output
function outer() {
  let x = 5;
  return function () {
    console.log(x++);
  };
}

const fn = outer();
fn();
fn();
fn();

✅ Answer
5
6
7

💡 Why?

Inner function remembers the original scope

Closure stores x even after outer() finishes

❓ Q4: Loop with var vs let
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}

❗ Wrong output
4
4
4


Because var shares the same function scope.

✔ Correct using let:
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}


Output:

1
2
3

❓ Q5: Function Hoisting Trick
foo();
bar();

function foo() {
  console.log("A");
}

var bar = function () {
  console.log("B");
};

Output:
A
TypeError: bar is not a function

Why?

Function declarations are hoisted fully

Function expressions → variable hoisted, value NOT hoisted

🟦 Want more closure questions? (if yes → "More closures")