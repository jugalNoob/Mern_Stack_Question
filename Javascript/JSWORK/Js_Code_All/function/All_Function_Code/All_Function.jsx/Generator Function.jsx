8. Generator Function

What: Declared with function*, uses yield to pause/resume execution.

Use Case: Lazy evaluation, handling infinite sequences,
 async-like flows.


 ✅ Final corrected full code
function* Names(){
    yield 'jugal'
    yield 'karan'
    yield 'xxnx'
}

let loopinfo = Names()

console.log(loopinfo.next())
console.log(loopinfo.next())
console.log(loopinfo.next().value)
console.log(loopinfo.next())

for (let yourInfo of Names()) {
    console.log(yourInfo)
}






What function* means

function* creates a generator function

It does NOT execute immediately

It returns a generator object (iterator)

2️⃣ Creating generator object
let loopinfo = Names()


Internally:

loopinfo → Generator { <suspended> }


✔ Function body has NOT run yet
✔ Execution is paused at start

3️⃣ Understanding yield

yield:

Pauses execution

Returns a value

Remembers its position

Think of it as:

return value + pause

4️⃣ next() calls (VERY IMPORTANT)
🔹 First call
console.log(loopinfo.next())


Execution:

Runs until first yield

Output:

{ value: 'jugal', done: false }

🔹 Second call
console.log(loopinfo.next())


Output:

{ value: 'karan', done: false }

🔹 Third call
console.log(loopinfo.next().value)


Output:

xxnx


Internally:

{ value: 'xxnx', done: false }

🔹 Fourth call
console.log(loopinfo.next())


Generator finished → no more yield

Output:

{ value: undefined, done: true }


📌 Once done: true, generator is exhausted forever

5️⃣ Generator execution visualization
START
 ↓
yield 'jugal'  (pause)
 ↓
yield 'karan'  (pause)
 ↓
yield 'xxnx'   (pause)
 ↓
END → done: true

6️⃣ ❌ Problem in your for loop
for (let YourInfo in Names) {
    console.log(YourInfo(Names))
}

Why this is WRONG ❌

Names is a function, not an iterable

for...in loops over object keys, not values

YourInfo becomes a string key, not a function

YourInfo(Names) → ❌ TypeError

7️⃣ ✅ Correct way to loop over generator values
✔ Use for...of (BEST)
for (let yourInfo of Names()) {
    console.log(yourInfo)
}


Output:

jugal
karan
xxnx

✔ Manual iteration
const gen = Names()
let result = gen.next()

while (!result.done) {
    console.log(result.value)
    result = gen.next()
}

✔ Convert to array
console.log([...Names()])


Output:

['jugal', 'karan', 'xxnx']

8️⃣ for...in vs for...of (INTERVIEW 🔥)


| Loop       | Works on        | Use case                    |
| ---------- | --------------- | --------------------------- |
| `for...in` | object keys     | Objects                     |
| `for...of` | iterable values | Arrays, strings, generators |



9️⃣ Important generator rules

✔ Generators are lazy (run on demand)
✔ Each next() resumes from last yield
✔ Generator is single-use
✔ yield ≠ return
✔ for...of automatically stops on done: true

🔥 Real-world Node.js usage
function* ids() {
    let id = 1
    while (true) yield id++
}


Used in:

streaming data

pagination

infinite sequences

memory-efficient loops

🧠 Interview one-liners

A generator function returns an iterator whose execution can be paused and resumed using yield.

Use for...of to iterate generators, not for...in.

✅ Final corrected full code
function* Names(){
    yield 'jugal'
    yield 'karan'
    yield 'xxnx'
}

let loopinfo = Names()

console.log(loopinfo.next())
console.log(loopinfo.next())
console.log(loopinfo.next().value)
console.log(loopinfo.next())

for (let yourInfo of Names()) {
    console.log(yourInfo)
}


If you want next:

🔥 yield* explained

🔥 generator vs async/await

🔥 custom iterable using Symbol.iterator

🔥 interview MCQs on generators