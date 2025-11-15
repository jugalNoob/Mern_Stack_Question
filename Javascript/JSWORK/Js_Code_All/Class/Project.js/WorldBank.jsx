// 🌍 Global Level
class WorldBank {
  static TotalMoney = 10000; // shared by all banks

  static showGlobalBalance() {
    console.log(`🌍 WorldBank Global Reserve: ₹${WorldBank.TotalMoney}`);
  }
}

// 🇮🇳 Country Level
class IndiaBank extends WorldBank {
  constructor(name, money) {
    super();
    this.name = name;
    this.money = money;
  }

  Withdraw(amount) {
    if (amount > this.money) {
      console.log(`❌ Insufficient funds in ${this.name}`);
      return;
    }
    this.money -= amount;
    WorldBank.TotalMoney -= amount;
    console.log(`🇮🇳 ${this.name} withdrew ₹${amount}`);
    console.log(`💰 Local Balance (India): ₹${this.money}`);
    WorldBank.showGlobalBalance();
    console.log('-----------------------------------');
  }
}

// 🏙️ City Level
class DelhiBank extends IndiaBank {
  constructor(name, money) {
    super(name, money);
  }

  Withdraw(amount) {
    if (amount > this.money) {
      console.log(`❌ Not enough funds in ${this.name}`);
      return;
    }
    this.money -= amount;
    WorldBank.TotalMoney -= amount;
    console.log(`🏙️ ${this.name} (Delhi Branch) withdrew ₹${amount}`);
    console.log(`💵 Local Balance (Delhi): ₹${this.money}`);
    WorldBank.showGlobalBalance();
    console.log('-----------------------------------');
  }
}

// 🔹 Example Execution
const indiaMain = new IndiaBank("India Main Branch", 5000);
const delhi = new DelhiBank("Delhi Branch", 3000);

indiaMain.Withdraw(1000);  // Withdraw from India level
delhi.Withdraw(2000);      // Withdraw from Delhi (city level)

// 🌍 Show final world balance
WorldBank.showGlobalBalance();



🌍 WorldBank  →  🇮🇳 IndiaBank  →  🏙️ DelhiBank



🌍 WorldBank  →  🇮🇳 IndiaBank  →  🏙️ DelhiBank





🧮 Step-by-Step Output (Explained)
1️⃣ India Withdraws ₹1000
🇮🇳 India Main Branch withdrew ₹1000
💰 Local Balance (India): ₹4000
🌍 WorldBank Global Reserve: ₹9000

2️⃣ Delhi Withdraws ₹2000
🏙️ Delhi Branch (Delhi Branch) withdrew ₹2000
💵 Local Balance (Delhi): ₹1000
🌍 WorldBank Global Reserve: ₹7000

3️⃣ Final Global Reserve
🌍 WorldBank Global Reserve: ₹7000

🧠 Visualization of Memory



                🌍 WorldBank (static)
                └── TotalMoney = 7000
                        ▲
                        │
           ┌────────────┴────────────┐
           │                         │
    🇮🇳 IndiaBank (money=4000)   🏙️ DelhiBank (money=1000)





    | Concept                          | Description                                                        |
| -------------------------------- | ------------------------------------------------------------------ |
| `static` property                | Shared across **all** instances and subclasses                     |
| Instance property (`this.money`) | Belongs only to that object                                        |
| `super()`                        | Used to call the parent constructor                                |
| Shared behavior                  | Both IndiaBank and DelhiBank use WorldBank’s static pool           |
| Real-world analogy               | Like each branch drawing money from one central World Bank reserve |



🚀 Example of Full LLD Scope

Bank System LLD:
  ├── WorldBank (Static Global Reserve)
  ├── CountryBank (Parent Class)
  ├── CityBank (Child Class)
  ├── TransactionService (validations)
  ├── AuditService (logs every withdrawal)
  ├── BankDatabase (simulated data persistence)
