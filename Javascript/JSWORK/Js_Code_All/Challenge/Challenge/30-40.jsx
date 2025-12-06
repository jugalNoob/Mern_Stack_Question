Q what  ? 1

const obj1={
    a:1,
}

// const obj2=obj1;
// const obj2={...obj1}
const obj2=Object.assign({} , obj1)

obj2.a=2;
console.log(obj1)


Q what ?  2

var variable=10
(()=>{
    console.log(variable)
    let variable=20
    console.log(variable)
})()


Q what ? 3

var x=1

function Foo(x){
    x=x+x
 
}

Foo(x)
console.log(x)


Q what ? 4 

var x=1
function foo(){
    console.log(x)
    const x=2
    // console.log(x)
}

foo()



Q Importan ? 5

console.log(2+2/5)

Step-by-step:

First evaluate division → 2 / 5 = 0.4

Then evaluate addition → 2 + 0.4 = 2.4

🧠 How JavaScript Evaluates It

JavaScript follows BODMAS / PEMDAS rules:


| Operator           | Priority |
| ------------------ | -------- |
| `/` Division       | Higher   |
| `*` Multiplication | Higher   |
| `+` Addition       | Lower    |
| `-` Subtraction    | Lower    |



console.log(10 + 6 / 2 * 3);

6 / 2 = 3
3 * 3 = 9
10 + 9 = 19

Always remember operator precedence:

()  →  * /  →  + -



Q importnat 6 ? 



let x=100;
let y=x++;
let z=++x;

let n=(x==y) ? z++ : ++z
console.log(n)


Q importamt 7   ?

const f=new Boolean(false)

if(f){
    console.log(1)
}else{
    console.log(2)
}

console.log(typeof f)



Q what Important 8 ?

console.log('9' > '9')
console.log(9 > '9')
console.log('09' > '19')



Q what Important 9 ?? 

let foo=function(){
    console.log(1)
}

setTimeout(foo, 1000)

foo=function(){
    console.log(2)
}



Q what Important  10?
var bar=function foo(){}
console.log(bar === foo)



Q what CallBack ? 5

const one = (a, b) => {
  return a + b;
};

const two = (a, b) => {
  return a - b;
};

const Sum = (func1, func2, callback) => {
  const r1 = func1(10, 5);
  const r2 = func2(10, 5);
  callback(r1, r2);
};

Sum(one, two, (x, y) => {
  console.log("Result One:", x);
  console.log("Result Two:", y);
});


| Concept                   | Meaning                                       |
| ------------------------- | --------------------------------------------- |
| **Arrow function**        | Short function syntax `const x = () => {...}` |
| **Callback**              | A function passed into another function       |
| **Higher-order function** | Function receiving another function           |

