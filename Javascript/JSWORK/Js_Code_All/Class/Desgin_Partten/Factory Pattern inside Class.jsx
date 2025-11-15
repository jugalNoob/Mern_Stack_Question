🧠 19. Factory Pattern inside Class
class User {
  constructor(name, role) {
    this.name = name; this.role = role;
  }

  static createAdmin(name) {
    return new User(name, 'admin');
  }

  static createGuest() {
    return new User('Guest', 'guest');
  }
}

console.log(User.createAdmin("Jugal"));
console.log(User.createGuest());



🏭 Factory Pattern in JavaScript
🧩 Definition

The Factory Pattern is a creational design pattern that provides an interface for creating objects without exposing the creation logic to the client.
The client just calls a method (the “factory”) — and gets an object, without worrying how it was created.

🎯 Goal

Hide object creation logic

Centralize and manage creation of related objects

Make code more flexible and maintainable

🧱 1️⃣ Basic Factory Example
class Car {
  constructor() {
    this.type = "Car";
  }
}

class Truck {
  constructor() {
    this.type = "Truck";
  }
}

class VehicleFactory {
  static createVehicle(vehicleType) {
    if (vehicleType === "car") return new Car();
    if (vehicleType === "truck") return new Truck();
    throw new Error("Invalid vehicle type");
  }
}

// ✅ Client code
const v1 = VehicleFactory.createVehicle("car");
const v2 = VehicleFactory.createVehicle("truck");

console.log(v1.type); // Car
console.log(v2.type); // Truck

🧠 Explanation

The VehicleFactory decides which class to instantiate.

The client doesn’t directly use new Car() or new Truck().

If later you add Bus, you modify only the factory, not every file.

🪄 2️⃣ Simple Factory Function (No Class)
function createUser(role) {
  if (role === "admin") return { role, permissions: ["read", "write", "delete"] };
  if (role === "editor") return { role, permissions: ["read", "write"] };
  if (role === "viewer") return { role, permissions: ["read"] };
}

const user1 = createUser("admin");
const user2 = createUser("viewer");

console.log(user1);
console.log(user2);


✅ Output:

{ role: 'admin', permissions: [ 'read', 'write', 'delete' ] }
{ role: 'viewer', permissions: [ 'read' ] }

💡 Use Case:

Creating different user profiles, product types, or API clients dynamically without multiple new calls.

⚙️ 3️⃣ Real-World Example: Payment Factory

In a real Node.js app, you might have multiple payment gateways — e.g., PayPal, Stripe, Razorpay.

class PayPal {
  process(amount) {
    console.log(`Processing $${amount} via PayPal`);
  }
}

class Stripe {
  process(amount) {
    console.log(`Processing $${amount} via Stripe`);
  }
}

class PaymentFactory {
  static getPayment(type) {
    switch (type) {
      case "paypal":
        return new PayPal();
      case "stripe":
        return new Stripe();
      default:
        throw new Error("Unsupported payment type");
    }
  }
}

// ✅ Client Code
const payment = PaymentFactory.getPayment("stripe");
payment.process(2000);


✅ Output:

Processing $2000 via Stripe

🎯 Benefit:

You can easily add a new payment provider without changing other files.

You just update the factory.

🔨 4️⃣ When to Use Factory Pattern




| Use Case                             | Description                                                |
| ------------------------------------ | ---------------------------------------------------------- |
| ✅ **Multiple Object Types**          | When you need to create many similar classes dynamically.  |
| ✅ **Decouple Creation Logic**        | When object creation code should not be exposed to client. |
| ✅ **Maintainability**                | Adding new types without breaking existing code.           |
| ✅ **Switch Between Implementations** | e.g., local storage vs. cloud storage client.              |





⚡ 5️⃣ Advanced Example (with Config)
class DBFactory {
  static getDBConnection(type) {
    switch (type) {
      case "mongo":
        return { connect: () => console.log("Connected to MongoDB") };
      case "mysql":
        return { connect: () => console.log("Connected to MySQL") };
      default:
        throw new Error("Unknown DB type");
    }
  }
}

// ✅ Example usage
const db = DBFactory.getDBConnection("mongo");
db.connect(); // Connected to MongoDB

🧠 Why it’s Useful

In production, you may want to change DB type using config files or environment variables — the factory handles it automatically.

🧠 6️⃣ Factory vs Singleton


| Feature      | Factory                   | Singleton              |
| ------------ | ------------------------- | ---------------------- |
| **Creates**  | Many objects              | Only one object        |
| **Focus**    | Object creation logic     | Global shared instance |
| **Use Case** | Different object types    | Shared resources       |
| **Example**  | Different vehicle classes | Database connection    |

| Feature      | Factory                   | Singleton              |
| ------------ | ------------------------- | ---------------------- |
| **Creates**  | Many objects              | Only one object        |
| **Focus**    | Object creation logic     | Global shared instance |
| **Use Case** | Different object types    | Shared resources       |
| **Example**  | Different vehicle classes | Database connection    |



💬 7️⃣ Interview Q&A Summary

| Question                 | Answer                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| What is Factory Pattern? | A design pattern that creates objects without exposing the creation logic to the client. |
| Why use it?              | To simplify and centralize object creation.                                              |
| Example use case?        | Payment gateways, DB connections, user roles.                                            |
| Factory vs Singleton?    | Factory creates many; Singleton creates one.                                             |
| Benefit?                 | Code is more modular, easier to maintain, easier to extend.                              |


#

🧰 8️⃣ Quick Node.js Example
// loggerFactory.js
function getLogger(env) {
  if (env === "prod") return { log: (msg) => console.log(`[PROD]: ${msg}`) };
  return { log: (msg) => console.log(`[DEV]: ${msg}`) };
}

module.exports = { getLogger };

// app.js
const { getLogger } = require("./loggerFactory");

const logger = getLogger(process.env.NODE_ENV || "dev");
logger.log("Server running...");


✅ Output:

[DEV]: Server running...

🏁 Summary Table


| Concept             | Description                                         |
| ------------------- | --------------------------------------------------- |
| **Factory Pattern** | Creates objects without exposing the creation logic |
| **Type**            | Creational pattern                                  |
| **Goal**            | Centralize object creation                          |
| **Common Uses**     | DB connectors, user roles, API clients              |
| **Advantage**       | Clean, extensible, loosely coupled                  |
| **Drawback**        | Can become complex if overused                      |





