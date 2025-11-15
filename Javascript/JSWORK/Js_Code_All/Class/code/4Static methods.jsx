6) Static methods & static properties

You used a static method — good. Also show static properties:



| Concept                   | Notes                                              |
| ------------------------- | -------------------------------------------------- |
| `static`                  | Belongs to the class, not the instance             |
| Access                    | Use `ClassName.property`                           |
| `this` inside constructor | Cannot access static property with `this.property` |
| Use case                  | Constants, shared info, utility functions          |



class Banker{
    static Bankname='BnakOfIndia'
    static id=1
    constructor(balance){
        this.balance=balance
      this.Bankname = Banker.Bankname; // use class name to access static property
      this.id=Banker.id++
    }
}
const info=new Banker(1000)
const infos=new Banker(2000 )
const infoss=new Banker(3000 )
const infosse=new Banker(4000 )
console.log(info)
console.log(infos)
console.log(infoss)
console.log(infosse)





///////--------------------------------------->>

class BankAccount {
  static bankName = "State Bank of India";  // same for everyone
  static interestRate = 6.5;                // same for all accounts

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  showDetails() {
    console.log(`${this.name} has ₹${this.balance}`);
  }

  static showBankInfo() {
    console.log(`${this.bankName} - Interest: ${this.interestRate}%`);
  }
}

const user1 = new BankAccount("Jugal", 100000);
const user2 = new BankAccount("Karan", 20000);

user1.showDetails(); // Jugal has ₹10000
BankAccount.showBankInfo(); // State Bank of India - Interest: 6.5%



// ---->exmapleion ------------------->
class BankAccount {
  // 🏦 Common (shared) for all accounts
  static bankName = "State Bank of India";
  static interestRate = 6.5; // same for all customers

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  // 👤 Instance method: specific to each customer
  showBalance() {
    console.log(`${this.name} has ₹${this.balance}`);
  }

  // ⚙️ Static method: applies to the entire bank
  static calculateInterest(amount) {
    return (amount * BankAccount.interestRate) / 100;
  }
}

// 💰 Create customers (instances)
const user1 = new BankAccount("Jugal Sharma", 10000);
const user2 = new BankAccount("Karan Mehta", 20000);

// 🧍‍♂️ Instance methods (specific to customers)
user1.showBalance(); // Jugal Sharma has ₹10000
user2.showBalance(); // Karan Mehta has ₹20000

// 🏦 Static property & method (shared by bank)
console.log(BankAccount.bankName); // State Bank of India
console.log("Interest on ₹10,000:", BankAccount.calculateInterest(10000)); // 650


🧠 Without static

If you didn’t use static, you’d have to repeat the same data for every user:

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.bankName = "State Bank of India"; // ❌ repeated for every object
  }
}


👉 This wastes memory and breaks consistency if one instance changes it.


| Domain          | Example                     | Static Property            |
| --------------- | --------------------------- | -------------------------- |
| Banking         | `bankCode`, `interestRate`  | Shared across all accounts |
| E-commerce      | `taxRate`, `deliveryCharge` | Same for all orders        |
| School system   | `schoolName`, `board`       | Same for all students      |
| Software        | `version`, `MAX_LIMIT`      | Constant for all users     |
| Utility classes | `Math.max()`, `Date.now()`  | Global helper logic        |





| Feature     | Instance       | Static             |
| ----------- | -------------- | ------------------ |
| Belongs to  | Object         | Class              |
| Accessed by | `obj.method()` | `Class.method()`   |
| Used for    | Per-user data  | Shared/global data |
| Example     | `balance`      | `interestRate`     |
