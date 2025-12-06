const array=[10  , 20 , 30 , 40]
console.log(array.slice(0 ,2))
console.log(array)
console.log(array.splice(1 ,2 , 'jugal sharma'))
console.log(array)


// const slowTask = new Promise(res =>
//   setTimeout(() => res("Slow done"), 1000)
// );
// const cancel = new Promise((_, reject) =>
//   setTimeout(() => reject("Cancelled"), 200)
// );
// Promise.allSettled([slowTask, cancel])
//   .then(console.log)
//   .catch(console.log);


// ✅ Your Code
// let data = [9, 3, 1];

// for (let i = 1; i < data.length; i++) {
//     let current = data[i];
//     let j = i - 1;

//     while (j >= 0 && current < data[j]) {
//         data[j + 1] = data[j];
//         j--;
//     }

//     data[j + 1] = current;
// }

// console.log(data); // [1, 3, 9]

// 🔍 Step-by-Step Execution
// Initial Array
// data = [9, 3, 1]

// Outer Loop: for (let i = 1; i < data.length; i++)

// Starts at i = 1 because the first element (index 0) is already considered “sorted”.

// Iteration 1 (i = 1)

// current = data[1] = 3

// j = i - 1 = 0

// While Loop: while (j >= 0 && current < data[j])

// Check: 3 < data[0] = 9 → true

// Shift element:

// data[j + 1] = data[j]; // data[1] = 9


// Array now:

// data = [9, 9, 1]


// Decrement j:

// j--; // j = -1


// Exit while loop because j < 0

// Place current in correct position:

// data[j + 1] = current; // data[0] = 3


// Array now:

// data = [3, 9, 1]


// ✅ First iteration done

// Iteration 2 (i = 2)

// current = data[2] = 1

// j = i - 1 = 1

// While Loop

// Check: 1 < data[1] = 9 → true

// Shift: data[2] = data[1] → data = [3, 9, 9]

// Decrement j = 0

// Check: 1 < data[0] = 3 → true

// Shift: data[1] = data[0] → data = [3, 3, 9]

// Decrement j = -1

// Exit while loop because j < 0

// Place current in correct position:

// data[j + 1] = current; // data[0] = 1


// Array now:

// data = [1, 3, 9]

// 🔑 How It Works Conceptually

// Divide array into “sorted” and “unsorted” parts

// [sorted | unsorted]


// Pick the first element of unsorted (current)

// Compare it backwards with the sorted part

// Shift all sorted elements that are greater than current to the right

// Insert current at the correct position

// Repeat until the unsorted part is empty


// let data=[9 , 3 , 1]


//      data[j+1]=data[j]
//      data[j]=data[j+1]

// data[1] = data[0]; // data[1] becomes 9
// data[0] = data[1]; // data[0] also becomes 9
