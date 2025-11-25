✅ Example 1 — Only Logs (No Object Properties Printed)
class MainSchool {
  constructor() {
    console.log('hi i am jugal sharma');
  }
}

class Second extends MainSchool {
  constructor() {
    super();
    console.log('karans sharma');
    this.scond = 'karan sharma';
  }
}

class Thired extends Second {
  constructor() {
    super();
    console.log('anku sharma');
    this.thired = 'anku sharma';
  }
}

new Thired();

Output:
hi i am jugal sharma
karans sharma
anku sharma


✔ You only printed text inside constructors
✔ You DID NOT print the final object

So no object structure shows.

🔥 NOTE

When you do:

new Thired();


You trigger constructor chain only — NOT the final object print.

🚀 Constructor Chain (Very Important Interview Concept)
Order of execution:
Thired() → Second() → MainSchool()


Parent constructor always runs first.

----------------------------------------------
✅ Example 2 — Logging + Object Output
class MainSchool {
  constructor() {
    console.log('hi i am jugal sharma');
    this.first = 'jugal sharma';
  }
}

class Second extends MainSchool {
  constructor() {
    super();
    this.scond = 'karan sharma';
  }
}

class Thired extends Second {
  constructor() {
    super();
    this.thired = 'anku sharma';
  }
}

const news = new Thired();
console.log(news);

Output:
hi i am jugal sharma
Thired { first: 'jugal sharma', scond: 'karan sharma', thired: 'anku sharma' }

🧠 WHY Example 2 PRINTS PROPERTIES?

Because:

✔ You added object properties inside constructors:

this.first = 'jugal sharma'
this.scond = 'karan sharma'
this.thired = 'anku sharma'


✔ Then you printed the object:

console.log(news)


So it shows:

Thired {
  first: 'jugal sharma',
  scond: 'karan sharma',
  thired: 'anku sharma'
}




| Feature                             | Example 1                       | Example 2                  |
| ----------------------------------- | ------------------------------- | -------------------------- |
| Prints parent → child logs          | Yes                             | Yes                        |
| Adds properties                     | Yes (second & third only)       | Yes (all levels)           |
| Prints final object                 | ❌ No                            | ✔ Yes                      |
| Shows full inheritance chain object | ❌ No                            | ✔ Yes                      |
| Best for?                           | Understanding constructor order | Real-world class structure |


🧠 Which one is correct?

Both are correct, but used differently:

✔ Example 1 → For learning constructor chaining
✔ Example 2 → For real application & debugging




🚀 LEVEL 1 — Multi-Level Inheritance (4 Levels)

Let’s build a real chain:

Human → Employee → Teacher → Principal

class Human {
  constructor() {
    this.type = 'Human';
    console.log('Human constructor');
  }
}

class Employee extends Human {
  constructor() {
    super();
    this.role = 'Employee';
    console.log('Employee constructor');
  }
}

class Teacher extends Employee {
  constructor() {
    super();
    this.subject = 'Math';
    console.log('Teacher constructor');
  }
}

class Principal extends Teacher {
  constructor() {
    super();
    this.level = 'Principal';
    console.log('Principal constructor');
  }
}

const obj = new Principal();
console.log(obj);


✔ Shows constructor chain order
✔ Shows property inheritance
✔ Shows instance is of Principal but contains all data




🚀 LEVEL 2 — Method Overriding (Very Important)

Parent:

class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}


Child (override):

class Child extends Parent {
  greet() {
    console.log("Hello from Child");
  }
}


Now:

new Child().greet();


Output:

Hello from Child


✔ Child replaces parent method
✔ This is runtime polymorphism

🚀 LEVEL 3 — Calling Parent Method Using super.method()
class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    super.greet();    // Calls parent method
    console.log("Hello from Child");
  }
}

new Child().greet();


Output:

Hello from Parent
Hello from Child


✔ Both run
✔ Order is child → parent → child again if needed

🚀 LEVEL 4 — super vs this (Most asked interview question)
⭐ Key Rule:

super.method() executes parent method, but

this always refers to current object (child)

Example:

class A {
  show() {
    console.log("A", this.name);
  }
}

class B extends A {
  constructor() {
    super();
    this.name = "Child B";
  }
}

new B().show();


Output:

A Child B


✔ Parent method
✔ Child data
✔ This is VERY important in interviews

🚀 LEVEL 5 — Constructor Missing super() ❌ ERROR
class A {}

class B extends A {
  constructor() {
    console.log("Inside child");
  }
}


❌ Error:

ReferenceError: Must call super constructor before accessing 'this'

❗ RULE

In a subclass constructor:

👉 super() must be FIRST
👉 No this, no logging, no return before super()

🚀 LEVEL 6 — Static Inheritance (Advanced)
class A {
  static msg() {
    console.log("Hello from A");
  }
}

class B extends A {}

B.msg();   // ✔ works (inherited)


✔ Static methods are inherited
✔ But CANNOT be accessed from objects:

new B().msg();  // ❌ error

🚀 LEVEL 7 — Diamond Problem (Trick Question)

This is asked to check deep OOP understanding.

A
 ↑  ↑
B   C
 ↑  ↑
   D


JavaScript does NOT support multiple inheritance:

class D extends B, C   // ❌ Not allowed


Why?

Because…

Which parent constructor should it call first?
Which method version should it use?

This is called the Diamond Problem.

JS solves it via mixins, not inheritance.

🚀 LEVEL 8 — Real-World School Inheritance Example

(For portfolio + interview)

School
  ↓
Department
  ↓
Teacher
  ↓
Student


I can build a full real-world class structure with methods like:

✔ getFees()
✔ assignTeacher()
✔ getResults()
✔ calculateAttendance()

Just say “Build school project classes”.