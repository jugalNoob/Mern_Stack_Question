


Understanding Garbage Collection in JavaScript
Garbage Collection (GC) in JavaScript is automatic and based on reference counting and mark-and-sweep algorithms.

When Does Garbage Collection Occur?
No More References Exist

N

let obj = { name: "Alice" };
obj = null;  // Now the object is garbage collected


2 . Objects Inside Functions Are Collected After Execution

function createObject() {
    const tempObj = { key: "value" };
}
createObject();  // tempObj is garbage collected after function ends


3 . Circular References Can Prevent Garbage Collection

let a = {};
let b = {};
a.ref = b;
b.ref = a;  // Circular reference - not collected in older JS engines


Optimized Code with Proper Memory Handling


// Declare object properly before using it
const myObj = { name: "wittcode", soccer: "fun" };

// Modify object after declaration
myObj.soccer = "Not Fun";

// Remove reference to allow garbage collection
myObj = null;

// Function scope object gets garbage collected after execution
function myFunction() {
    const tempObj = { name: "wittcode", soccer: "fun" };
}

myFunction(); // tempObj is garbage collected after function call ends


Best Practices for Memory Management
✅ Use WeakMap and WeakSet for Automatic Garbage Collection


let weakMap = new WeakMap();
let obj = { name: "John" };
weakMap.set(obj, "some value");

// If `obj` is removed, it's garbage collected automatically
obj = null;


Avoid Circular References


let objA = {};
let objB = {};
objA.ref = objB;
objB.ref = objA; // ❌ Memory leak risk

// ✅ Solution: Use WeakMap instead

✅ Manually Remove Large Objects If No Longer Needed

let bigData = new Array(1000000).fill("data");
bigData = null; // Mark for garbage collection


// Final Takeaway 🚀
// ✅ Garbage collection is automatic in JavaScript
// ✅ Use null to remove references when needed
// ✅ Avoid circular references that prevent garbage collection
// ✅ Use WeakMap and WeakSet for better memory management