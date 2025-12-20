Here is the cleanest, interview-level, 
production-style example of:

🔥 pipeline → transform streams

We will cover:

Basic transform stream

Pipeline with readable → transform → writable

Async transform stream (advanced)

Multiple transforms inside pipeline

1️⃣ Basic Transform Stream

Transform stream = modifies each chunk.

Example: convert text to uppercase.

import { Transform } from "node:stream";

const upperCaseTransform = new Transform({
  decodeStrings: false, // since we use utf-8 strings
  transform(chunk, encoding, callback) {
    const upper = chunk.toUpperCase();
    callback(null, upper);
  }
});

2️⃣ 🔥 Pipeline with Transform Stream
import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

const upperCaseTransform = new Transform({
  decodeStrings: false,
  transform(chunk, encoding, callback) {
    callback(null, chunk.toUpperCase());
  }
});

await pipeline(
  fs.createReadStream("./file/jugal.txt", { encoding: "utf-8" }),
  upperCaseTransform,
  fs.createWriteStream("./file/output.txt", { encoding: "utf-8" })
);

console.log("Transform + Pipeline completed!");


✔ Reads file
✔ Converts to uppercase
✔ Writes transformed output

3️⃣ 🧠 Async Transform Stream (Super Powerful)

Useful when you must:

call DB

call API

await operations

CPU heavy operations

const delayTransform = new Transform({
  decodeStrings: false,
  async transform(chunk, encoding, callback) {
    await new Promise(res => setTimeout(res, 500)); // simulate async task
    callback(null, `Processed: ${chunk}`);
  }
});


Pipeline:

await pipeline(
  fs.createReadStream("./file/jugal.txt", { encoding: "utf-8" }),
  delayTransform,
  process.stdout
);

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
