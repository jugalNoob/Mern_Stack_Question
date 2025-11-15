Here is the COMPLETE CALLBACK GUIDE from
basic → intermediate → advanced → expert level,
with real-life, clean, interview-ready examples.
Everything is progressive, simple, and super clear. 🚀

🟢 1. BASIC CALLBACK (Fundamentals)

A callback is simply a function passed as an argument to another function.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Jugal", () => {
  console.log("Welcome!");
});



🟢 2. CALLBACK WITH PARAMETERS
function add(a, b, callback) {
  let result = a + b;
  callback(result);
}


add(10, 20, (sum) => {
  console.log("Sum:", sum);
});



🟡 3. CALLBACK SIMULATING ASYNC OPERATION

Example using setTimeout:

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => console.log(data));




🟡 4. CALLBACK INSIDE OBJECT METHOD
const user = {
  name: "Jugal",
  getName(callback) {
    callback(this.name);
  }
};

user.getName((n) => console.log("User:", n));





🟡 5. ERROR-FIRST CALLBACK PATTERN (Node.js style)

Most Node.js async APIs use:

callback(error, data)

Example:
function getUser(id, callback) {
  if (!id) {
    return callback("ID not provided", null);
  }

  setTimeout(() => {
    callback(null, { id, name: "Jugal" });
  }, 1000);
}

getUser(1, (err, user) => {
  if (err) return console.log("Error:", err);
  console.log("User:", user);
});

🟡 6. CALLBACK HELL (deep nested callbacks)

Common in old JS.

getUser(1, (err, user) => {
  getOrders(user.id, (err, orders) => {
    getDelivery(orders[0].id, (err, delivery) => {
      console.log("All done!");
    });
  });
});


❗This leads to Pyramid of Doom
→ Promises and async/await solve this.

🟡 7. FILE READING CALLBACK (Real Node.js example)
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, content) => {
  if (err) return console.log("Error:", err);
  console.log("File data:", content);
});

🟡 8. CALLBACK AS RETURN FUNCTION (higher-order)
function multiply(num) {
  return function (callback) {
    callback(num * 10);
  };
}

multiply(5)((result) => console.log(result));

🔥 9. CUSTOM ASYNC CALLBACK QUEUE (intermediate)
function asyncTask(msg, cb) {
  setTimeout(() => {
    cb(msg);
  }, 1000);
}

function taskRunner(tasks, index = 0) {
  if (index === tasks.length) return;

  asyncTask(tasks[index], (msg) => {
    console.log(msg);
    taskRunner(tasks, index + 1);
  });
}

taskRunner(["A", "B", "C"]);

🔥 10. CALLBACK WITH BIND (using this)
const api = {
  url: "https://server.com",
  
  fetchData(callback) {
    setTimeout(() => {
      callback("Data from " + this.url);
    }, 1000);
  }
};

const newApi = { url: "https://india.com" };

api.fetchData.call(newApi, console.log);

🔥 11. CALLBACK TO PROMISE CONVERSION (interview question)
function toPromise(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };
}

// Sample Node callback function
function read(callback) {
  setTimeout(() => callback(null, "Done"), 500);
}

const readAsync = toPromise(read);

readAsync().then(console.log);

🔥 12. ADVANCED: CALLBACK PIPELINE
function step1(x, cb) { cb(x + 1); }
function step2(x, cb) { cb(x * 2); }
function step3(x, cb) { cb(x - 3); }

function pipeline(value, ...fns) {
  let index = 0;

  function next(val) {
    if (index === fns.length) return console.log("Result:", val);
    fns[index++](val, next);
  }

  next(value);
}

pipeline(5, step1, step2, step3);

🔥 13. ADVANCED: CALLBACK BASED CUSTOM EVENT EMITTER
class Emitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    (this.events[event] = this.events[event] || []).push(callback);
  }

  emit(event, data) {
    (this.events[event] || []).forEach(cb => cb(data));
  }
}

const emitter = new Emitter();

emitter.on("login", (u) => console.log("User logged in:", u));

emitter.emit("login", "Jugal");

🔥 14. CALLBACK BASED RETRY LOGIC
function riskyTask(tryCount, callback) {
  const random = Math.random();
  console.log("Try:", tryCount, "Value:", random);

  if (random > 0.7) callback(null, "Success!");
  else callback("Failed", null);
}

function retry(fn, retries, callback) {
  function attempt(count) {
    fn(count, (err, data) => {
      if (!err) return callback(null, data);

      if (count === retries) return callback("All attempts failed");

      attempt(count + 1);
    });
  }
  attempt(1);
}

retry(riskyTask, 5, console.log);

🔥 15. CALLBACK BASED ASYNC SERIES & PARALLEL (advanced)
Series Execution
function series(tasks, finalCallback) {
  const results = [];
  let index = 0;

  function run() {
    if (index === tasks.length) return finalCallback(results);

    tasks[index]((res) => {
      results.push(res);
      index++;
      run();
    });
  }
  
  run();
}

Parallel Execution
function parallel(tasks, done) {
  const results = [];
  let completed = 0;

  tasks.forEach((task, i) => {
    task((res) => {
      results[i] = res;
      completed++;

      if (completed === tasks.length) {
        done(results);
      }
    });
  });
}

🎁 WANT NEXT LEVEL?