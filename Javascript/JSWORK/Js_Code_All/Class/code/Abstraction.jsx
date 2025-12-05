Here is exactly how to implement Abstraction in JavaScript OOP, with real code examples, easy explanation, and interview-level depth.

🎯 What is Abstraction?

Abstraction = hide complex logic + expose only required functions to the user.

User sees a simple interface, but inside the class the real steps are hidden.

✅ In JavaScript, we achieve Abstraction using:
1️⃣ Private Fields (#variable)
2️⃣ Private Methods
3️⃣ Encapsulation + controlled public methods

Let’s see them one by one.

🟦 1. Abstraction Using Private Fields (#)

Private variables cannot be accessed from outside the class.

class Bank {
  #balance = 0;   // private -> hidden from user

  constructor(amount) {
    this.#balance = amount;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;  // controlled access
  }
}

const user = new Bank(1000);

console.log(user.getBalance()); // 1000
console.log(user.#balance);     // ❌ ERROR: private

✔ User only sees:

deposit()

getBalance()

❌ User cannot see:

internal variable #balance

This is true Abstraction + Encapsulation.

🟦 2. Abstraction Using Private Methods

Methods beginning with # are hidden.

class Payment {
  #verifyCard() {
    console.log("Card verified...");
  }

  #checkLimit() {
    console.log("Limit OK...");
  }

  makePayment(amount) {
    this.#verifyCard();
    this.#checkLimit();
    console.log(`Payment of ${amount} done.`);
  }
}

const p = new Payment();
p.makePayment(500);

// p.#verifyCard();  // ❌ ERROR: hidden

✔ User only knows:

makePayment()

❌ User never sees:

#verifyCard(), #checkLimit()

🟦 3. Abstraction Using Factory Pattern

Expose only the required functions.

function createUser(name) {
  let password = "secret123"; // private

  function login() {
    console.log(name + " logged in");
  }

  return {
    login
  };
}

const u = createUser("Jugal");
u.login();            // allowed
console.log(u.password); // ❌ undefined

🟦 4. Abstraction Using Closures (old but common JS pattern)
function Counter() {
  let count = 0; // private

  return {
    increment() { count++; },
    getCount() { return count; }
  };
}

const c = Counter();
c.increment();
console.log(c.getCount()); // 1

⭐ Real-Life Example: ATM Machine (Best for interview)
class ATM {
  #pin;

  constructor(pin) {
    this.#pin = pin;
  }

  withdraw(amount, enteredPin) {
    if (enteredPin !== this.#pin) {
      return "Wrong PIN!";
    }
    return `Withdrawn ${amount}`;
  }
}

const atm = new ATM(1234);

console.log(atm.withdraw(500, 1234)); // Allowed
console.log(atm.#pin);                // ❌ Error


User doesn’t know:

How ATM verifies PIN

How balance is calculated

How transaction logs are updated

User only sees:
✔ withdraw()

This is Abstraction.