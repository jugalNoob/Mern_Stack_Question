🔥 Another Real Life Example (Very Easy)
Restaurant Bill Printer

You have a function that prints bills.
Another restaurant wants to use it.



function printBill(amount, customer) {
  console.log(`${this.shopName} bill for ${customer}: ₹${amount}`);
}

const restaurant1 = { shopName: "Jugal Dhaba" };
const restaurant2 = { shopName: "Sharma Cafe" };

// call
printBill.call(restaurant1, 200, "Ravi");

// apply
printBill.apply(restaurant2, [350, "Ankit"]);

// bind (use later)
const cafeBill = printBill.bind(restaurant2);
cafeBill(500, "Jugal");





🛒 MID LEVEL REAL-LIFE EXAMPLE: E-commerce Discount System

📌 Base Function (Shared Logic) -------------------------->>>

function calculateFinalPrice(price, discount) {
  const discountedAmount = price - (price * discount);
  const taxAmount = discountedAmount * this.tax;
  
  console.log(`${this.storeName} → Final Price: ₹${discountedAmount + taxAmount}`);
}



🏪 Store Objects
const amazon = {
  storeName: "Amazon India",
  tax: 0.18
};

const flipkart = {
  storeName: "Flipkart",
  tax: 0.12
};

const myntra = {
  storeName: "Myntra Fashion",
  tax: 0.15
};




1️⃣ call() — Execute immediately with individual arguments
calculateFinalPrice.call(amazon, 2000, 0.20);


Output:

Amazon India → Final Price: ₹1880

2️⃣ apply() — Execute immediately but pass arguments as array
calculateFinalPrice.apply(flipkart, [1500, 0.10]);


Output:

Flipkart → Final Price: ₹1512

3️⃣ bind() — Fix the context & call later

Useful when:

creating a reusable function

passing function to event listeners

creating "pre-configured" helpers

const myntraDiscount = calculateFinalPrice.bind(myntra);

myntraDiscount(3000, 0.25);


Output:

Myntra Fashion → Final Price: ₹2625


⭐ Why this is a “Mid-Level” Example?

Uses real business logic (tax, discount, billing)

Uses this properly

Demonstrates dynamic function borrowing

Shows pre-configured functions with bind


🎁 BONUS: More Mid-Level Scenarios (Tell me if you want any)

I can give detailed examples for:

✔ Payment gateway fee calculation
✔ User authentication & logging
✔ Shipping charge calculator
✔ Event listener + bind example
✔ Class inheritance + call/apply
✔ Reusing utility function in Node.js microservices