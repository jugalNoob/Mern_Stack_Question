🟢 JavaScript OOP Ultimate Cheat Sheet (50+ Q&A)
A. Basics of Objects (1–10)

Q1: What is an object in JavaScript?
A: Collection of key-value pairs.

const user = { name: "Jugal", age: 30 };


Q2: How to access properties?

user.name; // Jugal
user["age"]; // 30


Q3: How to add/remove properties?

user.salary = 50000; 
delete user.age;


Q4: How to iterate over object properties?

for(let key in user) console.log(key, user[key]);
Object.keys(user).forEach(k => console.log(k, user[k]));


Q5: Difference between object literal & constructor function?

function User(name){ this.name = name; }
const u = new User("Jugal");


Q6: What is Object.assign()?

const obj1 = {a:1}, obj2 = {b:2};
const obj3 = Object.assign({}, obj1, obj2); // {a:1,b:2}


Q7: How to clone an object?

const clone = {...user};


Q8: Difference between shallow & deep copy?

Shallow → copies only top-level properties

Deep → copies nested objects

Q9: How to check if a property exists?

"user" in user;
user.hasOwnProperty("name");


Q10: How to freeze an object?

Object.freeze(user); // cannot modify

B. this & Object Methods (11–20)

Q11: What is this in object method?

Refers to the object calling the method.

const obj = {
  name:"Jugal",
  greet(){ console.log(this.name); }
};
obj.greet(); // Jugal


Q12: this in global function?

undefined in strict mode, window in non-strict.

Q13: How to bind this?

const f = obj.greet.bind({name:"Karan"});
f(); // Karan


Q14: Difference between function & arrow function for this?

Arrow function → this is lexical

Regular function → this depends on caller

Q15: How to use call?

function greet(g){ console.log(`${g}, ${this.name}`); }
greet.call({name:"Karan"}, "Hi"); // Hi, Karan


Q16: How to use apply?

greet.apply({name:"Jugal"}, ["Hello"]); // Hello, Jugal


Q17: How to use bind?

const f = greet.bind({name:"Karan"}, "Hey");
f(); // Hey, Karan


Q18: Method borrowing example?

const person = {name:"Jugal"};
function showName(){ console.log(this.name); }
showName.call(person); // Jugal


Q19: this in class constructor?

Refers to instance being created.

Q20: this in static method?

Refers to class, not instance.

C. ES6 Classes & Constructor (21–30)

Q21: Define a class in ES6.

class User { constructor(name){ this.name=name; } }


Q22: How to create an instance?

const u = new User("Jugal");


Q23: Difference between function constructor & class?

Classes → not hoisted, strict mode by default, prototype-based

Q24: What is constructor()?

Special method to initialize instance properties

Q25: How to define instance method?

class User {
  greet(){ console.log(this.name); }
}


Q26: Class prototype?

All instance methods are on ClassName.prototype.

Q27: How to define static method?

class User { static info(){ console.log("Static"); } }
User.info();


Q28: Can static method access instance properties?

❌ No, can only access static properties

Q29: How to define static property?

class Bank { static name="BankOfIndia"; }
console.log(Bank.name);


Q30: Difference between instance & static?

Instance → per object

Static → shared across all objects

D. Inheritance & Polymorphism (31–40)

Q31: How to inherit a class?

class Admin extends User { constructor(name, role){ super(name); this.role=role; } }


Q32: How to override parent method?

class Admin extends User {
  greet(){ super.greet(); console.log("Admin"); }
}


Q33: super() in constructor?

Calls parent constructor, must be before using this

Q34: Can child access parent properties?
✅ Yes, via this or super.method()

Q35: Polymorphism?

Same method name, different behavior in child

Q36: Multiple level inheritance?

class Person{}
class Employee extends Person{}
class Manager extends Employee{}


Q37: instanceof operator?

console.log(info instanceof IndianB); // true


Q38: Can static methods be inherited?
✅ Yes, child can access parent static methods.

Q39: What is method overriding?

Redefining a parent method in child class.

Q40: Composition vs Inheritance?

Inheritance → "is-a"

Composition → "has-a"

E. Encapsulation & Private Fields (41–45)

Q41: How to make property private?

class User { #salary; constructor(s){ this.#salary=s; } }


Q42: How to access private property?

Use getter method

getSalary(){ return this.#salary; }


Q43: How to modify private property?

Use setter method

setSalary(s){ if(s>0) this.#salary=s; }


Q44: Why use encapsulation?

Control access, prevent accidental changes

Q45: Private fields vs WeakMap?

Modern JS → # is simpler

WeakMap → older method to emulate private

F. Advanced Topics (46–50+)

Q46: Get all instance keys?

Object.keys(instance);


Q47: Get all values?

Object.values(instance);


Q48: Loop over prototype methods?

Object.getOwnPropertyNames(Object.getPrototypeOf(instance))


Q49: Call parent method using call?

Parent.prototype.method.call(childInstance)


Q50: Bind child method for event handling?

button.onclick = instance.method.bind(instance);


Q51: Mixins / multiple inheritance simulation?

let mixin = { sayHi(){ console.log("Hi"); } };
Object.assign(Class.prototype, mixin);


Q52: Difference between class expression & declaration?

const User = class { constructor(name){ this.name=name; } }

✅ Cheat Sheet Tips

Always explain this context with examples

Show ES6 + modern private fields

Combine inheritance + static + encapsulation + call/bind in one example

Be ready to draw class hierarchy