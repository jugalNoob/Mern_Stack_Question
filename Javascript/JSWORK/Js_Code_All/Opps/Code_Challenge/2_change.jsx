
let data={
    name:'jugal',
    roll:45,

  one:  function(){
    return `${this.name}`
    }
}

console.log(data.one())


let array = [
    'jugal in array',
    'xxx',
    'xnxx',
    function() {
        return `${this[0]}`; // access first element
    }
];

console.log(array[3]()); // 'jugal'



// 3️⃣ ✅ How to make this point to the array
// Option 1: Assign function as property of array
let array = [
    'jugal',
    'xxx',
    'xnxx'
];

array.getFirst = function() {
    return this[0];
};

console.log(array.getFirst()); // 'jugal'


Now this points to array because we called it as array.getFirst()
0000000000000000 ---------------------------->>>>>>>>>>>>>> ------------->>
let data={
    name:'jugal sharma',
    roll:69
}

let obj=data // --> reference  same localin of object

🔍 What happens:

obj does not create a new object

It just points to the same object in memory as data

✅ This is called shallow reference



let ob1=Object.assign({}  , data) // they provide me new object

🔍 What happens:

Object.assign creates a new object ({})

Copies all enumerable own properties of data into the new object

✅ Now ob1 is independent of data (shallow copy)

| Method                   | Copies?     | Affects original? | Notes                                |
| ------------------------ | ----------- | ----------------- | ------------------------------------ |
| `=` (assignment)         | ❌           | Yes               | Both variables point to same object  |
| `Object.assign({}, obj)` | ✅ (shallow) | No                | Only copies **top-level properties** |
| `{ ...obj }` (spread)    | ✅ (shallow) | No                | ES6 alternative to Object.assign     |


::::::::::::::: ---------------------------->>>> If Deep Copy ------------------>>



// Method 2: structuredClone() (Modern JS)
let ob1 = {
  name: 'Jugal',
  roll: { user1: 69 }
}

let deep = structuredClone(ob1);
Pros:

Handles most objects including Date, Map, Set.

Supports circular references.

Native, no library required.


let deep = JSON.parse(JSON.stringify(ob1)); 
Pros:

Simple & fast for plain objects.

Cons:

❌ Cannot copy functions, undefined, Date, Map, Set, RegExp,
 circular references


deep.roll.user1 = 100;

console.log(ob1.roll.user1); // 69 ✅

console.log(deep.roll.user1); // 100 ✅