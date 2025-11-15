class Person {
  constructor(name, room, age) {
    this.name = name;
    this.room = room;
    this.age = age;
  }
  ageMinus10() {
    console.log("age", this.age - 10, this.name);
  }
  sayName() {
    console.log(this.name);
  }
}

let one = new Person("jugal", "4", 69);
one.sayName();            // OK
one.nickname = "kanika";  // add property safely
// To override a method intentionally:
one.sayName = function() { console.log('Overridden: ' + this.name); };
one.sayName();
