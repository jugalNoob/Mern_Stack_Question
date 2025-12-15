🔥 SET–12: Promise + Async Tasks

Covers:

Convert callbacks → promises

Race, all, allSettled questions

Promise chaining errors

Async/Await mini coding round

Real system design async patterns

Example Q:

Promise.resolve()
  .then(() => console.log("A"))
  .then(() => Promise.reject("error"))
  .then(() => console.log("B"))
  .catch(() => console.log("C"))
  .then(() => console.log("D"));

🔥 SET–12: Promise + Async Interview Tasks
❓ Q1: Promise chaining
Promise.resolve(1)
  .then(x => x+1)
  .then(x => { throw new Error("fail") })
  .then(x => console.log("success"))
  .catch(err => console.log("error"))
  .then(() => console.log("done"));

✅ Output
error
done


💡 Why?

Error skipped next then → goes to catch

After catch → next then runs

❓ Q2: Async/Await + Error
async function test() {
  await Promise.reject("fail");
  console.log("next");
}

test().catch(err => console.log(err));

✅ Output
fail


💡 Why?

Await rejects → function throws → caught by catch


❓ Q3: Promise.race vs all
const p1 = new Promise(r => setTimeout(() => r(1), 100));
const p2 = new Promise(r => setTimeout(() => r(2), 50));

Promise.race([p1,p2]).then(console.log);
Promise.all([p1,p2]).then(console.log);

✅ Output
2
[1,2]


💡 Why?

race → first resolved

all → wait for all

❓ Q4: Event Loop + Async/Await
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

(async () => console.log(4))();

console.log(5);

✅ Output
1
5
3
4
2


💡 Why?

Microtask queue (Promise, async) before macrotask queue (setTimeout)


🟩 SET–8: Async, Promises & Event Loop — EXTREMELY TRICKY
❓ Q1: What is the output?
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

✅ Answer
A
C
B

💡 Why?

setTimeout goes to macrotask queue → runs after main call stack.

❓ Q2: Microtask vs Macrotask
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

🔥 Output
1
4
3   ← (microtask)
2   ← (macrotask)

❓ Q3: Promise Chain Trap
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("fail");
  })
  .then(() => console.log("success"))
  .catch(() => console.log("error"));

Output:
error

❓ Q4: Async/Await Order
async function test() {
  console.log(1);
  await console.log(2);
  console.log(3);
}
test();
console.log(4);

Output:
1
2
4
3

Why?

await console.log(2) does not pause the log, only the function continuation.

❓ Q5: setTimeout + Promise Combo
setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

console.log("C");

Output:
C
B
A


❓ Q3: Promise Chain Trap
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("fail");
  })
  .then(() => console.log("success"))
  .catch(() => console.log("error"));