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

console.log(3 > 2 > 1) //Why False 
console.log(3 > 2 >= 1) // Why True 
console.log( 3 > 2)
console.log( true == 1)

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

Anmswe show -1

| Method        | When Value NOT Found | Why                              |
| ------------- | -------------------- | -------------------------------- |
| `find()`      | `undefined`          | Because no element matched       |
| `findIndex()` | `-1`                 | Because no matching index exists |




Q what ? 8

let a=b=0

console.log(a)
console.log(b)

⭐ But VERY IMPORTANT:

a is declared with let
b is NOT declared, so JavaScript creates b as a global variable (BAD PRACTICE)
So the code behaves like:

var b = 0;  // auto created global
let a = 0;



function Foo(){
    let a=b=0
    a=a+1
    return a
}

console.log(Foo())
console.log(typeof a)
console.log(typeof b)


Q what ? 9

const a=[1 , 2 , 3]
const b=a.slice(0,2).push(4)
console.log(b)

⭐ Step-by-Step Understanding
✔ 1. a.slice(0, 2)

This creates a new array:
a.slice(0, 2)   // → [1, 2]

It does NOT modify the original array.

✔ 2. .push(4) on that sliced array
[1, 2].push(4)

👉 push() adds an element to the array
👉 AND returns the new length of the array, NOT the array.

So:
[1, 2, 4]


But returned value is:
3
So:
b = 3

Q what ? 10 --------------------------<><><><><></></></></>
let x=5
let y=(x=10)+3
console.log(x , y)

let x=5
let y=(x=10)+3
console.log(x , y)

🧠 Why does this happen?
Because an assignment (x = 10) returns the assigned value:
(x = 10)   → 10
So the expression becomes:
y = 10 + 3