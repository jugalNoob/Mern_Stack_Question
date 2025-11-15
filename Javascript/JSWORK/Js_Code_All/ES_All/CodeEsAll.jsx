JavaScript ES7+ (ES2016+) – Complete Guide
1. ES7 / ES2016

Released: 2016

Features:

Array.includes()

Checks if an array contains a specific element

let arr = [1,2,3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false


Exponentiation Operator **

console.log(2**3); // 8 (same as Math.pow(2,3))

2. ES8 / ES2017

Released: 2017

Features:

Async/Await

Makes asynchronous code readable

async function fetchData(){
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log(data);
}
fetchData();


Object.values()

Returns all object values

let obj = {a:1,b:2};
console.log(Object.values(obj)); // [1,2]


Object.entries()

Returns array of [key, value]

console.log(Object.entries(obj)); // [["a",1],["b",2]]


String Padding

console.log("5".padStart(3,"0")); // "005"
console.log("5".padEnd(3,"0"));   // "500"

3. ES9 / ES2018

Released: 2018

Features:

Rest/Spread for Objects

let obj = {a:1,b:2,c:3};
let {a,...rest} = obj;
console.log(rest); // {b:2,c:3}


Asynchronous Iteration (for await)

async function* gen(){
  yield 1;
  yield 2;
}
(async () => {
  for await (let val of gen()){
    console.log(val);
  }
})();


Promise.finally()

Promise.resolve("Done")
  .then(res=>console.log(res))
  .finally(()=> console.log("Cleanup"));


Regular Expression Enhancements

Named capture groups: /(?<name>\w+)/

4. ES10 / ES2019

Released: 2019

Features:

Array.flat() and flatMap()

let arr = [1,[2,[3]]];
console.log(arr.flat(2)); // [1,2,3]

console.log([1,2,3].flatMap(x => [x,x*2])); // [1,2,2,4,3,6]


Object.fromEntries()

Converts array of key-value pairs to object

let entries = [["a",1],["b",2]];
console.log(Object.fromEntries(entries)); // {a:1,b:2}


String.trimStart / trimEnd

console.log("  hello  ".trimStart()); // "hello  "
console.log("  hello  ".trimEnd());   // "  hello"

5. ES11 / ES2020

Released: 2020

Features:

Optional Chaining ?.

let obj = {a:{b:1}};
console.log(obj?.a?.b); // 1
console.log(obj?.x?.b); // undefined


Nullish Coalescing ??

let a = null;
console.log(a ?? "default"); // "default"


Dynamic Import

import('module.js').then(mod => mod.doSomething());


BigInt

let big = 123456789012345678901234567890n;
console.log(big + 1n);


globalThis

Standard global object reference

console.log(globalThis); // window in browser, global in Node

6. ES12 / ES2021

Released: 2021

Features:

Logical Assignment Operators

let a = 0;
a ||= 5; // a = a || 5
console.log(a); // 5


Numeric Separators

let budget = 1_000_000; // easier to read


String.replaceAll()

let str = "foo foo";
console.log(str.replaceAll("foo","bar")); // "bar bar"


Promise.any()

Promise.any([
  Promise.reject("err"),
  Promise.resolve("ok")
]).then(console.log); // "ok"
