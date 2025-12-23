🧠 Interview One-Liners

React.memo prevents re-render by comparing props

useCallback stabilizes function references

Lazy loading splits bundle into chunks

Suspense handles loading states for async components

🔥 Interview Follow-up Questions

Want next?

useMemo vs useCallback (deep traps)

Lazy loading routes with React Router

When NOT to use memoization

Performance debugging tools (Profiler)


| Technique      | Benefit                    |
| -------------- | -------------------------- |
| React.memo     | Skips unnecessary renders  |
| useCallback    | Stable function references |
| Lazy loading   | Smaller initial JS bundle  |
| Code splitting | Faster Time To Interactive |



🧠 Interview One-Liners

React.memo prevents re-render by comparing props

useCallback stabilizes function references

Lazy loading splits bundle into chunks

Suspense handles loading states for async components

🔥 Interview Follow-up Questions

Want next?

useMemo vs useCallback (deep traps)

Lazy loading routes with React Router

When NOT to use memoization

Performance debugging tools (Profiler)


::::::::::::::::::::::::::::::::::::::::::: ---------------------------->>

Perfect 👍
This is a very common interview question and people often misuse these.
I’ll explain WHEN to use each one, WHY, and WHEN NOT to use — with simple rules.


1️⃣ React.memo

👉 Use when a component re-renders unnecessarily

✅ Use React.memo WHEN:

Component receives props

Component renders often

Props usually don’t change

Component is pure (same props → same UI)

const Child = React.memo(({ name }) => {
  return <h1>{name}</h1>
})

❌ Do NOT use when:

Component always re-renders anyway

Props change every time

Component is very small/simple

📌 Rule

Use React.memo to stop child re-render when parent re-renders


2️⃣ useCallback

👉 Use when passing functions as props

✅ Use useCallback WHEN:

You pass a function to a memoized child

Function is used in dependency arrays

Prevents new function creation

const handleClick = useCallback(() => {
  setCount(c => c + 1)
}, [])

❌ Do NOT use when:

Function is used only inside the component

No child depends on it

📌 Rule

useCallback is for function identity, not performance by default

3️⃣ useMemo

👉 Use when calculation is expensive

✅ Use useMemo WHEN:

Heavy computation (loops, filters, reduce)

Derived data

Prevent recomputation on every render

const total = useMemo(() => {
  return items.reduce((a, b) => a + b.price, 0)
}, [items])

❌ Do NOT use when:

Calculation is cheap

Primitive values

Overusing causes memory overhead

📌 Rule

useMemo memoizes values, not renders

4️⃣ React.lazy (Lazy loading)

👉 Use when component is heavy / not needed initially

✅ Use React.lazy WHEN:

Large components

Route-based loading

Admin / Dashboard / Modal / Charts

const Dashboard = React.lazy(() => import('./Dashboard'))

<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>

❌ Do NOT use when:

Component is tiny

Used on first paint

Above-the-fold content

📌 Rule

Lazy load what the user doesn’t need immediately

🔥 ONE TABLE (INTERVIEW GOLD)


| Tool        | Use When           | Prevents             |
| ----------- | ------------------ | -------------------- |
| React.memo  | Child re-renders   | Unnecessary renders  |
| useCallback | Passing functions  | Function recreation  |
| useMemo     | Heavy calculations | Recalculation        |
| React.lazy  | Big components     | Large initial bundle |

