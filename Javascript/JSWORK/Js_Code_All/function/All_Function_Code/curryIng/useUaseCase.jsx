✅ Use Cases of Currying (Simple + Real-World)
1️⃣ Reusability (MOST COMMON)
❌ Without currying
function discount(price, rate) {
  return price - price * rate;
}

discount(1000, 0.1);
discount(2000, 0.1);

✅ With currying
const discount = rate => price => price - price * rate;

const tenPercentOff = discount(0.1);

tenPercentOff(1000);
tenPercentOff(2000);


✔ Reuse rate
✔ Cleaner code

2️⃣ Configuration First, Data Later (VERY IMPORTANT)
const fetchData = baseURL => endpoint =>
  fetch(baseURL + endpoint);

const api = fetchData("https://api.example.com");

api("/users");
api("/products");


✔ Used in APIs
✔ Used in microservices

3️⃣ Cleaner Event Handling (React / DOM)
const handleClick = id => event => {
  console.log("Clicked ID:", id);
};

button.onclick = handleClick(10);


✔ No extra wrapper functions
✔ Cleaner handlers

4️⃣ Function Composition (Functional Programming)
const add = a => b => a + b;
const multiply = a => b => a * b;

const add5 = add(5);
const mul2 = multiply(2);

console.log(mul2(add5(10))); // 30


✔ Works well with compose / pipe

5️⃣ Validation & Rules Engine
const isBetween = min => max => value =>
  value >= min && value <= max;

const isAdult = isBetween(18)(60);

isAdult(25); // true
isAdult(15); // false


✔ Reusable validation rules

6️⃣ Logging / Debugging (Middleware Style)
const logger = level => message =>
  console[level](message);

const errorLog = logger("error");
const infoLog = logger("log");

infoLog("App started");
errorLog("Something broke");


✔ Similar to middleware pattern

7️⃣ Partial Application Alternative
const add = a => b => a + b;

const add10 = add(10);

add10(5); // 15


✔ Pre-fill arguments
✔ Simplifies function calls

8️⃣ Real Node.js Use Case (Middleware Config)
const auth = role => (req, res, next) => {
  if (req.user.role === role) next();
  else res.status(403).send("Forbidden");
};

app.get("/admin", auth("admin"), handler);


🔥 Very common in Express.js

🧠 Interview One-Liners (MEMORIZE)

✔ “Currying improves reusability by fixing arguments early.”
✔ “It separates configuration from execution.”
✔ “Currying makes function composition easier.”
✔ “Widely used in middleware and functional programming.”

🔥 When NOT to Use Currying ❌

Simple one-time functions

Too many arguments (hurts readability)

Performance-critical hot paths

✅ Short Rule
Same logic + different data → use currying