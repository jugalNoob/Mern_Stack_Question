🧩 What is forwardRef?

React.forwardRef is a special function that allows a parent component to pass a ref to a child component’s DOM node or React element.

Normally, refs cannot be attached to functional components. forwardRef solves this.

🔹 Why forwardRef?
function Child() {
  return <input />;
}

function Parent() {
  const inputRef = useRef();
  return <Child ref={inputRef} />; // ❌ Error! ref won’t work
}


React will throw a warning because functional components don’t accept refs by default.

Solution: Use forwardRef

🔹 Basic Syntax
const Child = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});


props → normal props

ref → forwarded from parent

Now you can attach ref to the actual DOM element

🔹 Example: Parent Accessing Child DOM
import React, { useRef } from 'react';

const Child = React.forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Type here" />;
});

function Parent() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Focuses the input inside Child
  };

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Parent;

✅ What happens:

Parent creates inputRef using useRef()

Passes it as ref to Child

Child uses forwardRef to attach it to the actual <input> DOM

Parent can now directly manipulate the child input DOM node

🔹 Key Points

Only works for functional components

Can forward to DOM elements or class components

Useful for imperative actions like focus, scroll, or animations

Combines perfectly with useImperativeHandle for exposing limited child API

🔹 Optional: useImperativeHandle Example
const Child = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = '')
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focus</button>
      <button onClick={() => childRef.current.clear()}>Clear</button>
    </div>
  );
}


useImperativeHandle lets you expose only what you want to the parent

Encapsulates internal DOM logic safely

🔹 Interview Notes

Ref forwarding solves the problem of passing refs through functional components

Do not overuse refs; prefer state/props for rendering

Combine with useImperativeHandle for controlled exposure

🔥 One-liner for interviews:

forwardRef allows a parent to pass a ref to a child functional component, giving direct access to the child’s DOM node or methods, without breaking component encapsulation.