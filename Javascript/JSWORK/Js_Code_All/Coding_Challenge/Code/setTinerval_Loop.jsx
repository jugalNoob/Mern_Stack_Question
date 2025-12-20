
let count = 10; // Set an initial value for count

const intervalId = setInterval(() => {
  count--;

  console.log(count);

  if (count === 0) {
    clearInterval(intervalId); // Stop the interval when count reaches 0
  }
}, 1000);




//////////////////////////////////////Count System New
let count = 0;
const interval = 1000; // Time interval in milliseconds (e.g., 1000ms = 1 second)

const incrementCount = () => {
  count += 20; // Increment count by 20
  console.log(`${count}%`);
  
  if (count === 100) {
    clearInterval(timer); // Stop the interval when count reaches 100%
    console.log("Count reached 100%");
  }
};

const timer = setInterval(incrementCount, interval);