2. Event Loop
The Event Loop is the heart of Node.js’s asynchronous, non-blocking architecture. It continuously checks for pending tasks and processes them in a specific order. The diagram shows the Event Loop with a "repeat" icon, indicating its cyclical nature. The Event Loop processes tasks in the following phases (as depicted in the diagram):

Expired Timer Callbacks (setTimeout, setInterval):

The diagram lists setTimeout and setInterval as examples of timers. These functions schedule
 callbacks to be executed after a specified delay or at regular intervals.

The Expired Timer Callbacks phase processes callbacks from timers whose delay has
 elapsed. For example, a setTimeout callback scheduled for 100ms will be executed when the timer expires.



I/O Polling - FS:

This phase handles I/O-related callbacks, such as those from file system operations 
(fs module). Node.js uses non-blocking I/O, meaning file operations like reading or
 writing files are offloaded to the operating system, and their callbacks are processed 
 here when the I/O is complete.




SetImmediate Callbacks:

The setImmediate function schedules callbacks to be executed in the next 
iteration of the Event Loop, after the I/O polling phase. This is useful for
 prioritizing certain tasks over others in the Event Loop.



Close Callbacks:

This phase handles callbacks associated with closing resources, such as
 socket.on('close') or server.close(). The diagram mentions Socket.io and server as
  examples, indicating scenarios where connections or resources are closed, triggering cleanup callbacks.