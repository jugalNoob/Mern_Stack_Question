Feature,Stack (Values),Heap (Objects/Arrays/Functions)
Data Type,"Primitives (e.g., 10, true)","Reference Types (e.g., {}, [], function)"
Size,Fixed (Small),Variable (Large)
Allocation,Static (at compile/run time),Dynamic (during execution)
Access,Very Fast,Slower (requires following a pointer)
Analogy,A pocket (put small change here),A warehouse (store large furniture here)1


️⃣ Two kinds of data in JavaScript

JavaScript splits data into two categories:

🔹 Primitive (value types)
number, string, boolean, null, undefined, symbol, bigint

🔹 Non-primitive (reference types)
object, array, function, date, map, set

2️⃣ Why primitives are NOT stored in heap
Example
let x = 10
let y = x


Memory:

STACK
-------
x = 10
y = 10


Why stack is perfect for primitives?

✔ Fixed size
✔ Known at compile/runtime
✔ Fast allocation
✔ Easy to delete (LIFO)

Primitives are small, immutable, fixed-size values.

So:

Stack is fast

No GC needed

When function ends → value disappears



3️⃣ Why objects/arrays/functions ARE stored in heap
Example
let obj = { a: 1 }


Memory:

STACK
-------
obj → 0xF123

HEAP
-------
0xF123 → { a: 1 }

WHY heap?
🔥 Reason 1: Dynamic size

Objects can:

obj.b = 2
obj.c = 3
delete obj.a


👉 Size changes at runtime
❌ Stack cannot resize memory
✅ Heap can

🔥 Reason 2: Shared references
let a = { x: 1 }
let b = a


Both point to same object

a ─┐
   ├──► 0xF123 → { x: 1 }
b ─┘


Stack copying would duplicate data ❌
Heap reference avoids duplication ✅

🔥 Reason 3: Lifetime is unpredictable
function test() {
  return { x: 10 }
}


Object survives after function returns

❌ Stack would be destroyed
✅ Heap survives via reference

🔥 Reason 4: Functions are executable objects
function add(a, b) {
  return a + b
}


A function stores:

Code

Scope

Metadata

👉 Too large & complex for stack

4️⃣ Why NOT store objects by value? (VERY IMPORTANT)

Imagine this:

let a = { x: 1 }
let b = a
b.x = 100


If stored by value:

a = { x: 1 }
b = { x: 1 }  // copy


Then:

b.x = 100


Would NOT affect a — but in JS it DOES.

So:

JS must use references to preserve object identity.

5️⃣ Why strings are “special”
let s1 = "hello"
let s2 = s1


Strings are:

Primitive

Immutable

Engine may:

Store in stack

Or intern them in heap

You can’t mutate them anyway

So behavior stays consistent.

6️⃣ GC perspective (VERY IMPORTANT)

Heap objects:

Can live long

Can be shared

Need cleanup
→ Garbage Collector manages heap

Stack:

Auto cleanup

No GC

Very fast

7️⃣ Interview-grade answer (🔥)

“Primitive values are stored directly because they are small, immutable, and fixed-size.
Objects, arrays, and functions are stored in heap because their size is dynamic, they can be shared across references, and their lifetime is unpredictable. Therefore, JavaScript uses references instead of value copying.”

8️⃣ One-line killer answer

Stack stores values; heap stores objects because objects are dynamic, shared, and long-lived.

9️⃣ Visual memory rule (remember forever)
VALUE → STACK
OBJECT → HEAP
NAME → REFERENCE
