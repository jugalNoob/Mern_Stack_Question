🔹 Primitive Types

The simplest, immutable (cannot be changed) data types.

Stored directly in memory (value is copied).

Compared by value.

List of Primitives (7 in JS):

String

Number

BigInt

Boolean

Undefined

Null

Symbol

✅ Example:

let a = 10;
let b = a; 
b = 20;

console.log(a); // 10 (unchanged, because copy is made)


🔹 Non-Primitive (Reference) Types

More complex data types.

Mutable (can be changed).

Stored as a reference (memory address), not the actual value.

Compared by reference, not by value.

Examples:

Object

Array

Function

Date

RegExp

Map, Set, WeakMap, WeakSet


let obj1 = { name: "Jugal" };
let obj2 = obj1; // copy reference

obj2.name = "Karan";

console.log(obj1.name); // "Karan" (both point to same memory)



| Feature    | Primitive                                                | Non-Primitive (Reference)        |
| ---------- | -------------------------------------------------------- | -------------------------------- |
| Types      | String, Number, Boolean, Null, Undefined, Symbol, BigInt | Objects, Arrays, Functions, etc. |
| Storage    | Stored directly by value                                 | Stored as reference (pointer)    |
| Mutability | Immutable                                                | Mutable                          |
| Comparison | By value                                                 | By reference                     |
| Example    | `let x = 5`                                              | `let arr = [1,2,3]`              |
