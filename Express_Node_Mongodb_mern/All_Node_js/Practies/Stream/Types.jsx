| Streaming Type        | Meaning                          | Examples               |
| --------------------- | -------------------------------- | ---------------------- |
| File Streaming        | Read/write large files in chunks | createReadStream       |
| Video/Audio Streaming | Client plays while downloading   | YouTube, Netflix       |
| Network Streaming     | Continuous data over socket      | WebSocket              |
| Event Streaming       | Continuous event flow            | Kafka                  |
| CDC Streaming         | Stream DB changes                | Debezium               |
| Readable Stream       | Produces chunks                  | req, file read         |
| Writable Stream       | Receives chunks                  | res, file write        |
| Duplex Stream         | Read + Write both                | TCP, WebSocket         |
| Transform Stream      | Modifies chunks                  | gzip, custom transform |
| PassThrough           | No change, just pass             | monitoring             |




ChatGPT said:

Here is the exact answer interviewers expect:

✅ Types of Streaming in Node.js

Node.js supports 4 main types of streams:

1️⃣ Readable Stream

A stream you read data from (source of data).

📌 Examples:

fs.createReadStream()

HTTP incoming request (req)

Kafka consumer stream

process.stdin

📌 Key events:

data

end

error

2️⃣ Writable Stream

A stream you write data into (destination of data).

📌 Examples:

fs.createWriteStream()

HTTP response (res)

process.stdout

Kafka producer stream

📌 Key methods:

write()

end()

3️⃣ Duplex Stream

A stream that is both readable and writable at the same time.

📌 Examples:

TCP sockets (net.Socket)

WebSockets

process.stdin & stdout combined

📌 Use case:

Full-duplex communication
(send + receive at the same time)

4️⃣ Transform Stream

A special duplex stream that modifies the data while reading/writing.

📌 Examples:

zlib.createGzip() (compress)

crypto.createCipheriv() (encrypt)

JSON parsing transform

Custom transform streams

📌 Use cases:

Compression

Encryption

Data transformation

Converting CSV → JSON

🎉 Bonus (also part of Node stream ecosystem)
5️⃣ PassThrough Stream

Transform stream that does nothing — chunks pass unchanged.

Used for:

Debugging

Monitoring

Tapping into pipeline without modifying data

import { PassThrough } from 'stream';

🔥 Quick Summary (for interview answer)
Node.js has 4 types of streams:

1. Readable   – streams you read from (file read, req)
2. Writable   – streams you write to (file write, res)
3. Duplex     – read + write (sockets, WebSockets)
4. Transform  – duplex stream that transforms data (gzip, crypto)


Optional bonus:

5. PassThrough – transform stream that outputs input unchanged.


If you want, I can also give:

🔥 Real-world code examples for each
🔥 Streaming interview questions
🔥 Difference between streams vs buffers
🔥 How backpressure works