| Middleware Type   | Scope               | Example                     |
| ----------------- | ------------------- | --------------------------- |
| Application-level | Entire app          | `app.use(...)`              |
| Router-level      | Specific router      | `router.use(...)`           |
| Built-in          | Provided by Express | `express.json()`            |
| Third-party       | Installed via npm   | `morgan`, `cors`            |
| Error-handling    | 4 parameters        | `app.use((err,...) => ...)` |
| Request-level     | Specific route      | `app.get("/x", mw)`         |
| Custom            | Written by user     | Logger middleware           |
| 404-handler       | Not found routes    | Last middleware             |
| Async             | For async functions | asyncHandler                |


import fs, { read } from 'node:fs'
import process from 'node:process'
import EventEmitter from 'node:events'
import os from 'node:os'
import { getDefaultHighWaterMark } from 'node:stream'
import { Readable,Duplex } from 'node:stream'

import express from 'express'

const app=express()

// app.use(express.json())

const port=9000

app.use((req, res, next) => {
    console.log('hello jugal start row class');
    next(); // pass control to next middleware
});

const usermain = (req, res, next) => {
    console.log('only my user run');
    next();
};

app.get('/user/:id/:name',  usermain,(req, res) => {

  
     const { id, name } = req.params;
  

    console.log("Param ID:", id);
    console.log("Param Name:", name);
       // Correct header
    res.set('Content-Type', 'application/json');

    console.log('User ID:', req.params.id);

    let obj = {
        name: 'jugal sharma',
        roll: 'karan sharma'
    };

 

    res.send(obj);
});




app.get('/' , (req,res)=>{

    let a='hi jugal'

    res.send(a)
})

app.listen(port , ()=>{
    console.log(port)
})