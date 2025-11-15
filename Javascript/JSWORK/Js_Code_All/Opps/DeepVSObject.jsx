    q what memory 

    Q 
    


    Q only object chaing inob ject not nesty obnject in sallow cpoy 

    Q but deep copy chec besty arrayt ?

1. Shallow Copy

Creates a new object, but nested objects still share references.

Only the first-level properties are copied.


// let obj={
//   name:'jugal'
// }


// let objs=obj

// objs.name='karan sharma'

// console.log(obj)
// console.log(objs)




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