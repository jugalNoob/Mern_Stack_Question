// 🧠 Why "finish"?

// ReadStream emits "end" → reading done

// WriteStream emits "finish" → writing done

// "close" event → file descriptor closed (for both)

// Create a writable stream
const stream = fs.createWriteStream('./file/jugal.txt', {
  encoding: 'utf8',
  highWaterMark:10
});

// Write data manually
stream.write('Hi, I am Jugal Sharma.\n');
stream.write('I am learning Node.js streams!\n');

// End the stream (very important)
stream.end();

// Listen for the 'finish' event
stream.on('finish', () => {
  console.log('✅ File writing completed successfully!');
});

// Listen for errors
stream.on('error', (err) => {
  console.error('❌ Error:', err.message);
});


///////////// -------------------->>Pipline  --------------->>
✅ Key points:

writeStream → writable, cannot be first argument to pipeline.

pipeline(readable, writable) → proper usage.

await pipeline(...) requires 'stream/promises'.

::::::::::::::::::::With Zlib ::::::::::::::::::::::::::

// Step 1️⃣: Create a writable stream to write data
const stream = fs.createWriteStream('./file/jugal.txt', {
  encoding: 'utf8',
  highWaterMark: 10, // control chunk size
});

stream.write('Hi, I am Jugal Sharma.\n');
stream.write('I am learning Node.js streams!\n');
stream.end();

stream.on('finish', () => {
  console.log('✅ File writing completed successfully!');

  // Step 2️⃣: Compress the file after writing is done
  const source = fs.createReadStream('./file/jugal.txt');
  const destination = fs.createWriteStream('./file/jugal.txt.gz');
  const gzip = zlib.createGzip();

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('❌ Compression failed:', err.message);
    } else {
      console.log('✅ File successfully compressed → jugal.txt.gz');
    }
  });
});

stream.on('error', (err) => {
  console.error('❌ Error:', err.message);
});


:::::: Drain and Destory :::::::::::::::::::::::::::::::::::::::::


import fs from "fs";

const stream = fs.createWriteStream('./file/jugal.txt', {
  encoding: 'utf-8',
  highWaterMark: 10
});

// Write data
const canWrite = stream.write('hello world hi am jugal sharma');

// If buffer is full → we wait for drain event
if (!canWrite) {
  console.log("🛑 Buffer FULL — waiting for drain...");
  stream.once('drain', () => {
    console.log("✅ drain event fired — buffer empty now");
  });
}

// End Stream
stream.end();

// destroy after finish
stream.on("finish", () => {
  console.log("🎉 Write Completed. Now destroying stream...");
  stream.destroy(); // closes the stream forcefully
});

// catch errors
stream.on("error", (err) => {
  console.log("❌ Error:", err);
});



✅ EXPLANATION (Simple & Clear)
⭐ drain event

Happens when:

stream.write() returns false

meaning internal buffer is full

Node waits until buffer is empty

then fires 'drain'


:::::::::::::::::::::::: ------------------->>Optmized  ------------------<<L

await pipeline(
  fs.createReadStream("./file/jugal.txt", { highWaterMark: 64 * 1024 }),
  fs.createWriteStream("./file/output.txt", { highWaterMark: 64 * 1024 })
);


import fs from "fs";
import { pipeline } from "stream/promises";

// Path to output file
const outputFile = "./file/output.txt";

// Create writable stream with options
const writeStream = fs.createWriteStream(outputFile, {
  flags: "w",             // overwrite file, use 'a' to append
  encoding: "utf-8",      // write text
  highWaterMark: 64 * 1024 // 64 KB buffer (optimized)
});

// Example usage: write chunks manually
const dataChunks = [
  "Hello world!\n",
  "This is an optimized writable stream example.\n",
  "Node.js streams are memory-efficient.\n"
];

dataChunks.forEach(chunk => {
  const canWrite = writeStream.write(chunk);
  if (!canWrite) {
    // If buffer is full, wait for 'drain' event
    writeStream.once("drain", () => console.log("Buffer drained, continue writing"));
  }
});

// End the stream
writeStream.end(() => console.log("Writing finished!"));

// Handle errors
writeStream.on("error", err => console.error("Write error:", err));
writeStream.on("finish", () => console.log("All chunks flushed to disk"));




::::::::::::::: ----------------->>Cork and uncork ::::::::::::::::::::

import fs from "fs";

const stream = fs.createWriteStream('./file/example.txt');

stream.cork();   // start buffering writes

stream.write("Hello ");
stream.write("My ");
stream.write("Name is ");
stream.write("Jugal Sharma");

stream.uncork(); // flush all writes together

stream.end();


✔ Creates 1 single write to the file
✔ Faster disk operations
✔ Perfect for logging, batching, large data writes

⚡ Why is this useful?



| Without cork  | With cork          |
| ------------- | ------------------ |
| Many writes   | One combined write |
| More syscalls | Fewer syscalls     |
| Slower        | Faster             |
| Heavy I/O     | Optimized          |



📌 Important Note

When stream.end() is called, Node automatically calls
 uncork() if still corked.



 ✅ cork() vs highWaterMark


⭐ cork() vs highWaterMark — Simple Difference
✔ highWaterMark

Controls how much data (bytes) a stream can buffer before it says:

➡ “Stop writing for now, buffer is full.”

It is a backpressure mechanism.


cork()

Controls when your writes should be sent to the OS.

➡ “Do not write immediately — batch everything until I uncork.”

It is a manual batching mechanism.

🔥 One-Line Difference (Perfect for Interview)

highWaterMark automatically controls buffer size, while cork() manually batches writes before flushing them.




📌 Detailed Explanation Table



| Feature             | `cork()`                                        | `highWaterMark`                          |
| ------------------- | ----------------------------------------------- | ---------------------------------------- |
| Purpose             | Batch multiple writes together                  | Limit buffer memory usage                |
| Who controls?       | **You** (manually call `cork()` and `uncork()`) | **Node.js** automatically                |
| When writes happen? | When `uncork()` is called                       | Whenever internal buffer < highWaterMark |
| Trigger type        | Manual flushing                                 | Backpressure threshold                   |
| Use case            | Performance optimization                        | Avoid memory overload                    |
| Example             | Log batching, heavy writes                      | Streaming huge files                     |




✔ Using cork()
const stream = fs.createWriteStream('./b.txt');

stream.cork();

stream.write('hello');
stream.write('world');
stream.write('nodejs');

stream.uncork(); // all flushed together


➡ Writes are batched manually
➡ No relation to buffer size

🧠 Conclusion
✔ highWaterMark = limit memory + backpressure
✔ cork() = batch writes manually for better performance

Both improve performance but in different ways.



| Need                                | Best choice       |
| ----------------------------------- | ----------------- |
| Limit memory usage automatically    | **highWaterMark** |
| Handle backpressure                 | **highWaterMark** |
| Pipe streams                        | **highWaterMark** |
| Batch multiple writes manually      | **cork()**        |
| Optimize performance of tiny writes | **cork()**        |
| General file/network operations     | **highWaterMark** |




⭐ Final Interview Answer

highWaterMark is generally the better option because it automatically manages backpressure and memory.
cork() is only useful when you want to manually batch multiple small writes for performance optimization.






