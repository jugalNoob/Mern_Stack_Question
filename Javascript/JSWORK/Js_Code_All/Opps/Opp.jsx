///////////////// Project Oops ||||||||||||||||
class Bank {
    constructor(name, account, balance) {
        this.name = name;
        this.account = account;
        this.balance = balance;
    }

    balances(amount) {
        this.balance += amount;
    }

    changename(newName) {
        this.name = newName; // Update the 'name' property with the provided 'newName'
    }
}

let acc1 = new Bank("jugal sharma", "1234567890", 100);
acc1.balances(400);
console.log(acc1); // Logs the updated 'balance' after adding 400

acc1.changename("New Name");
console.log(acc1); // Logs the 'acc1' object after changing the name


/////  prototype |||||||||||||||||||||||

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.start = function() {
  console.log('Engine started');
};

let myCar = new Car('Toyota', 'Corolla', 2023);
myCar.start();






///////////// Simple Oops   ||||||||||||||||||||||||||||||||||||


class Peop {
    constructor(name, room, age) {
        this.name = name;
        this.room = room;
        this.age = age;
    }
    all() {
        console.log("age", this.age - 10, this.name);
    }

    second(){
        console.log(this.name)
    }
}
let one = new Peop("jugal", "4", 69);
// one.all(); // Logs the age property reduced by 10 and the name
one.second="knaoika sharma"
one.all = "karan sharma"; // Changes 'all' from a function to a string
console.log(one); // Displays the 'one' object


//////////// Oop inheritance ||||||||||||||||||||||

class Pe {
    constructor(name) {
        this.names = name;
    }
}
let one = new Pe("jugal sharma");
console.log(one);

class Veg extends Pe {
    constructor(name) {
        super(name);
        console.log(name)
    }
}
const two = new Veg("jugal sharma"); // No name provided, defaults to "DefaultVeggieName"
console.log(two);



\\\\\\\\\\\\\\\\\\ Encapsulation OOp |||||||||||||||||||||

class BankAccou
nt {
    #name
    constructor(name, room) {
        this.#name = name; // Private field
        this.room = room;
    }
}
let io = new BankAccount("jugal", 56);
// io.#name = "kanika sharma"; // Trying to modify a private field directly (which is not allowed)
console.log(io);




//////////////////  static property methods||||||||||
class BankAccount {
    constructor(name, room) {
        this.name = name;
        this.room = room;
    }

    static compareByage(user1, user2) {
        return user1.room - user2.room;
    }
}
let io = new BankAccount("jugal", 56);
let ios = new BankAccount("kanika sharma", 56);

console.log(io); // Displays the details of the 'io' BankAccount instance
console.log(ios); // Displays the details of the 'ios' BankAccount instance

// Comparing two instances using the static method 'compareByage'
let comparisonResult = BankAccount.compareByage(io, ios);
console.log(comparisonResult); // Outputs the comparison result based on 'room' attribute



/////////////////////// Polymorphism:  |||||||||||||


Method Overriding:
JavaScript allows you to override methods 
inherited from a parent object. This enables
 polymorphic behavior, where different objects 
 can be treated as instances of the same class
  but exhibit different behaviors
 based on their specific implementations.

 class Animal {
  makeSound() {
    console.log('Generic animal sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow');
  }
}

let myDog = new Dog();
let myCat = new Cat();

myDog.makeSound(); // Outputs: Bark
myCat.makeSound(); // Outputs: Meow