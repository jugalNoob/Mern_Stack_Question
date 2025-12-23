✅ One-Line Interview Answer

Properties are key-value pairs of objects, accessed by 
keys. Elements are indexed items of arrays, accessed by
 numeric indexes. Arrays can have both elements and properties,
  but only numeric indexes count as elements.



4️⃣ Special Notes (Interview Traps)

Arrays are objects internally:

typeof [] // "object"


You can add a property to an array:

let arr = [1,2];
arr.name = 'Jugal';
console.log(arr.name); // 'Jugal' (property, not element)
console.log(arr.length); // 2 (length counts only elements)


Property ≠ element