| Hook                  | Purpose             | Common Use Case               |
| --------------------- | ------------------- | ----------------------------- |
| `useState`            | Component state     | Count, toggle, input          |
| `useEffect`           | Side-effects        | API calls, timers             |
| `useRef`              | Persist value / DOM | Focus input, store timers     |
| `useContext`          | Global state        | Theme, auth                   |
| `useMemo`             | Memoize value       | Expensive computation         |
| `useCallback`         | Memoize function    | Prevent child re-render       |
| `useReducer`          | Complex state       | Forms, counters               |
| `useLayoutEffect`     | DOM sync            | Measure size, scroll          |
| `useImperativeHandle` | Expose methods      | Custom ref API                |
| `useDebugValue`       | Debug info          | Custom hooks                  |
| `useDeferredValue`    | Concurrent updates  | Large list filtering          |
| `useTransition`       | Non-urgent updates  | Smooth UI during state change |
