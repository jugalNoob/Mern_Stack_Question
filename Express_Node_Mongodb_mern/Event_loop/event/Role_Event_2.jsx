To explain how the Event Loop works, think of it as a loop that
 keeps spinning as long as there is work to do. It visits different
  "stations" (phases) in a specific order.

Here is the step-by-step breakdown with code to show which phase handles what.

1. TIMERS Phase
This phase executes callbacks scheduled by setTimeout() and setInterval().

The Logic: Node checks if the timer's threshold has been reached. If yes, it runs the callback.

JavaScript

setTimeout(() => {
  console.log("1. Timer Phase: 100ms passed");
}, 100);
2. PENDING I/O Phase
This phase executes callbacks for some system operations, such as certain types of TCP errors.

The Logic: If a network socket receives an ECONNREFUSED error, the report is handled here.

3. IDLE, PREPARE Phase
The Logic: Used only internally by Node.js for housekeeping. 
You won't write code for this.

4. POLL Phase
This is where the magic happens. It retrieves new I/O events
 (reading files, network requests).

The Logic: If the loop enters the Poll phase and there are no 
timers, it will wait (block) here for I/O events.

JavaScript

const fs = require('fs');

fs.readFile(__filename, () => {
  console.log("4. Poll Phase: File read complete");
});
5. CHECK Phase
This phase allows you to execute code immediately after the Poll phase finishes.

The Logic: Specifically for setImmediate(). If the Poll phase becomes idle, it moves straight to Check.

JavaScript

setImmediate(() => {
  console.log("5. Check Phase: Running immediately after I/O");
});
6. CLOSE Phase
Handles the cleanup of resources.

The Logic: Executed when a socket or handle is closed abruptly.

JavaScript

const socket = new (require('net').Socket)();
socket.on('close', () => console.log("6. Close Phase: Socket closed"));
socket.destroy();
Putting it all together: The Execution Order
If you run this script, notice how the "Synchronous" code finishes first, then the Event Loop starts its rounds.

JavaScript

const fs = require('fs');

console.log("--- START (Synchronous) ---");

setTimeout(() => console.log("TIMER (Phase 1)"), 0);

fs.readFile(__filename, () => {
    console.log("I/O POLL (Phase 4)");
    
    // Inside a Poll callback, setImmediate ALWAYS runs before setTimeout
    setImmediate(() => console.log("CHECK (Phase 5) inside Poll"));
    setTimeout(() => console.log("TIMER (Phase 1) inside Poll"), 0);
});

setImmediate(() => console.log("CHECK (Phase 5)"));

console.log("--- END (Synchronous) ---");
Why "Promises" weren't in your list
You mentioned "promise is not used because event loop uses I/O." To clarify:

I/O and Timers are handled by the Event Loop phases above.

Promises (Microtasks) are handled BETWEEN every single step above. As soon as one phase finishes, Node.js pauses the loop to clear all pending Promises before moving to the next phase.