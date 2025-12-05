

🟢 Basic Express.js Questions (Simple Answers)
1. What is Express.js?

A fast and lightweight framework for building web servers 
and APIs in Node.js.

2. Why use Express instead of native Node.js HTTP module?

Because Express is easier, cleaner, and provides built-in
 features like routing and middleware.


3. What are middleware functions in Express?

Functions that run before your request 
reaches the final route handler (e.g., logging, auth, parsing).

4. What is the use of app.use()?

It adds middleware to your 
app—code that runs for every request or a specific path.

5. Difference between app.use() and app.get()?

app.use() → middleware (runs for all HTTP methods)

app.get() → handles only GET requests for a specific route

6. What is routing in Express?

Routing means defining how your server responds to different URLs and HTTP methods.

7. How do you parse JSON in Express?

Use the built-in middleware:

app.use(express.json());

8. What is express.json() and express.urlencoded()?

express.json() → parses JSON data

express.urlencoded() → parses form data from HTML forms

9. How do you serve static files in Express?

app.use(express.static("public"));

10. What is Express Router and why use it?

A mini Express app used to create routes in separate 
files to keep code clean and organized.

11. How to send a response in Express?

res.send() → send text or HTML

res.json() → send JSON

res.end() → end the response without data

12. Difference between req.params, req.query, and req.body?

Key Differences Summarized:

| Feature      | `req.params`                                 | `req.query`                                        |
| ------------ | -------------------------------------------- | -------------------------------------------------- |
| **Location** | Part of the URL path (e.g., `/users/:id`)    | After the `?` in the URL (e.g., `/search?q=value`) |
| **Purpose**  | Identify specific resources or entities      | Filter, sort, paginate, or provide optional data   |
| **Syntax**   | Defined in the route path with a colon (`:`) | Key-value pairs in the query string                |
| **Access**   | `req.params.parameterName`                   | `req.query.parameterName`                          |




req.params → URL values (/user/10)

req.query → URL query (?search=book)

req.body → Data sent in POST/PUT requests

13. How to create a simple GET and POST API in Express?

app.get("/hello", (req, res) => res.send("Hello!"));
app.post("/data", (req, res) => res.json(req.body));

14. What is nodemon and why use it?

A tool that restarts your server automatically when your code changes.

15. How do you handle 404 in Express?

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});




🟢 Basic Level Questions (Beginner)
✔ 1. What is Express.js?
✔ 2. Why use Express instead of native Node.js HTTP module?
✔ 3. What are middleware functions in Express?
✔ 4. What is the use of app.use()?
✔ 5. Difference between app.use() and app.get()?
✔ 6. What is routing in Express?
✔ 7. How do you parse JSON in Express?
✔ 8. What is express.json() and express.urlencoded()?
✔ 9. How do you serve static files in Express?
✔ 10. What is Express Router and why use it?
✔ 11. How to send a response in Express (res.send, res.json, res.end)?
✔ 12. What is the difference between req.params, req.query, and req.body?
✔ 13. How do you create a simple GET and POST API in Express?
✔ 14. What is nodemon and why use it?
✔ 15. How do you handle 404 in Express?