// compress jugal.txt → jugal.gz
await pipeline(
  fs.createReadStream("./file/jugal.txt"),
  zlib.createGzip(),
  fs.createWriteStream("./file/jugal.gz"),
);



const compress = async () => {
  await pipeline(
    fs.createReadStream("./file/jugal.txt"),  // input file
    zlib.createGzip(),                        // compress
    fs.createWriteStream("./file/jugal.txt.gz") // output file
  );

  console.log("Compressed!");
};

compress();


//// --->>Important ------------------>>


4️⃣ Compression / Decompression

Use zlib for gzip or gunzip.

import zlib from "zlib";

await pipeline(
  fs.createReadStream("./file.txt"),
  zlib.createGzip(),           // compress
  fs.createWriteStream("./file.txt.gz")
);

await pipeline(
  fs.createReadStream("./file.txt.gz"),
  zlib.createGunzip(),         // decompress
  fs.createWriteStream("./file_unzipped.txt")
);




// --- >> 400 file -- > (zip) -- > 400MB Write 

// -->> stream Read (Sample.txt) ---> Zipper ---> fs Write  Stream

const readStream = fs.createReadStream("./file/jugal.txt");
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream("./file/jugal.zip");

await pipeline(
  readStream,    // step 1: read file
  gzip,          // step 2: compress (zip)
  writeStream    // step 3: write compressed file
);

console.log("File zipped successfully!");