import express from 'express'
import  router from './router/routes.js'
import http from 'http'
import fs from 'node:fs'
import { pipeline } from "node:stream/promises";
import zlib from 'node:zlib'
import { buffer } from 'node:stream/consumers'
const app = express()
app.use(express.json())  //parse JSON Bodies
let port = 9000
import { Duplex } from 'node:stream';
import jsonwebtoken from 'jsonwebtoken';

const JWT=jsonwebtoken;







// App level Middleware ---------------->>

app.use((req,res,next)=>{ 
     console.log(`${req.method} ${req.url}`)
      next()
     })



// ---------------------------
// Global Error Handler (500)
// ---------------------------
app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});



app.use(router)


app.listen(port, () => {
    console.log(port)
})
