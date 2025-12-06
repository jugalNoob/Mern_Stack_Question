🔥🔥 LEVEL-4 — EXTREME JAVASCRIPT OPERATOR QUESTIONS
These are FAANG Senior / Architect-level puzzles.
If you master these, you are in the top 0.1% of JS developers.

🚀 1. Operator + Promise + Microtask Order
console.log("A");

Promise.resolve()
  .then(() => console.log("B"))
  .then(() => console.log("C"));

console.log("D");

Output:
A
D
B
C


Operators inside .then() run after synchronous code because of microtask queue.

🚀 2. Unary + with Promise
console.log(+Promise.resolve(5));

Output:
NaN


Because unary + tries to convert the Promise to a number.

🚀 3. Spread + Operator Precedence
console.log(...[1] + [2]);

Output:
'12'


Because:

...[1] → 1

1 + [2] → '12'

🚀 4. this + operator inside object
const obj = {
  value: 5,
  get: function() {
    return this.value + 10;
  }
};

let f = obj.get;
console.log(f());

Output:
NaN


this becomes undefined → undefined + 10 → NaN.

🚀 5. Generator + Operator
function* gen() {
  yield 10;
}

console.log( gen() + 5 );

Output:
"[object Generator]5"


Generator → object → coerced to string.

🚀 6. Symbol + operator
let s = Symbol("x");
console.log(s + 10);

Output:
TypeError


Symbols cannot be implicitly converted.

🚀 7. Logical OR returns non-boolean
console.log( null || [] );

Output:
[]


|| returns the first truthy value, NOT boolean.

🚀 8. Default + Destructure + Expression Order
let { a = 1, b = a + 10 } = { b: 20 };

console.log(a, b);

Output:
1 20


Order:

a becomes default → 1

b from object → 20 (default ignored)

🚀 9. typeof async function
async function x(){}

console.log(typeof x);
console.log(typeof x());

Output:
'function'
'object'


x() returns a Promise object, not a function.

🚀 10. Object + Object
console.log({} + {});

Output:
"[object Object][object Object]"


Objects → coerced to strings.

🚀 11. Operator with Map Keys
const map = new Map();
map.set("1", 100);
map.set(1, 200);

console.log(map.get("1") + map.get(1));

Output:
300


Map does NOT convert keys. "1" and 1 are different.

🚀 12. Optional chaining + null
let a = null;
console.log(a?.b?.c + 10);

Output:
NaN


a?.b?.c → undefined
undefined + 10 → NaN

🚀 13. + Operator with Boolean
console.log(true + true);
console.log(false + true);

Output:
2
1


Boolean converted to numbers → 1, 0.

🚀 14. Async operator order
async function test() {
  return await 10 + await 20;
}

test().then(console.log);

Output:
30

🚀 15. Double await
async function f() {
  return await await Promise.resolve(100);
}

f().then(console.log);

Output:
100


Second await does nothing.

🚀 16. Operator inside class static
class A {
  static x = 10 + 20;
}

console.log(A.x);

Output:
30


Operators run at class creation time.

🚀 17. typeof NaN
console.log(typeof NaN);

Output:
"number"


One of the most confusing JS facts.

🚀 18. Object destructure + rename
let obj = { x: 10 };
let { x: y } = obj;

console.log(y);

Output:
10

🚀 19. Weird comparison
console.log([] == ![]);

Output:
true


Why?

![] → false

[] == false

[] → ""

"" == false

false == false → true

🚀 20. WTF triple comparison
console.log(0 < 1 < 2);

Output:
true


Because:

0 < 1 → true

true < 2 → 1 < 2 → true