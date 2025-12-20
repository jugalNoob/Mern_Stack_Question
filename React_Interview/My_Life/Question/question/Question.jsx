🔥 Add advanced React questions (hooks internals, reconciliation, fiber)

# React.js Interview Questions & Answers (Beginner → Advanced)

---

## 1️⃣ What is React?

**Answer:**
React is a **JavaScript library** for building **
component-based user interfaces**. It uses a **virtual DOM** 
to efficiently update the UI.

---

## 2️⃣ What is JSX?

**Answer:**
JSX is a syntax extension that allows writing HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello React</h1>;
```

JSX is compiled to `React.createElement()`.

---

## 3️⃣ What is Virtual DOM?

**Answer:**
The Virtual DOM is a lightweight JavaScript
 representation of the real DOM. React compares old and 
 new virtual DOMs (**diffing**) and updates only changed parts (**reconciliation**).
 

---

## 4️⃣ What is a Component?

**Answer:**
A component is a **reusable UI block**.

Types:

* Functional Component ✅ (recommended)
* Class Component ❌ (legacy)

---

## 5️⃣ Functional vs Class Components

| Feature     | Functional | Class  |
| ----------- | ---------- | ------ |
| Hooks       | ✅ Yes      | ❌ No   |
| Performance | Faster     | Slower |
| Boilerplate | Less       | More   |

---

## 6️⃣ What are Props?

**Answer:**
Props are **read-only inputs** passed from parent to child.

```jsx
function User({ name }) {
  return <h1>{name}</h1>;
}
```

---

## 7️⃣ What is State?

**Answer:**
State is **mutable data** managed inside a component.

```jsx
const [count, setCount] = useState(0);
```

---

## 8️⃣ Props vs State

| Props              | State                    |
| ------------------ | ------------------------ |
| Read-only          | Mutable                  |
| Passed from parent | Managed inside component |

---

## 9️⃣ What are Hooks?

**Answer:**
Hooks allow using state and lifecycle features in functional components.

Common hooks:

* `useState`
* `useEffect`
* `useContext`
* `useMemo`
* `useCallback`

---

## 🔟 Rules of Hooks

**Answer:**

1. Call hooks at the **top level**
2. Call hooks **only in React functions**

---

## 1️⃣1️⃣ What is useEffect?

**Answer:**
`useEffect` handles side effects like API calls, subscriptions, and timers.

```jsx
useEffect(() => {
  fetchData();
}, []);
```

---

## 1️⃣2️⃣ useEffect Dependency Array

| Dependency | Meaning              |
| ---------- | -------------------- |
| `[]`       | Run once             |
| `[x]`      | Run when `x` changes |
| none       | Run on every render  |

---

## 1️⃣3️⃣ What is Controlled Component?

**Answer:**
Form elements whose value is controlled by React state.

```jsx
<input value={name} onChange={e => setName(e.target.value)} />
```

---

## 1️⃣4️⃣ What is Key in React?

**Answer:**
Keys help React identify list items uniquely.

```jsx
items.map(item => <li key={item.id}>{item.name}</li>)
```

---

## 1️⃣5️⃣ What is Context API?

**Answer:**
Context provides **global state** without prop drilling.

Used for:

* Theme
* Auth
* Language

---

## 1️⃣6️⃣ What is Memoization?

**Answer:**
Memoization prevents unnecessary re-renders.

* `React.memo`
* `useMemo`
* `useCallback`

---

## 1️⃣7️⃣ What is React.memo?

**Answer:**
Prevents re-render if props don’t change.

```jsx
export default React.memo(Component);
```

---

## 1️⃣8️⃣ What is Lazy Loading?

**Answer:**
Loads components only when needed.

```jsx
const Page = React.lazy(() => import('./Page'));
```

---

## 1️⃣9️⃣ What is Suspense?

**Answer:**
Used to show fallback UI while loading.

```jsx
<Suspense fallback={<Loader />}>
  <Page />
</Suspense>
```

---

## 2️⃣0️⃣ What are Server Components?

**Answer:**
Server Components run on the server, reduce JS bundle size, and can access DBs directly (used in Next.js App Router).

---

## 🎯 Final Interview Tip

> Prefer **functional components + hooks + memoization** for performance and scalability.

---

✅ Ask me if you want:

* Advanced React questions
* Coding interview problems
* React system design
* React + Node + Redis architecture

---

# 🏗️ React System Design Questions (With Explanations)

## 1️⃣ How do you design a scalable React application?

**Answer:**
A scalable React app follows **separation of concerns**.

**Key principles:**

* Component-based architecture
* Feature-based folder structure
* State management (Context / Redux / Zustand)
* Code splitting & lazy loading
* API abstraction layer

**Example structure:**

```
src/
 ├── features/
 │   ├── auth/
 │   ├── dashboard/
 ├── components/
 ├── hooks/
 ├── services/
 ├── utils/
