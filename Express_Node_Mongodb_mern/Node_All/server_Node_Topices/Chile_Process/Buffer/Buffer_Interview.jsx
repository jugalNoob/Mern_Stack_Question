Perfect! Here is everything you asked — clean, interview-ready, and easy to revise.

🚀 TOP 20 Node.js Buffer INTERVIEW QUESTIONS (with answers)




⭐ What is Binary?

Binary is the language of computers.

It uses only two digits:

0 and 1


Every operation in a computer (numbers, text, images, files)
 is eventually converted to 0s and 1s.

Why?

Because inside a computer, everything is stored using:

ON (1)

OFF (0)

electrical signals.

So binary = electrical ON/OFF representation of data.

⭐ What is a Byte?

A byte is a unit of digital data.

1 byte = 8 bits

A bit is one binary digit:

bit = 0 or 1  

byte = 8 bits → 01010101

✔ How they relate

Binary = the language (0 and 1)
Bytes = the units used to measure binary data

Example:
01000001  → this is 1 byte → represents the letter "A"

⭐ Real World Meaning


| Thing             | Stored In |
| ----------------- | --------- |
| A letter like "A" | 1 byte    |
| "Hello"           | 5 bytes   |
| Small image       | 200 KB    |
| HD movie          | 2 GB      |



⭐ Simple Analogy

Binary = alphabet of computers (0 & 1)

Byte = a word made of 8 letters

⭐ Why Buffers use bytes?

Because Buffers store raw binary data, and binary is measured in bytes.

So a Buffer is basically:

An array of bytes.




⭐ 1️⃣ What is a Buffer in Node.js? (Perfect Interview Answer)

A Buffer in Node.js is a raw binary data container used to store 
and handle data in bytes, not characters.
It is mainly used when Node.js works with:

files (fs module)

streams

TCP sockets

binary protocols

images, audio, video, zip files

JavaScript normally handles only Unicode strings, but Node.js needs to
 process binary data, so Buffers fill that gap.



2️⃣ Why does Node.js need Buffers?

Because JavaScript normally handles only strings & arrays (Unicode).
Node.js deals with binary network/file data → needs Buffers.

3️⃣ How do you create a Buffer?

const buf = Buffer.from("hello");
const empty = Buffer.alloc(10);
const unsafe = Buffer.allocUnsafe(10);

4️⃣ What is the difference between Buffer.from() and Buffer.alloc()?


Buffer.from()	Buffer.alloc()
Creates buffer from data	     Creates empty buffer with fixed size
Reads memory safely	Fills with   0 


5️⃣ What is Buffer.allocUnsafe()?

Creates a buffer FAST but does NOT clear old memory →
 may contain previous random bytes.

6️⃣ How do you convert Buffer → string?
buf.toString("utf8")

7️⃣ How to convert string → Buffer?
Buffer.from("jugal")

8️⃣ What is buffer.length?

Total bytes occupied.

9️⃣ What does buffer.slice() do?

Creates a view into the same memory, not a copy.

🔟 How to copy one buffer into another?
source.copy(target);

1️⃣1️⃣ What is Buffer.concat() used for?

Combines multiple buffers.

1️⃣2️⃣ Does Buffer support Base64 encoding?

Yes:

buf.toString("base64");

1️⃣3️⃣ How do you decode Base64 to string?
Buffer.from(base64String, "base64").toString()

1️⃣4️⃣ How to fill a buffer?
buf.fill(0);
buf.fill("A");

1️⃣5️⃣ What is buffer.write() used for?

Writes string into a buffer.

1️⃣6️⃣ Difference between Buffer and ArrayBuffer?


| Buffer              | ArrayBuffer               |
| ------------------- | ------------------------- |
| Node.js specific    | Standard JS typed array   |
| Has helper methods  | Only raw memory           |
| Used in FS, streams | Used in browsers/Web APIs |



1️⃣7️⃣ Are Buffers mutable?

Yes. You can modify bytes directly.

1️⃣8️⃣ How to get a byte from buffer?
buf[0] // first byte

1️⃣9️⃣ Is a Buffer part of V8 or Node.js?

Node.js (not core JavaScript).

2️⃣0️⃣ How does Node.js protect Buffer memory?

Buffer.alloc() fills memory with zeros by default (safe).

📘 COMPLETE BUFFER CHEAT SHEET (easy to memorize)
Create Buffers
Buffer.from("hello")
Buffer.alloc(20)
Buffer.allocUnsafe(20)

Convert
buf.toString()              // Buffer → string
Buffer.from("abc")          // string → Buffer

Info
buf.length                  // size in bytes
buf.byteLength              // same as length
buf.BYTES_PER_ELEMENT       // always 1

Modify
buf[0] = 0x41;  // A
buf.write("Hi");
buf.fill(0);

Copy
buffer.copy(targetBuffer)

Concat
Buffer.concat([b1, b2, b3])

Slice
const part = buf.slice(0, 5)


⚠ shares the same memory!

Encoding
buf.toString("utf8")
buf.toString("base64")

Buffer.from("hello", "utf8")
Buffer.from("aGVsbG8=", "base64")

Compare
Buffer.compare(b1, b2)

Check if object is a Buffer
Buffer.isBuffer(obj)




🔥 BUFFER vs STREAM — Simple & Interview-Winning Explanation
⭐ 1. Buffer

Holds entire data in memory at once.

Good for small files/data.

Example: reading a small image file.

fs.readFile("a.jpg", (err, data) => {
    console.log(data); // Buffer
});

⭐ 2. Stream

Processes data piece-by-piece (chunks).

Does NOT load everything in memory.

Good for big files, video streaming, large JSON, network packets.

Example:

const stream = fs.createReadStream("bigfile.zip");

stream.on("data", chunk => {
    console.log("chunk length:", chunk.length);
});

🔥 Main Difference (Gold Answer for Interviews)


| Feature      | Buffer                 | Stream                  |
| ------------ | ---------------------- | ----------------------- |
| Memory usage | Loads entire data      | Loads chunks            |
| Performance  | Slow for large data    | Fast & scalable         |
| Use case     | Small files, HTTP body | Large files, video, TCP |
| Example      | `fs.readFile()`        | `fs.createReadStream()` |



🎯 MEMORY HOOK (Super Easy)

Buffer = storage
Stream = pipeline

Buffer stores all data.
Stream keeps data flowing.

If you want, I can also give you: