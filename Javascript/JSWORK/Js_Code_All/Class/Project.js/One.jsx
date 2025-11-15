class Bank {
    static BankName = "BankOfIndia";
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() { return this.#balance; }

    showInfo(greet) { console.log(`${greet}, ${this.name}, Bank: ${Bank.BankName}, Balance: ${this.#balance}`); }
}

class Customer extends Bank {
    addBonus(bonus) { console.log("Total:", this.getBalance() + bonus); }
}

let c = new Customer("Jugal", 50000);
c.showInfo("Hello");
c.addBonus(10000);

const f = c.showInfo.bind(c, "Hi");
f();
