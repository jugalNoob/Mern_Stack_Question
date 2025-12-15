🟢 JavaScript Object Interview Questions & Answers
1️⃣ How do you create an object?

Answer:

// Using object literal
let obj = { name: "Jugal", age: 30 };

// Using Object constructor
let obj2 = new Object();
obj2.name = "Karan";
obj2.age = 25;

// Using Object.create
let obj3 = Object.create({ greet: () => "Hi!" });
obj3.name = "Ravi";

2️⃣ How do you access object properties?

Answer:

let obj = { name: "Jugal", age: 30 };

// Dot notation
console.log(obj.name); // "Jugal"

// Bracket notation
console.log(obj['age']); // 30

3️⃣ How do you modify, add, or delete object properties?
let obj = { name: "Jugal", age: 30 };

// Modify
obj.name = "Karan";

// Add
obj.city = "Mumbai";

// Delete
delete obj.age;

4️⃣ How do you loop through an object?
let obj = { name: "Jugal", age: 30 };

for (let key in obj) {
    console.log(key, obj[key]);
}

// Using Object.keys / values / entries
Object.keys(obj).forEach(key => console.log(key, obj[key]));
Object.values(obj).forEach(value => console.log(value));
Object.entries(obj).forEach(([key, value]) => console.log(key, value));

5️⃣ How do you compare two objects?

Reference comparison:

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); // false


Shallow comparison using JSON:

JSON.stringify(obj1) === JSON.stringify(obj2); // true (if key order same)


Deep comparison (nested objects):

function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== "object" || typeof o2 !== "object" || o1 == null || o2 == null) return false;
  const keys1 = Object.keys(o1), keys2 = Object.keys(o2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (typeof o1[key] === "object") {
      if (!deepCompare(o1[key], o2[key])) return false;
    } else if (o1[key] !== o2[key]) return false;
  }
  return true;
}

6️⃣ What is optional chaining and nullish coalescing?
let obj = { name: "Jugal" };

// Optional chaining
console.log(obj?.name); // "Jugal"
console.log(obj?.age);  // undefined (safe access)

// Nullish coalescing
console.log(obj.age ?? "Unknown"); // "Unknown"

7️⃣ What is JSON? How is it different from JavaScript object?

JSON: Text-based data format for data interchange.

JavaScript Object: Live in memory, can have functions and undefined.

let obj = { name: "Jugal", age: 30 };
let json = JSON.stringify(obj); // object → string
let parsed = JSON.parse(json);  // string → object

8️⃣ How do you check if a key exists in an object?
let obj = { name: "Jugal" };

"name" in obj;      // true
obj.hasOwnProperty("name"); // true

9️⃣ How do you merge objects?
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let merged = { ...obj1, ...obj2 }; // { a:1, b:3, c:4 }

🔟 How do you store objects with numeric indexes?
// Array of objects
let arr = [
  { index: 0, name: "Jugal" },
  { index: 1, name: "Karan" }
];
console.log(arr[0].name); // "Jugal"

// Object with numeric keys
let obj = {
  0: { name: "Jugal" },
  1: { name: "Karan" }
};
console.log(obj[0].name); // "Jugal"

11️⃣ How do you safely access nested properties?
let obj = { user: { profile: { name: "Jugal" } } };

// Optional chaining
console.log(obj?.user?.profile?.name); // "Jugal"
console.log(obj?.user?.details?.age ?? "Unknown"); // "Unknown"





::::: Function Call  bind apply -------<><><><>
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.call(person, 'jugal sharma'));
// Output: Hello, John! I am a developer.

....Apply
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.apply(person, ['John']));
// Output: Hello, John! I am a developer.

.................bind
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
const greetPerson = greet.bind(person);
console.log(greetPerson('karan'));






| Format                     | Description                   | Use Case                                       |
| -------------------------- | ----------------------------- | ---------------------------------------------- |
| **JSON**                   | Text-based, JS native         | Web APIs, config files                         |
| **BSON**                   | Binary JSON (used in MongoDB) | Faster storage, supports extra types like Date |
| **GSON**                   | Java library for JSON         | Java applications                              |
| **MessagePack / Protobuf** | Binary, compact               | High-performance APIs, network transfer        |


✅ Summary / Key Points for Interview

Objects are compared by reference → use deepCompare for value comparison.

Optional chaining ?. prevents errors when accessing nested properties.

Nullish coalescing ?? distinguishes null/undefined from other falsy values.

Arrays of objects → use index access arr[0].prop or loops.

JSON is the standard format for data interchange in JavaScript.