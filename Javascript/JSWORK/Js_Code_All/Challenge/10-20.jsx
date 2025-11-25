
Q what ? 1
const insta=null
console.log(typeof insta === 'object')
console.log(insta === null)


Q what ? 2
// 1️⃣ var, let, const
var x = 1; let y = 2; const z = 3;
x = 10; y = 20; // ok
// z = 30; ❌ Error


Q what ? 3


let str = "Hello";
str[0] = "J";  // ❌ No effect
console.log(str.includes('J')); // "Hello"


Q what ?  4

function You(){
    console.log(age)
}
// let age=10 //it show 10
You()
var age=10


function nameUser(){
    var x=10

}
console.log(x)
nameUser()


Q what  ? 5


Q Important Example Interview question ?
let arr=['jugal' , 'karan' , 'anku' , 'sharma']

arr[10]='nikhile'

console.log(arr.length)
console.log(arr[10])
console.log(arr[5])
console.log(arr)


Q ::  Important check array all Thinks ? 6
    let data=[10 , 20 , 30 , 40 , 50]

console.log(data[0] , 'start') //start array index start 0
console.log(data.length , 'length') //length start is 1 
console.log(data.at(-1) , 'last length') // check array last number
console.log(Math.floor(data.length/2)  , 'center')// chrck Array center number
console.log(data[data.length - 1]
)



Q what ? 7

Q What New Important ?
let arr=[1]
arr.length=4
arr[3]=2


for(let i in arr){
    console.log(i)
}

for(let i of arr){
    console.log(i)
}


Q what Important Changgle? 8

const Uio=[10 , 20 , 30 , 40]

Uio[-1]='jugal'
console.log(Uio.length)
console.log(Uio)


Q what Array Index?  9
let arr=[]
arr[100]='jugal'

console.log(arr.length)



Q what ? 10

let io=[10 , 20 , 320 , 40]

io.length=0

console.log(io)
console.log(io.length)
console.log(io[3])
