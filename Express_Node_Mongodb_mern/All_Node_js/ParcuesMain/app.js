import fs, { write } from 'node:fs'
import { Readable,Writable } from 'node:stream'
import { pipeline } from 'stream/promises'
import { Duplex } from "stream";
import process from 'node:process';
import { createServer } from 'node:http';
import {EventEmitter} from 'node:events'
import { json } from 'node:stream/consumers';
import { spawn } from 'node:child_process';
import { URL } from 'node:url';
import crypto from 'node:crypto'
import path from 'node:path';

import { Server } from "socket.io";

const io = new Server(3000);
console.log(io)






// 🧠 Why "finish"?

// ReadStream emits "end" → reading done

// WriteStream emits "finish" → writing done

// "close" event → file descriptor closed (for both)