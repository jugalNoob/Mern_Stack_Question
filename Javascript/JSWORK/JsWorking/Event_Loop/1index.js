// https://www.jsv9000.app/

console.log('start of script 3')


setTimeout(()=>{

    console.log('this is from the task  queue (setTimeoot')


},0)

Promise.resolve().then(()=>{

    console.log('this is form the microtask queue (Promise')
})

console.log('end of script')