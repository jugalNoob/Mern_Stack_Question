Below is the ULTIMATE complete guide for
Call → Promise → async/await
from basic → mid-level → advanced,
with real-life examples and interview-ready patterns.

Everything is clean, well-explained, and progressive.
Let’s go. 🚀

🟢 1. BASIC PROMISE EXAMPLE
❗ Problem

A simple function that returns a promise.

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

getData().then(result => console.log(result));


Output:

Data fetched!

🟢 2. BASIC ASYNC / AWAIT
async function fetchData() {
  const res = await getData();
  console.log(res);
}

fetchData();


Async/await = cleaner version of .then().

🟢 3. PROMISE with ERROR HANDLING
function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id) resolve({ id, name: "Jugal" });
    else reject("User id missing");
  });
}

getUser()
  .catch(err => console.log(err));

🟢 4. ASYNC/AWAIT Error Handling (try/catch)
async function findUser() {
  try {
    const user = await getUser(null);
    console.log(user);
  } catch (err) {
    console.log("ERROR:", err);
  }
}
findUser();

🟡 5. USING call() WITH PROMISES (mid level)

call() is used to borrow a function with a custom this.

const api = {
  url: "https://api.example.com",
  
  request() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data from: " + this.url), 1000);
    });
  }
};

const newApi = { url: "https://server.com" };

api.request.call(newApi).then(console.log);


Output:

Data from: https://server.com

🟡 6. USING call() INSIDE ASYNC/AWAIT
async function run() {
  const res = await api.request.call(newApi);
  console.log(res);
}

run();

🟡 7. Promise.all()

Run multiple promises in parallel.

function task(name, time){
  return new Promise(res => {
    setTimeout(()=> res(name + " done"), time);
  });
}

Promise.all([
  task("A", 1000),
  task("B", 2000),
  task("C", 1500)
]).then(console.log);


Output:

["A done", "C done", "B done"]

🟡 8. Promise.race() — First to finish wins
Promise.race([
  task("A", 1000),
  task("B", 200)
]).then(console.log);


Output:

B done

🟡 9. Sequential Promises (One by One)
async function sequential() {
  console.log(await task("A", 1000));
  console.log(await task("B", 1000));
  console.log(await task("C", 1000));
}
sequential();

🔥 10. Nested Object API Simulation (Advanced Example)
Complex async + await system:
async function getUser() {
  return { id: 1, name: "Jugal" };
}

async function getOrders(userId) {
  return [{ id: 101, product: "Laptop" }];
}

async function getShipping(orderId) {
  return { address: "Delhi", status: "Out for delivery" };
}

async function processOrder() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  const shipping = await getShipping(orders[0].id);

  return { user, orders, shipping };
}

processOrder().then(console.log);

🔥 11. Real-Life Example → Database Query (Node.js style)
function queryDB(sql) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Result for: " + sql), 1000);
  });
}

async function getUserData() {
  const user = await queryDB("SELECT * FROM users");
  const products = await queryDB("SELECT * FROM products");
  
  console.log(user);
  console.log(products);
}

getUserData();

🔥 12. Error Retry Logic (Advanced)

Try 3 times before failing.

async function fetchData() {
  let attempts = 0;

  while (attempts < 3) {
    try {
      attempts++;
      console.log("Trying:", attempts);

      if (attempts < 3) throw "Failed";

      return "Success on try #" + attempts;
    } catch (err) {
      if (attempts === 3) throw err;
    }
  }
}

fetchData()
  .then(console.log)
  .catch(err => console.log("Final error:", err));

🔥 13. Real-Life API Call + bind()
const service = {
  base: "https://api.example.com",
  
  async fetch(path) {
    return this.base + path;
  }
};

const indiaService = { base: "https://india.example.com" };

const apiCall = service.fetch.bind(indiaService);

apiCall("/users").then(console.log);


Output:

https://india.example.com/users

🔥 14. Async Constructor Pattern (Hard Interview)

You cannot make constructors async, so we use a trick:

class User {
  constructor(data) {
    this.data = data;
  }

  static async create() {
    const data = await new Promise(res => res({ name: "Jugal" }));
    return new User(data);
  }
}

(async () => {
  const user = await User.create();
  console.log(user);
})();

🔥 15. Real-life Parallel API Calls (super advanced)
async function dashboard() {
  const [user, orders, notifications] = await Promise.all([
    queryDB("USER"),
    queryDB("ORDERS"),
    queryDB("NOTIFICATIONS")
  ]);

  return { user, orders, notifications };
}

dashboard().then(console.log);