✅ Quick Summary for Interviews:

Middleware = Function handling request/response before reaching the final route.

Types:

Application-level

Router-level

Built-in

Error-handling

Third-party


Middleware works like a chain of conditions (checkpoints).

If the current condition is fulfilled, then it calls 
next() → and the request moves to the next check.

If the condition is not fulfilled, the middleware can
 stop the request right there (e.g., send back an error/response).



const express = require('express');
const app = express();

// 1️⃣ First middleware: Check if request has token
function checkAuth(req, res, next) {
  if (req.headers['x-auth'] === 'secret123') {
    console.log("Auth Passed ✅");
    next(); // move to next check
  } else {
    res.status(401).send("Unauthorized ❌");
  }
}

// 2️⃣ Second middleware: Check if user is admin
function checkAdmin(req, res, next) {
  if (req.headers['x-role'] === 'admin') {
    console.log("Admin Check Passed ✅");
    next(); // move to final route
  } else {
    res.status(403).send("Forbidden ❌ - Not Admin");
  }
}

// Use both middlewares before the route
app.get('/dashboard', checkAuth, checkAdmin, (req, res) => {
  res.send("Welcome to Admin Dashboard 🎉");
});

app.listen(3000, () => console.log("Server running on port 3000"));




Q:: What is Middleware in Express.js?

👉 Definition:
Middleware in Express.js is a function that has access to the request (req), response (res), and the next() function in the application’s request–response cycle.

It can:

Execute code

Modify the req and res objects

End the request–response cycle

Call next() to pass control to the next middleware/route handler

⚡ Signature:

(req, res, next) => { ... }




🔹 Types of Middleware in Express.js
1. Application-Level Middleware

Defined using app.use() or specific HTTP methods like app.get(), app.post().

Applied globally or to specific routes.

✅ Example:

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toISOString()}`);
  next();
});




2. Router-Level Middleware

Works the same way as application middleware but bound to an instance of express.Router().

Helps modularize code by applying middleware only for specific route groups.

✅ Example:

const router = express.Router();

router.use((req, res, next) => {
  console.log(`Router Middleware for /users route`);
  next();
});

router.get('/', (req, res) => {
  res.send('User home page');
});

app.use('/users', router);



3. Built-in Middleware

Express provides some ready-to-use middleware:

express.json() → Parse JSON request body

express.urlencoded() → Parse URL-encoded form data

express.static() → Serve static files

✅ Example:

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));//#endregion




4. Error-Handling Middleware

Defined with four parameters (err, req, res, next).

Used for catching errors globally.

✅ Example:

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



5. Third-Party Middleware

Community-created packages to add extra functionality.

body-parser → Parse request bodies

helmet → Secure app by setting HTTP headers

morgan → HTTP request logger

✅ Example:

const morgan = require('morgan');
const helmet = require('helmet');

app.use(morgan('dev'));
app.use(helmet());


🔹 Middleware Flow Example
const express = require('express');
const app = express();

// 1. Application-Level Middleware
app.use((req, res, next) => {
  console.log(`App-Level Middleware -> ${req.method} ${req.url}`);
  next();
});

// 2. Built-in Middleware
app.use(express.json());

// 3. Router-Level Middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log("Router-Level Middleware running");
  next();
});
router.get('/', (req, res) => res.send("Users Route"));
app.use('/users', router);

// 4. Route
app.get('/', (req, res) => res.send("Home Page"));

// 5. Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(500).send("Internal Server Error");
});

// 6. Third-Party Middleware Example
const helmet = require('helmet');
app.use(helmet());

app.listen(3000, () => console.log("Server running on port 3000"));
