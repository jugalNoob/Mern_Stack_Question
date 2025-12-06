🚀 TOP 30 TRICKY JAVASCRIPT OPERATOR QUESTIONS
🔥 1. Comma Operator
let x = (10, 20, 30);
console.log(x);


✅ Answer: 30
➡ Only returns the last value.

🔥 2. Comma operator inside return
function test(a, b, c) {
  return a + b, c;
}
console.log(test(2, 3, "hello"));


✅ Answer: "hello"
➡ Same reason — returns only last value.

🔥 3. == vs ===
console.log(0 == false);
console.log(0 === false);


✅

true
false


➡ == performs type conversion, === does not.

🔥 4. Falsy vs Truthy
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(""));


Output:

true
true
false

🔥 5. ! and !!
console.log(!"jugal");
console.log(!!"jugal");


Output:

false
true

🔥 6. typeof
console.log(typeof null);


Output:

object


➡ JavaScript bug since 1996.

🔥 7. typeof NaN
console.log(typeof NaN);

number

🔥 8. NaN comparisons
console.log(NaN == NaN);
console.log(NaN === NaN);

false
false


➡ NaN is never equal to itself.

🔥 9. Object comparison
console.log({} == {});
console.log([] == []);

false
false


➡ Different memory references.

🔥 10. String + Number
console.log(10 + "10");


Output:

"1010"

🔥 11. String - Number
console.log("10" - 5);


Output:

5


➡ subtraction forces number conversion.

🔥 12. String * Number
console.log("5" * 2);


Output:

10

🔥 13. + operator with Boolean
console.log(true + 2);

3


➡ true converts to 1.

🔥 14. [] + []
console.log([] + []);

""

🔥 15. [] + {}
console.log([] + {});

"[object Object]"

🔥 16. {} + []
console.log({} + []);

0


Why? First {} is parsed as empty block.

🔥 17. Unary plus
console.log(+"10");

10

🔥 18. Unary minus
console.log(-"5");

-5

🔥 19. Double equal trick
console.log([] == ![]);


Output:

true


Reason:
![] → false
[] == false → true

🔥 20. null vs undefined
console.log(null == undefined);
console.log(null === undefined);

true
false

🔥 21. Logical OR (||)
console.log(0 || 10);

10

🔥 22. Logical AND (&&)
console.log(5 && 10);

10


➡ returns last truthy value.

🔥 23. Optional chaining
let user = {};
console.log(user.address?.city);

undefined

🔥 24. Nullish Coalescing (??)
console.log(null ?? "default");
console.log(0 ?? "default");

default
0

🔥 25. += with strings
let x = "5";
x += 5;
console.log(x);

"55"

🔥 26. Pre vs Post increment
let x = 5;
console.log(++x, x++);

6 6

🔥 27. Assignment inside condition
let a = 0;
if (a = 5) {
  console.log("yes");
}

yes

🔥 28. Spread operator
console.log([..."jugal"]);

["j", "u", "g", "a", "l"]

🔥 29. Delete operator
let obj = { name: "jugal", age: 25 };
delete obj.age;
console.log(obj);

{ name: "jugal" }

🔥 30. Ternary operator
console.log(5 > 3 ? "yes" : "no");

yes
