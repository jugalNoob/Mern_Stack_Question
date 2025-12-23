// 1️⃣ Object with a name
let data = {
    name: 'jugal',
    roll: 45
};

// 2️⃣ Function that uses this
function Test(secondName){
    return `${this.name} is my first name, and ${secondName} is my second name`;
}

// 3️⃣ Using call
console.log('Using call:');
console.log(Test.call(data, 'karan sharma')); 
// Output: "jugal is my first name, and karan sharma is my second name"

// 4️⃣ Using apply
console.log('Using apply:');
console.log(Test.apply(data, ['karan sharma'])); 
// Output: "jugal is my first name, and karan sharma is my second name"

// 5️⃣ Using bind
console.log('Using bind:');
let boundTest = Test.bind(data); // returns a new function with `this` fixed to data
console.log(boundTest('karan sharma')); 
// Output: "jugal is my first name, and karan sharma is my second name"

// 6️⃣ Another object to show `this` changes
let data2 = { name: 'sharma' };
console.log(Test.call(data2, 'jugal')); 
// Output: "sharma is my first name, and jugal is my second name"

// 7️⃣ Array example with a function as property
let array = ['apple', 'banana'];
array.getFirst = function() {
    return this[0]; // this points to the array because it’s called as array.getFirst()
};
console.log('Array method:', array.getFirst()); // Output: "apple"

// 8️⃣ Trying to call function inside array as element (needs call/apply)
let arrFunc = [
    'one',
    'two',
    function() { return this[0]; }
];

// Incorrect: arrFunc[2]() → this is global/undefined
// Correct:
console.log('Array element function with call:', arrFunc[2].call(arrFunc)); // Output: "one"
