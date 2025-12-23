
🔥 Interview Tip:

“Shallow copy copies only top-level properties, deep copy
 copies everything recursively.”

Use JSON.parse(JSON.stringify(obj)) for plain objects.

Use structuredClone for complex objects or modern codebases.




/////////////// ------------------This is deep copy Explain un change 
let ob1={
 name:'jugal',
 roll:{
    user1:69
 }
}

let obj=ob1

ob1.roll.user1 = 45

console.log(ob1)
console.log(ob1)




Example
let obj = { 
  name: 'Jugal',
  address: { city: 'Delhi', pin: 110001 }
};

// Shallow copy using spread operator
let copy = { ...obj };

copy.name = 'Karan';
copy.address.city = 'Mumbai';

console.log(obj.name);        // Jugal (first-level is separate)
console.log(copy.name);       // Karan

console.log(obj.address.city); // Mumbai (nested object still shared)
console.log(copy.address.city); // Mumbai


✅ Notice: address is still shared, because it’s a nested object.

Other shallow copy methods:

Object.assign({}, obj)

Array shallow copy: arr.slice() or [...arr]








2. Deep Copy

Creates a completely independent copy, including nested objects/arrays.

Changes in the copy do not affect the original.



let ob1={
 name:'jugal',
 roll:{
    user1:69
 }
}

let obj=ob1

ob1.roll.user1 = 45

console.log(ob1)
console.log(ob1)

Example
let obj = { 
  name: 'Jugal',
  address: { city: 'Delhi', pin: 110001 }
};

// Deep copy using JSON
let deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.name = 'Karan';
deepCopy.address.city = 'Mumbai';

console.log(obj.name);        // Jugal
console.log(deepCopy.name);   // Karan

console.log(obj.address.city);  // Delhi
console.log(deepCopy.address.city); // Mumbai


✅ Here, nested objects are fully independent.

Other deep copy methods:

Using structuredClone(obj) (modern JS)

let deepCopy = structuredClone(obj);


Using libraries like Lodash: _.cloneDeep(obj)