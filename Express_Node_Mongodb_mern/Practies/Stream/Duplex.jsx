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

