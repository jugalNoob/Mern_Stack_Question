51. What is the difference between a Stream and a Buffer?

| Feature           | **Buffer**                               | **Stream**                                                            |
| ----------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| **Definition**    | Temporary storage for binary data        | Sequence of data chunks flowing over time                             |
| **Data Handling** | Stores the entire data before processing | Processes data piece-by-piece                                         |
| **Use Case**      | Useful for small or binary data          | Efficient for large, continuous data (like files or network requests) |


52. How do you pipe one stream into another?

Answer:
Using the .pipe() method to pass the output of one stream as input to another.

const fs = require('fs');
fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));


✅ Automatically handles flow control and backpressure.

53. What is backpressure in streams?

Answer:
Backpressure occurs when the data is being produced faster than it can be consumed.
For example, a readable stream pushes data quicker than the writable stream can handle it.

54. How do you handle backpressure?

Answer:
Use:

.pipe() — it automatically manages flow control.

Manual handling using the drain event.

const writable = fs.createWriteStream('output.txt');
if (!writable.write(data)) {
  writable.once('drain', () => console.log('Resumed writing'));
}

55. How does stream.pipeline() work?

Answer:
stream.pipeline() is a utility that chains multiple streams together and
 handles errors and cleanup automatically.

 
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('input.txt.gz'),
  (err) => err ? console.error('Pipeline failed', err) : console.log('Pipeline succeeded')
);

56. What is the process object?

Answer:
process is a global object that provides information and control over the current Node.js process.
Examples:

process.pid – process ID

process.env – environment variables

process.cwd() – current working directory

57. How do you access environment variables in Node.js?

Answer:
Use process.env.VARIABLE_NAME.

console.log(process.env.PORT);


✅ Commonly used with .env files + dotenv library.

58. What is process.argv?

Answer:
process.argv is an array containing command-line arguments passed when running a Node.js script.

node app.js hello world

console.log(process.argv); // ['node', 'app.js', 'hello', 'world']

59. What is the difference between process.exit() and process.kill()?
Function	Description
process.exit([code])	Exits the Node.js process with a given exit code (default 0).
process.kill(pid, [signal])	Sends a signal (like SIGTERM) to another process by ID — can stop or control it.
60. What are signals in Node.js?

Answer:
Signals are software interrupts sent to processes to communicate events.
Common signals:

SIGINT → Interrupt (Ctrl + C)

SIGTERM → Termination

SIGHUP → Hangup

Example:

process.on('SIGINT', () => {
  console.log('Process interrupted!');
  process.exit();
});