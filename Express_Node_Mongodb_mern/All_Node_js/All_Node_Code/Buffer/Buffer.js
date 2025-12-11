const str = 'jugal sharma';

const buf = Buffer.from(str);
const locl = Buffer.alloc(buf.length); // allocate same size buffer

console.log(buf);                // raw buffer
console.log(buf.toString());     // convert back to string
console.log(locl);               // empty buffer of same size
console.log(buf.byteLength);     // size in bytes
console.log(buf.BYTES_PER_ELEMENT); // buffer element size



⭐ OUTPUT Explanation
1️⃣ buf
<Buffer 6a 75 67 61 6c 20 73 68 61 72 6d 61>


Raw UTF-8 bytes for each character.

2️⃣ buf.toString()
jugal sharma


Converts bytes → string.

3️⃣ locl
<Buffer 00 00 00 00 00 00 00 00 00 00 00 00>


Same length as buf, but filled with zeros.

4️⃣ buf.byteLength

Returns total bytes occupied.

12


(jugal sharma = 12 characters = 12 bytes)

5️⃣ buf.BYTES_PER_ELEMENT
1


Because a Buffer internally stores each element in 1 byte.


| Method                  | Meaning                       |
| ----------------------- | ----------------------------- |
| `Buffer.from(str)`      | Convert string → buffer       |
| `Buffer.alloc(n)`       | Create empty buffer of size n |
| `buf.toString()`        | Convert buffer → string       |
| `buf.byteLength`        | Total number of bytes         |
| `buf.BYTES_PER_ELEMENT` | Always 1 for Buffer           |





✅ 1. Buffer.concat()

Used to merge multiple buffers.

const b1 = Buffer.from("jugal ");
const b2 = Buffer.from("sharma");

const final = Buffer.concat([b1, b2]);

console.log(final.toString()); 

Output:
jugal sharma

✅ 2. Buffer.compare()

Used to compare two buffers.

const a = Buffer.from("abc");
const b = Buffer.from("abd");

console.log(Buffer.compare(a, b)); 

Output:
-1  // a < b


Meaning:

0 → equal

-1 → a < b

1 → a > b

✅ 3. Buffer.copy()

Copy data from one buffer to another.

const src = Buffer.from("hello");
const target = Buffer.alloc(5);

src.copy(target);

console.log(target.toString());

Output:
hello

✅ 4. Buffer.slice()

Returns a subsection (shares same memory).

const buf = Buffer.from("abcdef");

const slice = buf.slice(2, 5);

console.log(slice.toString()); // cde

❗ IMPORTANT

slice() does NOT create a new copy.
It is a view on the same memory.

Example:

slice[0] = 0x7A; // 'z'
console.log(buf.toString());

Output:
abzdef

✅ 5. Base64 Encoding / Decoding
Encode:
const b = Buffer.from("jugal");
console.log(b.toString("base64"));

Decode:
const d = Buffer.from("anVnYWw=", "base64");
console.log(d.toString());

✅ 6. Writing data in buffer
const buf = Buffer.alloc(10);
buf.write("Hi!");
console.log(buf.toString());


Output:

Hi!

🔥 ADVANCED INTERVIEW CONCEPTS
1️⃣ Why does Node.js use buffers?

Because Node.js handles:

TCP streams

file system data

binary protocols

images, audio

network packets

Buffers store raw binary data.

2️⃣ What is the difference between Buffer and ArrayBuffer?



| Buffer                                          | ArrayBuffer                   |
| ----------------------------------------------- | ----------------------------- |
| Node.js specific                                | JavaScript standard           |
| Has many helper methods (`write`, `copy`, etc.) | No methods, only byte storage |
| Used in FS, TCP, streams                        | Used in browser, Web APIs     |



3️⃣ What is the difference between Buffer.alloc() and Buffer.allocUnsafe()?


| alloc()                 | allocUnsafe()          |
| ----------------------- | ---------------------- |
| Fills buffer with `0`   | Does NOT clean memory  |
| Slow but safe           | Very fast but risky    |
| Safe for sensitive data | May contain old memory |




Example:

const b = Buffer.allocUnsafe(10);
console.log(b); // random memory data