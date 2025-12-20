🌐 process.stdin, process.stdout, process.stderr in Node.js

1️⃣ process.stdin – Standard Input

Meaning: Stream that represents input from the terminal (keyboard).

Type: Readable Stream

You can read user input from the terminal.

Example:

process.stdin.on('data', (data) => {
  console.log(`You typed: ${data.toString()}`);
});


When user types something and presses Enter, it triggers the data event.

✅ Interview tip: Used for CLI apps and interactive scripts.

2️⃣ process.stdout – Standard Output

Meaning: Stream that represents output to the terminal (console).

Type: Writable Stream

Used to print information to the terminal.

Example:

process.stdout.write("Hello world!\n");


Difference from console.log():

console.log() adds a newline automatically.

stdout.write() gives more control over formatting.

✅ Interview tip: Useful in logging, CLI tools, or piping
 output to another process.

3️⃣ process.stderr – Standard Error

Meaning: Stream for error messages, separate from normal output.

Type: Writable Stream

Helps separate normal output from errors, useful for redirection.

Example:

process.stderr.write("This is an error!\n");


console.error() is basically a wrapper for process.stderr.

✅ Interview tip:

Allows logging errors separately from stdout.

Often used in CLI programs and scripts, so errors can be redirected to a file.

4️⃣ Quick Table Summary

| Stream   | Type            | Purpose                      | Example                          |
| -------- | --------------- | ---------------------------- | -------------------------------- |
| `stdin`  | Readable Stream | Input from terminal/keyboard | `process.stdin.on('data')`       |
| `stdout` | Writable Stream | Normal output to terminal    | `process.stdout.write('Hello')`  |
| `stderr` | Writable Stream | Error output to terminal     | `process.stderr.write('Error!')` |


5️⃣ Why this matters for interviews

Classic Node.js interview question: “Difference between stdout and stderr?”

Advanced: Can pipe stdout/stderr to other processes or files:

node app.js > out.log 2> error.log


> → redirects stdout

2> → redirects stderr

000000000000 ------------------------->>>Important ------------------->>

Timeout vs Excit(0)

console.log("Start");
setTimeout(() => console.log("This may not run"), 1000);
process.exit(0);

3️⃣ console.log("This will not run")

This line is never executed, because process.exit() stops the process immediately.

Any async operations (setTimeout, promises, I/O) will not complete after process.exit().

4️⃣ Example with async code
console.log("Start");
setTimeout(() => console.log("This may not run"), 1000);
process.exit(0);


Output:

Start


"This may not run" is never printed because process.exit() stops the process before the timeout executes.


5️⃣ Interview Tip

process.exit(code) → immediate termination.

Never rely on async callbacks after calling process.exit().

Use exit codes to indicate success (0) or error (1+) to the OS.

Common trap question:

“Will code after process.exit() run?” → ❌ No


2️⃣ What process.exit() does
process.exit(code);


Immediately terminates the Node.js process.

Stops the event loop immediately.

Pending timers, I/O callbacks, promises, or setTimeout callbacks will not execute.

3️⃣ Example
console.log("Start");

setTimeout(() => {
  console.log("This will not run");
}, 1000);

process.exit(0);


Output:

Start


"This will not run" is never printed, because process.exit() kills the process before the timer fires.

4️⃣ How to allow async code to finish

If you want the timer to execute before exiting, you should wait or schedule exit after the timer:

console.log("Start");

setTimeout(() => {
  console.log("This will run");
  process.exit(0);
}, 1000);


Output:

Start
This will run


✅ Proper way: call process.exit() after async work completes.

5️⃣ Interview Key Points

process.exit() → immediate termination, bypasses event loop.

Timers (setTimeout, setInterval) and async callbacks will not execute after exit.

To execute async tasks before exit → use callback, promise, or setImmediate before calling process.exit().

Common trap question:

Q: “Will setTimeout execute after process.exit()?” → ❌ No