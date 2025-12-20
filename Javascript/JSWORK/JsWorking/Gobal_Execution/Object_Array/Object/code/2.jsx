1️⃣ Current Situation
let obj = { name: "Jugal", roll: 45 };
let obj1 = obj;   // reference copy


Memory:

obj  ----┐
        |
obj1 --->#123 { name: "Jugal", roll: 45 }


✅ Both obj and obj1 point to the same heap object (#123).

2️⃣ Mutating Properties

If you change a property, both see it:

obj1.name = "Updated Name";

console.log(obj.name);   // "Updated Name"
console.log(obj1.name);  // "Updated Name"


Memory after mutation:

obj  ----┐
        |
obj1 --->#123 { name: "Updated Name", roll: 45 }


✅ Explanation: Both variables point to the same heap object. Changing the object updates the heap, so all references see the change.

3️⃣ Reassignment Breaks Sharing
obj1 = { name: "New Object", roll: 50 };


Memory after reassignment:

obj  --->#123 { name: "Updated Name", roll: 45 }
obj1 --->#124 { name: "New Object", roll: 50 }


❌ Now they don’t share. Reassignment makes obj1 point to a new object.

4️⃣ Key Rule for “Both Change Together”

✅ Only mutate properties.

❌ Don’t reassign the variable.

Example that works:

let obj = { a: 1 };
let obj1 = obj;

obj1.a = 10;

console.log(obj.a);  // 10
console.log(obj1.a); // 10


Here obj and obj1 are always synced because they share the same heap object.

🔹 Important Note

If you need a new independent copy, you use:

let obj2 = { ...obj };  // shallow copy


Now obj2 can change without affecting obj.

So the trick:

To have both reflect changes, always mutate the object’s properties.

Do not assign a new object to one of the variables.




::::::::::::::::::::: ------------------->>>>>>>>>>>>>>>


let obj = {
  name: 'Jugal Sharma',  // fixed quote and comma
  roll: 45
};

let obj1 = obj;  // obj1 now references the same object

console.log(obj1);  // → { name: 'Jugal Sharma', roll: 45 }
console.log(obj);   // → { name: 'Jugal Sharma', roll: 45 }

console.log(obj === obj1);  // → true (same reference!)