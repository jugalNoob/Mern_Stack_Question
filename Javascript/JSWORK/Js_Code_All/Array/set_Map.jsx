
🔹 Key Differences Table


| Feature            | Set                                | WeakSet                                 |
| ------------------ | ---------------------------------- | --------------------------------------- |
| Values             | Any type (primitives + objects)    | Only objects                            |
| Garbage collection | Values stay until removed manually | Objects auto-collected if no references |
| Iteration          | Yes (`for…of`, `.forEach`)         | No (not iterable)                       |
| Size property      | `.size` available                  | Not available                           |
| Use case           | Unique values storage              | Weak object tracking                    |





20::Set |||||||||||||||||||||||||||||||||||||||||
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	Returns the number of elements in a Set



set.add(1);
set.add("hello");
set.add({ id: 1 });
console.log(set.size); // 3
console.log(set.has(1)); // true

for (let val of set) {
  console.log(val);
}




21::WeakSet
No iteration: Unlike Set, WeakSet does not have methods like keys(), values(), or entries(), and it is not iterable.
Methods of WeakMap:
set(key, value): Adds a key-value pair to the WeakMap.

get(key): Retrieves the value associated with a key.

has(key): Checks if a key exists in the WeakMap.

delete(key): Removes a key-value pair from the WeakMap.


// WeakSet Example
let ws = new WeakSet();
let obj1 = { name: "Jugal" };
let obj2 = { id: 101 };

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true
ws.delete(obj2);

// If obj1 = null → garbage collector cleans it from WeakSet automatically.





00::Map Vs WeakMap
👉 In interviews, you can sum it up in one line:
“Use Map when you need key-value storage with 
iteration. Use WeakMap when you want to store object-based private data without preventing garbage collection.”



22:WeakMaps
No iteration: Unlike Map, WeakMap does not have methods like keys(), values(), or entries(), and it is not iterable.

Methods of WeakMap:
set(key, value): Adds a key-value pair to the WeakMap.

get(key): Retrieves the value associated with a key.

has(key): Checks if a key exists in the WeakMap.

delete(key): Removes a key-value pair from the WeakMap.





19::Maps ||||||||||||||||||||||||||||||||||||||||||||
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map



// Map Example
let map = new Map();
map.set("name", "Jugal");
map.set(1, "Number Key");
map.set({id: 1}, "Object Key");

console.log(map.size); // 3
for (let [k, v] of map) {
  console.log(k, v);
}

// WeakMap Example
let wm = new WeakMap();
let obj = { secret: "data" };

wm.set(obj, "hidden value");
console.log(wm.get(obj)); // "hidden value"

// If obj = null or goes out of scope → 
// garbage collector removes it from WeakMap automatically.
🔹 Key Differences Table

| Feature            | Map                              | WeakMap                              |
| ------------------ | -------------------------------- | ------------------------------------ |
| Keys               | Any type (objects + primitives)  | Only objects                         |
| Garbage collection | Keys stay until removed manually | Keys auto-collected if no references |
| Iteration          | Yes (`for…of`, `.forEach`)       | No (not iterable)                    |
| Size property      | `.size` available                | Not available                        |
| Use case           | General key-value storage        | Private data, memory-safe caching    |
