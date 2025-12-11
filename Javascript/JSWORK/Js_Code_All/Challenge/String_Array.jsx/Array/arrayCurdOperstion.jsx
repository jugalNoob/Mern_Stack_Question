





000::::::: --------------->>> Create New Array ---------------->>
let data=[10 , 20 , 30 , 40]
let setarra=new Set([10 , 20 , 30 , 40])
console.log(setarra)


0:::Update ----------------->>>


data.splice(0 , 0 , 'jugal')
console.log(data)




0:::Add array Importnat ------------------>>>

let data = [10,20,30,40,50];
data.push(60)//last array 
data.unshift(5) //first array
console.log(data)

let data = [10,20,30,40,50];

data.splice(0 , 0 , 'jugal')
console.log(data)


0:: Delete Array ------------<><><><></></></>

✅ 1. splice() → BEST & MOST USED ----

Deletes elements by index and changes the original array.

let data = [10, 20, 30, 40, 50];

// delete 30 (index 2)
data.splice(2, 1);

console.log(data); // [10, 20, 40, 50]

let data = [10,20,30,40,50];

data.pop(); //last elemnt 
data.shift()//first elemnt
console.log(data); // [10,20,30,40]


✅ 4. filter() → delete by condition

Creates a new array, original array not changed.

let data = [10,20,30,40,50];

// delete 30
let res = data.filter(x => x !== 30);

console.log(res); // [10,20,40,50]
