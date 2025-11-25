class BankpgIndia {

    static TotalMoney = 10000;

    constructor(name, branch, withdraw) {
        this.name = name;
        this.branch = branch;
        this.withdraw = withdraw;
    }

    BankWithdraw() {
        if (this.withdraw > BankpgIndia.TotalMoney) {
            console.log("Not enough balance");
            return;
        }

        BankpgIndia.TotalMoney -= this.withdraw;

        console.log(
            this.name,
            "withdraw",
            this.withdraw,
            "→ remaining balance:",
            BankpgIndia.TotalMoney
        );
    }
}

const bank1 = new BankpgIndia('india', 'Jammu', 1000);
const bank2 = new BankpgIndia('usa', 'newYork', 1000);
const bank3 = new BankpgIndia('Canda', 'York', 1000);
bank1.BankWithdraw();  
bank2.BankWithdraw();
bank3.BankWithdraw()



// ----------------------->>> ---------------------------->>

class BankpgIndia {

    static TotalMoney = 10000;
    static MainBranch = 'BankOfIndia';

    constructor(name, branch, withdraw) {
        this.name = name;
        this.branch = branch;
        this.withdraw = withdraw;
    }
}

// Attach method to prototype (correct way)
BankpgIndia.prototype.MoneyWithdraw = function () {

    if (this.withdraw > BankpgIndia.TotalMoney) {
        console.log("Insufficient Balance");
        return;
    }

    BankpgIndia.TotalMoney -= this.withdraw;

    console.log(
        `${this.name} withdrew ${this.withdraw} → Remaining: ${BankpgIndia.TotalMoney}`
    );
};

console.log(BankpgIndia.prototype);

const bank1 = new BankpgIndia('india', 'Jammu', 1000);
const bank2 = new BankpgIndia('Usa', 'NewYork', 1000);

bank1.MoneyWithdraw(); 
bank2.MoneyWithdraw();

console.log(bank1);
console.log(bank2);
