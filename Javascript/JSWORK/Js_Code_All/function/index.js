var foo='00'

function showName(){
    foo='innerFoo'
    console.log(foo)
    return;
    function foo(){}
}

showName()
console.log(foo)



function nameChange(){};
nameChange='jugal sharma'
console.log(nameChange)


function magic(){
    return x=1,[],{};
}

console.log(magic())




function isAdult(age) {
  if (!age)
 return false;
  return age > 18;
}




// // function Foo() {
//     let a = b = 0;  // ⚠️ tricky line
// console.log(a)
//     a = a + 1;
//     console.log(typeof(a)); // number
//     return a;
// }

// console.log(Foo());



// var allows redeclaration

// Last assignment overwrites previous value


// 4️⃣ Multiple Var Declarations
// var x = 1;
// var x = 2;
// console.log(x); // ?

// Answer:
// 2


// Why:

// var allows redeclaration

// Last assignment overwrites previous value

//curry function problme

// currying use a single paramnetr 
//currying use let a;  show undifend 



// console.log(1, 2, 3); // prints: 1 2 3
// let x = (1, 2, 3);
// console.log(x); // 3



// let x=10

// let y= `${x}`
// let b=10
// console.log(x=== y)


// //clouser function
// function Coloure(){

//     let a=10

//     let b=10
//   return function () {
//     return a+b;
//   };
// }

// let addyour=Coloure()
// console.log(addyour())