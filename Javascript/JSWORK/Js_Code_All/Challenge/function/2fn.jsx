If you want, I can also explain:

Arrow functions

First-class functions

Higher-order functions

IIFE vs NFE
Just tell me!


var x=1
function foo(){
    console.log(x)
  var x=2
    // console.log(x)
}

foo()

🧠 Execution Sequence

foo() runs

JavaScript sees const x = 2 inside the function

It reserves space for local x — TDZ begins

Then console.log(x) executes

JS tries to use local x (NOT the global one)

❌ But local x is still in TDZ

→ ReferenceError: Cannot access 'x' before initialization


00::::::::::::: --------------------->>

function namuber(a=10 , b=10){

  return a + b
}

console.log(namuber(100 , 200))
console.log(namuber(undefined , 200))
console.log(namuber(100 , undefined))
console.log(namuber(undefined , undefined)) // use My diffut value

🔹 Rule:

Default values are only applied when the argument is
 undefined or missing.
console.log(namuber(undefined , undefined)) // use My diffut value


🔹 Explanation:

1::namuber(100, 200) → 300

You provided both arguments explicitly.

a = 100, b = 200 → default values are ignored.

2::namuber(undefined, 200) → 210

You passed undefined for a.

Default value triggers when argument is undefined → a = 10.

b = 200 (explicit) → total = 10 + 200 = 210.

3::namuber(100, undefined) → 110

a = 100 (explicit) → default ignored

b = undefined → default value triggers → b = 10

Total = 100 + 10 = 110.



2::::::::::: ---------------:::::::::_______________>>


var variable=10
(()=>{
    console.log(variable)
    let variable=20
    console.log(variable)
})()


⭐ Step-by-Step Execution
1️⃣ Global scope
var variable = 10;


Global variable exists → 10

2️⃣ Inside IIFE (() => { ... })()
console.log(variable);


There is a local let variable = 20 declared later

let creates a block-scoped variable

TDZ (Temporal Dead Zone) starts from the beginning of the block
 until the declaration is executed

During TDZ: cannot access variable inside the function even though a global exists

3️⃣ What happens at console.log(variable)?

JS sees: variable is declared in this scope with let

But it's in TDZ → ReferenceError

4️⃣ let variable = 20 executes

TDZ ends

Local variable now = 20

5️⃣ console.log(variable) after that

Would print 20 if the first line didn't throw error

✅ Result
ReferenceError: Cannot access 'variable' before initialization