9️⃣ useEffect lifecycle behavior
useEffect(() => {}, [])       // mount
useEffect(() => {}, [data])   // update
useEffect(() => { return () => {} }, []) // unmount


Interview Trap  

useEffect runs after render, not before



🧠 useEffect Lifecycle — FULL & CORRECT EXPLANATION

First, important correction 👇

❌ React does NOT have lifecycle methods in function components
✅ useEffect simulates lifecycle behavior

🔑 Core Rule (MEMORIZE THIS)

useEffect always runs AFTER render is committed to the DOM

This single line answers 50% of interview questions.

1️⃣ useEffect(() => {}, []) → Mount
useEffect(() => {
  console.log('Mounted');
}, []);

What happens

Component renders

DOM updates

useEffect runs once

📌 Why once?

Dependency array is empty

No value can change

✅ Equivalent to:

componentDidMount

2️⃣ useEffect(() => {}, [data]) → Update (Conditional)
useEffect(() => {
  console.log('Data changed');
}, [data]);

What happens

Runs after first render

Runs again only when data changes

📌 Important:

It does NOT run on every update

Only when dependency changes by reference

✅ Equivalent to:

componentDidUpdate (for data)

3️⃣ useEffect(() => { return () => {} }, []) → Unmount
useEffect(() => {
  return () => {
    console.log('Unmount');
  };
}, []);

What happens

Cleanup runs when component unmounts

Or before effect runs again (if deps change)

✅ Equivalent to:

componentWillUnmount

🔁 Cleanup runs WHEN?
useEffect(() => {
  console.log('effect');
  return () => console.log('cleanup');
}, [data]);

Order:

Render

Effect runs

Dependency changes

Cleanup runs

Effect runs again

📌 Cleanup runs before next effect, not after.

⚠️ INTERVIEW TRAP (VERY IMPORTANT)
❌ Wrong statement

“useEffect runs before render”

✅ Correct statement

“useEffect runs after render is committed to the DOM”

Why?

Effects may read DOM

DOM must exist first

🧠 Visual Timeline
Render
↓
DOM paint
↓
useEffect
↓
(setState)
↓
Re-render
↓
Cleanup
↓
useEffect

🔥 Special Case: useLayoutEffect
useLayoutEffect(() => {}, []);



| useEffect         | useLayoutEffect   |
| ----------------- | ----------------- |
| Async after paint | Sync before paint |
| Non-blocking      | Blocks paint      |
| Preferred         | Use rarely        |

Use useLayoutEffect only for DOM measurements

🧠 Common Interview Questions
❓ Why not put async directly in useEffect?

Because effect must return cleanup or nothing

✅ Correct:

useEffect(() => {
  async function fetchData() {}
  fetchData();
}, []);

❓ Why infinite loop happens?

Because dependency changes inside effect

useEffect(() => {
  setData(x + 1);
}, [x]); // ❌ loop

🔑 FINAL INTERVIEW SUMMARY (MEMORIZE)

“useEffect runs after render.
Dependency array controls when it re-runs.
Cleanup runs before next effect or on unmount.”

If you want next 🚀
🔥 useEffect vs useLayoutEffect deep dive
🔥 Common useEffect bugs
🔥 Event loop + useEffect timing
🔥 Real interview code puzzles