const stream = fs.createReadStream('./file/jugal.txt', {
  highWaterMark: 10, // only read 10 bytes per chunk
});

 console.log('Default highWaterMark:', stream.readableHighWaterMark);

stream.on('data', (chunk) => {
      const buf = Buffer.from(chunk, 'utf8')
        // console.log(buf)
  console.log(`🧱 Chunk (${chunk.length} bytes):`, chunk.toString());
    console.log('Buffer:', chunk, '| Size:', chunk.length);
  console.log('🔹 Type:', typeof chunk);
});


// When the file has been completely read
stream.on('end', () => {
  console.log('✅ File reading completed');
});

// If any error occurs (like file not found)
stream.on('error', (err) => {
  console.error('❌ Error:', err.message);
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
