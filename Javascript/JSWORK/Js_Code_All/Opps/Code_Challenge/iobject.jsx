❓ Q1: this in object vs standalone function
const obj = {
  name: "Jugal",
  log: function() {
    console.log(this.name);
  }
};

const fn = obj.log;
fn(); // ?
obj.log(); // ?

✅ Answer
undefined
Jugal


💡 Why?

fn() → called as normal function → this = undefined (or window in non-strict mode)

obj.log() → this = obj

❓ Q2: this inside setTimeout
const obj = {
  name: "Karan",
  log: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 0);
  }
};
obj.log();

✅ Answer
undefined


💡 Why?

Normal function in setTimeout → this = global/window

Use arrow function to capture this:

setTimeout(() => console.log(this.name), 0);


00000000000000000 --------------------------------->>>

Object Update 

let data={
    name:'jugal',
    roll:57,
    class:'10',
    student:{
        number:[1 , 2 , 2]
    },
    school:[10 , 20 , 30]
}

data.name='jugal sharma' //chnage in nestady array 
data.student.number = [100, 20, 400]; //update netesy object
 delete data.school// delete school
data.schoolname = 'kvs'; //update and add new Object

console.log(data) //check my all object
console.log(data.student.number)
console.log(data.schoolname)
console.log(data.student.number[2]) // find by nesty object

00::::::::::::::::::::::::: -------------------->>

Object Array Object