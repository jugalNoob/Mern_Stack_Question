✅ Interview Tip

Array literals [ {...}, {...} ] automatically assign indexes 
starting from 0. Using 0: inside [] is a syntax error.
Use {0: {...}, 1: {...}} if you need an object 
with numeric keys.



// Array of objects
let data = [
    { name: 'jugal', roll: 45 },
    { name: 'karan', roll: 25 },
    { name: 'jugal', roll: 45 },
    { student: [10, 20] },
    { count: { number: [10, 20, 30] } }
];

// 1️⃣ Update object property
data[0].name = 'jugal sharma'; // change name
data[4].schoolname = 'KV'; // works because index 4 exists add in 
data[5] = { schoolname: 'KV' };  //add array object

// 2️⃣ Check if variable is array
console.log(Array.isArray(data)); // true

// 3️⃣ Delete a property
delete data[1].name; // removes 'name' from second object

// 4️⃣ Access individual object properties
console.log(data[0].name); // 'jugal sharma'
console.log(data[1].name); // undefined
console.log(data[2].name); // 'jugal'
console.log(data[4].count.number[1]); // 20
// 5️⃣ Print entire array
console.log(data);

// 6️⃣ Loop through array using for...of
for (let obj of data) {
    console.log(obj.roll); // prints roll if exists, undefined otherwise
}

// 7️⃣ Optional: loop safely with optional chaining
for (let obj of data) {
    console.log(obj.roll ?? 'No roll'); // 'No roll' if roll is undefined
}

// // 8️⃣ Loop using forEach
// data.forEach((obj, index) => {
//     console.log(`Index ${index}:`, obj);
// });

// // 9️⃣ Filter objects with roll > 30
// const highRoll = data.filter(obj => obj.roll > 30);
// console.log('High roll students:', highRoll);

// // 🔟 Map to get all names
// const names = data.map(obj => obj.name ?? 'No name');
// console.log('All names:', names);

