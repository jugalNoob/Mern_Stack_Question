| Benefit                 | Real Example                                                   |
| ----------------------- | -------------------------------------------------------------- |
| ✅ Memory efficiency     | One copy of shared methods for 10,000 users                    |
| ✅ Reuse logic           | Common actions for all user accounts                           |
| ✅ Consistent behavior   | All derived objects follow same interface                      |
| ✅ Foundation of classes | Modern `class` keyword is just syntactic sugar over prototypes |


function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  console.log(`${this.name} deposited ${amount}. New balance: ${this.balance}`);
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
    console.log(`${this.name} withdrew ${amount}. New balance: ${this.balance}`);
  } else {
    console.log('Insufficient balance');
  }
};

let user1 = new BankAccount('Jugal', 1000);
let user2 = new BankAccount('Karan', 500);

user1.deposit(200);
user2.withdraw(100);



function APIClient(baseURL) {
  this.baseURL = baseURL;
}

APIClient.prototype.fetchData = function(endpoint) {
  console.log(`Fetching from ${this.baseURL}${endpoint}`);
};

let userAPI = new APIClient('https://api.example.com/users/');
let orderAPI = new APIClient('https://api.example.com/orders/');

userAPI.fetchData('list');  // Fetching from https://api.example.com/users/list
orderAPI.fetchData('list'); // Fetching from https://api.example.com/orders/list


?//////////////////------------------>>

class Banker {

  constructor(name, balance) {
    this.name = name; // public
    this.balance=balance
  }

  UserBalance(){
    console.log(this.age)
  }
}

let  bankinfo=new Banker('jugal sharma' , 45)



Banker.prototype.Userage=function(){


    console.log(this.age  , 'karan')
}
// bankinfo.__proto__ === Banker.prototype // ✅ true

console.log(Banker.prototype)
console.log(bankinfo)