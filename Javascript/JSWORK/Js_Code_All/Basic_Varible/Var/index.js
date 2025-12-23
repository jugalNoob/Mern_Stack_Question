
// Method 2: structuredClone() (Modern JS)

const one = x => b => d => [x , b ,d];

console.log(one(10)(20)(30)); // 10



// let ob1 = {
//   name: 'Jugal',
//   roll: { user1: 69 }
// }

// let shallow = Object.assign({}, ob1); // shallow copy
// shallow.roll.user1 = 100;

// console.log(ob1.roll.user1); // 100 ❌ original affected
// console.log(shallow)

// // ECMAScript
// let data={
//     name:'jugal',
//     roll:21,
// }

// let name='juga'
// function Test(){
//     console.log(this.name)
// }
// Test.call(data)



// function Test1(){
// let name='jugal'
// console.log(this.name)
// }

// Test1()


// var obj={name:'gobale'}
// let obj1={name:'let'}
// function Test1(){

// console.log(this.obj)
// }

// Test1.call()



// let myContext = { obj: { name: 'karan sharma' } };
// Test1.call(myContext); // Now this.obj will be found!




// function test1(){
//     var arr=[10 , 20]
//     console.log(this.arr)
// }
// test1.call()


// function test() {
//   console.log(this.arr)
// }

// test.call({ arr: [1,2] })
