🚀 1️⃣ What Is a Stream?

A stream in Node.js is a way to read or write data piece 
by piece — not all at once.
✅ Helps handle large files, network data, or real-time
 input/output efficiently.


 🧩 2️⃣ Types of Streams

 | Type          | Description                        | Example Use                   |
| ------------- | ---------------------------------- | ----------------------------- |
| **Readable**  | You can read data from it          | Reading files, HTTP requests  |
| **Writable**  | You can write data to it           | Writing files, HTTP responses |
| **Duplex**    | Both readable and writable         | TCP sockets                   |
| **Transform** | Duplex + modify data while passing | Compression, encryption       |


📘 3️⃣ Examples of Each Type
🟢 A) Readable Stream — Read a file in chunks
// readable.js
const fs = require('fs');

const readStream = fs.createReadStream('bigfile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('📦 Received chunk:', chunk.length);
});

readStream.on('end', () => {
  console.log('✅ Finished reading file');
});

readStream.on('error', (err) => {
  console.error('❌ Error:', err);
});


👉 Reads a large file piece by piece instead of loading it all into memory.

🟣 B) Writable Stream — Write data continuously to a file
// writable.js
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('First line\n');
writeStream.write('Second line\n');
writeStream.end('✅ Done writing!\n');

writeStream.on('finish', () => {
  console.log('📝 All data written to file.');
});


👉 Writes to file efficiently without overwriting the entire file.

🔵 C) Duplex Stream — TCP example (server & client)
// duplex_server.js
const net = require('net');

const server = net.createServer((socket) => {
  console.log('📡 Client connected');
  socket.write('Hello from server!\n');

  socket.on('data', (data) => {
    console.log('Client says:', data.toString());
  });
});

server.listen(4000, () => console.log('🚀 Server running on port 4000'));

// duplex_client.js
const net = require('net');

const client = net.createConnection({ port: 4000 }, () => {
  console.log('🔌 Connected to server');
  client.write('Hi Server!');
});

client.on('data', (data) => {
  console.log('Server says:', data.toString());
});


👉 Both read and write — hence duplex.

🟠 D) Transform Stream — Modify data as it passes (e.g. uppercase)
// transform.js
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    callback(null, upperChunk);
  },
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);


👉 Run it and type:

node transform.js
hello world


Output:

HELLO WORLD


✅ Converts your input text to uppercase in real-time.

🧰 E) Pipe Example — Combine Read + Transform + Write
// pipe_example.js
const fs = require('fs');
const { Transform } = require('stream');

const upperCase = new Transform({
  transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  },
});

fs.createReadStream('input.txt')
  .pipe(upperCase)
  .pipe(fs.createWriteStream('output.txt'))
  .on('finish', () => console.log('✅ File transformed and written!'));


👉 Automatically connects read → transform → write


        ┌─────────────┐
        │   Source    │  (Readable Stream)
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │  Transform  │  (modify chunks)
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │ Destination │  (Writable Stream)
        └─────────────┘



        🧠 Real-world uses

        | Type      | Common Use                                  |
| --------- | ------------------------------------------- |
| Readable  | Reading big log files, HTTP requests        |
| Writable  | Writing server logs, sending HTTP responses |
| Duplex    | Chat apps (Socket), TCP connections         |
| Transform | Compress/Encrypt streams (zlib, crypto)     |
