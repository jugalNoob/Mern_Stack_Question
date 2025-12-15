🚀 Simple use cases

Access HTML elements (DOM)

Store previous values

Store mutable variables

Timers (setTimeout, setInterval)


:;If i useref controoled hitml and input filed  control with dom 



import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const buttonRef = useRef(null); // ref for button

  // Input manipulation
  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log(inputRef);
    console.log(inputRef.current); // Logs the input element
    inputRef.current.focus(); // Focus input
    inputRef.current.style.color = 'red';
    inputRef.current.placeholder = 'Enter User Password';
    inputRef.current.value = '12345';
  };

  // Button manipulation
const ClickToggle = () => {
  if (buttonRef.current.style.color === 'red') {
    // Currently red → change to blue
    buttonRef.current.style.color = 'blue';
    buttonRef.current.innerText = 'Click me';
  } else {
    // Otherwise → change to red
    buttonRef.current.style.color = 'red';
    buttonRef.current.innerText = 'Toggled!';
  }
};

  return (
    <div>
      <button ref={buttonRef} onClick={ClickToggle}>
        Toggle Button
      </button>

      <form>
        <input type="text" ref={inputRef} placeholder="Type something..." />
        <button onClick={handleClick}>Click Button</button>
      </form>
    </div>
  );
}

export default App;


🟦 What is useRef? (Simple Definition)

✅ useRef is a React hook that lets you store a value that
 does NOT cause re-render when it changes.
🟢 Think of it like:

A small box where you can keep something, and React will not
 re-render the component when the value changes.





[Initial Render]
       |
       v
  useState -> value stored in state -> changing it triggers re-render
       |
       v
  useRef  -> value stored in .current -> changing it does NOT trigger re-render
       |
       v
  useEffect -> runs after render -> can read/update state/ref


  🔹 How it Works Step by Step

useState

Stored in React internal state.

Changing it → triggers a re-render.

Example:

const [count, setCount] = useState(0);
setCount(count + 1); // triggers render


useRef

Stored in .current.

Changing it → does NOT trigger re-render.

Example:

const countRef = useRef(0);
countRef.current += 1; // value changes, component does NOT re-render


useEffect

Runs after render.

Can read latest state and refs.

Example:

useEffect(() => {
  console.log('State:', count, 'Ref:', countRef.current);
}, [count]); // runs on count change



🔹 Quick Summary Table

| Use Case                         | Hook/Method                           |
| -------------------------------- | ------------------------------------- |
| Access DOM                       | `<input ref={myRef} />`               |
| Persist mutable value            | `const ref = useRef(initialValue)`    |
| Store previous state             | `prevRef.current = state`             |
| Avoid stale closure in intervals | `timerRef.current = setInterval(...)` |



import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;



// ---------------------->>

#import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count; // Store previous count
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;

//// ------------------->>exmaple Important ----------------------->>
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  useEffect(() => {
    console.log(`Component rendered ${renderCount.current} times`);
  });

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Render Count (ref): {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment State</button>
    </div>
  );
}

export default App;






