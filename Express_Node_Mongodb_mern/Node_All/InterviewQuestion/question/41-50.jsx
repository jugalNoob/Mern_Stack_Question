Perfect 👍 you uploaded an image showing Node.js Interview Questions 41–50 (focused on File System, Buffers, and Streams).
Here’s the complete Q&A set with short + clear explanations you can use for preparation 👇

41. What are file streams?

Answer:
File streams in Node.js allow reading or writing data in
 chunks instead of loading the entire file into memory.
They make file handling efficient for large files and support
event-driven operations (like data, end, error).

const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
readStream.on('data', chunk => console.log(chunk.toString()));

42. What is the difference between createReadStream() and readFile()?

Feature	readFile()	createReadStream()
Memory Usage	Loads entire file into memoryReads file chunk by chunk
Performance	Slow for large files	Fast and memory-efficient
Use Case	Small files	Large files / streaming
43. How can you watch file changes using Node.js?

Answer:
Use fs.watch() or fs.watchFile() to detect file modifications.

const fs = require('fs');
fs.watch('example.txt', (eventType, filename) => {
  console.log(`${filename} file was ${eventType}`);
});

44. What are synchronous vs asynchronous file operations?

Answer:

Synchronous (fs.readFileSync) blocks the event loop until the 
operation completes.


Asynchronous (fs.readFile) uses callbacks/promises 
and doesn’t block execution.


Example:

const data = fs.readFileSync('file.txt', 'utf8'); // blocking
fs.readFile('file.txt', 'utf8', (err, data) => console.log(data)); // non-blocking

45. How do you handle large files efficiently?

Answer:
Use streams instead of reading the entire file.
Also apply:

createReadStream + createWriteStream for piping

Gzip compression for optimization

Backpressure handling

const fs = require('fs');
fs.createReadStream('input.txt').pipe(fs.createWriteStream('output.txt'));


46. What is a Buffer in Node.js?

Answer:
A Buffer is a temporary memory space used to store binary data
 (e.g., file, image, video) before processing.
It’s especially useful when working with streams or TCP connections.

47. Why are Buffers used in Node.js?

Answer:
Because Node.js handles I/O operations asynchronously,
 Buffers are used to store raw data until it can be
  processed — especially when data arrives in chunks.



48. How do you create a Buffer?

Answer:

// From string
const buf1 = Buffer.from('Hello');
// Allocating empty buffer
const buf2 = Buffer.alloc(10);
// From array
const buf3 = Buffer.from([72, 101, 108, 108, 111]);

49. What is a Stream?

Answer:
A Stream is an event-based interface for handling 
continuous data flow (reading/writing) efficiently.
Examples: File I/O, network sockets, HTTP responses.


50. What are the types of streams in Node.js?

Answer:
There are 4 main types:

Readable – for reading data (e.g., fs.createReadStream)

Writable – for writing data (e.g., fs.createWriteStream)

Duplex – for both reading and writing (e.g., TCP sockets)

Transform – for modifying data while reading/writing (e.g., zlib compression)