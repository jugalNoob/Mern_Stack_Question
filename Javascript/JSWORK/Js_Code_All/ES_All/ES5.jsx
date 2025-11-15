1. 'use strict' Mode

Introduced to enforce stricter parsing and error handling.

Helps prevent silent errors and accidental globals.

'use strict';
x = 10; // ❌ Error: x is not defined

2. Variables

ES5 only has var (no let or const in ES5).

var is function-scoped, not block-scoped.

function test() {
    if(true){
        var x = 10; // visible in whole function
    }
    console.log(x); // 10
}
test();

3. Functions
Function Declaration
function add(a,b){
    return a+b;
}

Function Expression
var add = function(a,b){
    return a+b;
};

Anonymous Functions
setTimeout(function(){ console.log("Hi"); }, 1000);

4. Objects

Key-value pairs

var person = {
    name: "Jugal",
    age: 25,
    greet: function(){ console.log("Hello"); }
};
console.log(person.name); // Jugal
person.greet(); // Hello

Object Methods

Object.keys(obj) → returns keys

Object.values(obj) → ES5 doesn’t support values, only keys

Object.create(proto) → creates object with prototype

var proto = {greet: function(){console.log("Hi");}};
var obj = Object.create(proto);
obj.greet(); // Hi

5. Arrays
Array Methods in ES5

forEach() → iterate array

var arr = [1,2,3];
arr.forEach(function(x){ console.log(x); });


map() → create new array

var squared = arr.map(function(x){ return x*x; });
console.log(squared); // [1,4,9]


filter() → filter elements

var evens = arr.filter(function(x){ return x%2===0; });


reduce() → accumulate values

var sum = arr.reduce(function(acc, x){ return acc + x; },0);


indexOf() → find index

arr.indexOf(2); // 1


every() → test all

some() → test some

6. String Methods
var str = "Hello World";
str.length; // 11
str.charAt(0); // "H"
str.indexOf("o"); // 4
str.lastIndexOf("o"); // 7
str.slice(0,5); // "Hello"
str.substring(0,5); // "Hello"
str.replace("World","ES5"); // "Hello ES5"
str.split(" "); // ["Hello","World"]
str.toUpperCase(); // "HELLO WORLD"
str.toLowerCase(); // "hello world"

7. JSON

ES5 added native JSON object

var obj = {name:"Jugal"};
var jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Jugal"}'

var obj2 = JSON.parse(jsonStr);
console.log(obj2.name); // "Jugal"

8. Functions & Scope

ES5 supports default parameters via logic

function greet(name){
    name = name || "Guest";
    console.log("Hello "+name);
}
greet(); // Hello Guest


Closures

function outer(x){
    return function(y){ return x+y; }
}
var add5 = outer(5);
console.log(add5(3)); // 8

9. Prototypes

ES5 uses prototype-based inheritance

function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){ console.log("Hi "+this.name); };
var p = new Person("Jugal");
p.greet(); // Hi Jugal

10. Strict Equality vs Loose Equality
1 == "1";  // true  (type coercion)
1 === "1"; // false (no coercion)

11. ES5 Object Enhancements

Object.defineProperty() → define property attributes

var obj = {};
Object.defineProperty(obj,"name",{
    value:"Jugal",
    writable:false,
    enumerable:true,
    configurable:true
});
obj.name = "Test"; // ❌ fails silently


Object.getOwnPropertyNames(obj) → list all properties

12. ES5 Getters & Setters
var obj = {
    firstName: "Jugal",
    lastName: "Sharma",
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(name){
        var parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(obj.fullName); // Jugal Sharma
obj.fullName = "Karan Singh";
console.log(obj.firstName); // Karan

13. ES5 Strict Mode
'use strict';
var x = 10; // works
y = 20; // ❌ Error

14. Array Iteration
var arr = [1,2,3];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.forEach(function(item){ console.log(item); });


| Feature            | Description                                        |   |           |
| ------------------ | -------------------------------------------------- | - | --------- |
| Strict Mode        | `'use strict';`                                    |   |           |
| Array Methods      | forEach, map, filter, reduce, some, every, indexOf |   |           |
| Object Methods     | create, defineProperty, getOwnPropertyNames        |   |           |
| JSON               | parse, stringify                                   |   |           |
| Prototypes         | prototype inheritance                              |   |           |
| Getter/Setter      | Object property control                            |   |           |
| Function Methods   | call, apply, bind                                  |   |           |
| Default Parameters | via logic (`x = x                                  |   | default`) |
| ES5 Compatibility  | Fully supported in old browsers                    |   |           |
