✅ Summary (Timing Functions)


| Function              | Description                |
| --------------------- | -------------------------- |
| `setTimeout(fn, ms)`  | Run once after delay       |
| `clearTimeout(id)`    | Cancel timeout             |
| `setInterval(fn, ms)` | Run repeatedly at interval |
| `clearInterval(id)`   | Cancel interval            |


⏰ JavaScript Timing Events
🔹 1. setTimeout()

👉 Executes a function once after a delay.

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);


✅ Example use:

Show a message after some time

Redirect after delay

🔹 2. clearTimeout()

👉 Cancels a setTimeout.

let timer = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timer); // Cancels the timeout

🔹 3. setInterval()

👉 Executes a function repeatedly at a fixed interval.

let count = 0;
let interval = setInterval(() => {
  count++;
  console.log("Running every 1 second:", count);
}, 1000);


✅ Example use:

Live clocks

Auto-refreshing data

Animations

🔹 4. clearInterval()

👉 Cancels a setInterval.

setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped interval after 5s");
}, 5000);

🔹 5. Practical Examples
⏳ Countdown Timer
let timeLeft = 5;

let countdown = setInterval(() => {
  console.log(timeLeft);
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdown);
    console.log("Time’s up!");
  }
}, 1000);

⏳ Redirect After Delay
setTimeout(() => {
  window.location.href = "https://example.com";
}, 5000);

⏳ Live Clock
setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
