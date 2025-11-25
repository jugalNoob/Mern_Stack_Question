const arr=[1 , 2 , 3 , 4]
arr.splice(1 , 2)
console.log(arr)



// class SigUpSystem{
//     constructor(names , email , password){
//         this.names=names
//         this.email=email
//         this.password=password
//     }

//     loginUser(email , password){
//         if(this.email === email && this.password === password){
//             console.log(`Your email ${this.email}  and this your password ${this.password}`);
//             return true;  // return success
//         }else{
//             console.log('check Your Email and Password');
//             return false; // return fail
//         }
//     }

//     Notification(email, password){
//         if(this.loginUser(email, password)){
//             console.log('Your Email Password is Correct');
//         }else{
//             console.log('Check Your email Password');
//         }
//     }
// }

// const user = new SigUpSystem('jugal', 'karan@gmail.com', 45214523);

// user.Notification('karan@gmail.com', 45214523);
// console.log(user);




// const obj={length:3}
// console.log(obj)
// console.log(Object.keys(obj).length)

// const obj={a:1}
// const {b}=obj
// console.log(b)



// let one=1

// console.log(++one)
// console.log(one++)
// console.log(one++ +  ++one)

// const number=[ 10 , 20 , 30 , 40]

// const [x ,y , z , j]=number
// console.log(x,y,z , j)


// let fun=[]

// for(let i=0; i<4; i++){
//     fun.push(()=>i)
// }

// console.log(fun[0]())
// console.log(fun[1]())
// console.log(fun[2]())
// console.log(fun[3]())


// let x=NaN
// console.log(isNaN(x))

// console.log(isNaN=== isNaN)

// console.log(NaN == NaN)
// let a=NaN

// console.log(a==a)

// console.log(isNaN(45))
// Object.is(NaN, NaN , 'true') // true




// setTimeout(()=>console.log('jugal TimeOut'))
// const number=async()=>{
// let c=  await ('first')
// console.log(c)
//   const a=await 'second'
//   console.log(a)
//   const b=await 'thired number'
//   console.log(b)
// }

// number()
// let vas=[10 , 20 , 30 , 40 , 50 , 60]

// console.log(vas)

// const Second=()=>{

//   console.log('jugal sharma')
//   console.log('karan sharma')
// }
// Second()




// // [10, 20, 30, 40, 50, 60]         ← Sync
// // jugal sharma                    ← Sync
// // karan sharma                    ← Sync
// // first                           ← Microtask
// // second                          ← Microtask
// // thired number                   ← Microtask
// // jugal TimeOut                   ← Macrotask (setTimeout)
