[Initial Render]
       |
       v
  useState -> value stored in state -> changing it triggers re-render
       |
       v
  useRef  -> value stored in .current -> changing it does NOT trigger re-render
       |
       v
  useEffect -> runs after render -> can read/update state/ref
