STACK / EXECUTION CONTEXT                HEAP MEMORY (The Storage)
    _______________________________          ________________________________
   |        GLOBAL CONTEXT         |        |                                |
   |===============================|        |   #0x001 (Function Object)     |
   |  Memory Phase |  Code Phase   |        |--------------------------------|
   |---------------|---------------|        |  [[Code]]: "let x=10..."       | <---.
   | Name: #0x001  |  Name() ----  |--------|  [[Scope]]: Global             |     |
   |               |               |        |  [[Type]]: Function            |     |
   |_______________|_______________|        |________________________________|     |
                                                                                   |
                                                                                   |
    _______________________________          ________________________________      |
   |   FUNCTION CONTEXT (Test)     |        |                                |     |
   |===============================|        |   #0x002 (Variable Record)     |     |
   |  Memory Phase |  Code Phase   |        |--------------------------------|     |
   |---------------|---------------|        |  x: 10                         |     |
   | x: 10         | console.log(x)| <------|________________________________|_____|
   |_______________|_______________|




Why this is an improvement:

1::The Pointer Reference: I added #0x001. This
 represents the actual memory address. In the Memory Phase, JS doesn't store the code; it only stores this tiny address.

2::: The "Creation" vs "Execution":

Memory Phase: The engine sees function Test
 and immediately allocates space in the Heap.

Code Phase: When Test() is actually executed,
 it doesn't "re-read" your script; it just follows the pointer to the Heap.

3::Scope and Closures: Notice the [[Scope]] 
property in the Heap. This is the "secret" link. If Test were a closure, that Scope property would point back to the memory of its parent, keeping it alive.

Quick Breakdown of the Elements
1::Stack: Fast, organized, but small. It 
holds the "Who is running now?" information.

2::Heap: Large, messy, but flexible. It holds the 
"What is the data?" information.

3::Garbage Collector (GC): Periodically walks through
 the Memory Phase column. If it sees a Heap Object (like #0x001) that no one in the Memory Phase is pointing to, it deletes it.