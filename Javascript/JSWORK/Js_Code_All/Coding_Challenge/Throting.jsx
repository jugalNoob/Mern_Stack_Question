5️⃣ Comparison


| Feature  | Debounce                           | Throttle                      |
| -------- | ---------------------------------- | ----------------------------- |
| Trigger  | After **no events** for X ms       | At **most once** every X ms   |
| Use case | Search input, resize, autocomplete | Scroll, mouse move, key press |
| Example  | Wait for user to **stop typing**   | Check scroll **every 200ms**  |


🔑 Key Points:

Debounce delays execution until after activity stops

Ideal for: search boxes, resize, input typing, button clicks

Prevents spam API calls or multiple event triggers





🔑 Key Points
Event Type

| Event Type     | Use Case                              |
| -------------- | ------------------------------------- |
| Input / typing | Search autocomplete, form validation  |
| Click / button | Prevent double clicks or spam actions |
| Scroll         | Infinite scroll, lazy loading         |
| Resize         | Recalculate layout / charts           |


function debounce(fn, delay) {
    let timeId;
    return function (...args) {
        clearTimeout(timeId);           // cancel previous timer
        timeId = setTimeout(() => {     // save new timer
            fn(...args);
        }, delay);
    }
}

// Function to run
const search = (msg) => console.log(msg);

// Create debounced version
const searchWaitUser = debounce(search, 1000);

// Simulate rapid calls
searchWaitUser('hi');
searchWaitUser('hello');
searchWaitUser('jugal');
searchWaitUser('jugal sharma');  // Only this will log after 1s




::::::::::::::: Throttle    :::::::::::::::::::::::::

//1:: email sending delay timer

function throll(fn  , delay){

    let lastcall=0
    return function(...ages){

    }

}

function sendChat(message){
    console.log('sending message')
}


let sendChatThrolle=throll(sendChat , 2*1000)



🔑 Use Cases of Throttle

| Event Type   | Example / Use Case                    |
| ------------ | ------------------------------------- |
| Scroll       | Lazy loading / infinite scroll        |
| Resize       | Window resizing calculations          |
| Button Click | Limiting spammy clicks                |
| Mouse Move   | Tracking movement without freezing UI |



function throttle(fn, delay) {
  let lastCall = 0; // stores the last time the function was called

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args); // call the real function
    }
  };
}

function MessageSend(message) {
  console.log("📨 Message sent:", message);
}

const senderio = throttle(MessageSend, 2000);

// Test
senderio("Hello"); // ✅ Runs immediately
senderio("Again quickly"); // ❌ Ignored (within 2 seconds)
setTimeout(() => senderio("After 2s"), 2100); // ✅ Runs again



Call throttledSendEmail("Alice", "Hello!")
                |
                V
  (...args) collects -> args = ["Alice", "Hello!"]  (Rest)
                |
                V
          fn(...args) expands -> sendEmail("Alice", "Hello!")  (Spread)
                |
                V
  sendEmail executes -> console.log("Alice: Hello!")



  function sum(...numbers)
        ^
        | Rest gathers everything into an array
sum(1,2,3,4) -> numbers = [1,2,3,4]


function greet(greeting, ...names) {
    console.log(greeting);
    console.log(names);
}

greet("Hello", "Alice", "Bob", "Charlie");





///////// --------------->>How is workuibg :::::::::::::::::


🧩 2. Step-by-step explanation

➤ Step 1:

function Throttling(fn, delay)


You define a higher-order function, meaning it returns another function.
It accepts:

fn → the main function you want to throttle

delay → time (in milliseconds) that must pass before calling fn again



➤ Step 2:
let lastCall = 0;


This variable will remember the last time fn was executed (in milliseconds).

Initially, it’s 0, so the first call can happen immediately.


➤ Step 3:
return function(arry) {
  const now = new Date();


This is the function that actually gets called when you trigger the throttled function.

Every time this returned function runs, it records the current timestamp in now.




➤ Step 4:
if (now - delay >= lastCall)


This condition checks whether enough time has passed since the last function call.





👉 Mathematically:

(current time - delay) >= lastCall


If true → the function is allowed to execute again.
If false → it means not enough time has passed (so it ignores the call).


➤ Step 5:
lastCall = now;
return fn(...arry);


When the condition is true:

It updates lastCall to the current time (to mark when it ran last).

Then it executes the original function (fn) by spreading the arguments (...arry).

🕹️ Example in action

Let’s test it with a simple example 👇

function Throttling(fn, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();
    console.log(`now: ${now}, delay: ${delay}, lastCall: ${lastCall}`);

    // ✅ Correct version
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    } 
  };
}

function logMsg(msg) {
  console.log("Running:", msg, "at", new Date().toLocaleTimeString());
}

// const throttled = Throttling(logMsg, 3000);

// throttled("A"); // runs
// throttled("B"); // ignored
// setTimeout(() => throttled("C"), 4000); // runs after 4s


👇 Now assume:
lastCall = 1000
now = 4000
delay = 3000

🔹 Option A: now - delay >= lastCall

Substitute numbers:

4000 - 3000 >= 1000
1000 >= 1000  ✅ true


→ works in this case.

But let’s test earlier:
If now = 2000 (only 1s passed),

2000 - 3000 >= 1000
-1000 >= 1000 ❌ false


✅ Correctly blocks.

So it looks okay, but it’s confusing and error-prone, because it’s doing math in a reverse direction — we’re subtracting delay from the current time, which makes reading it harder.

🔹 Option B: now - lastCall >= delay

Substitute numbers:

4000 - 1000 >= 3000
3000 >= 3000 ✅ true