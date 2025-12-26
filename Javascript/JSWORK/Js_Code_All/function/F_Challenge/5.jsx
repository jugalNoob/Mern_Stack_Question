var bar=function foo(){}
console.log(bar === foo)

2️⃣ What’s happening here

You created a function expression and assigned it to bar:

var bar = function foo(){};


bar → now holds a reference to the function.

foo is the name of the function only inside its own body.

foo is not available in the outer scope!

::::::::::::::::::: ------------------------>>>

// let one=10//Identifier 'one' has already been declared 

function one(){
    let x=0
    console.log(x)
}

one()

// 3️⃣ Why let one = 10 causes a DIFFERENT error
// let one = 10;
// function one() {}
// ❌ Error:
// Identifier 'one' has already been declared
// Why?
// let is block-scoped
// let cannot redeclare an existing identifier
// Function declarations create identifiers in the same scope
// 👉 JS stops immediately during parsing.

::::::::::::::::::: --------------------------------------->>>

// function sum(a, b) { //becuse i am use  refernce name 
//   console.log(a + b);
// }

// console.log(sum(5 , 10))


// function sum(a, b) {//becuse i am use  refernce  name
//   return a + b;
// }

🧠 Interview Explanation (Perfect Answer)

JavaScript hoists function declarations. When multiple functions have the 
same name, the last declaration overrides the previous ones. Therefore,
 all calls to sum() refer to the last defined function.

// console.log(sum(5 , 5))


/// This is Problem ------------ 
// console.log(sum(5+5))
// 3️⃣ undefined in arithmetic
// 10 + undefined → NaN



const sum1 = function () {console.log('hello')}
const sum1 = function () {console.log('jugal')}

sum1()
sum1()


00000000000000000000000 ---------------------->>


00:::importtant ::::::::
function magic(){
    return x=1,[],{};
}

console.log(magic())

0000000000000000000000000000000000000 :::::::::::::::::


1️⃣ Function hoisting + shadowing
var foo = '00';

function showName() {
    foo = 'innerFoo';
    console.log(foo);
    return;
    function foo() {}
}

showName();
console.log(foo);

🔍 What happens?

Inside showName, there is a function declaration function foo(){}

Function declarations are hoisted to the top of their scope

So inside showName, foo becomes a local variable, shadowing the global foo

Execution inside showName:

Local foo exists (because of hoisting)

foo = 'innerFoo' assigns to local foo

console.log(foo) → "innerFoo"

return stops execution (function body below is unreachable, but hoisting already happened)

Outside:

Global foo was never changed

✅ Output
innerFoo
00

🧠 Interview rule:

Function declarations create local variables and are hoisted, even if written after return.

0000000000000000000000000000000000000 :::::::::::::::::::::::::
2️⃣ Function name reassignment
function nameChange(){};
nameChange = 'jugal sharma';
console.log(nameChange);

🔍 What happens?

Function declarations are hoisted

After that, nameChange is just a variable reference

You overwrite it with a string

✅ Output
jugal sharma



🧠 Interview rule:

Function names are variables and can be reassigned.

00000000000000000000000000000000000000000000000

3️⃣ Comma operator trap
function magic(){
    return x = 1, [], {};
}

console.log(magic());

🔍 What happens?

This uses the comma ( , ) operator

The comma operator:

Evaluates all expressions

Returns only the LAST expression

Order:

x = 1 → assigns x (leaks to global if not declared)

[] → evaluated and ignored

{} → evaluated and returned

✅ Output
{}

🧠 Interview rule:

The comma operator always returns the last expression.


000000000000000000000000000000 ::::::::::::::::
4️⃣ Logical NOT and falsy values
function isAdult(age) {
  if (!age)
    return false;
  return age > 18;
}

🔍 Behavior

!age checks falsy values

Falsy values include:

0

undefined

null

NaN

""

false