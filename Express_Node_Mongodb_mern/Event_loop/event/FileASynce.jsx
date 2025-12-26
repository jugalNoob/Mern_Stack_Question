async function  Test(){
    const first=await fss.readFile('./file/jugal.txt' , 'utf-8')
console.log(first)
}
Test()

🎯 INTERVIEW ONE-LINER (MEMORIZE THIS)

async/await uses Promises, and Promise resolutions run in the 
microtask queue, which has higher priority than timer and I/O callbacks.

Main Thread
│
│ Test()
│
│ await readFile()
│
├──▶ Thread Pool (libuv)
│     └── Read file
│
│ (Test paused)
│
└──▶ Event Loop continues
          │
          ▼
     Poll Phase (I/O)
          │
          ▼
   Promise Resolved
          │
          ▼
   Microtask Queue
          │
          ▼
 Resume async function
 console.log(first)


 | Feature          | Callback (`fs.readFile`) | Async/Await (`fs/promises`) |
| ---------------- | ------------------------ | --------------------------- |
| Thread Pool      | ✅ Yes                    | ✅ Yes                       |
| Blocking         | ❌ No                     | ❌ No                        |
| Syntax           | Callback-based           | Cleaner, synchronous-like   |
| Resume mechanism | Poll phase               | **Microtask queue**         |
| Error handling   | `if(err)`                | `try/catch`                 |


⚠️ Common Misconception (Very Important)

❌ await blocks Node.js
✅ await blocks ONLY that async function


🧠 Interview Gold Line

Async/await does not change how Node.js 
offloads I/O to the thread pool; it only 
changes how the result is consumed using Promises and the microtask queue.