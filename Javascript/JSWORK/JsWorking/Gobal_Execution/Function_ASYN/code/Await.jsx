console.log('start');

async function test() {
  console.log('before await');
  let x = await 10; // auto-wrapped as Promise.resolve(10)
  console.log('after await', x);
}

test();

console.log('end');



async function Test(){

    let one= await 10

    console.log(one)
}

Test()


❌ 5. Missing “pause + remove stack frame” step

Your diagram does not clearly show this critical step:

When await is hit, the async function leaves the Call Stack

✅ Correct behavior
Call Stack
┌──────────────┐
│ Test()       │
│ await 14 ❌  │  ← function PAUSED
└──────────────┘

(Call Stack EMPTY)


Then later…

Microtask → Resume Test()

async/await
→ pauses function
→ schedules resume in Microtask Queue
→ Event Loop runs microtasks before macrotasks





⏸️ await 14 (Pause Execution)
CALL STACK                  MICROTASK QUEUE
┌────────────────────────┐  ┌────────────────────────┐
│                        │  │ Resume Test()          │
│  (Test() paused)       │  │ x = 14                 │
└────────────────────────┘  └────────────────────────┘


await 14 → internally Promise.resolve(14)
✔ No Web API involved





9️⃣ Common Interview Traps (You avoided 👍)

❌ Thinking await always uses Web API
❌ Thinking await blocks the thread
❌ Thinking await 14 runs synchronously

✅ Correct understanding:

await = pause + microtask resume

JS is still single-threaded