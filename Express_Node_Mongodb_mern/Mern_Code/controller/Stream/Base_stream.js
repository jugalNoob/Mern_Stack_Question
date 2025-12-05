import fs from "node:fs";
import { pipeline } from "node:stream/promises";

const GetStream = async (req, res) => {
  try {
    const stream = fs.createReadStream("./file/jugal.txt", {
      encoding: "utf-8",
      highWaterMark: 10,
    });

    await pipeline(stream, res);

  } catch (err) {
    console.error(err);
    res.status(500).send("Streaming failed");
  }
};

export default GetStream;



// --->File System check ----->>
// const GetStream = async (req, res) => {
//   fs.readFile("./file/jugal.txt", "utf-8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error reading file");
//     }

//     res.send(data);
//   });
// };

// export default GetStream;
