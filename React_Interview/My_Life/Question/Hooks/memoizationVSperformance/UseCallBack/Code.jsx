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





2. When to use useCallback
Use this when you are passing a function down to a Child
 Component.

In React, every time a component re-renders, it creates a 
"new" version of your functions. If you pass a "new" 
function to a Child, that Child will re-render even if 
it didn't need to. useCallback stops this.

The Example:
JavaScript

// This function is "saved" and stays the same between renders
const handleIncrement = useCallback(() => {
  setCount(c => c + 1);
}, []); // Empty array means "never change this function"

return <BigExpensiveChildComponent onClick={handleIncrement} />;


Hook,"What it ""Remembers""",Return Value,Main Goal
useMemo,The result of a calculation,"A value (100, true, [...])",Speed up slow calculations.
useCallback,The function itself,A function () => { ... },Stop child components from unnecessary re-rendering.


f you are trying to fix unnecessary re-renders of child components: Use useCallback.