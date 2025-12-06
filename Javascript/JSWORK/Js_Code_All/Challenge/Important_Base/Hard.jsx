🚀 LEVEL-3 — SUPER HARD JAVASCRIPT OPERATOR QUESTIONS
🔥 1. TDZ + typeof trap
console.log(typeof x);
let x = 10;

❌ Output:
ReferenceError


Why?
Inside TDZ (Temporal Dead Zone), typeof does NOT protect you when using let/const.

🔥 2. typeof null
console.log(typeof null);

Output:
object


JS bug since 1995 — never fixed.

🔥 3. Assignment inside comparison
let a = 10;
if (a = 0) {
  console.log("run");
}

Output:
run


Because a = 0 returns 0 → falsy → but IF checks:
if (0) → false → so no run?
BUT WAIT:

Let’s check:

Actual output:

(no output)


Because 0 is falsy → IF block does NOT run.

🔥 4. delete on variables
let a = 10;
console.log(delete a);

Output:
false


delete only works on object properties
Not on variables declared with let/const/var.

🔥 5. delete on array element
let arr = [1,2,3];
delete arr[1];
console.log(arr);

Output:
[1, <1 empty item>, 3]


It removes the value BUT leaves a hole.

🔥 6. void operator
console.log(void 0);
console.log(void (1 + 2));

Output:
undefined
undefined


void always returns undefined.

🔥 7. in operator
console.log("x" in { x: 10 });
console.log(1 in [10,20,30]);
console.log(5 in [10,20,30]);

Output:
true
true
false


Checks index exists not value.

🔥 8. instanceOf trap
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Array);

Output:
true
true
false


Array → child of Object → true.

🔥 9. new Boolean() weird behavior
let b = new Boolean(false);
if (b) console.log("runs!");

Output:
runs!


Because new Boolean() returns an object, and objects are always truthy.

🔥 10. Double NOT (!!) with objects
console.log(!!new Number(0));
console.log(!!new String(""));

Output:
true
true


Objects → always truthy.

🔥 11. Operator precedence nightmare
console.log( typeof 5 + 10 );

Output:
"number10"


Why?
typeof 5 → "number"
Then string + 10 → "number10"

🔥 12. + operator with arrays
console.log([1] + [2,3]);

Output:
"12,3"


Array → converted to string:
[1] → "1"
[2,3] → "2,3"
String concatenation.

🔥 13. == vs === with objects
console.log({} == {});
console.log([] == []);

Output:
false
false


Different references → never equal.

🔥 14. NaN comparison
console.log(NaN == NaN);
console.log(NaN === NaN);

Output:
false
false


NaN is never equal to anything, not even itself.

🔥 15. Object.is() fix
console.log(Object.is(NaN, NaN));

Output:
true

🔥 16. Short-circuit return
function test(a) {
  return a && "OK";
}

console.log(test(0));
console.log(test(5));

Output:
0
"OK"

🔥 17. =, ==, === together
let x;
console.log(x = x == x === x);


💀 This is NOT for beginners.

Step-by-step:

x is undefined

x == x → true

true === x → false

x = false → false

Final Output:
false

🔥 18. Operator on BigInt
console.log(5n + 2);

❌ Output:
TypeError


Cannot mix BigInt with Number.

🔥 19. Destructuring + default + operator
let { a = 10, b = a * 2 } = { a: 3 };
console.log(a, b);

Output:
3 6


b uses updated a.

🔥 20. Trickiest Logical Chain
console.log(0 || null && "yes" || false || "done");

Output:
"done"


Breakdown order:
&& first → null && "yes" → null
Chain:
0 || null || false || "done" → first truthy → "done"