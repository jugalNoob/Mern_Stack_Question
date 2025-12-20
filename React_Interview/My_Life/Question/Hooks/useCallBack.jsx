🔹 What is useCallback?

useCallback returns a memoized version of a function so that it doesn’t get recreated on every render.

React recreates functions on every render

If you pass that function to child components, it can trigger unnecessary re-renders

useCallback prevents that

✅ Syntax
const memoizedFn = useCallback(() => {
  // function body
}, [dependencies]);


dependencies → only recalc if these change

Returns the same function reference unless dependencies change

🧪 Simple Example
import React, { useState, useCallback } from "react";

function Child({ handleClick }) {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount(c => c + 1);
  }, []); // no dependencies → same function always

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Count: {count}</p>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;

What happens here?

App re-renders when text changes

Without useCallback, handleClick would be new every render → Child re-renders

With useCallback, handleClick keeps the same reference → Child doesn’t re-render unnecessarily

🔹 Difference from useMemo


| Hook        | Memoizes |
| ----------- | -------- |
| useMemo     | Value    |
| useCallback | Function |




Think: useCallback(fn, deps) is like useMemo(() => fn, deps)

🔹 When to use useCallback (Interview tips)

Passing functions to memoized children (React.memo)

Avoiding unnecessary re-renders in lists or heavy components

Not needed for small components (over-optimization)

🔹 Key Rules

Always declare at the top level of a component or custom hook

Do not put inside loops or conditions

Dependencies array is critical — must include all state/props used

🔹 Quick One-Liner for Interview

useCallback memoizes a function so that its reference remains the same across renders unless dependencies change, preventing unnecessary re-renders.

If you want, I can make a super-simple diagram s