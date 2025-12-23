000000000000000 ----------------------------------------->>
console.log('first')
console.log(Promise.resolve('seocnd'))
console.log('third')


5️⃣ What console.log(Promise.resolve('seocnd')) really does
console.log(
  Promise { state: "fulfilled", value: "seocnd" }
)


The browser prints the Promise wrapper, not the value.

8️⃣ Interview trap ⚠️
❌ Wrong thinking

Promise.resolve gives value immediately

✅ Correct

Promise.resolve gives a Promise immediately, value later via microtask


000000000000000000 -=----------------------------------------->>>

Promise.resolve().then(()=>{
    console.log('1')
}).then(()=>{
        console.log('2')
})

Promise.resolve().then(()=>{
    console.log('3')
})


2️⃣ Key Rule (VERY IMPORTANT)

Each .then() callback is queued as a separate microtask.


Also:

Microtasks run in FIFO order

A .then() chained to another .then() 

is queued after the previous one finishes


3️⃣ Microtask Queue Formation
First Promise chain
Promise.resolve()
  .then(() => console.log('1'))
  .then(() => console.log('2'))


First .then() → scheduled immediately → microtask

Second .then() → NOT scheduled yet

It will be scheduled only after the first .then() finishes]

Second Promise
Promise.resolve().then(() => {
    console.log('3')
})


Its .then() is scheduled immediately → microtask


4️⃣ Microtask Queue Order (IMPORTANT)

Initial microtask queue:

1️⃣ then → console.log('1')
2️⃣ then → console.log('3')

7️⃣ Why NOT 1 2 3 ❌

Because:

.then('2') is not queued initially

It waits for '1' to complete

Meanwhile, '3' is already in the queue