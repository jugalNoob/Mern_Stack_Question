+-----------------------+       ← Higher Memory Address
|        HEAP           |  <- Dynamic memory
|-----------------------|
| obj = {name:"Jugal"}  |  <- Stored in heap
| arr = [1,2,3]         |  <- Stored in heap
| closure variables      |
| class instances        |
+-----------------------+
|        STACK          |  <- Fixed memory (LIFO)
|-----------------------|
| add() execution frame  |  <- Function call
|   a = 5               |  <- Primitive on stack
|   b = 10              |
|   sum = 15            |
|-----------------------|
| main() execution frame |  <- Function call
|   num = 100           |
|   name = "Jugal"      |
+-----------------------+       ← Lower Memory Address



🔹 Explanation

Stack Memory

Stores function calls, primitives, references to heap objects

LIFO (Last In, First Out)

Automatically cleaned after function execution

Heap Memory

Stores objects, arrays, closures, class instances

Dynamic, larger memory space

Garbage Collector removes unreferenced objects

Reference Link

let obj = { name: "Jugal" };
let ref = obj; // stack stores reference, heap stores actual object


Closures

Functions can keep heap objects alive even after outer function ends

function outer() {
    let secret = 42; // heap memory
    return function inner() {
        console.log(secret);
    }
}
let fn = outer(); // secret remains in heap
fn(); // 42