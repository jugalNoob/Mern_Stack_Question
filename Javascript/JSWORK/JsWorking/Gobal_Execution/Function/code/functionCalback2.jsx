To understand who runs first and how the memory links everything together, let’s break down your code execution into 4 specific phases.

The Setup
JavaScript

function Test(callback) {    // 1. HOF Definition
  callback();                // 3. Execution of Callback
  console.log('Done');
}

function test1() {           // 2. Callback Definition
  console.log('Download');
}

Test(test1);                 // 4. The Trigger
Step 1: The "Registration" (Memory Face)
Before any code runs, the JS Engine scans the script. It creates "Blueprints" in the Heap and "Links" in the Global Context.

Heap: Creates a Function Object for Test and a Function Object for test1.

Global Memory: Stores Test (pointing to Heap) and test1 (pointing to Heap).

Status: Nothing has been printed to the console yet.

Step 2: The "Trigger" (HOF Call)
The engine reaches the line Test(test1).

A new Execution Context for Test is pushed onto the Call Stack.

The Hand-off: The address of test1 is passed into the parameter named callback.

Inside Test: The engine starts reading the code inside Test.

Step 3: The "Call Back" (Callback Execution)
Inside Test, the engine sees the line callback().

The engine looks at its local Memory Face and asks: "What is callback?"

Memory answers: "It is a pointer to the function test1 in the Heap."

The Jump: The engine pauses Test and pushes a new context for test1 onto the stack.

Result: console.log('Download') runs. This is the first output.

Step 4: The "Cleanup" (Completion)
test1 finishes. Its context is Popped (deleted) from the Call Stack.

The engine goes back to Test right where it left off.

It runs the next line: console.log('Done'). This is the second output.

Test finishes and is Popped from the stack.

🛠️ Improved ASCII Flow Design
This design shows the "In-and-Out" movement of the Call Stack:

Plaintext

CALL STACK PROGRESSION:

Phase 1: Startup     Phase 2: HOF Runs    Phase 3: Callback    Phase 4: Finish
 _______________      _______________      _______________      _______________
|               |    |               |    |   test1()     |    |               |
|               |    |    Test()     |    |    Test()     |    |    Test()     |
|    Global     |    |    Global     |    |    Global     |    |    Global     |
|_______________|    |_______________|    |_______________|    |_______________|
       |                    |                    |                    |
   (Idle)             (Test Starts)        (test1 Starts)       (test1 Ends)
                                           "Download"           "Done"
Why does this matter for your "Memory Leak" question?
If Test was an Asynchronous function (like a network request), the Test() context would disappear from the stack, but the callback would stay "hanging" in a special place called the Web API container. If that callback is a Closure that holds onto a large variable, the variable stays in the Heap forever because the Web API is still holding a pointer to it!

Would you like me to show the ASCII design for an Asynchronous callback (where the "Done" prints before the "Download")?