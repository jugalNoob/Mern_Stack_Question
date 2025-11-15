🧩 What is readline in Node.js?

👉 The readline module allows you to read input line-by-line from:

The terminal (console)

A file stream

Any Readable Stream (like process.stdin)

It’s mainly used for CLI-based programs, interactive input, or streaming file reading.

⚙️ Basic Example – Read User Input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});


🧠 Output:

What is your name? Jugal
Hello, Jugal!


✅ Use case: interactive CLI like npm init.

🔁 Read Multiple Inputs Step by Step
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    console.log(`Sum: ${Number(num1) + Number(num2)}`);
    rl.close();
  });
});


🧠 Interview Tip:
If asked about nested questions, say: “For multiple inputs, we can use async/await or recursion to avoid callback hell.”

🧠 Async/Await Version (Cleaner Code)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

(async () => {
  const name = await ask("Name: ");
  const age = await ask("Age: ");
  console.log(`Welcome ${name}, you are ${age} years old.`);
  rl.close();
})();


✅ Best Practice: use Promises for async input flow.

📁 Read a File Line by Line

This is a common backend interview question — reading large files without loading the whole file into memory.

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("data.txt"),
  output: process.stdout,
  terminal: false
});

rl.on("line", (line) => {
  console.log("Line from file:", line);
});


✅ Real-world use: log processing, CSV parsing, log analysis tools.

⚙️ Key readline Methods


| Method                       | Description                        |
| ---------------------------- | ---------------------------------- |
| `readline.createInterface()` | Creates the input/output interface |
| `rl.question()`              | Ask a single question              |
| `rl.close()`                 | Close the interface                |
| `rl.on('line', fn)`          | Triggered when a new line is read  |
| `rl.on('close', fn)`         | Triggered when input stream ends   |
| `rl.prompt()`                | Re-displays prompt                 |
| `rl.write(data)`             | Write output to console manually   |


🔐 Example: CLI Menu
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\nMenu:");
  console.log("1. Say Hello");
  console.log("2. Exit");
  rl.prompt();
}

rl.on("line", (input) => {
  if (input.trim() === "1") {
    console.log("Hello there!");
    showMenu();
  } else if (input.trim() === "2") {
    console.log("Goodbye!");
    rl.close();
  } else {
    console.log("Invalid option");
    showMenu();
  }
});

showMenu();


✅ Real-world use: CLI utilities like npm, git, or your own scripts.

🧠 Common Interview Questions


| #  | Question                                           | Answer                                                                 |
| -- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| 1  | What is `readline` used for?                       | Reading input line-by-line (stdin/file)                                |
| 2  | How to read user input?                            | `rl.question("Enter name:", cb)`                                       |
| 3  | How to read file line-by-line?                     | Use `fs.createReadStream()` with `readline.createInterface()`          |
| 4  | How to close `readline`?                           | `rl.close()`                                                           |
| 5  | Difference between `readline` and `process.stdin`? | `readline` gives structured input (line events), `stdin` is raw stream |
| 6  | Can we use async/await with `readline`?            | Yes, wrap `rl.question()` in a Promise                                 |
| 7  | How to handle multiple inputs dynamically?         | Use recursive calls or async/await loop                                |
| 8  | Is `readline` synchronous or asynchronous?         | Asynchronous (non-blocking)                                            |
| 9  | How to show prompt continuously?                   | Use `rl.prompt()`                                                      |
| 10 | How to read file streams efficiently?              | Combine `fs.createReadStream()` with `readline`                        |



     ┌───────────────────────────────┐
     │        User / File Input      │
     └──────────────┬────────────────┘
                    │
                    ▼
        ┌────────────────────────┐
        │ Node.js readline module │
        │ - createInterface()     │
        │ - question() / on('line') │
        └──────────────┬─────────┘
                       │
                       ▼
               Your Application Logic




               🔥 Bonus Real Question

“Can you read a 1GB file line-by-line without crashing memory?”

✅ Yes — use:

fs.createReadStream('big.txt').pipe(readline.createInterface({ input: process.stdin }));


This streams the file line by line instead of loading it fully.


