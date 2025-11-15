🧩 What is zlib in Node.js?

zlib is a built-in Node.js module that provides
 compression and decompression functionality — 
 it lets you compress files or data to make them
  smaller, and later uncompress (inflate) them.


  📦 Why use zlib?

To reduce data size before sending over network (like HTTP responses).

To save disk space when storing files.

To improve performance for APIs or streams that transfer large data.



| Method                | Description                                |
| --------------------- | ------------------------------------------ |
| `zlib.gzip()`         | Compress data using **Gzip** algorithm     |
| `zlib.gunzip()`       | Decompress Gzip-compressed data            |
| `zlib.deflate()`      | Compress data using **Deflate** algorithm  |
| `zlib.inflate()`      | Decompress Deflate-compressed data         |
| `zlib.createGzip()`   | Create a **stream** that compresses data   |
| `zlib.createGunzip()` | Create a **stream** that decompresses data |


🧠 Example 1 — Simple Compression & Decompression
const zlib = require('zlib');
const fs = require('fs');

// Compress a file
const input = fs.createReadStream('example.txt');
const output = fs.createWriteStream('example.txt.gz');
input.pipe(zlib.createGzip()).pipe(output);

// Decompress the file
const unzipInput = fs.createReadStream('example.txt.gz');
const unzipOutput = fs.createWriteStream('example_unzipped.txt');
unzipInput.pipe(zlib.createGunzip()).pipe(unzipOutput);

🧠 Example 2 — Compressing a string in memory
const zlib = require('zlib');

const data = 'Hello, this is a message to compress!';
zlib.gzip(data, (err, compressed) => {
  if (err) throw err;
  console.log('Compressed:', compressed);

  zlib.gunzip(compressed, (err, uncompressed) => {
    if (err) throw err;
    console.log('Decompressed:', uncompressed.toString());
  });
});

⚡ Real-world Use Case

HTTP compression: You can compress API responses with gzip before sending to client:

const http = require('http');
const zlib = require('zlib');

http.createServer((req, res) => {
  const responseText = 'This is a compressed response!';
  zlib.gzip(responseText, (err, buffer) => {
    res.writeHead(200, { 'Content-Encoding': 'gzip' });
    res.end(buffer);
  });
}).listen(3000);


| Feature        | Description                             |
| -------------- | --------------------------------------- |
| Module         | `zlib`                                  |
| Purpose        | Compression & Decompression             |
| Type           | Core Node.js module (no install needed) |
| Common Formats | Gzip, Deflate                           |
| Works with     | Files, Streams, Buffers, HTTP           |



