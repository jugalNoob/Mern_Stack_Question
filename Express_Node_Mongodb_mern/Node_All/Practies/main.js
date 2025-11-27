import fs, { read } from 'node:fs'

import EventEmitter from 'node:events'

import { getDefaultHighWaterMark } from 'node:stream'
import { Readable,Duplex } from 'node:stream'
import os from 'node:os'
import express from 'express'
import { buffer } from 'node:stream/consumers'
import { encode } from 'node:punycode'


const app=express()




// const stream=fs.createReadStream('./file/jugal.txt' ,{
//     encoding:'utf-8',
//     highWaterMark:10
// })

// stream.on('data' , (chunk) => {    
//     // console.log(chunk)
// })
// stream.on('open', (fd) => {
//   console.log("File opened:", fd);
// });

// stream.on('end' , ()=>console.log('complerte'))




