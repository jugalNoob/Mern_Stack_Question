Q what is Meaing of backpressure in Stream ?



Node.js Streams – Ultimate Pro-Level Guide
1. What is a Stream?

Definition: A stream is a sequence of data chunks,
 read or written over time.

Why: Ideal for large files or continuous data
 like HTTP requests, sockets, video/audio streaming.

Key advantage: Memory efficiency—no need to 
load the whole data in RAM.




Readable Streams

Flowing mode: emits 'data' automatically.

Paused mode: use .read() to pull data manually.

Events:

'data' → chunk available

'end' → stream finished

'error' → error occurred

'close' → file/socket closed

Example: Reading a file

const fs = require('fs');
const readable = fs.createReadStream('./input.txt', { encoding: 'utf-8' });

readable.on('data', chunk => console.log(chunk));
readable.on('end', () => console.log('Done reading'));
readable.on('error', err => console.error(err));

Writable Streams

Methods:

.write(chunk) → write data

.end() → finish writing

Events:

'finish' → called after .end() completes

'error' → if write fails

Example: Writing to a file

const writable = fs.createWriteStream('./output.txt');
writable.write('Hello World\n');
writable.end();
writable.on('finish', () => console.log('Finished writing'));

Duplex Streams

Definition: Stream that is both readable and writable.

Important: Readable side ≠ Writable side, you implement both.

Use case: TCP sockets, WebSocket connections, chat apps.

Example:

const { Duplex } = require('stream');

const duplex = new Duplex({
  write(chunk, enc, callback) {
    console.log('Received:', chunk.toString());
    callback();
  },
  read(size) {
    this.push('Server says hi\n');
    this.push(null);
  }
});

duplex.write('Hello server');   // Writable
duplex.on('data', data => console.log(data.toString())); // Readable

Transform Streams

Definition: A Duplex stream that transforms data automatically.

Key difference from Duplex: output depends on input.

Use cases: gzip compression, encryption, parsing CSV/JSON.

Example: Uppercase transform

const { Transform, pipeline } = require('stream');
const { stdout } = require('process');

const upperCase = new Transform({
  transform(chunk, enc, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

upperCase.write('hello world');
upperCase.end();

pipeline(upperCase, stdout, err => {
  if(err) console.error(err);
});

3. Modes of Readable Streams

Flowing Mode

Data emitted automatically via 'data' events.

Example: readable.on('data', chunk => ...)

Paused Mode

Data must be pulled manually via .read().

Example: let chunk = readable.read();

Tip for interviews: Node streams start in paused mode. Calling .on('data') switches to flowing mode.

4. Backpressure

Problem: Fast producer → slow consumer → memory overflow.

Solution: Node.js streams handle it automatically:

write() returns false if the buffer is full

Producer should wait for 'drain' before writing again.

Example:

if(!writable.write(data)) {
    writable.once('drain', () => writable.write(data));
}


Interview tip: Understanding backpressure is crucial for scalable systems.

5. Pipeline vs Pipe


| Feature        | `.pipe()`       | `pipeline()`                 |
| -------------- | --------------- | ---------------------------- |
| Error handling | Manual          | Automatic                    |
| Stream closure | Manual          | Automatic                    |
| Recommended    | Simple chaining | Production-grade robust code |



Example:

const fs = require('fs');
const { pipeline } = require('stream/promises');

await pipeline(
  fs.createReadStream('./input.txt'),
  fs.createWriteStream('./output.txt')
);

6. Bidirectional Communication

Definition: Data can flow both ways (A ↔ B)

Streams: Only Duplex / Transform support true bidirectional flow.

Example: TCP sockets, chat servers, duplex in-memory streams.

7. Common Interview Questions

Q1: Difference between Duplex and Transform?
A: Transform = special Duplex; output is automatically derived from input.

Q2: What is backpressure and why important?
A: Prevents fast producers from overwhelming slow consumers; avoids memory issues.

Q3: What events exist on streams?
A: 'data', 'end', 'finish', 'error', 'close', 'drain'.

Q4: How do you pipe multiple streams safely?
A: Use pipeline() instead of .pipe() for error handling and auto cleanup.

Q5: Give real-world use cases for streams.
A: File uploads/downloads, video/audio streaming, chat apps, TCP servers, compression/encryption.

8. Pro-Level Tips

Always handle errors with .on('error') or pipeline().

Understand flowing vs paused mode.

Know backpressure mechanism.

Use Transform for data processing pipelines, Duplex for custom bidirectional communication.

For large data, prefer streaming over reading/writing all at once.

You can combine multiple streams: e.g., Readable → Transform → Transform → Writable.

If you want, I can create a “Pro Node.js Streams Cheat Sheet” including:

Readable/Writable/Duplex/Transform

Methods, events, pitfalls

Backpressure example

Flow diagram of bidirectional vs unidirectional

This is perfect for interview quick revision.

Do you want me to make that cheat sheet?

