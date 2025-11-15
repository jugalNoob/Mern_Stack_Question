7) Polymorphism & overriding, and “overloading” note

Overriding example (good):

class Animal { makeSound(){ console.log('Generic animal sound'); } }
class Dog extends Animal { makeSound(){ console.log('Bark'); } }
class Cat extends Animal { makeSound(){ console.log('Meow'); } }

function play(a) { a.makeSound(); } // duck typing
play(new Dog()); // Bark
play(new Cat()); // Meow



class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(a => a.speak());
// Output:
// Bark
// Meow
