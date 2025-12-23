
00000000000000 ------------------------->>>>>>>>>>>>>>>>>>>>

function greet(city, country) {
    return `${this.name} from ${city}, ${country}`;
}

console.log(greet.call({ name: 'Jugal' }, 'Delhi', 'India'));
console.log(greet.apply({ name: 'Jugal' }, ['Delhi', 'India']));

const bound = greet.bind({ name: 'Jugal' });
console.log(bound('Delhi', 'India'));


⚠️ Important interview note

call, apply, bind DO NOT work with arrow functions

Arrow functions ignore thisArg

🧠 One-line summary (interview-ready)

call() works because it explicitly assigns the object you pass as the this value during function execution.





0000:::::::::::: ------------------->>
// execution context step-by-step (Memory phase + Execution phase)

console.log('hwllo jugal');  // → "hwllo jugal"

Names();                     // → undefined (explained below)

function Names() {
    console.log(ages); 
}

var ages = 200;

Names();                     // → 200



Step-by-Step Explanation
Here’s why you see different results when calling Names() at different times.
1. First call: Names() → logs undefined
Even though the function is declared after the call, JavaScript hoists (moves to the top) function declarations.
So the engine actually sees this order during execution:
JavaScriptfunction Names() {       // ← Hoisted to the top!
    console.log(ages); 
}

console.log('hwllo jugal');
Names();                 // Called here
var ages = 200;          // ← var declaration is also hoisted, but not the assignment!

Names();
Important: var ages is hoisted, but the assignment = 200 is not.
So at the time of the first Names() call:

The variable agesexists (because of hoisting),
But it has not been assigned yet → its value is undefined.

Therefore:
JavaScriptconsole.log(ages);  // → undefined
And since the function doesn't return anything, calling Names() itself returns undefined → that's why you see "undefined" in the console after the call.
2. Second call: Names() → logs 200
Now the line var ages = 200 has already executed.
So ages now holds the value 200.
When you call Names() the second time:
JavaScriptconsole.log(ages);  // → 200
Again, the function returns nothing → undefined, but the important part is the logged value inside: 200.
Summary Table


Call,What is ages at that moment?,console.log(ages) inside function,Why?
First Names(),undefined (hoisted but not initialized),logs undefined,Assignment = 200 hasn't happened yet
Second Names(),200,logs 200,Assignment has now executed


Bonus: How to Avoid This Confusion
Use let or const instead of var — they are not hoisted in the same way (temporal dead zone):
JavaScriptconsole.log('hwllo jugal');

Names();  // → ReferenceError: Cannot access 'ages' before initialization

function Names() {
    console.log(ages); 
}

let ages = 200;  // or const

Names();  // → 200
With let/const, the first call would throw an error instead of silently logging undefined, which is safer and clearer.
That's the classic "var hoisting" gotcha in JavaScript! 😊
Let me know if you want to see more hoisting examples!


0000::::::::::::::------------>>> ----------------------------->>


function nameIm(){
    return ''
}
let val=nameIm()
console.log(typeof(val))
console.log(typeof(''))
console.log(val === 'jugal')
console.log(val == '')

🧠 Step 1: What does nameIm() return?
return ''
👉 It returns an empty string.
So:
val = ''
🧠 Step 2: What is an empty string?
An empty string is still a string:
Type → string
Value → ""
✅ Now check both comparisons
We will understand WHY and HOW JavaScript evaluates them.
🔥 1) val === '' (STRICT equality)
Strict equality checks 3 things:
✔ Same Type?
val → string
'' → string
➡ Yes
✔ Same Value?
val → ""
'' → ""
➡ Yes
✔ No type conversion done
Because types already match.
So:
val === ''  → true
🔥 2) val == '' (LOOSE equality)
Loose equality (==) performs type coercion only if types differ.
But here:
val is a string
'' is a string
📌 Types are already same → No coercion required
So JS compares values directly:
'' == ''  → true
⚙️ How JavaScript Engine Works Internally
For === (strict)
Checks type first
If type matches, checks value
No conversions
For == (loose)
First: checks if types same
If same → acts like ===
If different → converts one value and compares
(NOT NEEDED HERE)
🎯 Final Output
true
true
🧠 Why both are true?
Because:
✔ Same type (string)
✔ Same value ("")
✔ Loose equality does NOT coerce when types match
So both become true.


:::: Important  Currying Vs Clourse ::::::::::::::::::::::
🧠 One-liner (Remember this)

Currying splits arguments, but the return value depends 
on the operator you use.

1️⃣ Currying (Argument Splitting)
🔹 Definition

Currying transforms a function with multiple arguments 
into a chain of single-argument functions.

//curry function
function Currying(a) {
  return function (b) {
  return function(c){
    return function(d){
 return `${a} ${b} ${c} ${d}`;
    }
  }
  };
}
console.log(Currying(5)(10)(100)('d')); // 15


🔍 Why this is Currying
A function taking one argument at a time
Instead of add(50, 10)
You write add(50)(10)
🧠 What happens internally
x = 50 stored in closure (heap)
Returned function receives y = 10
Result → 50 + 10 = 60
✔ Currying = function returning function with arguments split
✔ Currying = function returning function with arguments split

✅ 2️⃣ Closure Function (Your Coloure)

function Coloure() {
  let a = 10;
  let b = 10;
  return function () {
    return a + b;
  };
}

let addyour = Coloure();
console.log(addyour()); // 20

🔍 Why this is Closure

Inner function remembers a and b

Even after Coloure() has finished execution

Values are preserved in heap memory

✔ Closure = function remembers outer variables


🔁 Key Difference (VERY IMPORTANT)

| Feature                 | Currying           | Closure               |
| ----------------------- | ------------------ | --------------------- |
| Concept                 | Argument splitting | Memory persistence    |
| Returns function        | ✅                  | ✅                     |
| Uses closure internally | ✅                  | ✅                     |
| Main purpose            | Reusability        | State preservation    |
| Example                 | `add(5)(2)`        | Counter, private vars |


🧠 Interview One-Liners (MEMORIZE)

✔ Currying: “Transforming a function with multiple arguments 
into a chain of functions.”

✔ Closure: “A function that remembers variables from its outer scope.”


🚀 Bonus: Combined Example (Currying + Closure)

function counter(start) {
  return function () {
    return ++start;
  };
}

const c = counter(5);
console.log(c()); // 6
console.log(c()); // 7

🔥 Interview Rule (Very Important)
Currying = number of functions = number of arguments
