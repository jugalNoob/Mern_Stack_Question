Want Deep Part 3?

Covering:
🔥 How JS Engine converts your function to bytecode
🔥 Ignition Interpreter vs TurboFan Compiler
🔥 Function inlining
🔥 Hot-path detection
🔥 Garbage collection rules for functions
🔥 Memory leaks via closures + fixes
🔥 Event loop phases in extreme detail
🔥 How async functions are rewritten into state machines


🚀 PART 3 — THE TRUE INTERNALS OF JAVASCRIPT FUNCTIONS
1️⃣ How V8 Executes Your Functions (Real Pipeline)

V8 uses 2 main components:

✔ Ignition (Interpreter → creates bytecode)
✔ TurboFan (Optimizing JIT compiler → creates machine code)

When you write:

function add(a, b) {
  return a + b;
}


V8 internally does:

2️⃣ STEP 1 — Parsing & AST (Abstract Syntax Tree)

Your code becomes a tree:

FunctionDeclaration(add)
 ├── Parameters (a, b)
 └── Block
      └── Return
           └── BinaryOperation(+)
                ├── Identifier(a)
                └── Identifier(b)

3️⃣ STEP 2 — Scopes + Environment Setup

V8 builds:

Global Scope

Function Scope

Lexical Environment

Variable Environment

Closure Environment (if needed)

4️⃣ STEP 3 — Ignition Generates Bytecode

Ignition translates the function into bytecode instructions, similar to assembly for the JS engine.

Example bytecode (simplified):

LoadParam a
LoadParam b
Add
Return


Bytecode is stored in memory.
This is what runs before optimization.

5️⃣ STEP 4 — Baseline Execution (Bytecode)

The bytecode runs in a virtual machine.
V8 monitors your function during this time.

It checks:

Types passed

Shapes of objects

Hidden classes

Number of calls

Branch patterns

This monitoring leads to…

6️⃣ STEP 5 — Hot Function Detection (Optimization Trigger)

If a function is:

called many times

used in loops

receives consistent types

returns consistent structure

V8 marks it as HOT (optimized candidate).

Example:

for(let i=0;i<1_000_000;i++){
  add(10, 20);
}


V8 thinks:

“This function is called a lot with integers.
Let’s optimize it!”

7️⃣ STEP 6 — TurboFan Converts Bytecode → Machine Code

TurboFan:

Takes bytecode

Builds an SSA graph (Static Single Assignment)

Performs optimizations:

inlining

constant folding

dead code elimination

loop unrolling

hidden class specialization

register allocation

Finally, TurboFan outputs optimized native machine code.

Now your JS function is running as fast as C++ code.

8️⃣ STEP 7 — Inline Caching Magic (IC)

Inline caching makes dynamic JS fast.

Example:

obj.x


First time:

V8 looks up property the slow way

Caches the property location

Next time:

Direct access → no lookup

This drastically accelerates repeated function calls.

9️⃣ But what if types change? → De-optimization

Example:

function add(a,b){ return a + b; }

add(10, 20);    // numbers → optimized
add("a", "b");  // strings → type mismatch → deopt


V8 now:

Throws away TurboFan machine code

Falls back to bytecode execution

Resets optimization profile

🔟 Why De-optimization is Dangerous

If your code keeps changing types:

V8 optimizes → de-optimizes → optimizes → de-optimizes

Performance sucks

Example of bad code:

function get(x){
  if(x){ return "jugal"; }
  return 10;  // returns string sometimes, number sometimes
}


Return type inconsistency = slow function.

1️⃣1️⃣ Async Function Internals: State Machine Compilation

Your async function:

async function fn(){
   let data = await fetchData()
   console.log(data)
}


V8 internally rewrites it into a state machine:

state 0: call fetchData()
state 1: resume after Promise resolve
state 2: console.log(data)
state 3: return


This allows async functions to “pause”.

1️⃣2️⃣ Event Loop Phases (Deep)

Call Stack

Microtask Queue (Promise callbacks, async/await)

Macrotask Queue (setTimeout, setInterval, IO events)

Render Queue

Idle Callback Queue

Order:

Microtasks always run before ANY macrotasks


That’s why:

setTimeout(()=>console.log(1))
Promise.resolve().then(()=>console.log(2))


prints:

2
1

1️⃣3️⃣ Closure Storage & Heap Memory Rules

If a function returns another function:

function outer(){
    let x = 10;
    return function(){ return x; }
}


x is moved to heap (not stack):

Stack memory → temporary

Heap memory → persistent

Closures store:

Variables

Environment records

Internal scope references

That’s why closures never lose outer variables.

1️⃣4️⃣ How Functions Cause Memory Leaks

Bad closure pattern:

function leak(){
    let big = new Array(100000).fill("jugal");
    return () => big;   // closure keeps big forever
}


Never freed until returned function is cleaned.

1️⃣5️⃣ How Garbage Collection Clears Functions

GC checks:

Is the function still reachable?

Are closures still referenced?

Can hidden classes be reused?

Has the function stack frame ended?

If nothing references the function, it is removed.

🎉 Final Summary — What You Now Know

You now understand:

✔ How JS converts functions → AST → bytecode → optimized machine code
✔ How Ignition + TurboFan make JS super fast
✔ How functions are monitored, optimized, and de-optimized
✔ How closures store memory in heap
✔ How async/await becomes state machines
✔ Event loop execution order in deep detail
✔ How functions can leak memory
✔ Garbage collection rules for functions

This is senior engineer / JavaScript engine developer-level knowledge.


