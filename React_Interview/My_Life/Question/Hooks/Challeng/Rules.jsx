🔹 1️⃣ Only Call Hooks at the Top Level

Do NOT call hooks inside loops, conditions, or nested functions.

Hooks must be called in the same order on every render, so React can track their state correctly.

❌ Wrong
if (show) {
  const [count, setCount] = useState(0); // ❌ inside condition
}

✅ Correct
const [count, setCount] = useState(0); // top level
if (show) {
  // use count here
}

🔹 2️⃣ Only Call Hooks from React Functions

Hooks can only be used in functional components or custom hooks.

❌ Wrong
function myUtility() {
  const [count, setCount] = useState(0); // ❌ cannot use here
}

✅ Correct
function MyComponent() {
  const [count, setCount] = useState(0); // ✅ valid
}


Or in a custom hook:

function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

🔹 3️⃣ Hooks Must Be Called in the Same Order

React relies on call order to associate state with hooks.
Do not put hooks inside loops, conditions, or nested functions.

❌ Wrong
if (flag) {
  useState(0); // ❌ may break order
}

✅ Correct
const [count, setCount] = useState(0); // always called
if (flag) {
  // logic
}

🔹 4️⃣ Use Only React Hook Functions

React provides these built-in hooks:

useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef, etc.

Do not invent custom hook names that start with lowercase.
Custom hooks must start with use.

function useCounter() { // ✅ custom hook
  const [count, setCount] = useState(0);
  return { count, setCount };
}

🔹 5️⃣ Custom Hooks Follow the Same Rules

Must start with use

Can call other hooks inside them

Must be called at top level of a functional component

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
}

🔹 6️⃣ Why These Rules Exist (Interview Gold)

React uses a hooks array internally to track state for each component

If you break rules (conditionals, loops), React cannot match hook calls to state slots → runtime errors

🔹 7️⃣ Quick Summary Table


| Rule                          | Explanation                           | Example                                 |
| ----------------------------- | ------------------------------------- | --------------------------------------- |
| Top-level only                | No loops, conditions                  | ✅ const [count] = useState(0)           |
| Only in React functions       | Functional components or custom hooks | ✅ function MyComponent() { useState() } |
| Same order                    | Hook call order must not change       | ❌ if(flag) useState()                   |
| Custom hooks start with `use` | Recognized by React                   | ✅ function useFetch() {}                |



🔹 8️⃣ Pro Tips

Combine useEffect + useState for data fetching

Use useCallback + React.memo to optimize performance

Always extract reusable logic into custom hooks

Never use hooks inside event handlers, loops, or nested functions


🔹 9️⃣ One-line Interview Answer

Hooks are special functions that let you use React state and lifecycle in functional components, and they must follow strict rules: top-level, only in React functions, same order, and custom hooks must start with use.


