const { promises } = require('dns')
const express=require('express')
const fs=require('fs')
// If you want next, I can explain:

// Why setImmediate sometimes runs before fs.readFile

// Why CPU-heavy tasks should use Worker Threads

// Difference between Thread Pool vs Worker Threads

const app=express()


// const data = fs.readFileSync('./file/jugal.txt', 'utf-8');

// console.log(data); // prints file content
// console.log('hello jugal sharam')
// console.log('hello jugal sharam')
// console.log('hello jugal sharam')


console.log('start') // main thread 
 



//End of Event Loop
const fss=require('fs/promises')
// async function  Test(){
//     const first=await fss.readFile('./file/jugal.txt' , 'utf-8')
// console.log(first)
// }
// Test()

// setTimeout(()=>{
//     console.log('hello')
// })



 const ji=fs.readFile('./file/jugal.txt' , 'utf-8' , (err , data)=>{

if(err){
    throw new Error(err)
}else{
    console.log(data)
}
 })
console.log(ji)


setTimeout(()=>{
    console.log('hello')
})