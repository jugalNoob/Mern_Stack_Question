✅ What is Object Destructuring?

Object destructuring allows you to extract properties from an object into variables in a concise way.

const person = { name: "Jugal", age: 22, city: "Delhi" };

// Destructuring
const { name, age } = person;

console.log(name); // "Jugal"
console.log(age);  // 22


✅ name and age variables are created automatically from object keys.



.

🔹 1. Destructure with different variable names
const person = { name: "Jugal", age: 22 };

const { name: personName, age: personAge } = person;

console.log(personName); // "Jugal"
console.log(personAge);  // 22


name: personName → rename name to personName

Useful if variable name conflicts with another variable

🔹 2. Destructure with default values
const person = { name: "Jugal" };

const { name, age = 18 } = person;

console.log(name); // "Jugal"
console.log(age);  // 18 (default)


If age does not exist → use default 18

🔹 3. Nested Object Destructuring
const person = { name: "Jugal", address: { city: "Delhi", zip: 110001 } };

const { name, address: { city, zip } } = person;

console.log(name); // "Jugal"
console.log(city); // "Delhi"
console.log(zip);  // 110001

🔹 4. Destructuring in Function Parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

const person = { name: "Jugal", age: 22 };

greet(person); // "Hello Jugal, you are 22 years old."


Pass object directly to function

Extract properties inside the parameter list

🔹 5. Rest Properties in Objects
const person = { name: "Jugal", age: 22, city: "Delhi" };

const { name, ...rest } = person;

console.log(name); // "Jugal"
console.log(rest); // { age: 22, city: "Delhi" }


...rest collects the remaining properties into a new object

🔹 6. Destructuring with Arrays Inside Objects
const person = { name: "Jugal", scores: [90, 80, 70] };

const { name, scores: [first, second] } = person;

console.log(name);   // "Jugal"
console.log(first);  // 90
console.log(second); // 80
