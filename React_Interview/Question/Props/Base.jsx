9️⃣ Interview Tips

Can you enforce conditional mandatory props? ✅

Can you explain generic props + type safety? ✅

Can you optimize prop passing to large child trees? ✅

Can you design base props + polymorphic components? ✅

Answering these shows advanced React design thinking


Got it! You want a deep, multi-level explanation of React “base props” (mandatory props), including how to enforce them, use them in multiple ways, and interview-level insights. Let’s break it down systematically.

🔹 1️⃣ What are Props in React?

Props (short for properties) are inputs to a React component, passed from parent → child.

Example:

function Child({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return <Child name="Jugal" />;
}


name="Jugal" → prop

Child reads it via {name}

🔹 2️⃣ Mandatory (Required) Props

Sometimes you must pass a prop; otherwise the component may break.

🔹 2a. Using PropTypes (Classic way)
import PropTypes from 'prop-types';

function Child({ name, age }) {
  return <p>{name} is {age} years old</p>;
}

// Enforce mandatory props
Child.propTypes = {
  name: PropTypes.string.isRequired, // required
  age: PropTypes.number              // optional
};

// Default values (optional)
Child.defaultProps = {
  age: 18
};


✅ Key points:

isRequired → mandatory

defaultProps → fallback for optional props

Throws warning in console (not runtime error)

🔹 2b. Using TypeScript (Strongly recommended)
type ChildProps = {
  name: string;  // mandatory
  age?: number;  // optional
}

function Child({ name, age = 18 }: ChildProps) {
  return <p>{name} is {age} years old</p>;
}

// Usage
<Child name="Jugal" />  // ✅ works
<Child />                // ❌ TypeScript Error


✅ Key points:

TypeScript enforces mandatory props at compile time

Much safer than runtime PropTypes

🔹 3️⃣ Why enforce mandatory props?

Prevent runtime errors

Make component self-documenting

Helps team collaboration

Ensures reusable components behave predictably

🔹 4️⃣ Multiple/complex props

Props can be:

<Child 
  name="Jugal" 
  info={{ email: 'a@b.com', phone: 12345 }} 
  hobbies={['coding', 'reading']}
/>


info → object

hobbies → array

You can enforce via PropTypes or TypeScript:

type ChildProps = {
  name: string;
  info: { email: string; phone: number };
  hobbies: string[];
}

🔹 5️⃣ Default vs Mandatory
Prop Type	Behavior
Mandatory	Must pass, else error or warning
Optional + default	Uses default if not provided
🔹 6️⃣ Conditional Mandatory Props (Advanced)

Sometimes a prop is mandatory only if another prop exists:

type ChildProps = {
  type: 'email' | 'phone';
  value: string;
}

function Child({ type, value }: ChildProps) {
  if (!value) throw new Error('value is required');
  return <p>{type}: {value}</p>;
}

🔹 7️⃣ Base Props Pattern (Reusable / Generic)

Base props are props that multiple components share, e.g., styling or id:

type BaseProps = {
  id?: string;
  className?: string;
}

type ButtonProps = BaseProps & {
  label: string;
}

function Button({ id, className, label }: ButtonProps) {
  return <button id={id} className={className}>{label}</button>;
}


✅ Benefits:

Standardized props across components

Easy extension for new components

🔹 8️⃣ Interview Tips

Always distinguish mandatory vs optional props

Prefer TypeScript over PropTypes for large projects

Understand default values + destructuring

Know base props patterns for reusable components

🔹 9️⃣ Quick Example (Mandatory + Base Props)
type BaseProps = { className?: string };
type CardProps = BaseProps & { title: string; content: string };

function Card({ title, content, className }: CardProps) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

// Usage
<Card title="React" content="Props explained" />  // ✅ mandatory props passed
