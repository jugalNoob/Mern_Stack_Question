
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
