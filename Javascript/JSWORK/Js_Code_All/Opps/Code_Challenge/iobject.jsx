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