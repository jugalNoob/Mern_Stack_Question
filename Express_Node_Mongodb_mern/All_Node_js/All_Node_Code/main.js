import fs from 'node:fs'


import net from 'node:net'
import { createServer } from 'node:http'
import EventEmitter from 'node:events'
import { pipeline } from "node:stream/promises";

import { Readable,Duplex } from 'node:stream'
import os from 'node:os'
import express from 'express'
import { buffer } from 'node:stream/consumers'
import { url } from 'node:inspector'


import { createHmac } from 'node:crypto'
import { stdin, stdout } from 'node:process'


await pipeline(
  fs.createReadStream("./file/jugal.txt", { highWaterMark: 64 * 1024 }),
  fs.createWriteStream("./file/output.txt", { highWaterMark: 64 * 1024 })
);


//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e