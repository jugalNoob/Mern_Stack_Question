Q  what Important ? 1
var sound='grunt'
const bear={sound:'roar'}
function roar(){
    // console.log(this.sound)

     return `sounf ${this.sound}`
}
console.log(roar.apply(bear))

// console.log(roar())
// roar()


Q what Important  ?  2

var a=1

function foo(){
    if(a){
        var a=10
        // console.log(a)
    }else{
        console.log(a)
    }
}

foo() 



Q what Important ?  3

let x=0

for(let i=0; i<=6; i+=2){
    if(i===4){
        continue
    }
    x+=i;
}
console.log(x)


Q what Important ? 4


let human={
    name:'boob'
};

Object.freeze(human)
human.name='jugal'
console.log(human.name)

Q what Important ? 5

const dog={
    name:'Buzo',
    speak:function(){
        console.log(this.name)
    }
}

const foo=dog.speak
foo()
dog.speak()

Q what Important ? 6


const arr=[1 , 2 , 3 , 4]

arr.splice(1 , 2)

console.log(arr)


Q what Important  ? 7
const foo=()=>{
    a=1;
    const bar=()=>{
        console.log(this.a)
    }
    bar()
}

foo()
