| Concept         | Example            | Output          | Key Rule      |
| --------------- | ------------------ | --------------- | ------------- |
| var/let/const   | var x=1; const y=2 | assign rules    | const = fixed |
| `&&`            | `'a' && 'b'`       | `'b'`           | last truthy   |
| Loose equality  | `true == 1`        | true            | converts type |
| Pre/Post ++     | `++x + x++`        | changes order   | side effects  |
| String + Number | `'10'+10`          | `'1010'`        | string concat |
| [] == ''        | true               | both → ''       |               |
| [] === ''       | false              | type mismatch   |               |
| typeof []       | object             | array is object |               |
| Operator order  | `*` before `+`     | precedence      |               |




💣 9️⃣ typeof & weird cases

console.log(typeof null);  // 'object' ❗ (JS bug)



🧮 4️⃣ Pre/Post Increment
let x = 1;
const y = ++x + x++; // y = 2 + 2 = 4
console.log(x, y);   // 3 4


🔍 12️⃣ typeof vs instanceof
console.log({} instanceof Array); // true
console.log({} instanceof Object); // true
console.log(typeof []);            // object




🎯 14️⃣ Short-circuiting
console.log(0 && 'JS');    // 0
console.log(1 && 'JS');    // 'JS'
console.log(null || 'JS'); // 'JS'




🔄 8️⃣ Unary + and -
console.log(+'10');  // 10 → converts to number
console.log(-'10');  // -10
console.log(+true);  // 1
console.log(+false); // 0




let count = null;
// const count=100
console.log(count || 100);  // 100 (0 is falsy)
console.log(count ?? 100);  // 0   (?? ignores falsy, checks only null/undefined)





✅ Correct 2 — using ternary operator
console.log(18 == 18 ? true : false);


🧠 Output:



🧠 1️⃣ var, let, const
var x = 1; 
let y = 2; 
const z = 3;

x = 10; // ✅ var re-assign allowed
y = 20; // ✅ let re-assign allowed
// z = 30; ❌ const cannot be reassigned


✅ Summary

| Keyword | Scope    | Reassign? | Redeclare? | Hoisted?          |
| ------- | -------- | --------- | ---------- | ----------------- |
| var     | Function | ✅ Yes     | ✅ Yes      | ✅ Yes (undefined) |
| let     | Block    | ✅ Yes     | ❌ No       | ⚠️ Hoisted (TDZ)  |
| const   | Block    | ❌ No      | ❌ No       | ⚠️ Hoisted (TDZ)  |



🧮 2️⃣ Logical & Boolean
console.log(18 == 18 && 18 == 18); // true


✅ && means both conditions must be true.



⚡ Logical AND with strings
let x = 'jugal';
let y = 'name';
console.log(x && y);           // 'name' ✅ (returns last truthy)
console.log(Boolean(x && y));  // true


🧠 Reason:
&& returns the last truthy value (doesn’t force Boolean).



🧩 3️⃣ Boolean type conversion
console.log(true == 1);  // true
console.log(false == 0); // true


✅ Because in == (loose equality),
true → 1 and false → 0.



⚡ 12️⃣ String + Number (Tricky)
console.log('10' + 10 + 10); // "101010"
console.log(10 + 10 + '10'); // "2010"


🧠 Left-to-right evaluation:

'10' + 10 → '1010'

'1010' + 10 → '101010'

10 + 10 → 20, then '20' + '10' → '2010'


🧮 11️⃣ Operator precedence
let a = 5;
let b = 10;
console.log(a + b + 2);      // 17
console.log((a + b) * 2);    // 30
console.log(10 * 2 + 5 * 4); // 40


🧠 Multiplication * has higher precedence than addition +.




⚠️ "use strict" Example
"use strict";
let a = 10;
b = a;  // ❌ ReferenceError: b is not defined


Without strict mode, JS would create a global variable b.
Strict mode prevents that (safer).




