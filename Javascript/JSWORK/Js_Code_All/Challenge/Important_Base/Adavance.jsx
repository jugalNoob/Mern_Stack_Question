🎯 Want even more advanced ones?

I can give:

🔥 Level-2 (very hard)

Promises + operators

async/await tricky cases

Spread vs rest

Destructuring tricks

Operator precedence traps

Short-circuit patterns

Hoisting + operator puzzles

Just say:

👉 "Give Level-2 tricky JS questions"


🚀 LEVEL-2 TRICKY JAVASCRIPT OPERATOR QUESTIONS (Senior Developer Round)
🔥 1. async/await + operator trap
async function test() {
  return 10;
}

console.log(test() + 5);

✅ Output:
[object Promise]5

Why?

test() returns a Promise → Promise + number → string concatenation.

🔥 2. Promise + ==
console.log(Promise.resolve(5) == 5);

❌ Output:
false


Promises never equal primitive values.

🔥 3. Logical AND with functions
function a() { return "hello"; }

console.log(a && a());

Output:
hello


a is truthy → returns second value a().

🔥 4. Spread operator on number
console.log([ ...123 ]);

❌ Output:
TypeError: 123 is not iterable

🔥 5. Spread inside function arguments
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...[1,2]));

Output:
NaN


Missing argument c → undefined.

🔥 6. Destructuring default values
let [a = 10, b = a * 2] = [undefined, 5];
console.log(a, b);

Output:
10 5


a becomes default 10, but b comes from array (5), not expression.

🔥 7. Assignment returns value
let x;
console.log(x = 20);

Output:
20


Assignment returns assigned value.

🔥 8. Object key as number vs string
let obj = {};
obj[1] = "A";
obj["1"] = "B";
console.log(obj);

Output:
{ "1": "B" }


Both mean the same key.

🔥 9. Object comparison weirdness
console.log([1,2] == "1,2");

Output:
true


Array → string → "1,2".

🔥 10. Double NOT (!!) deep trick
console.log(!![]);
console.log(!!{});
console.log(!!"0");
console.log(!!0);

Output:
true
true
true
false

🔥 11. Optional chaining + nullish operator
let user = { info: null };
console.log(user.info?.name ?? "No name");

Output:
No name

🔥 12. Logical OR returns functions
let fn1 = () => "hi";
let fn2 = () => "hello";

console.log(fn1 || fn2)();

Output:
hi


Because fn1 is truthy → OR returns first truthy → it gets called.

🔥 13. Logical AND returns functions
console.log(fn1 && fn2)();

Output:
hello


AND returns last truthy → fn2.

🔥 14. Chained comparisons (JavaScript does NOT support it)
console.log(5 < 10 < 1);

Output:
true


Because:

5 < 10 → true
true < 1 → 1 < 1 → false


But JavaScript converts true → 1
So: 1 < 1 → false

But console.log(false) prints true?
NO → Let’s check:

Correct breakdown:

5 < 10 = true
true < 1 → 1 < 1 → false


Final output:

false

🔥 15. Weird math with Boolean
console.log(true + true + false);

Output:
2

🔥 16. Adding an empty array
console.log([] + 5);

Output:
"5"


First [] → "", then "" + 5 = "5".

🔥 17. typeof with classes
class A {}
console.log(typeof A);

Output:
function


Classes are syntactic sugar over functions.

🔥 18. Function default parameter dependent on another
function f(a, b = a) {
  console.log(a, b);
}

f(10);

Output:
10 10

🔥 19. Array holes + map()
let arr = [1, , 3]; 
let result = arr.map(x => x * 2);
console.log(result);

Output:
[2, <1 empty item>, 6]


The hole stays untouched.

🔥 20. isNaN() vs Number.isNaN()
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));

Output:
true
false


isNaN does type conversion
Number.isNaN does NOT.