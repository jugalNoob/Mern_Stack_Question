

Q what is Importamt ?  1


let obj={

timeoutId: setTimeout(()=>{
    console.log('hi')
},1000)
}

delete obj.timeoutId;
obj=null



Q what is Important ? 2

let x={
    a:1,
    b:2
}

let y={
    b:3,
    c:4
}

Object.setPrototypeOf(x,y)

console.log(x.b)


Q what Important ? 3

let x=0
if(10 > 9 > 8){
    x+=1

}

console.log(x)

Q what Important ? 4

function Calc(num){
    return num*0.01
}

console.log(typeof Calc('hello'))

console.log(Calc('hello'))


Q what Important ? 5
var obj={
    x:2,

fun:function(){
    console.log(this.x)
},

fun:function(){
    console.log(this.x)
}
}
obj.fun()
obj.fun()
new obj.fun()

Q what Important ? 6

let arr1=['jugal' , 'sharma']
const arr2=['javascript' , 'universe']
console.log(arr1 == arr1)
console.log(arr2=== arr2)

Q what Important ? 7

let str='jugal/nther'
let stre=`jugal
nther`
console.log(str== stre)

Q what Important ? 8

console.log('1' + + '1')
console.log(+'1'  +  +'1')
console.log('1' - - '1')

Q what Important ? 8 
const base={x:1}
const obj=Object.freeze(base)
base.y=2
console.log(base.y)
console.log(obj)


Q what Important ? 9
console.log('hi' instanceof String)
console.log([] instanceof Array)
console.log({} instanceof Object)
console.log('' instanceof String)


Q what Impirtant  ? 10 


(()=>{
    let a=b=4
})()
console.log(b)
console.log(typeof a)


Q what Impirtant ? 

const  clothes=['jacket' , 'tshirt']
clothes.length=[0]
console.log(clothes[0])
console.log(clothes)