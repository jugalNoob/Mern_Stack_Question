import fs, { read } from 'node:fs'
import process from 'node:process'
import EventEmitter from 'node:events'

import { getDefaultHighWaterMark } from 'node:stream'
import { Readable,Duplex } from 'node:stream'
import os from 'node:os'
import express from 'express'
import { buffer } from 'node:stream/consumers'
import { encode } from 'node:punycode'


const app=express()


const port=9000

app.listen(port,()=>{
    console.log(port)
})
