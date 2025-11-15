// Create a writable stream
const stream = fs.createWriteStream('./file/jugal.txt', {
  encoding: 'utf8',
  highWaterMark:10
});

// Write data manually
stream.write('Hi, I am Jugal Sharma.\n');
stream.write('I am learning Node.js streams!\n');

// End the stream (very important)
stream.end();

// Listen for the 'finish' event
stream.on('finish', () => {
  console.log('✅ File writing completed successfully!');
});

// Listen for errors
stream.on('error', (err) => {
  console.error('❌ Error:', err.message);
});


::::::::::::::::::::With Zlib ::::::::::::::::::::::::::

// Step 1️⃣: Create a writable stream to write data
const stream = fs.createWriteStream('./file/jugal.txt', {
  encoding: 'utf8',
  highWaterMark: 10, // control chunk size
});

stream.write('Hi, I am Jugal Sharma.\n');
stream.write('I am learning Node.js streams!\n');
stream.end();

stream.on('finish', () => {
  console.log('✅ File writing completed successfully!');

  // Step 2️⃣: Compress the file after writing is done
  const source = fs.createReadStream('./file/jugal.txt');
  const destination = fs.createWriteStream('./file/jugal.txt.gz');
  const gzip = zlib.createGzip();

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('❌ Compression failed:', err.message);
    } else {
      console.log('✅ File successfully compressed → jugal.txt.gz');
    }
  });
});

stream.on('error', (err) => {
  console.error('❌ Error:', err.message);
});