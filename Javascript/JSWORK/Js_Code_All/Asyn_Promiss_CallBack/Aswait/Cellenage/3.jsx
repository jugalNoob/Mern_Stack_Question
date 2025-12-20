🔥 async / await — TOP INTERVIEW TRAPS (DEEP)
1️⃣ Trap: async always returns a Promise
async function test() {
  return 10;
}

console.log(test());

❓ Output
Promise { <fulfilled>: 10 }

✅ Why

async wraps return value in Promise.resolve()

📌 Even returning nothing → Promise.resolve(undefined)

2️⃣ Trap: await works on non-Promises
async function test() {
  const x = await 5;
  console.log(x);
}
test();

❓ Output
5

✅ Why
await 5 → await Promise.resolve(5)


📌 await ALWAYS pauses

3️⃣ Trap: await does NOT block JS
async function f() {
  console.log("1");
  await 0;
  console.log("2");
}

f();
console.log("3");

❓ Output
1
3
2

✅ Why

await pauses function

Resume in microtask queue

4️⃣ Trap: Sequential execution inside loop
for (let i of [1,2,3]) {
  await doTask(i);
}

❌ Problem

Tasks run one by one

✅ Fix
await Promise.all([1,2,3].map(doTask));

5️⃣ Trap: forEach + await ❌
items.forEach(async item => {
  await doTask(item);
});

❌ Why wrong

forEach does not await

Errors are lost

✅ Correct
for (const item of items) {
  await doTask(item);
}


or

await Promise.all(items.map(doTask));

6️⃣ Trap: Missing try/catch
async function f() {
  await Promise.reject("error");
}
f();

❌ Result

Unhandled Promise rejection

✅ Fix
try {
  await Promise.reject("error");
} catch (e) {
  console.log(e);
}

7️⃣ Trap: try/catch won’t catch async .then() errors
try {
  Promise.reject("err").then(() => {});
} catch (e) {
  console.log("caught");
}

❌ Output

Nothing caught

✅ Why

try/catch works only with await

.then() errors are async

8️⃣ Trap: Mixing await and .then()
await fetchData().then(res => res.json());

❌ Why bad

Redundant

Confusing error flow

✅ Correct
const res = await fetchData();
const data = await res.json();

9️⃣ Trap: Forgetting await
async function f() {
  const data = fetchData();
  console.log(data);
}

❓ Output
Promise { <pending> }

✅ Fix
const data = await fetchData();

🔟 Trap: Order misconception
async function f() {
  await Promise.resolve();
  console.log("A");
}

Promise.resolve().then(() => console.log("B"));
f();

❓ Output
B
A

✅ Why

.then() microtask queued before await resume

1️⃣1️⃣ Trap: Error swallowing
async function f() {
  try {
    await Promise.reject("err");
  } catch {}
  console.log("continue");
}

❌ Problem

Error is swallowed silently

1️⃣2️⃣ Trap: await inside constructor ❌
class Test {
  constructor() {
    await fetchData(); // ❌ Syntax error
  }
}

✅ Fix
async init() {
  await fetchData();
}

1️⃣3️⃣ Trap: Top-level await

❌ Not allowed in old JS / scripts
✅ Allowed in ES modules

await fetchData(); // works only in module

1️⃣4️⃣ Trap: Performance illusion
await task1();
await task2();


Looks async, runs sync-like 🐌

🎯 Interview one-liners (MEMORIZE)

async always returns a Promise

await pauses function, not JS

await always creates microtask

forEach + await = bug

use Promise.all for parallelism

🧠 Ultimate mental model
async = Promise wrapper
await = pause → microtask → resume