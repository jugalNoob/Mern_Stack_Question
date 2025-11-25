function reachHome(callback) {
    console.log("I reached home");
    callback();  // call you
}

function callYou() {
    console.log("I am calling you now");
}

reachHome(callYou);


// let size = 5;
// let data = new Array(size);
// let current = 0;
// let rear = -1;
// let front = -1;

// function AddQueu(value) {
//     if (current !== size) {

//         if (rear === size - 1) {
//             rear = 0;
//         } else {
//             rear++;
//         }

//         data[rear] = value;
//         current++;

//         if (front === -1) {
//             front = rear;
//         }
//     } else {
//         console.log("Queue is full, cannot insert:", value);
//     }
// }

// function Deque() {
//     // Queue empty
//     if (current === 0) {
//         console.log("Queue is empty, cannot delete");
//         return;
//     }

//     // Remove element
//     data[front] = null;
//     current--;

//     // If queue becomes empty after deletion → reset
//     if (current === 0) {
//         front = -1;
//         rear = -1;
//         return;
//     }

//     // Otherwise move front circularly
//     if (front === size - 1) {
//         front = 0;
//     } else {
//         front++;
//     }
// }

// const display = () => {
//     for (let i = 0; i < data.length; i++) {
//         console.log(i, "→", data[i]);
//     }
// };

// // Test
// AddQueu(100);
// AddQueu(20);
// AddQueu(30);
// AddQueu(40);
// AddQueu(50);
// AddQueu(100);   // overflow test
// AddQueu(100);   // overflow test
// Deque();
// Deque();
// display();
