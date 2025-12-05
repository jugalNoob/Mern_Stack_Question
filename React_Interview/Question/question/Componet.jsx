🔹 1️⃣ What is a Component?

Definition:
A component is a reusable, independent piece of UI in React. Components can be functional or class-based, and they can accept props and maintain state.

Example (Functional Component):

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="Jugal" />


Props → Inputs to the component

State → Internal data that can change

Components return JSX to render UI

Class Component Example:

import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}


Key Point: Everything in React is built using components.

🔹 2️⃣ What is an Uncontrolled Component?

Definition:
An uncontrolled component is a form input element whose value is handled by the DOM, not React state.

React does not control the value.

You access the value using refs (useRef in functional components).

Example:

import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Type something" />
      <button type="submit">Submit</button>
    </form>
  );
}


✅ Key points:

DOM manages the input value

Easier for simple forms

Not ideal for complex validations

🔹 3️⃣ What is a Controlled Component?

Definition:
A controlled component is a form input element whose value is controlled by React state.

The input value is always synced with React state.

Ideal for validations, dynamic forms, or complex UI logic.

Example:

import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Value: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something"
      />
      <button type="submit">Submit</button>
    </form>
  );
}


✅ Key points:

React state controls the value

Updates UI immediately on state change

Perfect for validation, conditional logic, and dynamic forms

🔹 Comparison Table: Controlled vs Uncontrolled



| Feature             | Controlled Component      | Uncontrolled Component                  |
| ------------------- | ------------------------- | --------------------------------------- |
| Value controlled by | React state               | DOM                                     |
| Updating value      | `setState`                | Direct DOM access (`ref.current.value`) |
| Ideal for           | Dynamic forms, validation | Simple forms, quick input               |
| Form data access    | `state` variable          | `ref`                                   |
| React re-render     | Yes                       | No                                      |


Summary:

Component → Reusable UI unit.

Uncontrolled Component → DOM handles input, use ref to read value.

Controlled Component → React state handles input, value always synced with state.