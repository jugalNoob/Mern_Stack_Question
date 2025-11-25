🔥 3. Built-in Middleware

Express already gives some middleware.

Common ones:

express.json() → parse JSON

express.urlencoded() → parse form data

express.static() → serve static files

Example:
app.use(express.json());
app.use(express.static("public"));