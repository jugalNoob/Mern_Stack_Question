✅ Clean Code Examples (JavaScript)
1️⃣ Variable Naming (MOST IMPORTANT)

❌ Bad

let x = 10;
let num_ten = 10;


✅ Good

let maxUsers = 10;
const MAX_RETRIES = 10;


✔ Names explain why, not just what

2️⃣ let vs const

❌ Bad

let PI = 3.14;


✅ Good

const PI = 3.14;


✔ Use const by default
✔ Use let only when value changes

3️⃣ Function Naming

❌ Bad

function fn(a, b) {
  return a + b;
}


✅ Good

function calculateTotal(price, tax) {
  return price + tax;
}


✔ Verb + meaning

4️⃣ Single Responsibility Function

❌ Bad

function processUser(user) {
  validate(user);
  saveToDB(user);
  sendEmail(user);
}


✅ Good

function validateUser(user) {}
function saveUser(user) {}
function notifyUser(user) {}


✔ One function = one job

5️⃣ Avoid Magic Numbers

❌ Bad

if (age > 18) {}


✅ Good

const MIN_ADULT_AGE = 18;

if (age > MIN_ADULT_AGE) {}

6️⃣ Early Return (Reduce Nesting)

❌ Bad

function check(age) {
  if (age) {
    if (age > 18) {
      return true;
    }
  }
  return false;
}


✅ Good

function isAdult(age) {
  if (!age) return false;
  return age > 18;
}

7️⃣ Boolean Naming

❌ Bad

let active = true;


✅ Good

let isActive = true;
let hasPermission = false;


✔ Prefix booleans with is, has, can

8️⃣ Avoid Deep Nesting

❌ Bad

if (user) {
  if (user.isAdmin) {
    if (user.active) {
      doSomething();
    }
  }
}


✅ Good

if (!user || !user.isAdmin || !user.active) return;

doSomething();

9️⃣ Use Default Parameters

❌ Bad

function log(msg) {
  msg = msg || "default";
}


✅ Good

function log(msg = "default") {
  console.log(msg);
}

🔟 Destructuring for Clarity

❌ Bad

function print(user) {
  console.log(user.name);
  console.log(user.email);
}


✅ Good

function print({ name, email }) {
  console.log(name, email);
}

1️⃣1️⃣ Avoid Long Functions

❌ Bad

function handleRequest(req) {
  // 100 lines
}


✅ Good

function parseRequest(req) {}
function validateRequest(req) {}
function processRequest(req) {}

1️⃣2️⃣ Meaningful Comments (NOT obvious ones)

❌ Bad

// increment i
i++;


✅ Good

// Retry after network failure
retryCount++;

🧠 Clean Code Golden Rules (MEMORIZE)

✔ Code should read like English
✔ Fewer comments → clearer code
✔ Functions should be small
✔ Naming is more important than logic
✔ Readability > cleverness

🎯 Interview One-Liner

“Clean code is code that explains itself.”