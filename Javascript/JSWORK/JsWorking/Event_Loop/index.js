
// -- >> Call Stack  webapi task queue 


// --- > first row class  ----------->>

// console.log('start of script 2')


// setTimeout(()=>{
// console.log('this is from  the Task queue ')

// },0)


// console.log('end of script')
// console.log('end script')




// --- > two  row class  ----------->>

console.log('start of script 2') // 1 


setTimeout(()=>{
console.log('a task ') // 4

},2000)


setTimeout(()=>{
console.log('b task ') // 3 

},0)//

setTimeout(()=>{
console.log('d  task ') //5

},5000)

console.log('end of script') // 2
console.log('end script')
