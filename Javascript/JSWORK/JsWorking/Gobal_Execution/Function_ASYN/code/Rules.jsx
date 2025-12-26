🧠 Execution Rules (Memorize These)
🔑 Rule 1

Promises & await never go to Web APIs

They go to:

→ Microtask Queue

🔑 Rule 2

Web APIs are used ONLY for external async work

Examples:

setTimeout

fetch

DOM events

Network / IO

🔑 Rule 3 (Priority)
Call Stack
→ Microtasks (ALL)
→ Macrotasks (ONE)

🏆 Interview One-Liner (Perfect)

Web APIs perform background async work like timers and network calls, while Promises and async/await always resume through the Microtask Queue, which runs before any macrotasks.