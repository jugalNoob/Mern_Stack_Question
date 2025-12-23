/// Wait Time Out  --------------------->

// 🔥 Why setTimeout(fn, 0) is NOT immediate
✅ Best & Accepted: setTimeout Polyfill using setInterval
✔ Own Pure setTimeout Implementation
function mySetTimeout(callback, delay) {
  const startTime = Date.now();

  const timer = setInterval(() => {
    if (Date.now() - startTime >= delay) {
      clearInterval(timer);
      callback();
    }
  }, 1);
}

✅ Usage
mySetTimeout(() => {
  console.log("jugal sharma");
}, 5000);

🧠 How this works (step-by-step)

1️⃣ Store start time
2️⃣ Keep checking current time
3️⃣ Once delay is reached
4️⃣ Stop interval
5️⃣ Execute callback

This mimics real setTimeout behavior