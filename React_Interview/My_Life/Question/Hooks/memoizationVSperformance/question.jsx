❓ Why useCallback in Parent + React.memo in Child?
Short answer (INTERVIEW READY):

useCallback keeps function props stable, and React.memo
 uses that stability to skip unnecessary child re-renders.
1️⃣ The core problem
function Parent() {
  const handleClick = () => {
    setCount(c => c + 1);
  };

  return <Child onClick={handleClick} />;
}


❌ Problem

Parent re-renders

handleClick is re-created

Function reference changes

Child sees "new props"

Child re-renders

Even if logic is same ❗

2️⃣ What React.memo does (Child side)
const Child = React.memo(({ onClick }) => {
  console.log('child render');
  return <button onClick={onClick}>Click</button>;
});


React.memo:

Shallow compares props

prevProps.onClick !== nextProps.onClick

❌ New function reference → re-render

📌 React.memo alone is NOT enough

3️⃣ What useCallback does (Parent side)
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);


✅ useCallback:

Returns same function reference

Until dependency changes

So now:

prevProps.onClick === nextProps.onClick

4️⃣ Why we need BOTH together

| Tool          | Role                                  |
| ------------- | ------------------------------------- |
| `useCallback` | Keeps function reference stable       |
| `React.memo`  | Skips child render if props unchanged |


📌 They solve different problems

5️⃣ Final working example (INTERVIEW PERFECT)
Parent
function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <Child onClick={increment} />
    </>
  );
}

Child
const Child = React.memo(({ onClick }) => {
  console.log('child render');
  return <button onClick={onClick}>+</button>;
});

6️⃣ What happens on click now?
Component	Re-render
Parent	✅ (state changed)
Child	❌ (props same)

🔥 Perfect optimization

7️⃣ Interview one-liners (MEMORIZE)

Functions are objects → new reference every render

React.memo does shallow prop comparison

useCallback stabilizes function props

React.memo + useCallback prevents unnecessary child renders

8️⃣ When NOT to use this combo ❌

Child renders rarely

No performance issue

Props change every render

Premature optimization

📌 React team advice:

Optimize only when needed

9️⃣ Simple analogy 🧠

useCallback = freeze function identity

React.memo = security guard

Same ID → entry denied → no re-render 😄

If you want next:

useMemo vs useCallback

custom comparison in React.memo

why inline functions break memo

render vs commit phase

Just say 🔥


9️⃣ Simple analogy 🧠

useCallback = freeze function identity

React.memo = security guard

Same ID → entry denied → no re-render 😄

If you want next:

useMemo vs useCallback

custom comparison in React.memo

why inline functions break memo

render vs commit phase

Q Which Time Use RectMom ?

6️⃣ Interview Rule (MEMORIZE THIS 🔥)

Use React.memo when a child component re-renders frequently due to parent re-renders, but its props remain the same.

7️⃣ Real Interview Example
Without memo
Parent state change → Child re-render ❌

With memo
Parent state change → Child skipped ✅

8️⃣ Simple mental model
React.memo
   ↓
Shallow compare props
   ↓
Same props → skip render
Different props → re-render

9️⃣ One-liner answer for interview 🎯

“We use React.memo to prevent unnecessary re-renders of a child component when its props haven’t changed, especially when the parent re-renders frequently.”



1️⃣7️⃣ How to prevent unnecessary re-renders?

React.memo

useCallback

Proper key

Avoid inline functions

1️⃣8️⃣ Lazy loading
const Component = React.lazy(() => import('./Comp'))


Improves initial load time

Used with Suspense