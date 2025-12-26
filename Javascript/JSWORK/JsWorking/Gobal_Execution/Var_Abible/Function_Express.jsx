Exactly! Let me explain carefully step by step.

1️⃣ MEMORY PHASE (Creation / Hoisting)
var test = function testx() {
  console.log('hello');
};


var test is hoisted → JS engine creates a slot in the global execution context

Initial value: undefined

Function expression (function testx(){…}) is not yet created

STACK (Global)
--------------------------
test → undefined


Heap: nothing yet for this function

2️⃣ CODE PHASE (Execution Phase)

JS executes the line:

test = function testx() { console.log('hello'); };


A function object is created in the heap:

HEAP
-----------------------------
0xF003 → ƒ testx() { console.log('hello') }


test in the stack now points to the function object:

STACK (Global)
--------------------------
test → 0xF003


✅ Now calling test() works:

test(); // prints 'hello'


The code of the function is already stored in heap under the function object.

3️⃣ Key Points

Before code phase: test is undefined → calling test() fails

After code phase: test points to heap object → calling test() works

Function object in heap contains:

{
  Type: Function,
  Name: testx,
  [[Code]]: console.log('hello'),
  [[Scope]]: Global Lexical Environment
}


If you want, I can draw an ASCII diagram showing MEMORY PHASE → CODE PHASE → CALL for var test = function testx(){…} exactly like your heap/stack style.

Do you want me to do that?



::::::::::::::::::::::::::: ---------------------------------->>


2️⃣ Function Expression (test)
var test = function testx() {
    console.log('hello');
};

test(); // ✅ Works, but only after assignment


Memory Phase

STACK (Global)
--------------------------
test ──▶ undefined  // Only var hoisted

HEAP
--------------------------
(empty for the function yet)


Code Phase

test = 0xF002  // Function object created in heap

STACK (Global)
--------------------------
test ──▶ 0xF002

HEAP
--------------------------
0xF002 → Function Object {
            [[Code]]: console.log('hello')
            [[Scope]]: Global Lexical Env
            Name: "testx"
        }


Call Phase

Call: test()
--------------------------
STACK
test() frame ──▶ executes [[Code]] in HEAP

Output:
hello


:::::::::::::::::::::::::::::::::::::::::::::::::::::::


🌐 GLOBAL EXECUTION CONTEXT (The Manager)
Plaintext

__________________________________________________________________________
|                                                                        |
|  MEMORY PHASE (Global)             |  CODE PHASE (Global)              |
|------------------------------------|-----------------------------------|
|  test: undefined                   |  1. test = <ref 0xF001>           |
|                                    |  2. test()  ───┐                  |
|  (Note: testx is NOT here!)        |                │                  |
|____________________________________|________________│__________________|
                                                      │
                                                      ▼
🧠 THE HEAP (The Storage)
Plaintext

  Address: 0xF001
  +------------------------------------------------------------+
  |  FUNCTION OBJECT (testx)                                   |
  +------------------------------------------------------------+
  |  [[Name]]: "testx"  <── Internal name for recursion/debug  |
  |  [[Scope]]: Global                                         |
  |  [[Code]]: { console.log('hello') }                        |
  +------------------------------------------------------------+