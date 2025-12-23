Exactly ✅ — you got it!

Let me explain clearly:

1️⃣ The meaning in simple words

If you are passing a function as a prop to a child component, use useCallback to keep the function reference stable.

Why?

Without useCallback, every parent render creates a new function

New function → child sees “props changed” → child re-renders

With useCallback, child re-renders only if needed

2️⃣ Example
Parent
function Parent() {
  const [count, setCount] = useState(0);

  // Stable function reference
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return <Child onClick={increment} />;
}

Child
const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});


✅ Result:

Parent re-renders → Child does NOT re-render

Function reference is stable

3️⃣ Interview one-liner

“Use useCallback when passing functions as props to children, so the child won’t re-render unnecessarily on every parent render.”