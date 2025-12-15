
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

