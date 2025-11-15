✅ 1. Object.keys()

Returns only keys of the object in an array.

const user = { name: "Jugal", age: 22, city: "Delhi" };

console.log(Object.keys(user));


Output:

["name", "age", "city"]

✅ 2. Object.values()

Returns only values of the object.

console.log(Object.values(user));


Output:

["Jugal", 22, "Delhi"]

✅ 3. Object.entries()

Returns key + value pairs as arrays.

console.log(Object.entries(user));


Output:

[ ["name", "Jugal"], ["age", 22], ["city", "Delhi"] ]

✅ 4. Object.assign()

Used to copy objects or merge objects.

Example 1 — Merge two objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const result = Object.assign({}, obj1, obj2);

console.log(result);


Output:

{ a: 1, b: 2 }

Example 2 — Shallow copy
const copy = Object.assign({}, user);
console.log(copy);

✅ 5. Object.freeze()

Prevents adding, removing, or changing properties. (Fully locked)

const car = { brand: "BMW", price: 50 };

Object.freeze(car);

car.price = 100;   // ❌ ignored
car.model = "X5";  // ❌ ignored

console.log(car);


Output:

{ brand: "BMW", price: 50 }

✅ 6. Object.seal()

You can change existing properties,
but cannot add or delete new ones.

const phone = { brand: "Apple", price: 1000 };

Object.seal(phone);

phone.price = 1200; // ✔ allowed
phone.model = "iPhone 15"; // ❌ cannot add

delete phone.brand; // ❌ cannot delete

console.log(phone);


Output:

{ brand: "Apple", price: 1200 }

✅ 7. Object.hasOwn() / hasOwnProperty()

Checks if object contains a specific key.

console.log(user.hasOwnProperty("name"));  // true
console.log(Object.hasOwn(user, "age"));   // true
console.log(Object.hasOwn(user, "salary")); // false

✅ 8. Object.create()

Creates a new object using prototype.

const person = {
  greet() {
    console.log("Hello!");
  }
};

const me = Object.create(person);
me.greet();  // inherited method

✅ 9. Object.fromEntries()

Convert array → object

const arr = [["name", "Jugal"], ["age", 22]];

const obj = Object.fromEntries(arr);

console.log(obj);


Output:

{ name: "Jugal", age: 22 }


| Method                   | Meaning                       | Example              |
| ------------------------ | ----------------------------- | -------------------- |
| **Object.keys()**        | returns all keys              | `["name","age"]`     |
| **Object.values()**      | returns all values            | `["Jugal",22]`       |
| **Object.entries()**     | returns key-value pairs       | `[["name","Jugal"]]` |
| **Object.assign()**      | copy/merge                    | merge objects        |
| **Object.freeze()**      | no change allowed             | fully locked         |
| **Object.seal()**        | update allowed, no add/delete | semi-locked          |
| **Object.hasOwn()**      | check if key exists           | true/false           |
| **Object.create()**      | create object with prototype  | inheritance          |
| **Object.fromEntries()** | array → object                | useful in maps       |


