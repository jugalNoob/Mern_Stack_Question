✅ Simple Definition (Easy to Remember)
👉 A Pure Component only re-renders when its 
props or state actually change.

If the new props/state are the same as before, React will
 skip rendering to improve performance.

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

👉 “A Pure Component is a component that re-renders only when 
its props or state 
change, using shallow comparison to improve performance.”




1️⃣ Definition (Simple)

Shallow comparison means comparing only the top-level values of an object or array, not nested objects or arrays inside it.

✅ Checks: direct properties or elements

❌ Does not check nested objects/arrays

2️⃣ Why it matters in React

React.memo and PureComponent use shallow comparison

They check if props or state changed at the top level

If shallow comparison says “same”, React skips re-render

3️⃣ Example 1: Shallow comparison with objects
const obj1 = { name: 'Jugal', age: 25 };
const obj2 = { name: 'Jugal', age: 25 };

console.log(obj1 === obj2); // false


Why?

=== compares references, not content

Even though keys are same, they are different objects in memory

const obj3 = obj1;
console.log(obj1 === obj3); // true


obj3 points to the same reference, so shallow comparison ✅

4️⃣ Example 2: Shallow comparison with nested objects
const obj1 = { name: 'Jugal', details: { age: 25 } };
const obj2 = { name: 'Jugal', details: { age: 25 } };

console.log(obj1.details === obj2.details); // false


Shallow comparison only looks at top level (details)

Nested object is different → React thinks prop changed

5️⃣ Real-life analogy

Think of shallow comparison like:

Looking at the cover of a book only

You don’t read inside the book

If the cover is same → React thinks “same”

If the cover changes → React thinks “different”

For nested objects, shallow comparison can’t see the inner content

6️⃣ React Example
const Child = React.memo(({ user }) => {
  console.log('Child rendered');
  return <div>{user.name}</div>;
});

const user = { name: 'Jugal' };

<Child user={user} />; // render 1
<Child user={{ name: 'Jugal' }} />; // render again ❌


Second render → new object reference

Shallow comparison fails → Child re-renders

✅ Solution: use useMemo or pass stable reference

const user = useMemo(() => ({ name: 'Jugal' }), []);

7️⃣ Interview One-liner

“Shallow comparison checks only the top-level properties of objects or elements of arrays. React.memo uses this to skip re-render if props haven’t changed at the top level.”