
1️⃣ What is forwardRef?


Normally, refs can only be attached to DOM elements inside your component.

forwardRef lets a parent component pass a ref to a child component.

Think of it like handing over a reference to a child, so the parent can access the child’s DOM directly.

2️⃣ Basic Example
import React, { useRef, forwardRef } from "react";

// Child component
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // parent accesses child DOM
  };

  return (
    <>
      <Input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;


✅ What happens:

App passes inputRef to Input.

Input forwards the ref to the actual <input> DOM element.

Clicking the button focuses the input directly.