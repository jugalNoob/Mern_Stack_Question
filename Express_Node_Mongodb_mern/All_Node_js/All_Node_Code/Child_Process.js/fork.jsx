✅ Simple explanation

fork() is used in Node.js child_process module.

It creates a separate Node.js process that can run its own code.

The parent and child can communicate via messages.

Useful for multi-core processing and parallel tasks.

🔹 Example
import { fork } from "child_process";

// Fork a child process to run another JS file
const child = fork("./child.js");

// Send message to child
child.send({ msg: "Hello Child" });

// Listen for message from child
child.on("message", data => {
  console.log("Message from child:", data);
});


child.js

process.on("message", data => {
  console.log("Message from parent:", data);
  process.send({ reply: "Hello Parent" });
});

🔹 Simple analogy

Parent process = you

Child process = your clone

Both can work independently, but also talk via messages

⭐ Key points

fork = new Node.js process

Runs a separate JS file

Communicates via IPC (inter-process communication)

Helps use multiple CPU cores