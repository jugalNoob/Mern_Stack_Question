
000000000000000000000000000000000000000000000000 :::::::: -------------->>
🔥 TRAP #6 — Partial application with bind()
function sum(a, b) {
  return a + b
}

const add10 = sum.bind(null, 10)
console.log(add10(5))

✅ Output
15


🎯 Interview:

bind() supports currying / partial application

000000000000000000000 --------------------------->>>

🔥 TRAP #8 — Losing this in callbacks
const user = {
  name: "jugal",
  greet() {
    setTimeout(function () {
      console.log(this.name)
    }, 100)
  }
}

user.greet()


❌ Output

undefined


✔️ Fix using bind():

setTimeout(function () {
  console.log(this.name)
}.bind(this), 100)


✔️ Or arrow (BEST):

setTimeout(() => console.log(this.name), 100)



000000000000000000000 ------------------------------>>

const test = () => {
 console.log(this.arr)
}

test.call({ arr: [1,2] })

🔍 What happens:

Arrow functions do not have their own this

They use lexical this (the this of the scope where they were created)

So, call() cannot change this for arrow functions



this here refers to the outer scope, probably window
 (or undefined in strict mode)


function test1() {
  console.log(this.arr)
}

test1.call({ arr: [1,2] })

🔍 What happens:

Normal functions respect call() and apply()

Here, this is explicitly set to { arr: [1,2] } via call()

📌 Key Takeaways / Interview Points

Arrow functions → this is lexical, cannot be changed by call, apply, or bind.

Normal functions → this can be dynamically set with call, apply, or bind.

Rule of thumb:

Arrow → inherits this from creation scope

Function → depends on how it's called



