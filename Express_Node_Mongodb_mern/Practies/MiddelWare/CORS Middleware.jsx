🔥 12. CORS Middleware

Allow cross-origin access.

const cors = require("cors");
app.use(cors());


| Middleware Type   | Scope               | Example                     |
| ----------------- | ------------------- | --------------------------- |
| Application-level | Entire app          | `app.use(...)`              |
| Router-level      | Specific router     | `router.use(...)`           |
| Built-in          | Provided by Express | `express.json()`            |
| Third-party       | Installed via npm   | `morgan`, `cors`            |
| Error-handling    | 4 parameters        | `app.use((err,...) => ...)` |
| Request-level     | Specific route      | `app.get("/x", mw)`         |
| Custom            | Written by user     | Logger middleware           |
| 404-handler       | Not found routes    | Last middleware             |
| Async             | For async functions | asyncHandler                |
