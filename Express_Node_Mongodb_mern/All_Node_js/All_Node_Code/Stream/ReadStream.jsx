
const stream = fs.createReadStream('./file/jugal.txt', {
  encoding: 'utf-8',  
  highWaterMark: 10   // buffer size (bytes)
});

console.log('Default highWaterMark:', stream.readableHighWaterMark);

stream.on('data', (chunk) => {
  console.log(chunk);

  const buf = Buffer.from(chunk, 'utf8');

  console.log(`🧱 Chunk (${chunk.length} bytes):`, chunk);
  console.log('Buffer:', buf, '| Size:', buf.length);
  console.log('🔹 Type:', typeof chunk);
});

stream.on('end', () => {
  console.log('streaming complete');
});

res.pip(stream)




const stream = fs.createReadStream('./file/jugal.txt', {
  encoding: 'utf-8',
  highWaterMark: 10
});

stream.on('open', () => console.log('opened'));
stream.on('data', chunk => console.log('chunk:', chunk));
stream.on('end', () => console.log('completed'));
stream.on('close', () => console.log('closed'));
stream.on('open', (fd) => {
  console.log("File opened:", fd);
});

stream.on('error', err => console.log('error:', err));






::::::::: ---------------->> Cosutem Streaming --------------------->>

const { Readable } = require('stream');

const customStream = new Readable({
  highWaterMark: 5, // 5 bytes
  read() {
    this.push('Hello Jugal!');
    this.push(null);
  }
});

customStream.on('data', (chunk) => {
  console.log('🧱 Chunk:', chunk.toString());
});



//// ------>>>Optmized --------------------------->>


import fs from "fs";
import { pipeline } from "stream/promises";

const optimizedRead = async () => {
  const readStream = fs.createReadStream("./file/jugal.txt", {
    encoding: "utf-8",
    highWaterMark: 64 * 1024  // 64 KB chunk (recommended)
  });

  const writeStream = fs.createWriteStream("./file/output.txt");

  try {
    await pipeline(readStream, writeStream);
    console.log("Stream reading completed!");
  } catch (err) {
    console.error("Pipeline error:", err);
  }
};

optimizedRead();



⭐ 3. Why 64 KB is Optimal?

Because:

Default chunk = 64 KB for text

Ideal for fast I/O

Reduces syscalls

Avoids heavy memory usage

You can tune it:


| File Type          | Recommended highWaterMark |
| ------------------ | ------------------------- |
| Small text files   | 16 KB                     |
| Large logs (MB/GB) | 64 KB – 256 KB            |
| Images / videos    | 256 KB – 1 MB             |



⭐ 4. Backpressure Handling (Important)

Streams automatically slow down when needed.

Example:

Readable → Writable  
✔ If writable is slow → readable waits  
✔ Prevents memory overflow  


This is why streams are powerful.

⭐ 5. Add Event Handlers for Safety
stream.on("error", (err) => console.log("Read Error:", err));
stream.on("open", () => console.log("File Opened"));
stream.on("close", () => console.log("Stream Closed"));

⭐ 6. ASCII Diagram of Optimized Read Stream
     File System
         │
         │ Read in chunks (64 KB)
         ▼
 ┌───────────────────┐
 │ Readable Stream   │
 │ highWaterMark=64K │
 └─────────┬─────────┘
           │
           ▼
 ┌───────────────────┐
 │ Writable Stream   │
 └───────────────────┘