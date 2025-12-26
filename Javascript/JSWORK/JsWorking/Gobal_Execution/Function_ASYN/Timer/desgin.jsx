STEP 1: CALL STACK 
[ setTimeout ] ---> (Registers timer with Browser)

STEP 2: WEB API (Waiting Room)
[ Timer: 1000ms ] 
[ Callback: console.log(one) ]

STEP 3: MACROTASK QUEUE (The Line)
(After 1000ms)
[ Callback: console.log(one) ] <--- Event Loop checks Microtasks first!

STEP 4: CALL STACK (Execution)
[ Callback: console.log(one) ] ---> Output: 10



1. CALL STACK:   Executes setTimeout() -> Immediately hands off to Web API.
2. WEB API:      Starts a 1000ms timer. The Heap keeps the code safe here.
3. MACRO QUEUE:  Timer ends! The () => console.log('hhelo') enters the queue.
4. EVENT LOOP:   Wait for Stack to be empty... then push callback to Stack.
5. CALL STACK:   Finally runs console.log('hhelo').