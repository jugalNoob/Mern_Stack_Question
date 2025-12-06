✅ What is a Controlled Component? (Simple Explanation)

A controlled component is an input field whose value is controlled by React State, not by the browser.

➡️ React owns the value.
➡️ The value changes only through state (useState).
➡️ UI updates when the state updates.

🟦 Your Code Example = Controlled Component
<input 
  type="text" 
  value={name}               // React controls the value
  onChange={(e)=>setName(e.target.value)}  // updating state
/>


✔ value={name} → input value comes from React
✔ onChange updates name in state
✔ UI shows whatever React state says

This is controlled.

🟢 Easy Interview Definition

A controlled component is a form input whose value is managed by React state.
Every keystroke updates the state, and the state updates the UI.

🟣 Why called "Controlled"?

Because React controls the input value.

Without React → browser controls the value.
With React → state controls the value.

🌟 Example Breakdown from Your Code
Name input:

value={name} → React controls what shows

onChange → updates the state

setName → updates UI

Reset button:
<button onClick={()=>{setName(''); setEmail('')}}></button>


This clears the input fields because the state changes, not the DOM.

🔥 One-line Summary

Controlled Component = Input value stored in state + updated via onChange. React controls everything.