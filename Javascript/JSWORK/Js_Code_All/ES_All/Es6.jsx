JavaScript ES6 – Complete Guide
1. let & const

let → block-scoped variable

const → block-scoped constant (cannot reassign)

let x = 10;
x = 20; // ✅ OK

const y = 30;
y = 40; // ❌ Error

2. Template Literals

Use backticks ` and ${} for variables

let name = "Jugal";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Jugal!

3. Arrow Functions

Shorter syntax for functions

const add = (a,b) => a+b;
console.log(add(2,3)); // 5

const greet = name => `Hi ${name}`;

4. Default Parameters
function greet(name="Guest"){
  console.log("Hello "+name);
}
greet(); // Hello Guest

5. Rest & Spread Operator

Rest → collect arguments into array

function sum(...nums){
  return nums.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4)); // 10


Spread → expand array/object

let arr1 = [1,2], arr2 = [3,4];
let merged = [...arr1,...arr2];
console.log(merged); // [1,2,3,4]

let obj1 = {a:1}, obj2={b:2};
let mergedObj = {...obj1,...obj2};
console.log(mergedObj); // {a:1,b:2}

6. Destructuring

Arrays

let arr = [1,2,3];
let [a,b,c] = arr;
console.log(a,b,c); // 1 2 3


Objects

let obj = {name:"Jugal", age:25};
let {name, age} = obj;
console.log(name, age); // Jugal 25

7. Classes

ES6 supports class syntax (syntactic sugar for prototypes)

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hi, I am ${this.name}`);
  }
}
const p = new Person("Jugal", 25);
p.greet(); // Hi, I am Jugal

8. Modules (import/export)
// file: math.js
export const add = (a,b) => a+b;

// file: app.js
import {add} from './math.js';
console.log(add(2,3)); // 5

9. Promises

For handling asynchronous operations

const p = new Promise((resolve,reject)=>{
  setTimeout(()=> resolve("Done"),1000);
});
p.then(res=> console.log(res));

10. Async/Await
async function fetchData(){
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log(data);
}
fetchData();

11. for...of Loop
let arr = [1,2,3];
for(let val of arr){
  console.log(val);
}


for...in → loops over keys

for...of → loops over values

12. Map & Set

Map

let map = new Map();
map.set("name","Jugal");
map.set("age",25);
console.log(map.get("name")); // Jugal


Set → unique values

let set = new Set([1,2,2,3]);
console.log([...set]); // [1,2,3]

13. Symbols

Unique identifiers

let sym = Symbol("id");
console.log(sym); // Symbol(id)

14. Enhanced Object Literals
let name = "Jugal";
let obj = {
  name, // shorthand
  greet(){ console.log("Hi"); } // method shorthand
};
console.log(obj.name); // Jugal
obj.greet(); // Hi

15. Default Iterators & Generators

Generator Function

function* gen(){
  yield 1;
  yield 2;
}
const g = gen();
console.log(g.next().value); // 1
console.log(g.next().value); // 2

16. New Array Methods
let arr = [1,2,3,4];

// find & findIndex
console.log(arr.find(x=>x>2)); // 3
console.log(arr.findIndex(x=>x>2)); // 2

// includes
console.log(arr.includes(2)); // true

// some & every
console.log(arr.some(x=>x>3)); // true
console.log(arr.every(x=>x>0)); // true

17. String Methods
let str = "hello world";
console.log(str.startsWith("hello")); // true
console.log(str.endsWith("world"));   // true
console.log(str.includes("lo"));      // true
console.log("a,b,c".split(","));      // ["a","b","c"]

18. Tail Calls (Optional)

ES6 supports proper tail calls in strict mode

'use strict';
function factorial(n, acc=1){
  if(n<=1) return acc;
  return factorial(n-1, n*acc);
}

19. Default & Rest Parameters
function multiply(a,b=1){
  return a*b;
}
console.log(multiply(5)); // 5

function sum(...nums){
  return nums.reduce((a,b)=>a+b,0);
}