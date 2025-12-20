const echoDuplex = new Duplex({
  write(chunk, encoding, callback) {
    this.push("🔁 Echo: " + chunk.toString());
    callback();
  },
  read(size) {}
});

echoDuplex.on('data', (data) => console.log(data.toString()));
echoDuplex.write('Hello Duplex!');
echoDuplex.end();


::::::::::::::: ------>>>Full Code ------------------->>

import { Duplex } from "stream";

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log("Writing:", chunk.toString());
    callback();
  },
  read(size) {
    this.push("Hello from Duplex Stream\n");
    this.push(null); // end readable side
  }
});

duplexStream.write("Client writes to duplex");
duplexStream.on("data", (data) => console.log("Readable:", data.toString()));




Your code:
const { Duplex, pipeline } = require('stream');
const { stdout } = require('process');

const duplexs = new Duplex({

    write(chunk, encoding, callback){
        console.log("WRITE:", chunk.toString());
        callback();
    },

    read(){
        this.push('hi i am read stream');
        this.push(null);
    }
});

Explanation:
1. Duplex stream

A Duplex stream is both readable and writable.

You can write data into it (write()).

You can read data from it (read()).

Useful when you need a transformable data channel without separate read/write streams.

2. write(chunk, encoding, callback)
write(chunk, encoding, callback){
    console.log("WRITE:", chunk.toString());
    callback();
}


Whenever you call duplexs.write(...), this function runs.

It receives:

chunk: the data written

encoding: character encoding (like 'utf-8')

callback: must call when finished writing

Here: It logs the chunk to the console.

Why: This simulates a writable side of the stream.

3. read()
read(){
    this.push('hi i am read stream');
    this.push(null);
}


This defines the readable side.

this.push(data) → adds data to the readable buffer.

this.push(null) → signals end of stream.

Here: When someone reads from duplexs, it will output "hi i am read stream" once.

4. Writing and ending the stream
duplexs.write('hi i am from write stresam');
duplexs.end();


Sends data into the writable side.

end() signals no more data will be written.

Your write() method logs the message.

5. Using pipeline
await pipeline(duplexs, process.stdout);


Pipes the readable side of your duplex stream to stdout.

await ensures all data is fully piped before finishing.

Output in terminal:

WRITE: hi i am from write stresam
hi i am read stream


✔ This stream can:

Accept data (write side)

Send data out (read side)

✅ 2. Duplex Stream Diagram (Simple)


┌──────────────────────────────┐
│          DUPLEX              │
│  ┌──────────────┐            │
│  │   writable   │ <── write  │
│  └──────────────┘            │
│  ┌──────────────┐            │
│  │   readable   │ ──> read   │
│  └──────────────┘            │
└──────────────────────────────┘



🎯 If your goal is: Read + Write at same time on File

File streams do NOT support duplex.

You must use:

fs.createReadStream(path)

fs.createWriteStream(path)

