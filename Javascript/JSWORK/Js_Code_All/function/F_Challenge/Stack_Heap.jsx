🧠 Heap vs Stack — Deep Dive (JavaScript)
1️⃣ STACK MEMORY (Fast, Temporary)
🔹 What is Stack?

Used for function calls

Stores primitive values

Stores execution contexts

Works in LIFO (Last In, First Out)

🔹 Stored in Stack

✅ Number
✅ String
✅ Boolean
✅ undefined, null
✅ Function arguments
✅ Local variables
✅ References (not objects themselves)

📌 Example: Stack Memory
function add(a, b) {
  let sum = a + b;
  return sum;
}

add(2, 3);

Stack Flow
CALL STACK
┌──────────────────────┐
│ add()                │
│ a = 2                │
│ b = 3                │
│ sum = 5              │
└──────────────────────┘
│ Global Context       │
└──────────────────────┘


After execution → add() frame is destroyed

🔥 Key Stack Rules

✔ Very fast
✔ Memory auto-managed
✔ Short-lived
❌ Limited size
❌ Stack overflow risk (deep recursion)

2️⃣ HEAP MEMORY (Slow, Persistent)
🔹 What is Heap?

Used for objects, arrays, functions

Dynamic memory allocation

Shared across execution contexts

Managed by Garbage Collector

📌 Example: Heap Memory
let user = {
  name: "Jugal",
  age: 25
};

Memory Representation
STACK                 HEAP
┌────────────┐        ┌─────────────────┐
│ user       │ ─────▶ │ {name, age}     │
└────────────┘        └─────────────────┘


Stack stores reference, Heap stores actual data

3️⃣ Stack vs Heap (Side-by-Side)


| Feature  | Stack           | Heap              |
| -------- | --------------- | ----------------- |
| Speed    | ⚡ Very fast     | 🐢 Slower         |
| Size     | Limited         | Large             |
| Data     | Primitive, refs | Objects, arrays   |
| Lifetime | Short           | Long              |
| Access   | Automatic       | Garbage Collected |
| Error    | Stack Overflow  | Memory Leak       |


4️⃣ 🔥 Why count resets in your example
Your code:
function Ones() {
  let count = 1;
  console.log(count++);
}


count → stack

Function ends → stack frame destroyed

New call → new count

💥 Result:

1 1 1 1

5️⃣ 🔥 Closure = Heap Memory Magic
Code
function Ones() {
  let count = 1;

  return function () {
    console.log(count++);
  };
}

const counter = Ones();

Memory Shift
STACK             HEAP
counter ───────▶  count = 1


Inner function holds reference

JS engine moves count to heap

Survives after function returns

💥 Output:

1 2 3 4

6️⃣ Objects Mutation Example (Common Trap)
let a = { x: 10 };
let b = a;

b.x = 20;

console.log(a.x); // ?

Explanation
STACK           HEAP
a ─────┐
       ├────▶ { x: 20 }
b ─────┘

Output
20


⚠️ Both point to same heap object

7️⃣ Primitive Copy vs Reference Copy
Primitive
let x = 10;
let y = x;
y = 20;

console.log(x); // 10


✔ Stack copy

Object
let x = { v: 10 };
let y = x;
y.v = 20;

console.log(x.v); // 20


✔ Heap reference copy

8️⃣ Garbage Collection (VERY IMPORTANT)

Heap memory is cleaned when:
✔ No references exist
✔ Object becomes unreachable

let obj = { a: 1 };
obj = null; // eligible for GC


🚫 Stack memory doesn’t need GC

9️⃣ Real-World Node.js Impact (Interview Gold)
❌ Memory Leak Example
let cache = [];

setInterval(() => {
  cache.push({ data: new Array(1000000) });
}, 1000);


Heap grows infinitely

App crashes

✅ Stack Overflow Example
function recurse() {
  recurse();
}

recurse(); // 💥 stack overflow

🧠 Interview One-Liners (Memorize)

🔹 Stack = execution + primitives
🔹 Heap = objects + persistence
🔹 Closure = heap-backed variables
🔹 Stack overflow = too many calls
🔹 Memory leak = unreleased heap references