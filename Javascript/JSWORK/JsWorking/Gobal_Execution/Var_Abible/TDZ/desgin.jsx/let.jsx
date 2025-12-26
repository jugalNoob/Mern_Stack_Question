console.log(x);
let x = 10;

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


