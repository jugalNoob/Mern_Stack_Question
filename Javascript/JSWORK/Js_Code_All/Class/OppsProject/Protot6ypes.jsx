| Benefit                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| 💾 Memory Efficient     | One shared method instead of multiple copies                  |
| ⚡ Fast Lookup           | Prototype chain allows quick property access                  |
| 🔄 Extendable           | Add methods dynamically, even after object creation           |
| 🧬 Supports Inheritance | Enables sharing behavior between classes                      |
| 🧠 Consistent           | Change in prototype reflects across all instances             |
| 🏗 Foundation           | Forms the base of JS’s OOP system (classes use it internally) |


go in brwoner inscept check prototype

let one=[10 , 20 , 30 , 40]
console.log(one)//prototypes


/////////// ------------------------>>

// class Students {
//   constructor(name, subject) {
//     this.Username = name;
//     this.subject = subject;
//   }
// }

// const userInfo = new Students('Jugal Sharma', 'Computer');
// const userInfo2 = new Students('Karan Sharma', 'Computer');

// // Add a prototype method AFTER the class is defined
// Students.prototype.MainFn = function () {
//   console.log('Your teacher name: ' + this.Username);
// };

// Students.prototype.SubjectFn = function () {
//   console.log('Your Subject name: ' + this.subject);
// };

// userInfo.SubjectFn();
// userInfo2.MainFn();


// // Call the method on one instance
// userInfo.MainFn();

// console.log(userInfo);
// console.log(userInfo2);

// console.log(Students.prototype);
// console.log(Object.getPrototypeOf(userInfo));


// console.log(userInfo.hasOwnProperty('MainFn')); // false
// console.log('MainFn' in userInfo); // true (because it comes from prototype)







function Student(name) {
  this.name = name;
}
Student.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};

const s1 = new Student("Jugal");
const s2 = new Student("Karan");

console.log(s1)