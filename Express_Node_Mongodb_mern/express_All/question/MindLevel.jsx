🟡 Intermediate Express.js Questions — Simple Answers


16. What is error-handling middleware?

Middleware that catches errors and sends a proper response.
It has a special signature with 4 parameters.

17. Why does error middleware have 4 parameters?

Because Express identifies it as error middleware only when it has:

(err, req, res, next)

18. How do you structure large Express applications?

By separating code into folders like:

Routes

Controllers

Services

Middleware

Config

Keeps code clean and maintainable.

19. Explain router-level middleware with example.

Middleware applied only to a specific router, not the whole app.

const router = express.Router();

router.use((req, res, next) => {
  console.log("Router Middleware");
  next();
});

20. What is CORS? How do you enable it?

CORS controls whether one domain can request data from another.

import cors from "cors";
app.use(cors());

21. What are third-party middleware?

Middleware installed as an external package.
Examples:

morgan → logging

cors → allow cross-domain requests

helmet → security headers

22. How do you implement authentication middleware?
function auth(req, res, next) {
  if (!req.headers.token) return res.status(401).send("Unauthorized");
  next();
}
app.use(auth);

23. What is express.static() and how it works?

Serves static files like images, CSS, JS directly from a folder
without writing a route for each file.

24. What is next() and when to use it?

next() moves request control to the next middleware/handler.

Use it when middleware has finished its job.

25. What is chaining in routes? (app.route())

Allows multiple HTTP methods on the same route:

app.route("/user")
  .get(...)
  .post(...);

26. Difference between synchronous vs asynchronous middleware?

Sync middleware → runs instantly; errors must be thrown

Async middleware → uses async/await; errors go to error middleware using next(err)

27. What is res.locals?

A temporary storage object to pass data from middleware to views or next handlers.

28. What is a templating engine (EJS, Pug)?

Tools that let you generate dynamic HTML pages from server data.

29. How do you set headers in Express?
res.set("Content-Type", "application/json");


If you want, I’ll provide:

🟥 Advanced level Express.js questions

short interview-style answers

diagrams and small code snippets

Would you like me to send the Advanced section?

🟡 Intermediate Level Questions
✔ 16. What is error-handling middleware?
✔ 17. Why does error middleware have 4 parameters?
✔ 18. How do you structure large Express applications?
✔ 19. Explain router-level middleware with example.
✔ 20. What is CORS? How do you enable it in Express?
✔ 21. What are third-party middleware? Example with morgan, cors, helmet.
✔ 22. How do you implement authentication middleware?
✔ 23. What is express.static() and how it works internally?
✔ 24. What is next() and when to use it?
✔ 25. What is chaining in Express routes? (app.route())
✔ 26. Difference between synchronous vs asynchronous middleware?
✔ 27. What is res.locals? Why is it used?
✔ 28. What is templating engine in Express (EJS, Pug)?
✔ 29. How do you set headers in Express (res.set)?