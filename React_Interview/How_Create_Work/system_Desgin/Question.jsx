
🌐 SYSTEM DESIGN (STAFF / LEAD LEVEL)
2️⃣0️⃣ How React handles 10k+ components?

Windowing (react-window)

Memoization

Virtualization




🔥 HOW TO THINK (Interview Framework)

When asked “Design a React app”, always talk in this order 👇

1️⃣ Requirements (functional + non-functional)
2️⃣ Component architecture
3️⃣ State management strategy
4️⃣ Data fetching & caching
5️⃣ Performance optimizations
6️⃣ Scalability & maintainability

1️⃣ Component Architecture
🧱 Layered Structure
/src
 ├─ components/        // reusable UI (Button, Modal)
 ├─ pages/             // route-level components
 ├─ hooks/             // custom hooks
 ├─ services/          // API logic
 ├─ store/             // Redux/Zustand
 ├─ utils/             // helpers
 ├─ constants/


📌 Rule

Pages handle data, components handle UI

2️⃣ State Management (CRITICAL QUESTION)
🎯 Decision Tree


| State Type              | Where to Store  |
| ----------------------- | --------------- |
| Local UI (modal, input) | useState        |
| Shared UI state         | Context         |
| Server data             | React Query     |
| Global app state        | Redux / Zustand |
| Form state              | React Hook Form |


📌 Interview Line

“I separate server state from client state.”

3️⃣ Data Fetching System
✅ Best Practice (Modern React)
React Query / TanStack Query


Why?

Caching

Deduplication

Background refetch

Retry logic

📌 Avoid

Fetching data directly in components with useEffect for large apps

4️⃣ Performance Design
🔥 Key Optimizations


| Problem             | Solution                      |
| ------------------- | ----------------------------- |
| Re-renders          | React.memo                    |
| Function recreation | useCallback                   |
| Heavy calculation   | useMemo                       |
| Large bundle        | React.lazy                    |
| Long lists          | Virtualization (react-window) |



5️⃣ Routing System
React Router

<Route
  path="/dashboard"
  element={
    <Suspense fallback={<Loader />}>
      <Dashboard />
    </Suspense>
  }
/>


📌 Lazy load per route

6️⃣ Authentication System (COMMON QUESTION)
🔐 Design
Login
 ↓
JWT stored in HttpOnly Cookie
 ↓
Auth Context
 ↓
Protected Routes

<PrivateRoute>
  <Dashboard />
</PrivateRoute>


📌 Never store JWT in localStorage (security)

7️⃣ Error Handling
Global Error Boundary
<ErrorBoundary>
  <App />
</ErrorBoundary>

API Errors

Central interceptor (Axios)

Toast notifications

8️⃣ Scalable Folder Structure
Feature-based (Best)
/features
 ├─ auth
 │   ├─ components
 │   ├─ hooks
 │   ├─ services
 │   └─ slice.js
 ├─ dashboard


📌 Scales better than type-based

9️⃣ React System Design Example (INTERVIEW FAVORITE)
🎯 Design: Dashboard App

Requirements

Auth

Charts

Real-time updates

Large data tables

Decisions

React Query for data

Redux for auth + UI

React.memo + virtualization

Lazy load charts

WebSocket for real-time

📌 One-liner

“Charts are lazy-loaded because they’re heavy and not needed immediately.”

🔥 Interview Traps & Smart Answers
❓ Why not Context for everything?

👉 Causes unnecessary re-renders

❓ Redux vs React Query?

👉 Redux = client state
👉 React Query = server state

❓ How do you handle large lists?

👉 Virtualization

🧠 FINAL INTERVIEW SUMMARY

“I design React apps by separating concerns: UI, state, server data, and performance optimizations, while keeping the architecture scalable.”