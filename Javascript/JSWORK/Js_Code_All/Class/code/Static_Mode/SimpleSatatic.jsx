✅ 1. Static properties for global counts

Used to keep track of total objects created.

class User {
    static count = 0;

    constructor(name) {
        this.name = name;
        User.count++;   // increase static count
    }
}

new User("A");
new User("B");

console.log(User.count); // 👉 2


📌 Use case: Count how many objects/records are created (bank accounts, users, orders...).



✅ 2. Static method for utilities / helpers

Static methods are used like utility functions.

class MathTool {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathTool.add(10, 20)); // 👉 30


📌 Use case: Utility logic — validation, formatting, calculation.

✅ 3. Static method for factory pattern

Used to create objects in a structured way.

class Car {
    constructor(model) {
        this.model = model;
    }

    static createTesla() {
        return new Car("Tesla");
    }
}

const c = Car.createTesla();
console.log(c.model); // 👉 Tesla


📌 Use case: Create predefined objects (default car, default user, empty config...).

✅ 4. Static properties as global configuration

Store configuration used by all instances.

class Config {
    static appName = "MyApp";
    static version = "1.0";
}

console.log(Config.appName); // 👉 "MyApp"


📌 Use case: App name, database URL, global settings, API version etc.

✅ 5. Static method for comparing two objects

Compare objects without creating an instance.

class Student {
    constructor(score) {
        this.score = score;
    }

    static compare(a, b) {
        return a.score - b.score;
    }
}

const s1 = new Student(90);
const s2 = new Student(80);

console.log(Student.compare(s1, s2)); // 👉 10


📌 Use case: Sorting, comparing products, users, bank accounts, etc.

| Use Case                | Description                   | Example                |
| ----------------------- | ----------------------------- | ---------------------- |
| **1. Global Count**     | Count total objects           | `User.count++`         |
| **2. Utility / Helper** | General purpose functions     | `MathTool.add()`       |
| **3. Factory Method**   | Create pre-configured objects | `Car.createTesla()`    |
| **4. Global Config**    | Class-level constants         | `Config.version`       |
| **5. Comparators**      | Compare two instances         | `Student.compare(a,b)` |