```

---

## 2️⃣ How do you manage global state in React?

**Answer:**
Options depend on app size:

| App Size | Solution                |
| -------- | ----------------------- |
| Small    | Context API             |
| Medium   | Context + useReducer    |
| Large    | Redux Toolkit / Zustand |

Avoid unnecessary global state.

---

## 3️⃣ How do you optimize React performance?

**Answer:**

* Memoization (`React.memo`, `useMemo`, `useCallback`)
* Avoid unnecessary re-renders
* Proper key usage
* Lazy loading
* Virtualization (large lists)

---

## 4️⃣ How do you design authentication in React?

**Answer:**

* JWT stored in HttpOnly cookies
* Auth context for user state
* Protected routes
* Refresh token strategy

---

## 5️⃣ How do you handle API errors globally?

**Answer:**

* Axios interceptors
* Global error boundary
* Centralized toast/alert system

---

# 🔥 Advanced React Questions (Internals)

## 6️⃣ How do React Hooks work internally?

**Answer:**
Hooks are stored in a **linked list** inside a Fiber node.

* Each component has its own hook list
* Hooks rely on **call order**, not names
* That’s why hooks must be called unconditionally

---

## 7️⃣ Why hooks cannot be called conditionally?

**Answer:**
Because React matches hook calls by **order**, not by identifier.

```js
useState(); // index 0
useEffect(); // index 1
```

Changing order breaks state mapping.

---

## 8️⃣ What is React Fiber?

**Answer:**
Fiber is React’s **reconciliation engine**.

It enables:

* Incremental rendering
* Pausing & resuming work
* Priority-based updates
* Concurrent features

---

## 9️⃣ What is reconciliation?

**Answer:**
Reconciliation is the process of comparing old and new Virtual DOM trees to compute minimal DOM updates.

Uses:

* Diffing algorithm
* Keys to optimize list updates

---

## 🔟 How does React diffing work?

**Answer:**
React assumes:

* Same element type → update
* Different type → destroy & recreate
* Keys identify list items

O(n) time complexity.

---

## 1️⃣1️⃣ What is batching in React?

**Answer:**
Batching groups multiple state updates into a single render.

```js
setA(1);
setB(2);
```

Only one re-render.

---

## 1️⃣2️⃣ What is Concurrent Rendering?

**Answer:**
Allows React to prepare multiple UI states in memory and switch instantly.

Improves responsiveness.

---

## 1️⃣3️⃣ What is useTransition?

**Answer:**
Marks updates as low priority.

```js
const [isPending, startTransition] = useTransition();
```

---

## 1️⃣4️⃣ What are Error Boundaries?

**Answer:**
Catch JavaScript errors in UI tree.

Only class components support error boundaries.

---

## 1️⃣5️⃣ How does hydration work?

**Answer:**
Hydration attaches event listeners to server-rendered HTML.

Used in SSR & Server Components.

---

## 1️⃣6️⃣ Server Components vs SSR

**Answer:**

| SSR              | Server Components |
| ---------------- | ----------------- |
| Sends JS         | No JS             |
| Hydration needed | Partial           |
| Runs once        | Runs per request  |

---

## 1️⃣7️⃣ How do you design a large dashboard in React?

**Answer:**

* Split by widgets
* Lazy load charts
* Memoize heavy components
* Virtualize tables

---

## 1️⃣8️⃣ How to avoid prop drilling at scale?

**Answer:**

* Context API
* Custom hooks
* State libraries

---

## 1️⃣9️⃣ What happens when state updates?

**Answer:**

1. setState called
2. Fiber schedules update
3. Reconciliation
4. Commit phase
5. DOM updates

---

## 2️⃣0️⃣ React Rendering Phases

**Answer:**

1. Render phase (pure)
2. Commit phase (DOM mutations)
3. Effects phase

---

# 🎯 Final Interview Golden Lines

* "Hooks rely on call order"
* "Fiber enables concurrency"
* "Keys are critical for reconciliation"
* "Memoization is for optimization, not correctness"

---

✅ Say **NEXT** if you want:

* React + Next.js system design
* Real-world architecture diagrams
* Coding questions with solutions
* Tricky React interview MCQs
