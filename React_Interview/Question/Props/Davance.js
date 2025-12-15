🔹 1️⃣ Advanced Props in React

Props are more than just basic key-value pairs. In real projects, advanced patterns include:

Callback props (event handlers)

Function as child (Render Props)

Component as prop (Higher-Order Components pattern)

Generic/typed props (TypeScript)

Polymorphic props (as prop)

Props composition / base props

Optimized props with memoization


🔹 2️⃣ Callback Props (Event Handlers)

Pattern: Pass a function from parent → child to handle events.

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const handleClick = () => console.log("Clicked!");
  return <Button onClick={handleClick} />;
}


✅ Used everywhere in forms, modals, and dynamic components.

🔹 3️⃣ Function as Child / Render Props

Pattern: Child renders dynamic content based on a function from parent.

function DataFetcher({ render }) {
  const data = ["React", "JS", "TS"];
  return <div>{render(data)}</div>;
}

// Usage
<DataFetcher render={(data) => data.map(d => <p key={d}>{d}</p>)} />


✅ Used in:

Charts

Dynamic lists

Context-based rendering

🔹 4️⃣ Component as Prop / HOC

Pattern: Pass a component to be rendered inside another component.

function Modal({ Content }) {
  return (
    <div className="modal">
      <Content />
    </div>
  );
}

function LoginForm() { return <p>Login</p>; }

// Usage
<Modal Content={LoginForm} />


✅ Used in modals, dashboards, and UI libraries.

🔹 5️⃣ Generic / Typed Props (TypeScript)
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, idx) => <li key={idx}>{renderItem(item)}</li>)}</ul>;
}

// Usage
<List items={[1, 2, 3]} renderItem={i => <strong>{i}</strong>} />


✅ Used in:

Type-safe components

Lists, tables, dropdowns

Enterprise apps (big TS projects)

🔹 6️⃣ Polymorphic Props (as prop)
type TextProps<C extends React.ElementType> = {
  as?: C;
} & React.ComponentPropsWithoutRef<C>;

function Text<C extends React.ElementType = "p">({ as, ...props }: TextProps<C>) {
  const Component = as || "p";
  return <Component {...props} />;
}

// Usage
<Text as="h1">Heading</Text>
<Text as="span" style={{ color: "red" }}>Red Text</Text>


✅ Used in:

UI libraries like Chakra UI, Material UI, Radix UI

Dynamic typography / button components

🔹 7️⃣ Props Composition / Base Props

Pattern: Create base props for styling, className, id, etc.

type BaseProps = { className?: string; id?: string };
type ButtonProps = BaseProps & { label: string; onClick: () => void };

function Button({ label, className, id, onClick }: ButtonProps) {
  return <button id={id} className={className} onClick={onClick}>{label}</button>;
}


✅ Used in:

Reusable UI components

Standardized design systems

🔹 8️⃣ Optimizing Props (React.memo + useCallback)
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => setCount(c => c + 1), []);

  return <Child onClick={handleClick} />;
}


Avoids unnecessary re-renders

Critical for lists, tables, dashboards

🔹 9️⃣ Real Project Usage Examples



| Scenario        | Advanced Props Pattern      | Example                                                   |
| --------------- | --------------------------- | --------------------------------------------------------- |
| Dynamic lists   | Generic typed props         | `<List items={users} renderItem={user => <UserCard />}/>` |
| Modals / Popups | Component as prop           | `<Modal Content={LoginForm} />`                           |
| Styling system  | Base props                  | `<Button className="primary" />`                          |
| Performance     | Callback props + React.memo | Table row click handlers                                  |
| UI Libraries    | Polymorphic props           | `<Text as="h2">Heading</Text>`                            |
| Data fetching   | Render props                | `<DataFetcher render={data => ...} />`                    |



🔹 10️⃣ Interview Tips

Know callback, render props, component-as-prop patterns

Know TypeScript generics for props

Explain base props and composition

Explain optimization with React.memo + useCallback

Give real project examples