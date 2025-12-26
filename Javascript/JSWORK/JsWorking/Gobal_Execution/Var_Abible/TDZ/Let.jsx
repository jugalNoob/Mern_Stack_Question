Key Takeaway for your Interview
If an interviewer asks: "Does let hoist?" The high-level answer is Yes,
 but the technical answer is: "Yes, but it is not initialized. It remains
  in the Temporal Dead Zone from the start of the block until the code
   reaches its declaration."


console.log(❌ Case 2: let Hoisting (TDZ ERROR)
Code
console.log(x);
let x = 10;

_________________________________________________________
      |                GLOBAL EXECUTION CONTEXT                 |
      |_________________________________________________________|
      |             |                                           |
      |   PHASE 1   |    MEMORY COMPONENT (Script Scope)        |
      |   (Memory)  |                                           |
      |             |    x: <uninitialized>  🚩 (TDZ)           |
      |             |       ^--- (NOT undefined!)               |
      |_____________|___________________________________________|
      |             |                                           |
      |   PHASE 2   |    CODE COMPONENT (Execution)             |
      |   (Code)    |                                           |
      |             | 1. console.log(x)                         |
      |             |    💥 ERROR: ReferenceError               |
      |             |                                           |
      |             | 2. let x = 10; (Unreachable code)         |
      |_____________|___________________________________________|



      :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      let x;
      console.console.log(x);
      

      //#endregion
      _________________________________________________________
|                GLOBAL EXECUTION CONTEXT                |
|________________________________________________________|
|             |                                          |
|   PHASE 1   |    MEMORY COMPONENT (Script Scope)       |
|   (Memory)  |                                          |
|             |    x: <uninitialized>  🚩 (In TDZ)       |
|_____________|__________________________________________|
|             |                                          |
|   PHASE 2   |    CODE COMPONENT (Execution)            |
|   (Code)    |                                          |
|             | 1. let x;                                |
|             |    (TDZ Ends! x is now 'undefined')      |
|             |                                          |
|             | 2. console.log(x)                        |
|             |    ✅ Output: undefined                  |
|_____________|__________________________________________|



:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let x;
console.log(x);
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

GLOBAL EXECUTION CONTEXT
_________________________________________________________
|                |                                      |
|   MEMORY PHASE |  x: <uninitialized> 🚩 (TDZ)        |
|   (Creation)   |                                      |
|________________|______________________________________|
|                |                                      |
|   CODE PHASE   | 1. let x;                            |
|   (Execution)  |    x = undefined                     |
|                | 2. console.log(x)                    |
|                |    ✅ Output: undefined              |
|________________|______________________________________|

STACK:
x → undefined





🧠 Memory Phase
+-------------------------------+
|        Memory Phase           |
+-------------------------------+
|  x → <uninitialized> (TDZ)    |
+-------------------------------+

▶️ Code Phase
Line 1: console.log(x)
        ❌ ReferenceError


⛔ Execution stops
⛔ let x = 10 never runs

☠️ Temporal Dead Zone (TDZ)
TDZ Timeline
┌──────────────┬───────────────────────┬─────────────┐
| Scope Start  |   TDZ (illegal access) | let x = 10  |
└──────────────┴───────────────────────┴─────────────┘


Accessing x here ❌ → ReferenceError

🆚 var vs let (ASCII Table)
+---------------------------+--------+--------+
| Feature                   |  var   |  let   |
+---------------------------+--------+--------+
| Hoisted                   |  YES   |  YES   |
| Initialized in memory     |  YES   |  NO    |
| Default value             | undefined | ❌  |
| Temporal Dead Zone (TDZ)  |  NO    |  YES   |
| Access before declaration |  OK    | ERROR  |
+---------------------------+--------+--------+

🏆 Interview One-Line (ASCII Friendly)
var  → hoisted + initialized → undefined
let  → hoisted + uninitialized → TDZ error)

::::::::::::::::::::::::::::::::::::::::::------------------>></uninitialized>


Code Scanning
     ↓
Memory Phase
     |
     | x → <uninitialized> (TDZ)
     |
Execution Phase
     |
     | let x;        ← TDZ ENDS
     | x → undefined
     |
     | console.log(x)
     | prints undefined


     let x;
console.log(x)

