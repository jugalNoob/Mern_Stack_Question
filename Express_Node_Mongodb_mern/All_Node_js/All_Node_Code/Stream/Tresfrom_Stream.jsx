///////////// ----->>Reda stream Trnsfrom ------------------>>

const reverseTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, cb) {
    cb(null, chunk.split("").reverse().join(""));
  }
});

const upperCaseTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, cb) {
    cb(null, chunk.toUpperCase());
  }
});


Transform: a special kind of Duplex stream (read + write) that modifies data while passing it through.

decodeStrings: false: ensures that the input chunk is already a string (not a Buffer), so we can call .toUpperCase() directly.

transform(chunk, encoding, cb):

Runs for every chunk of data written to the stream.

chunk = the incoming data.

cb(null, transformedChunk) = pushes modified data to the readable side of the stream.

Here, chunk.toUpperCase() converts all text to uppercase.

✅ This is the core “modify on-the-fly” part.

await pipeline(
  fs.createReadStream("./file/jugal.txt", { encoding: "utf-8" }),
  upperCaseTransform,
   process.stdout
);

fs.createReadStream creates a readable stream from the file.

{ encoding: "utf-8" } ensures that the data is read as strings, not Buffers.

Data is read in chunks (not the whole file at once) → memory-efficient.


pipeline is a safe way to pipe multiple streams together.

Here we are piping:

File read stream → 2. Transform stream → 3. Output to console (process.stdout)

await pipeline(...)

Makes it promise-based, so you can use async/await

Automatically handles errors and closes streams if something goes wrong.


///////// --->>Write Stream Terfrom -------------->>

const { Transform } = require('stream');

// Create a Transform stream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert chunk to uppercase
    const upperChunk = chunk.toString().toUpperCase();
    callback(null, upperChunk); // pass transformed data
  }
});

// Example: write to stream
upperCaseTransform.on('data', (chunk) => {
  console.log('Transformed:', chunk.toString());
});

// Write some data
upperCaseTransform.write('hello ');
upperCaseTransform.write('world!');
upperCaseTransform.end();





4️⃣ 🔥 Multiple Transform Streams in Pipeline
Example:

Transform 1 → uppercase

Transform 2 → reverse text

Transform 3 → add prefix

const upperCaseTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, cb) {
    cb(null, chunk.toUpperCase());
  }
});

const reverseTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, cb) {
    cb(null, chunk.split("").reverse().join(""));
  }
});

const prefixTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, cb) {
    cb(null, "PREFIX: " + chunk);
  }
});

Pipeline:
await pipeline(
  fs.createReadStream("./file/jugal.txt", { encoding: "utf-8" }),
  upperCaseTransform,
  reverseTransform,
  prefixTransform,
  process.stdout
);

5️⃣ Transform Stream for JSON Parsing (Real Project Use Case)
const jsonParseTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, callback) {
    const obj = JSON.parse(chunk);
    callback(null, JSON.stringify({ ...obj, verified: true }) + "\n");
  }
});

6️⃣ Transform Stream Example for Compression (Gzip)
import { createGzip } from "node:zlib";

await pipeline(
  fs.createReadStream("./file/jugal.txt"),
  createGzip(),
  fs.createWriteStream("./file/jugal.txt.gz")
);

🎉 Summary


| Component   | Purpose                              |
| ----------- | ------------------------------------ |
| `Readable`  | source of data (file, request)       |
| `Transform` | modify/transform chunks              |
| `Writable`  | destination (file, response, stdout) |
| `pipeline`  | safe connect + backpressure handling |
