✅ Q: What is JSON?
Ans (Simple Definition):

JSON (JavaScript Object Notation) is a lightweight format used to store and exchange data.

It is written in key–value pairs and looks like JavaScript objects.


| Feature            | **JSON (JavaScript Object Notation)**             | **BSON (Binary JSON)**                                                              |

| ------------------ | ------------------------------------------------- | ----------------------------------------------------------------------------------- |

| **Format**         | Text-based (string)                               | Binary format                                                                       |

| **Size**           | Usually larger for complex data                   | More compact; can store data efficiently                                            |

| **Data Types**     | Strings, numbers, booleans, null, arrays, objects | Supports more types: Dates, Binary data, ObjectId, Regex, in addition to JSON types |

| **Speed**          | Slower to parse and generate for large datasets   | Faster to parse and generate, optimized for storage                                 |

| **Use Case**       | Data exchange (APIs, config files)                | Database storage (MongoDB), internal data representation                            |

| **Human-readable** | Yes, easy to read and edit                        | No, not human-readable (binary)                                                     |

| **Example**        | `{"name": "Jugal", "age": 22}`                    | Binary representation of the same object                                            |


🔹 Key Points

JSON is text-based → human-readable, used for data interchange.

BSON is binary-based → optimized for storage and performance, used internally by databases like MongoDB.

BSON supports more data types than JSON (e.g., Date, ObjectId, Binary).

JSON is widely used for APIs, BSON is widely used for databases.






Nested JSON

JSON objects and arrays can be nested:

{
  "user": {
    "name": "Jugal",
    "roles": ["admin", "editor"]
  },
  "active": true,
  "projects": [
    { "name": "Project A", "status": "done" },
    { "name": "Project B", "status": "ongoing" }
  ]
}

✅ 2. JSON in JavaScript

a) JSON.stringify()

Converts a JavaScript object/array into a JSON string

Used for storing or sending data

const obj = { name: "Jugal", age: 22 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Jugal","age":22}'


Arrays example:

const arr = [1, 2, 3];
console.log(JSON.stringify(arr)); // "[1,2,3]"

b) JSON.parse()

Converts a JSON string back into a JavaScript object/array

const jsonStr = '{"name":"Jugal","age":22}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // "Jugal"
console.log(obj.age);  // 22


Important: The string must be valid JSON, otherwise it throws an error.

✅ 3. Rules of JSON

Keys must be double-quoted strings

Values can only be: object, array, string, number, boolean, or null

Cannot contain functions, undefined, or symbols

Arrays and objects can be nested

✅ 4. Examples of JSON Values
// Object
{ "name": "Jugal", "age": 22 }

// Array
[1, 2, 3, "hello"]

// String
"Hello World"

// Number
123

// Boolean
true

// Null
null

✅ 5. JS Example Combining All Types
const user = {
  name: "Jugal",
  age: 22,
  skills: ["JS", "Node", "React"],
  active: true,
  spouse: null
};

// Convert object → JSON string
const jsonStr = JSON.stringify(user);
console.log(jsonStr);

// Convert JSON string → object
const userObj = JSON.parse(jsonStr);
console.log(userObj.skills[0]); // "JS"

🔹 Summary

JSON is a data format — object, array, string, number, boolean, null

Serialize: JS → JSON string → JSON.stringify()

Deserialize: JSON string → JS object → JSON.parse()

Nested structures are allowed, but functions or undefined are not allowed