3. Arrow Function

What: Introduced in ES6, concise => syntax.

Key Features:

No own this, arguments, or super.

Inherits this from surrounding context (lexical scope).

Use Case: Great for callbacks, array methods (map, filter).



1️⃣ What is an arrow function?

An arrow function is a function expression with a shorter syntax.

() => { }


✔ Introduced in ES6
✔ Stored in a variable
✔ Lexically binds this

2️⃣ Break down every word
const
const Arrowwork


Creates a block-scoped constant

Variable cannot be reassigned

But function can still execute

Arrowwork = 10 ❌ Error
Arrowwork()  ✅ OK

Arrowwork

Variable name

Stores a reference to a function object

Memory:

Arrowwork → ƒ

=

Assignment operator
Assigns the function object to Arrowwork

()

Parameter list

Empty → function takes no arguments

=>

Arrow syntax
This changes how this, arguments, and super work

{ }

Function body (currently empty)

3️⃣ What happens in memory? (Hoisting)

Arrow functions are function expressions

During memory creation phase:

Arrowwork → undefined


During execution phase:

Arrowwork → () => { }


❌ This will NOT work:

Arrowwork() // ReferenceError
const Arrowwork = () => {}

4️⃣ What happens when you call it?
Arrowwork()

Execution steps:

JS finds Arrowwork in scope

Creates a function execution context

Runs the function body

No return → returns undefined

Execution context is destroyed

5️⃣ Return value
const Arrowwork = () => {}
console.log(Arrowwork())


Output:

undefined


Because:

No return statement

6️⃣ Arrow function implicit return
const add = (a, b) => a + b;


Same as:

const add = (a, b) => {
    return a + b;
}


⚠ Only works without {}

7️⃣ Arrow function storage (IMPORTANT)

Arrow functions:

❌ Do NOT have their own this

❌ Do NOT have arguments

❌ Do NOT have prototype

❌ Cannot be used as constructors

new Arrowwork() // ❌ TypeError

8️⃣ this behavior (BIG DIFFERENCE)
Normal function
function test() {
    console.log(this)
}
test() // window / global / undefined (strict)

Arrow function
const test = () => {
    console.log(this)
}
test()


✔ this comes from parent scope
✔ Lexical this

9️⃣ Real Node.js / React use case
Callback (BEST use)
setTimeout(() => {
    console.log('Runs later')
}, 1000)


Why arrow?

Prevents this loss

React handler
const handleClick = () => {
    console.log('clicked')
}

🔥 Compare: Arrow vs Normal Function


| Feature     | Arrow   | Normal  |
| ----------- | ------- | ------- |
| Hoisting    | ❌ No    | ✅ Yes   |
| `this`      | Lexical | Dynamic |
| `arguments` | ❌       | ✅       |
| Constructor | ❌       | ✅       |
| Prototype   | ❌       | ✅       |


🧠 Interview one-liners

✔ Arrow functions are function expressions
✔ They are not hoisted like function declarations
✔ They lexically bind this
✔ Best for callbacks and short functions