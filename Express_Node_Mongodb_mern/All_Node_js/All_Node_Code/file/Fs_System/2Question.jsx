UTF-8 — in very simple words

👉 UTF-8 is a way to store text as bytes so computers
 can understand every language.

🧠 Simple idea

Computers understand numbers (bytes), not letters

UTF-8 converts:

letters

numbers

emojis

all languages

into bytes

✏️ Example
Buffer.from('hi')

h → 68
i → 69


(1 byte each)

🌍 Why UTF-8 is special

Supports all languages (English, Hindi, Chinese, Arabic)

Uses less space for English

Uses more bytes only when needed

🧠 One-line definition (interview)



UTF-8 is a variable-length encoding that converts text into bytes efficiently 
for all languages.

import fs from 'fs/promises'
import fss from 'node:fs'

try {
    const data = await fs.readFile('./file/jugal.txt', 'utf-8')
    console.log(data)
} catch (error) {
  console.log(error)
}
  





    const data = await fs.readFile('./file/jugal.txt', 'utf-8')
    console.log(data)
    setTimeout(()=>console.log('hello') ,)



    :::::::::::::::::::::::::::::: --------------------------->>

    // first run hello
    //second run file
        setTimeout(()=>console.log('hello') ,)
        fss.readFile('./file/jugal.txt' , 'utf-8' , (err,data)=>{
          if(err){
            console.log(err)
          }else{
       console.log(data)
          }
        })
    
        2️⃣ What happens internally
    setTimeout
    
    Timer is registered
    
    Goes to Timers queue
    
    Delay = 0ms (default)
    
    fs.readFile
    
    File read sent to libuv thread pool
    
    Takes time (disk I/O)
    
    

    🔑 Key differences (DEEP but SIMPLE)
1️⃣ Programming style



11::::
data is available after await

Execution pauses


2::: 

Code continues immediately

Result comes later via callback


    Summary
Use fs/promises if you want clean code using async/await.

Use node:fs if you are working on an old project or 
specifically need to use callbacks.

Note: Both are asynchronous and won't block your server!


4. Summary of the "Wait"

Method	Where it waits in the loop	Priority
fs/promises	Microtask Queue	High (Runs first)
node:fs	Poll/Callback Phase	Medium (Runs after microtasks)