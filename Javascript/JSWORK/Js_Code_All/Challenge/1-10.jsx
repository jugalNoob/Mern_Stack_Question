Q what ?  1

const obj={length:3}
console.log(obj)
console.log(Object.keys(obj).length)

const obj={a:1}
const {b}=obj
console.log(b)


Q what  ?  2

let one=1
console.log(++one + ++one) // 1+10 + 1+11 
console.log(++one)
console.log(one++)
console.log(one++ +  ++one)

let one=10
// console.log(one++ +  ++one ) // 1+10 + 1+10
// console.log(one++ + ++one + one++); // 10 + 1 + 10 +1 + 1+11
// console.log( 10 + 1 + 10 +1 + 1+11)
let x = 5;
console.log(x++ + ++x + x + x-- + --x);


let one=10
console.log(++one+1) // 1+10  + 1
 console.log(++one + 1)// 1+11 + 1
// ++one → pre-increment
// Increase first, then use the value
// ++one  => 10 becomes 11
// 11 + 1 => 12



Q what ?  3

const number=[ 10 , 20 , 30 , 40]

const [x ,y , z , j]=number
console.log(x,y,z , j)


Q what ?  4

let fun=[]

for(let i=0; i<4; i++){
    fun.push(()=>i)
}

console.log(fun[0]())
console.log(fun[1]())
console.log(fun[2]())
console.log(fun[3]())


Q what ? 5


let x=NaN
console.log(isNaN(x))

console.log(isNaN=== isNaN)

console.log(NaN == NaN)
let a=NaN

console.log(a==a)

console.log(isNaN(45))
Object.is(NaN, NaN , 'true') // true



Q  what  ? 6
let x=5

let result=typeof(x+'10') // string
let result=typeof(x-'10') // nUmber 
console.log(result)



Q what ? 7


console.log('5' -3)
console.log('5' +2)
'5' - 3  → 5 - 3 → 2
✔ Important rule:
-, *, / always force numeric conversion.
Only + behaves differently.


| Operator | Behavior                                 |
| -------- | ---------------------------------------- |
| `-`      | Converts strings → number                |
| `*`      | Converts strings → number                |
| `/`      | Converts strings → number                |
| `+`      | If one operand is string → concatenation |



Q  what ? 8

console.log(1 > 2 > 3)
console.log(3 > 2 > 1)
console.log([] + {})



Q  what ? 9
What HAPPany?

this a working 
console.log( 3 ===3 ) true 
console.log(true === 3)//false
console.log(3 === 3 === 3) // TRue 
console.log(3 === 3 && 3 === 3); //True


Q  what  ?  10
let vaul=0.3+0.4
console.log(vaul)

console.log(vaul === 0.7)