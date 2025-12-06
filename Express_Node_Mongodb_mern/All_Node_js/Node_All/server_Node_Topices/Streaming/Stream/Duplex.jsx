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


const { Duplex } = require("stream");

const myDuplex = new Duplex({
  read(size) {
    this.push("👋 Hello from read!\n"); // 1️⃣ Send data to readable side
    this.push(null);                    // 2️⃣ Signal end of reading
  },
  write(chunk, encoding, callback) {
    console.log("📝 Writing:", chunk.toString()); // 3️⃣ Handle incoming data
    callback(); // 4️⃣ Signal write complete
  },
});

myDuplex.write("Hi from write side!");
myDuplex.on("data", (chunk) => console.log("📥 Reading:", chunk.toString()));
