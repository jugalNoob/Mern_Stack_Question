Node.js Streams – Interview Guide (Pro Level)
1. What is a Stream?

Definition: A stream is an abstract interface for reading or writing data in chunks, instead of loading it all into memory at once.

Why use streams: Efficient for large files, network requests, real-time processing, or continuous data.

2. Types of Streams

| Stream Type   | Readable | Writable | Duplex | Transform | Use Case                         |
| ------------- | -------- | -------- | ------ | --------- | -------------------------------- |
| **Readable**  | ✅        | ❌        | ❌      | ❌         | Reading files, HTTP requests     |
| **Writable**  | ❌        | ✅        | ❌      | ❌         | Writing files, HTTP responses    |
| **Duplex**    | ✅        | ✅        | ✅      | ❌         | TCP/Socket communication         |
| **Transform** | ✅        | ✅        | ✅      | ✅         | Compression, encryption, parsing |


3. Readable Stream

Purpose: Read data chunk by chunk.

Events:

'data' → emitted when a chunk is available

'end' → emitted when stream finishes

'error' → emitted on error

Example:

const fs = require('fs');
const readable = fs.createReadStream('./file.txt', 'utf-8');

readable.on('data', chunk => console.log(chunk));
readable.on('end', () => console.log('Finished reading'));

4. Writable Stream

Purpose: Write data chunk by chunk.

Methods:

.write(chunk) → writes a chunk

.end() → signals end of writing

Example:

const fs = require('fs');
const writable = fs.createWriteStream('./file.txt');
writable.write('Hello World\n');
writable.end();

5. Duplex Stream

Purpose: Readable + Writable → supports bidirectional communication.

Key point: Input ≠ Output; you define both write() and read() manually.

Example:

const { Duplex } = require('stream');

const duplex = new Duplex({
  write(chunk, enc, callback) {
    console.log('Received:', chunk.toString());
    callback();
  },
  read() {
    this.push('Hello back!\n');
    this.push(null);
  }
});

duplex.write('Hi server');   // writable side
duplex.on('data', data => console.log('Server says:', data.toString())); // readable side


Use Case: TCP sockets, WebSocket server, custom protocol streams.

6. Transform Stream

Purpose: A special Duplex where output is derived from input.

Key point: Transform streams automatically push transformed data to the readable side.

Example:

const { Transform, pipeline } = require('stream');
const { stdout } = require('process');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

upperCase.write('hello transform');
upperCase.end();

pipeline(upperCase, stdout, err => {
  if(err) console.error(err);
});


Use Case: Gzip, encryption, compression, CSV→JSON parser.

7. Pipeline

Purpose: Connect multiple streams safely, handle errors, close streams automatically.

Example:

const fs = require('fs');
const { pipeline } = require('stream/promises');

await pipeline(
  fs.createReadStream('./input.txt'),
  fs.createWriteStream('./output.txt')
);

console.log('Done');

8. Key Differences: Duplex vs Transform

| Feature                  | Duplex                  | Transform                 |
| ------------------------ | ----------------------- | ------------------------- |
| Readable                 | ✅                       | ✅                         |
| Writable                 | ✅                       | ✅                         |
| Automatic transformation | ❌                       | ✅                         |
| Input ↔ Output relation  | Custom logic            | Derived output from input |
| Use case                 | Bidirectional protocols | Data processing pipelines |


9. Advanced Concepts for Interviews

Backpressure:

Prevents fast producers from overwhelming slow consumers.

Handled automatically in pipe()/pipeline().

Flowing vs Paused mode:

Flowing: 'data' events emitted automatically

Paused: use .read() manually

Bidirectional communication example:

TCP socket → client and server can read/write simultaneously

Duplex streams emulate this in memory.

Error handling:

Always use .on('error') or pipeline() with callbacks for safe error handling.

Use cases in real apps:

Large file upload/download

Streaming video/audio

Real-time chat or gaming servers

Data transformation pipelines (gzip, parser, encryption)

10. Common Interview Questions & Answers

Q1: Difference between Duplex and Transform?
A: Transform is a specialized Duplex that automatically transforms written input to readable output.

Q2: What is backpressure in Node.js streams?
A: It prevents a fast producer from overwhelming a slow consumer. Streams handle it internally via buffering and .write() return value.

Q3: When to use pipeline?
A: To safely pipe multiple streams together with automatic error handling and cleanup.

Q4: What does bidirectional communication mean in streams?
A: Data flows in both directions between two endpoints (e.g., TCP, WebSocket, Duplex streams).

Q5: Difference between .pipe() and pipeline()?
A: .pipe() connects streams but requires manual error handling. pipeline() handles errors and ensures proper closure.