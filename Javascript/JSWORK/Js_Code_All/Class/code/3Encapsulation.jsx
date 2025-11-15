5) Encapsulation — private fields & getters/setters

You had a broken class name and example. Use #privateField or closures/WeakMap for older JS. Example:


class BankAccount {
  #name;
  constructor(name, room) {
    this.#name = name;  // private
    this.room = room;
  }

  getName() { return this.#name; }
  setName(newName) {
    if (!newName) throw new Error('invalid');
    this.#name = newName;
  }
}

let io = new BankAccount("jugal", 56);
console.log(io.getName());     // ok
// io.#name = "kanika"        // SyntaxError — can't access private field outside


/// --->


class Banker {
  #balance; // private
  constructor(name, balance) {
    this.name = name; // public
    this.#balance = balance; // private
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
}

let b = new Banker('Jugal', 1000);

console.log(b.name);        // ✅ 'Jugal'
console.log(b.getBalance()); // ✅ 1000
b.deposit(500);             // ✅ adds safely
console.log(b.getBalance()); // ✅ 1500

console.log(b.#balance);    // ❌ Error — private



✅ Summary:

| Property                  | Example     | Access                                                   |
| ------------------------- | ----------- | -------------------------------------------------------- |
| Public                    | `this.name` | Can read/write from anywhere                             |
| Private                   | `#balance`  | Only inside class                                        |
| Protected (by convention) | `_id`       | Not enforced by JS, but used by devs as a “soft private” |
