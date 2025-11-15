function introduce() {
  console.log(`Hello, I am ${this.name}`);
}

const person1 = { name: 'Bob' };
const person2 = { name: 'Cathy' };

introduce(); // "Hello, I am undefined" (this is the global object)
introduce.call(person1); // "Hello, I am Bob"
introduce.call(person2); // "Hello, I am Cathy"



👉 The this Keyword

const user = {
  name: 'Alex',
  logName: function() {
    console.log(this.name);
  },
  greet: () => {
    console.log(`Hello, ${this.name}`); // 'this' here is tricky!
  }
};

const logNameFunc = user.logName;

user.logName();
user.greet();
logNameFunc();