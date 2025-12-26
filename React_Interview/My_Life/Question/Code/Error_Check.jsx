| Type of Error           | Detection             | Prevention / Fix                                |
| ----------------------- | --------------------- | ----------------------------------------------- |
| Syntax / Compile        | Dev server, compiler  | ESLint, Prettier, TypeScript                    |
| Runtime                 | Console logs          | Defensive coding, optional chaining             |
| Logical / State         | Manual testing        | Unit tests, proper hooks usage                  |
| Hook rules              | React warnings        | Top-level hook calls, correct dependency arrays |
| Performance / Re-render | DevTools profiler     | memo, useCallback, virtualization               |
| Network/API             | Console / network tab | Try/catch, error state, fallback UI             |
| Error Boundaries        | Custom component      | Wrap risky UI with ErrorBoundary                |
| Memory leaks            | DevTools, warnings    | Cleanup in useEffect, abort async calls         |
