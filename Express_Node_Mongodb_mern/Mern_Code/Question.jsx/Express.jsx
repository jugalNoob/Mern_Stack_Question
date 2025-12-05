📝 1-Line Interview Answer

App-level middleware runs globally for all routes using app.use(), 
while router-level middleware applies only to 
routes inside a specific router using router.use().



⚡ One-line Answers (Perfect for Interview)
Q: What is Param?

“Param is a dynamic part of the URL path used to uniquely identify a 
resource. Accessed using req.params.”

Q: What is Query?

“Query is optional key-value data added after '?' for filtering and
 searching. Accessed using req.query.”




 ✅ Types of Middleware in Express

Express has 5 types of middleware:

| Middleware Type          | Example               | Description                   |
| ------------------------ | --------------------- | ----------------------------- |
| **1. Application-level** | `app.use(...)`        | Runs for the whole app        |
| **2. Router-level**      | `router.use(...)`     | Runs only for specific routes |
| **3. Built-in**          | `express.json()`      | Provided by Express           |
| **4. Third-party**       | `cors()`, `helmet()`  | Installed via npm             |
| **5. Custom middleware** | Your `Click` function | Created by you                |



3️⃣ What happens if you don’t call next() in middleware?
✅ Interview Answer

“The request gets stuck and never reaches the route handler.”

Q why 4 error Handlline ?

“Error-handling middleware in Express has 4 parameters (err, req, res, next). 
Express uses the first err parameter to identify it as an error handler and
 executes it only when a route or middleware passes an error.”


 ✅ Why 4 parameters (err, req, res, next)?

In Express:

Normal middleware signature:

(req, res, next) => { ... }


Error-handling middleware signature:

(err, req, res, next) => { ... }


Express distinguishes error-handling middleware by the number of parameters.
If a function has 4 parameters, Express knows: “This is an error handler 
— call it only if next(err) was used or an error was thrown.”




Q :: Why use Router in another file?

Keep your server.js clean and manageable.

Group related routes together (e.g., user routes, product routes).

Apply router-level middleware if needed.

Easy to maintain, scale, and test.


Q  Router Interview Explanation 

“We use Router in a separate file to define multiple HTTP methods 
(GET, POST, PUT, DELETE) for a group of related routes. This keeps 
the main app organized, allows router-level middleware, and improves
maintainability.”