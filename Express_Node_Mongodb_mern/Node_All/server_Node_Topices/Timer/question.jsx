💡 Top 10 Node.js Interview Questions (Concept Only)
🔹 Q1: What is the difference between setTimeout() and setImmediate()?

setTimeout() executes after a given delay (Timers Phase).

setImmediate() executes after the current I/O events (Check Phase).
👉 So, setImmediate() runs sooner after I/O operations.

🔹 Q2: What are Immediate and Timeout classes in Node.js?

They are objects returned by setImmediate() and setTimeout() respectively, providing methods to control timers (like ref, unref, refresh, close).

🔹 Q3: What does ref() do?

ref() ensures that the timer keeps the event loop alive — Node.js won’t exit until this timer executes.

🔹 Q4: What does unref() do?

unref() tells Node.js that this timer should not keep the event loop alive — if no other tasks remain, Node.js can exit even if timer not finished.

🔹 Q5: What is the difference between hasRef() and ref()?

hasRef() → Checks if the timer is keeping the event loop active.

ref() → Marks the timer to keep the event loop active.

🔹 Q6: What is timeout.refresh() used for?

It resets the countdown of an existing timeout — useful for session keep-alive, user activity timers, or retry logic without creating new timers.

🔹 Q7: What is [Symbol.dispose]() in Node.js timers?

A modern ECMAScript feature (ES2023) that provides automatic cleanup of resources (like timers).
When used, it safely cancels and disposes the timer object.

🔹 Q8: What is [Symbol.toPrimitive]() used for in a Timeout object?

It allows a Timeout object to be converted into a primitive (string or number) for logging or introspection.
Used mostly for debugging or custom utility frameworks.

🔹 Q9: What’s the internal difference between Immediate and Timeout in the Event Loop?

Timeout → Runs during Timers Phase (after specified delay).

Immediate → Runs during Check Phase (right after I/O).
✅ So, Immediate is closer to I/O completion.

🔹 Q10: Why are ref() and unref() important for performance?

They allow fine control over Node.js shutdown.
For example, you can:

Keep essential timers running (ref()).

Let background timers stop automatically when no longer needed (unref()).
This optimizes CPU and memory use for long-running Node.js apps.

🧾 Mini Summary Table (Quick Revision)



| Feature          | Immediate                                            | Timeout                                                                                                |
| ---------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Created By       | `setImmediate()`                                     | `setTimeout()` / `setInterval()`                                                                       |
| Execution        | After current I/O                                    | After delay                                                                                            |
| Event Loop Phase | Check Phase                                          | Timers Phase                                                                                           |
| Controls         | I/O-based tasks                                      | Time-based tasks                                                                                       |
| Common Methods   | `hasRef()`, `ref()`, `unref()`, `[Symbol.dispose]()` | `close()`, `refresh()`, `ref()`, `unref()`, `hasRef()`, `[Symbol.toPrimitive]()`, `[Symbol.dispose]()` |



