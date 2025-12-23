1️⃣ What is useMemo? (Simple Definition)

useMemo memoizes a computed value — it caches the result of a function so that it does not recompute on every render unless dependencies change.

🔑 Main idea:

useCallback → memoizes a function

useMemo → memoizes a value or computation

2️⃣ Syntax
const memoizedValue = useMemo(() => {
  return expensiveComputation(a, b);
}, [a, b]);


() => { ... } → function that computes the value

[a, b] → dependencies; recompute only if these change

3️⃣ Real-world example
function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  const doubleNum = useMemo(() => {
    console.log("Expensive calculation");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h1>Double: {doubleNum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
    </div>
  );
}

Explanation:

Clicking Increment Count → count changes → doubleNum NOT recalculated

Clicking Increment Num → num changes → doubleNum recalculates

✅ Saves performance for expensive computations

4️⃣ When to use useMemo (Main use-cases)

Expensive computations

Heavy calculations inside render

Prevent re-calculation on every render

Derived data for rendering

Filtering or sorting large lists

const filtered = useMemo(() => data.filter(item => item.active), [data]);


Stable references for objects/arrays

Prevent unnecessary child re-renders with React.memo

const options = useMemo(() => [1, 2, 3], []);
<Child options={options} />

5️⃣ Key difference: useMemo vs useCallback




| Feature      | useMemo                               | useCallback       |
| ------------ | ------------------------------------- | ----------------- |
| Returns      | Memoized value                        | Memoized function |
| Use-case     | Expensive calculations / derived data | Function props    |
| Dependencies | `[dep1, dep2]`                        | `[dep1, dep2]`    |



6️⃣ Interview GOLD one-liners

useMemo → memoizes a value so it doesn’t recalculate on every render

Use when computation is expensive or object/array props are passed to children

Overusing it can increase memory usage, use only when needed

✅ Mental model
Parent renders
   ↓
Expensive calculation
   ↳ useMemo caches result
Next render (deps unchanged)
   ↳ useMemo returns cached value