
🏆 Pro-Level Interview Question
"If I assign baz = foo, do I have two functions in memory?"

Answer: No. You have two variables (foo and baz) on the Stack, but they both 
contain the same address (0xF001). 
They both point to the same single object in the Heap.


const Test=()=>{
    console.log('jugal')


}

Test()




✅ Correct forms
✅ Arrow function (function expression)
const Test = () => {
  console.log('jugal');
};

Test();

✅ Normal function declaration
function Test() {
  console.log('jugal');
}

Test();

2️⃣ IMPORTANT QUESTION YOU ASKED

“function expression same work in execution?”

Short answer:

❌ NO — NOT the same as function declaration

✔️ They execute the same when called
❌ They do NOT behave the same in memory phase (hoisting)

3️⃣ MEMORY PHASE vs CODE PHASE (ARROW FUNCTION)
Code
const Test = () => {
  console.log('jugal');
};

Test();

🧠 MEMORY PHASE (Creation Phase)
Global Lexical Environment
--------------------------------
Test → <uninitialized> (TDZ)


⚠️ Because:

Test is declared with const

It exists in Temporal Dead Zone

Function object is NOT created yet

▶️ CODE PHASE (Execution Phase)
Step 1: Evaluate arrow function
() => { console.log('jugal') }


✔️ Function object created in Heap

Heap
0xF002 → Arrow Function Object

Step 2: Assign reference
Test → 0xF002

Step 3: Call function
Test()


✔️ Executes successfully

4️⃣ WHY THIS FAILS (VERY IMPORTANT)
Test();   // ❌ ReferenceError

const Test = () => {
  console.log('jugal');
};


Because:

Test is in TDZ

Function object doesn’t exist yet

5️⃣ COMPARE WITH FUNCTION DECLARATION
Code
Test();

function Test() {
  console.log('jugal');
}

MEMORY PHASE
Test → 0xF001 (Function Object already created)


✔️ Fully hoisted
✔️ Callable before definition

6️⃣ MEMORY DIAGRAM (INTERVIEW READY)
Function Declaration
Memory Phase
Test ──▶ 0xF001 → ƒ() { console.log() }

Arrow Function (const)
Memory Phase
Test → TDZ

Code Phase
Test ──▶ 0xF002 → Arrow ƒ() { console.log() }

7️⃣ EXECUTION BEHAVIOR (COMMON TRUTH)

Once created and assigned:

Test();


✔️ Both:

Arrow function

Normal function

👉 execute the same way

Difference is:

Hoisting

this

arguments

constructor ability

8️⃣ FINAL INTERVIEW ONE-LINER 🏆

Function declarations are hoisted with their full definition, while function expressions and arrow functions are created during execution and assigned to variables.