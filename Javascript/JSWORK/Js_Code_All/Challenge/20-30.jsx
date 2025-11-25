Q what ? 1

function ans(){
    dev()
    function dev(){
        console.log(age)
    }
}

ans()

var age=10


Q what ? 2

function getAge(...age){

    console.log(typeof age)
}

getAge(10)


Q what  ? 3 
const persone={name:'jugal sharma' , age:20}

const {name , ...rest}=persone

console.log(rest)

Q what ? 4
console.log(typeof null )
console.log(typeof null === typeof Object)


Q what ? 4
const obj={a:'jugal'}

const {b}=obj

console.log(b)


Q what ? 5

console.log(3 > 2 > 1)
console.log( 3 > 2)


Q what  ? 6
let arr=[1 , 2 , 3]

function modifyArray(array){

    array.push(4)
}

let a=modifyArray(arr.splice(1))
console.log(a)
console.log(arr)


Q what ? 7
let a=[1  , 2 , 3]

let b=a.findIndex(x=>x===4)
console.log(b)



Q what ? 8

let a=b=0

console.log(a)
console.log(b)


function Foo(){
    let a=b=0
    a++
    return a
}

Foo()

console.log(typeof a)
console.log(typeof b)


Q what ? 9

const a=[1 , 2 , 3]
const b=a.slice(0,2).push(4)
console.log(b)


Q what ? 10
let x=5
let y=(x=10)+3
console.log(x , y)
