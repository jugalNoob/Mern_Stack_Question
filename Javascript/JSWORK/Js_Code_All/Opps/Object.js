
| Method      | What It Does                                                                      | When to Use                                                                 |
| ----------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **call()**  | Calls a function immediately with a given `this` and arguments (comma-separated). | When you want to borrow a method from another object and call it instantly. |
| **apply()** | Same as `call()`, but takes arguments as an **array**.                            | When arguments are already in an array.                                     |
| **bind()**  | Returns a **new function** with a fixed `this` (you call it later).               | When you want to store a function with a fixed context for future use.      |


// --------------------->>> Call() in person1  
let person1 = {
  name: "Jugal",
  greet: function(city) {
    console.log(`Hi, I'm ${this.name} from ${city}`);
  }
};

let person2 = { name: "Sharma" };

// Borrow greet from person1 and use it for person2
person1.greet.call(person2, "Delhi");

Hi, I'm Sharma from Delhi




🧩 Example: apply()
let person = {
  name: "Jugal",
  showInfo: function(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
  }
};

let data = ["Jaipur", "India"];

person.showInfo.apply({ name: "Rohit" }, data);

Rohit lives in Jaipur, India



🧩 Example: bind()
let person = {
  name: "Jugal",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};

let newPerson = { name: "Sharma" };

// Bind returns a new function with fixed 'this'
let greetFunc = person.greet.bind(newPerson);

greetFunc(); // Call it later


| Method      | Executes Immediately? | Arguments Format | Returns         |
| ----------- | --------------------- | ---------------- | --------------- |
| **call()**  | ✅ Yes                 | Comma-separated  | Function result |
| **apply()** | ✅ Yes                 | Array            | Function result |
| **bind()**  | ❌ No                  | Comma-separated  | New function    |




✅ Example Code

const customer = {
  firstName: "Jugal",
  lastName: "Sharma",
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const employee = {
  firstName: "Rohit",
  lastName: "Kumar"
};

// Use customer’s function for employee
console.log(customer.getFullName.call(employee));


💡 Real-life Meaning

employee does not have getFullName().

Instead of duplicating the same method, we borrow it from customer using call().

call() changes this → now inside getFullName,
this.firstName and this.lastName refer to employee.


::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  Shallow Copy
let obj={
    name:'jugal sharma'
}

let obj1={...obj}
obj1.name='karan sharma'
console.log(obj)
console.log(obj1)




// -------------------->>Deep Copy ------------------>>

let obj = {
    name: 'jugal sharma',
    class: { gender: 'male' }
};

let obj1 = JSON.parse(JSON.stringify(obj)); // deep copy ✅

obj1.class.gender = 'female';

console.log(obj);

console.log(obj1);


/// -------->>>>>PARSE  Stringify--------------------->>

| Method                      | Converts To           | Can Handle `null` / `undefined`?                      | Works On                                    | Output Example                                                               | Notes                                        |
| --------------------------- | --------------------- | ----------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------- |
| **`String(value)`**         | String (primitive)    | ✅ Yes                                                 | Any type                                    | `String(100)` → `"100"`<br>`String(null)` → `"null"`                         | Safe universal conversion                    |
| **`value.toString()`**      | String (primitive)    | ❌ No (throws error if value is `null` or `undefined`) | Works on numbers, booleans, arrays, objects | `(100).toString()` → `"100"`<br>`[1,2].toString()` → `"1,2"`                 | Must call on an existing object/value        |
| **`JSON.stringify(value)`** | JSON-formatted string | ✅ Yes                                                 | Any type (including objects/arrays)         | `JSON.stringify({a:1})` → `'{"a":1}'`<br>`JSON.stringify([1,2])` → `"[1,2]"` | Used for **data storage / APIs / deep copy** |

| Use Case                                 | Best Method                       |
| ---------------------------------------- | --------------------------------- |
| Convert any value safely to string       | `String(value)`                   |
| Quick display or logging of basic values | `.toString()`                     |
| Send data to APIs or store in files      | `JSON.stringify()`                |
| Clone / copy objects deeply              | `JSON.parse(JSON.stringify(obj))` |

let io = 100;
console.log(typeof(io))
console.log(typeof(io.toString()));
console.log(typeof(JSON.stringify(io)))
console.log(typeof(String(io)))


console.log(String(100));          // "100"
console.log((100).toString());     // "100"
console.log(JSON.stringify(100));  // "100"

console.log(String(null));         // "null"
// console.log(null.toString());   // ❌ Error
console.log(JSON.stringify(null)); // "null"

console.log(String([1, 2]));       // "1,2"
console.log([1, 2].toString());    // "1,2"
console.log(JSON.stringify([1, 2])); // "[1,2]"
