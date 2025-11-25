
// Dense vs Sparse arrays
// How JS stores arrays internally

Q Important Example Interview question ?
let arr=['jugal' , 'karan' , 'anku' , 'sharma']

arr[10]='nikhile'

console.log(arr.length)
console.log(arr[10])
console.log(arr[5])
console.log(arr)


    Q Important check array all Thinks ?
    let data=[10 , 20 , 30 , 40 , 50]

console.log(data[0] , 'start') //start array index start 0
console.log(data.length , 'length') //length start is 1 
console.log(data.at(-1) , 'last length') // check array last number
console.log(Math.floor(data.length/2)  , 'center')// chrck Array center number
console.log(data[data.length - 1]
)


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


Q what Important Changgle?

const Uio=[10 , 20 , 30 , 40]

Uio[-1]='jugal'
console.log(Uio.length)
console.log(Uio)


Q what Array Index?
let arr=[]
arr[100]='jugal'

console.log(arr.length)



Q waht is Important ?
let io=[10 , 20 , 320 , 40]

io.length=0

console.log(io)
console.log(io.length)
console.log(io[3])