🧩 🔟 Why both are objects
console.log(typeof {}); // object
console.log(typeof []); // object


✅ Arrays are special objects in JS
(built on top of the Object type, with extra array methods).



🧮 9️⃣ Comparison with []
console.log([] == '');   // true  ✅ because [].toString() → ''
console.log([] === '');  // false ❌ because types differ


⚙️ 8️⃣ Logical AND (&&)
let one = 'jugalsharma';
let twoi = 'kkskslsl';
console.log(one && twoi);          // 'kkskslsl'
console.log(Boolean(one && twoi)); // true


🧠 && → checks left to right, returns first falsy or last truthy value.
Does not convert to Boolean automatically.



🧮 7️⃣ String + Number + Increment
let n = '20';
console.log(n + 1); // "201"  (string + number → string)
console.log(++n);   // 21     (n converted to number, then incremented)
console.log(n++);   // 21     (post increment, prints old value)




🔠 6️⃣ String concatenation
function CheckConduation(mark) {
  let name = mark + ' abuset';
  console.log(name);
}
CheckConduation('John'); // John abuset



🧮 5️⃣ Post-increment assignment
let a = 10;
let b = a++;
console.log(a + b); // 21
console.log(b);     // 10


🧠 Step-by-step:

b = a++ → b = 10, then a = 11

So a + b = 11 + 10 = 21




🔢 4️⃣ Pre/Post Increment
let num = 1;
const sum = ++num + num++;
console.log(sum); // 5


🧠 Step-by-step:

++num → pre-increment → num=2, use 2

num++ → post-increment → use 2, then num=3
→ sum = 2 + 2 = 4

✅ Actually output = 4, not 5.


console.log(18==18&& 18==18)
let x='jugal'
let y='name'
console.log(x&&y)
console.log(Boolean(x&&y))

::::: Important ::::::::::::::
0000:::::::::Important :::::
console.log( true == 1 ); // true
console.log( false == 0 ); // true



0:::::::Important ::::::::
let num=1
const sum=++num + num++
console.log(sum)


0::::::Important ::::::::::::::
let a=10;
let b=a++;
console.log(a+b)
console.log(b)


::::::::::::::

function CheckConduation(marke) {
    let name = marke + ' abuset'; // Concatenate marke with ' abuset'
    console.log(name);
}

0::::::Important ::::::::
let n='20'
console.log(n+1)
console.log(++n)
console.log(n++)



0::::Importtant  :::::::::::
let one='jugalsharma'
let twoi='kkskslsl'
console.log(one && twoi)
.. && does not convert result to bolen 
..check value fron left yo right

console.log(Boolean(one&&two))


0::::Important :::::::::::::::::
console.log([] == '')
console.log([]==='')




Q Why is Both Object ?
console.log(typeof {});      // object
console.log(typeof []);      // object

"use strict";
"use strict";

let a=10
b=a
console.log(b)

const c=10
d=c
console.log(d)



2:::::: Important -------------->
🧠 Step 2: Operator precedence

* (multiplication) has higher precedence than 
+ (addition) in JavaScript.

So the multiplication part runs first.

So the multiplication part runs first.
let a=5
let b=10
console.log(a+b+2)
console.log((a + b) * 2); // (5 + 10) * 2 = 30
console.log(10 * 2 + 5 * 4);
👉 Step 1: Do the multiplications first 
(because * has higher precedence than +):

10 * 2 = 20
5 * 4 = 20
👉 Step 2: Add them together:
20 + 20 = 40


3::: Important Changgle ---------------------->>

console.log('10'+10+10)
➡ JavaScript evaluates left to right.

'10' + 10 → '1010' (because string + number = string concatenation)

'1010' + 10 → '101010' (string + number again → concatenation)


console.log(10+10+'10')
➡ Left to right:

10 + 10 → 20 (both are numbers → arithmetic addition)

20 + '10' → '2010' (number + string = string concatenation)
