| Feature        | Callback       | Promise       | async/await   |
| -------------- | -------------- | ------------- | ------------- |
| Style          | Function-based | Object-based  | Syntax sugar  |
| Readability    | ❌ Poor         | 👍 Better     | ✅ Best        |
| Error handling | ❌ Scattered    | 👍 `.catch()` | ✅ `try/catch` |
| Composition    | ❌ Hard         | 👍 `.then()`  | ✅ Easy        |
| Control        | ❌ Inverted     | ✅ Controlled  | ✅ Controlled  |
| Debugging      | ❌ Hard         | 😐 Medium     | ✅ Easy        |


Sure 🙂 simple definitions 👇

Callback:
A function passed to another function and called later when work is done.

Promise:
An object that represents a value that will be available in the future.

async / await:
A cleaner way to wait for a Promise that looks like synchronous code.


One-line difference (interview perfect)

Callback tells “what to do later”, Promise represents “future result”, await waits for that result.