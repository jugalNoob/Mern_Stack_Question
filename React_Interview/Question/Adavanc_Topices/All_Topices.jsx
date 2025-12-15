🔹 Advanced React Topics Checklist (Comprehensive)
1️⃣ Custom Hooks

Encapsulate reusable logic

Example: useFetch, useForm, useAuth

Rules: Must start with use, call other hooks safely

2️⃣ Higher-Order Components (HOC)

Function that takes a component → returns enhanced component

Example: withAuth(Component)

Alternatives: Hooks & render props in modern React

3️⃣ Render Props

Passing a function as a prop to dynamically render content

Example: <DataFetcher render={data => <Component data={data}/>} />

Use cases: Charts, lists, complex UI logic

4️⃣ Higher-Order Reducers

Advanced Redux pattern

Compose reducers for complex state logic

Example: enhanceReducer(baseReducer, middlewareReducer)

5️⃣ Immutable Data Structures

Avoid direct mutation for predictable state

Example: useState([...state, newItem]) vs state.push()

Libraries: Immer, Immutable.js

Critical for React performance + Redux

6️⃣ Memoization / Optimization

React.memo, useMemo, useCallback

Prevent unnecessary re-renders

Example: Large tables, lists, expensive computations

7️⃣ React Portals

Render children outside parent DOM hierarchy

Example: Modals, tooltips, notifications

8️⃣ React.lazy & Suspense

Code-splitting & lazy loading

React.lazy(() => import('./Component'))

Suspense fallback for loading UI

9️⃣ Server-Side Rendering (SSR) & Static Site Generation (SSG)

SSR: Next.js, getServerSideProps

SSG: Next.js, getStaticProps

Improves SEO, initial load performance

🔟 Virtual DOM & Reconciliation

How React updates only changed DOM nodes

Key concepts: Diffing, Fiber architecture

Critical for performance tuning

1️⃣1️⃣ Web Workers

Offload heavy computations to background threads

Prevent UI blocking

Example: Data parsing, large loops, image processing

1️⃣2️⃣ Context API & useContext

Manage global state without Redux

Combine with useReducer for advanced patterns

1️⃣3️⃣ Concurrent Mode / React 18 Features

startTransition, useDeferredValue

Improves rendering of large lists & avoids blocking UI

1️⃣4️⃣ Error Boundaries

Catch runtime errors in components

componentDidCatch or React 16+ ErrorBoundary

1️⃣5️⃣ Portals + Modals / Layered Components

Often combined with event bubbling, z-index control, and focus trapping

1️⃣6️⃣ Advanced Patterns

Compound Components (e.g., Tabs, Accordions)

Controlled vs Uncontrolled Components

Polymorphic Components (as prop)

1️⃣7️⃣ Performance Tools

React DevTools Profiler

Key prop optimization

useTransition, memoization, and lazy loading

1️⃣8️⃣ Testing Patterns

Unit tests: Jest + React Testing Library

Integration tests: Component + Hook tests

Snapshot tests for UI components

🔹 Optional but Nice to Know (Interview Bonus)

Refs + forwardRef + useImperativeHandle

Dynamic Imports & Suspense for Data Fetching

Hybrid state management (Redux + Context)

Portals + Modals focus management

Hydration in SSR/SSG

🔹 ✅ Summary / Interview Tip

Master:

State management (useState, useReducer, Context, Redux)

Performance optimization (memoization, lazy loading, virtualization)

Component patterns (HOC, render props, custom hooks, portals)

SSR/SSG (Next.js) + React 18 features

Advanced JS + immutability

Nice to know / differentiator:

Concurrent mode, web workers, error boundaries, testing patterns