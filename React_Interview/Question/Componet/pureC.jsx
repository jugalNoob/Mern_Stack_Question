✅ Simple Definition (Easy to Remember)
👉 A Pure Component only re-renders when its props or state actually change.

If the new props/state are the same as before, React will skip rendering to improve performance.

🧠 Why “Pure”?

Because like a pure function in JavaScript:

Output only depends on input

No side-effects

Returns the same result for the same input

A Pure Component behaves the same way.

🧩 Example (PureComponent Class)
import React, { PureComponent } from "react";

class MyComponent extends PureComponent {
  render() {
    console.log("Rendered!");
    return <h1>{this.props.name}</h1>;
  }
}

export default MyComponent;


✔ Will re-render only when name changes
✔ If parent re-renders but name is same → this component will NOT re-render

⚛️ Pure Component vs Normal Component


| Feature                              | Component | PureComponent         |
| ------------------------------------ | --------- | --------------------- |
| Re-renders on every parent re-render | YES       | NO                    |
| Checks if props/state changed        | NO        | YES (shallow compare) |
| Performance optimization             | ❌         | ✔️                    |


💡 Functional Component Equivalent

Functional components do not have PureComponent,
so we use React.memo() instead:

const MyComponent = React.memo(function ({ name }) {
  console.log("Rendered!");
  return <h2>{name}</h2>;
});


✔ Works exactly like PureComponent
✔ Avoids unnecessary re-renders

🎯 When to use Pure Components?

Use them when:

You pass large data or heavy UI

You want to prevent unnecessary re-rendering

Child component receives the same props often

Performance optimization required

⚠️ When NOT to use Pure Components?

Avoid if:

Props contain nested objects/arrays (shallow compare fails)

You mutate objects instead of creating new ones

UI updates depend on side effects

🔥 One-line interview-answer

👉 “A Pure Component is a component that re-renders only when its props or state change, using shallow comparison to improve performance.”