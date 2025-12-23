

✅ Definition

A Duplex stream is both readable and writable, but it does not modify data by default.

🔹 Key points

Can read and write independently

No automatic data transformation

Example: TCP socket, net.Socket



2️⃣ Transform Stream
✅ Definition

A Transform stream is a special type of Duplex that modifies data while reading/writing.

🔹 Key points

Read + write + modify

Used for on-the-fly transformation (uppercase, compression, encryption, CSV→JSON)

Built-in _transform() method

🔹 Example



3️⃣ Key Differences


| Feature             | Duplex Stream             | Transform Stream                       |
| ------------------- | ------------------------- | -------------------------------------- |
| Type                | Readable + Writable       | Duplex + modifies data                 |
| Purpose             | Read/write independently  | Read/write **with transformation**     |
| Method to implement | `_read()` + `_write()`    | `_transform()` (write → modify → push) |
| Examples            | TCP socket, custom duplex | Uppercase stream, gzip, encryption     |


4️⃣ Interview-ready sentence

Duplex streams can read and write independently, while Transform 
treams are a special 
Duplex that modifies data on-the-fly.

00000000000000000000000000000000000000000000 ========================???

const { stdout } = require('process');
upperCase.write('hello transform');
upperCase.end();

pipeline(upperCase, stdout, err => {
  if(err) console.error(err);
});


Output: HELLO TRANSFORM

Key point: Transform streams are Duplex streams with built-in transformation. You don’t need separate logic for read/write correlation.

5. Differences: Duplex vs Transform

| Feature                  | Duplex                      | Transform                                   |
| ------------------------ | --------------------------- | ------------------------------------------- |
| Readable                 | ✅                           | ✅                                           |
| Writable                 | ✅                           | ✅                                           |
| Automatic transformation | ❌                           | ✅                                           |
| Use case                 | Bidirectional protocols     | Data transformation pipelines               |
| Implementation           | Custom `read()` & `write()` | Only `transform(chunk, encoding, callback)` |
#


Summary:

All Transform streams are Duplex, but not all Duplex streams are Transform.

Use Duplex for custom read/write logic where input ≠ output.

Use Transform when output is derived from input automatically.

6. Common Advanced Use Cases

Duplex

WebSocket server: send & receive messages

TCP client/server: read request → send response

Custom in-memory protocols

Transform

gzip compression / decompression

AES encryption / decryption

Streaming JSON parser

CSV → JSON converter

Readable/Writable

File read/write pipelines

HTTP request/response streaming

Logging

7. Pipeline Example with Transform
const fs = require('fs');
const { Transform, pipeline } = require('stream/promises');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }Key Points

Duplex = Readable + Writable in one.

write() handles input data.

read() provides output data.

pipeline() safely connects streams, handles errors, and ends the process properly.


| Component   | Purpose                              |
| ----------- | ------------------------------------ |
| `Readable`  | source of data (file, request)       |
| `Transform` | modify/transform chunks              |
| `Writable`  | destination (file, response, stdout) |
| `pipeline`  | safe connect + backpressure handling |


1. Node.js Stream Types

Streams in Node.js are abstract interfaces for working with
 streaming data. They are event-based and memory-efficient, ideal for
  large data processing.


 | Stream Type   | Readable | Writable | Duplex | Transform | Use Case                                                     |
| ------------- | -------- | -------- | ------ | --------- | ------------------------------------------------------------ |
| **Readable**  | ✅        | ❌        | ❌      | ❌         | Reading data from file, HTTP request, TCP socket             |
| **Writable**  | ❌        | ✅        | ❌      | ❌         | Writing to file, HTTP response, TCP socket                   |
| **Duplex**    | ✅        | ✅        | ✅      | ❌         | Bidirectional streams (TCP, WebSocket, custom protocols)     |
| **Transform** | ✅        | ✅        | ✅      | ✅         | Transforming data while streaming (gzip, encryption, parser) |


2. Readable vs Writable

Readable

Emits 'data' events or can be piped.

Example:

const fs = require('fs');
const readable = fs.createReadStream('./file.txt');
readable.on('data', chunk => console.log(chunk.toString()));


Writable

Can .write(chunk) or .end().

Example:

const writable = fs.createWriteStream('./file.txt');
writable.write('Hello world');
writable.end();

3. Duplex Stream

Definition: Both readable and writable in one stream.

Use case: TCP sockets, chat servers, custom bidirectional protocols.

Custom Duplex example:

const { Duplex } = require('stream');

const duplex = new Duplex({
  write(chunk, enc, callback) {
    console.log('Received:', chunk.toString());
    callback();
  },
  read(size) {
    this.push('Sending back some data\n');
    this.push(null);
  }
});

duplex.write('Hello duplex');
duplex.end();
duplex.on('data', chunk => console.log(chunk.toString()));


Output:

Received: Hello duplex
Sending back some data


Key point: Duplex doesn’t transform data automatically. Writable and readable are separate, you handle logic manually.

4. Transform Stream

Definition: A special Duplex where the output is computed from input.

Key difference from Duplex: Data written → automatically transformed → readable output.

Use case: Compression (gzip), encryption, parsers.

Example: Uppercase transform

const { Transform, pipeline } = require('stream');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }

});

await pipeline(
  fs.createReadStream('./input.txt'),
  upperCase,
  fs.createWriteStream('./output.txt')
);

console.log('File converted to uppercase successfully');


Efficient and memory-safe for large files.

Handles errors automatically.

🔹 Interview Tip

Question: “Explain difference between Duplex and Transform stream.”

Answer:

Duplex streams allow manual read/write logic for bidirectional communication
. Transform streams are special Duplex 
streams where output is derived automatically from input.


0000000000000000000000000000 ::::::::::::::::::::::--------------------->>

1. Definition

Unidirectional: Data flows only one way (source → destination).

Example: Reading a file → sending its content to a writable stream.

Bidirectional: Data flows both ways (A ↔ B).

Example: Client sends a message → Server responds → Client can send again.

2. Node.js Streams Context

Readable stream: only produces data (A → B)

Writable stream: only consumes data (A → B)

Duplex stream: can read and write at the same time (A ↔ B)

Transform stream: is also duplex, but it transforms data while passing it along.

3. Real-world Examples

TCP Socket

Client sends “Hello Server”

Server responds “Hello Client”

Both sides can read & write at the same time.

WebSocket

Browser sends a chat message → server receives → broadcasts to others → browser receives responses.

Data flows both ways continuously.

Custom Duplex Stream

const { Duplex } = require('stream');

const duplex = new Duplex({
  write(chunk, enc, callback) {
    console.log("Received from client:", chunk.toString());
    callback();
  },
  read() {
    this.push("Hello from server\n");
    this.push(null);
  }
});

duplex.write("Hi server");   // Client → Server
duplex.on('data', data => console.log("Server → Client:", data.toString())); // Server → Client


Here, the stream can receive and send data → bidirectional.

Key point

Bidirectional communication = two-way conversation in code.

Only Duplex streams (and Transform streams) can do true bidirectional streaming in Node.js.