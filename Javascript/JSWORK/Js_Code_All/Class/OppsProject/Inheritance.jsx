class Students {
  constructor(name) {
    this.Username = name;
  }

  MainFn() {
    console.log('Your teacher name: ' + this.Username);
  }
}

class StudentOne extends Students {
  constructor(name, subjectUser) {
    super(name); // pass the name to parent class
    this.subject = subjectUser; // store subject
  }

  SeconFn() {
    console.log('Your subject: ' + this.subject);
  }
}

// Create instance with both name and subject
const Mainall = new StudentOne('Jugal Sharma', 'Computer MERN');

Mainall.MainFn();   // ➡️ "Your teacher name: Jugal Sharma"
Mainall.SeconFn();  // ➡️ "Your subject: Computer MERN"

console.log(Mainall);


:::::::::::::::::::::::: ------------------------------------------------>>>

class Teacher {
  constructor(name, subject) {
    this.teacherName = name;
    this.subject = subject;
  }
  teach() {
    console.log(`${this.teacherName} is teaching ${this.subject}`);
  }
}

class Student extends Teacher {
  constructor(name, subject, studentName) {
    super(name, subject);
    this.studentName = studentName;
  }
  learn() {
    console.log(`${this.studentName} is learning ${this.subject} from ${this.teacherName}`);
  }
}


const s1 = new Student('jugal', 'karan', 'anku');
s1.teach();
s1.learn();


:::::::::::::: ------------------>>
class Person { ... }
class Teacher extends Person { ... }
class Student extends Person { ... }




🔹 4. Method Sharing

You can use parent methods inside the child using super.

For example:

learn() {
  super.teach(); // call Teacher method
  console.log(`${this.studentName} understood the topic!`);
}




🔹 5. Clean, Organized Architecture

Inheritance is a foundation for Object-Oriented Design.
It makes your code:

Easier to understand

Easier to maintain

Easier to extend later (add more features)


| Class       | Properties | Methods     |
| ----------- | ---------- | ----------- |
| **Person**  | name, age  | introduce() |
| **Teacher** | subject    | teach()     |
| **Student** | grade      | learn()     |




🧩 Example of Multi-Level Chain:
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

class Student extends Teacher {
  constructor(name, subject, studentName) {
    super(name, subject);
    this.studentName = studentName;
  }
}


So now:

const s1 = new Student('Mr. Sharma', 'Science', 'Jugal');
console.log(s1);


Output:

Student {
  name: 'Mr. Sharma',
  subject: 'Science',
  studentName: 'Jugal'
}


✅ In short:
Inheritance’s main benefits are:

Code reuse

Logical hierarchy (real-world modeling)

Easier scalability

Less repetition

Cleaner, maintainable design




// Teacher (parent)
//   ├── name
//   ├── subject
//   └── teach()

//        ⬇️ inherits

// Student (child)
//   ├── studentName
//   └── learn()
