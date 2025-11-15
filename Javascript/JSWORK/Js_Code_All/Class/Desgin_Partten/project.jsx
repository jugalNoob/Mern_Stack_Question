Bank1) Bank class — fixes & improvements

Problems in original: method names (balances) are unclear, no validation, no withdraw, and no get method. Here’s a safer version:

class Bank {
  constructor(name, account, balance = 0) {
    this.name = name;
    this.account = account;
    this.balance = balance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) throw new Error('deposit: amount must be > 0');
    this.balance += amount;
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) throw new Error('withdraw: amount must be > 0');
    if (amount > this.balance) throw new Error('withdraw: insufficient funds');
    this.balance -= amount;
  }

  rename(newName) {
    if (!newName || typeof newName !== 'string') throw new Error('invalid name');
    this.name = newName;
  }

  getBalance() {
    return this.balance;
  }

  toString() {
    return `${this.name} (${this.account}) — balance: ${this.balance}`;
  }
}

// usage
let acc1 = new Bank("jugal sharma", "1234567890", 100);
acc1.deposit(400);          // safe deposit
console.log(acc1.getBalance(), acc1.toString());
acc1.withdraw(50);
acc1.rename("New Name");
console.log(acc1);
