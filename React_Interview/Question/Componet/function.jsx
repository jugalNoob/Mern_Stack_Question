⭐ One-Line Interview Answer

“A function component is a simple JavaScript function that
 uses hooks and returns JSX to build UI in React.”



 🟦 Interview Definition (Perfect)

A function component is a stateless or stateful React component written as a JavaScript function.
It uses Hooks (useState, useEffect, etc.) to manage state and lifecycle.
It returns JSX that defines the UI.

🔥 Why Function Components are Used?

Simple to write

Fast and lightweight

Use Hooks (state, lifecycle, context)

Replace old class components

Clean and easy to read

✔️ Features of Function Components

Just a function

Must start with a Capital letter

Must return JSX

Can accept props

Can use Hooks

Example with Props + State
import { useState } from "react";

function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{name} Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

export default Counter;


Use it:

<Counter name="Likes" />