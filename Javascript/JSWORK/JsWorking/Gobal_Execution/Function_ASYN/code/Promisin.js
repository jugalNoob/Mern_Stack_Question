Promise.resolve().then(()=>{
console.log('hello i am micro task ')
}).catch(()=>{
    console.log('hello from the error')
})



✅ Corrected FINAL FLOW (Your Diagram, Fixed)
Case 1: await 14


Test()
  ↓
Call Stack
  ↓
await 14
  ↓
Promise.resolve(14)
  ↓
Microtask Queue
  ↓
Event Loop
  ↓
Resume Test()
  ↓
console.log(x)
