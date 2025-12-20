CODE PHASE (Input)                     MEMORY PHASE (Execution Context)
+----------------------------+       +---------------------------------------------------+
| let obj = {                |       |       STACK (Call Stack)         HEAP (Objects)   |
|   name: 'Jugal Sharma',    |       |  +-----------------------+     +----------------+ |
|   roll: 45                 |       |  | VARIABLE |  VALUE     |     |  Address #123  | |
| };                         |       |  |----------|------------|     |----------------| |
|                            | ----> |  |   obj    |   [#123] --|---->| { name: 'JS',  | |
| let obj1 = obj;            |       |  |   obj1   |   [#123] --|---->|   roll: 45 }   | |
|                            |       |  +-----------------------+     +----------------+ |
| console.log(obj1);         |       |                                                   |
+----------------------------+       +---------------------------------------------------+
             |                                         |
             V                                         V
      [ CONSOLE OUTPUT ]                      [ KEY TAKEAWAY ]
      { name: 'Jugal Sharma', roll: 45 }      Both variables point to the same 
      { name: 'Jugal Sharma', roll: 45 }      memory address (#123). Modifying 
                                              one will change the other.
0000000000000000000000000000000000000000000000000000000000:::::::::::::::::::



                                              [ EXECUTION CONTEXT ]                  [ MEMORY MANAGEMENT ]
  Logical Flow                           Physical Storage
  =========================              =========================================
                                         
  PHASE 1: Global Execution               PHASE 2: Memory Allocation
  (Code Interpretation)                  (Stack vs Heap)
  
  line 1: let obj = {...}   --------+    +---------------------------------------+
                                    |    | STACK (References)   HEAP (Data)      |
  line 6: let obj1 = obj    ------+ |    |                                       |
                                  | |    | [ Identifier ]       [ Object ]       |
  line 8: console.log(...)        | +--> | obj: #001 --------> {                 |
                                  +----> | obj1:#001           name: 'Jugal',    |
                                         |                     roll: 45          |
                                         |                     }                 |
                                         +---------------------------------------+



                                         :::::::::::::::::::::::::::::::::::::::::::::::::::::



                                                           Heap Memory
              +-----------------+
   #123  →    | {               |
              |   name: "Jugal Sharma" |
              |   roll: 45      |
              | }               |
              +-----------------+

Call Stack (Execution Context)

Before assignment:
┌──────────┐
│ obj      │ → reference #123
└──────────┘

After let obj1 = obj;
┌──────────┐
│ obj      │ → reference #123   ←┐
└──────────┘                     │
┌──────────┐                     │ same object!
│ obj1     │ → reference #123   ←┘
└──────────┘