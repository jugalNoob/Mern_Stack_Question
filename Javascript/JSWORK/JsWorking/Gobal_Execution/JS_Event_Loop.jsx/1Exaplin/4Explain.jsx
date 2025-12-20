1️⃣ OBJECTS IN JS — MEMORY OVERVIEW
Two types of memory:

Stack Memory (Code Face)

Stores primitive values (number, string, boolean, undefined, null)

Stores references to objects/functions

Heap Memory (Memory Face)

Stores objects, arrays, and functions themselves (actual content)

Example:
let obj = {
    name: 'Jugal Sharma',
    roll: 45
};

🔹 Memory Representation:

Stack (Code Face):

obj  → reference #123 (points to heap)


Heap (Memory Face):

#123 → {
        name: "Jugal Sharma",
        roll: 45
      }


✅ Key point: obj on the stack just stores a reference, not the object itself.

2️⃣ OBJECT ACCESS & MODIFICATION
obj.name = "Jugal S.";


JS looks at stack, finds obj → #123

Goes to heap memory #123

Modifies the property name in heap

Heap #123:
{
  name: "Jugal S.",
  roll: 45
}

3️⃣ COPYING OBJECTS — REFERENCE VS VALUE
Primitive Copy
let a = 10;
let b = a; // copies value
b = 20;
console.log(a); // 10 (original unchanged)

Object Copy
let obj2 = obj; // copies reference
obj2.roll = 50;
console.log(obj.roll); // 50 (original changed!)


💡 Why? Both obj and obj2 point to same heap memory.

4️⃣ FUNCTION & OBJECT INTERACTION
function update(o) {
    o.name = "Updated Name";
    o.roll = 99;
}

update(obj);
console.log(obj);


Stack (Code Face)

update → reference
o      → #123 (points to same heap as obj)


Heap (Memory Face)

#123 → {
  name: "Updated Name",
  roll: 99
}


✅ Function can mutate object properties, but cannot change reference itself:

function changeRef(o) {
    o = { name: "New", roll: 1 }; // new object
}
changeRef(obj);
console.log(obj); // original object unchanged

5️⃣ ASCII DESIGN (Your Style)
┌───────────────────────────────┐
│         Code Face (Stack)     │
├───────────────┬───────────────┤
│ obj           │ → #123         │
│ update()      │ function ref   │
└───────────────┴───────────────┘
           │
           ▼
┌───────────────────────────────┐
│         Heap Memory           │
├───────────────────────────────┤
│ #123 → {                      │
│         name: "Jugal Sharma", │
│         roll: 45              │
│       }                        │
└───────────────────────────────┘

🔹 Function Call with Object
Call Stack:
──────────────
| update(obj)|  <-- o → #123
──────────────
| Global     |  <-- obj → #123
──────────────

Heap #123:
{ name: "Updated Name", roll: 99 }

✅ INTERVIEW GOLDEN POINTS

Objects are stored in heap, variables in stack hold references.

Assigning an object copies reference, not object itself.

Functions can mutate object properties, but cannot change reference outside.

Multiple references → same heap → any mutation affects all references.

If you want, I can draw the full “JS Execution + Function Call + Object Mutation + Return Flow” diagram in your style next.



1️⃣ Color Coding for JS Execution Visualization


| Memory                  | Color               | What it Represents                                             |
| ----------------------- | ------------------- | -------------------------------------------------------------- |
| **Stack / Code Face**   | Blue                | Variables, function calls, primitives (values stored directly) |
| **Heap / Memory Face**  | Green               | Objects, arrays, functions (reference type storage)            |
| **Reference / Pointer** | Black / Dashed line | Shows that a stack variable points to a heap object            |
| **Function Calls**      | Orange              | Stack frames for function execution                            |




ASCII Layout Example

We’ll represent stack frames, heap objects, and references clearly.