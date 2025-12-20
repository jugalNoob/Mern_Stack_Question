🔒 Closure — Simple Explanation

Closure means:
👉 A function remembers variables from where it was created, even after the outer function finishes.

✅ Very Simple Example
function outer() {
  let x = 10;

  function inner() {
    return x;
  }

  return inner;
}

const fn = outer();
console.log(fn()); // 10

🔍 What’s happening?

outer() runs and creates x

inner() uses x

outer() finishes

inner() is still able to access x

👉 That memory is a closure

🧠 One-Line Definition (Interview)

A closure is a function that remembers its lexical scope even after the outer function has executed.

🔥 Real-Life Analogy

Think of a bag:

Function = bag

Variables = items inside

Even when you leave the room, the bag still has the items

✅ Another Tiny Example
function counter() {
  let count = 0;
  return () => ++count;
}

const inc = counter();
inc(); // 1
inc(); // 2


👉 count is remembered → closure

❌ Without Closure
function noClosure() {
  let x = 10;
  return x;
}


x is gone after return.

🎯 Key Point

Closure = function + its remembered variables

Used in: callbacks, async, data privacy, React hooks

If you want:
🔥 closure in 1 interview line
🔥 closure diagram