🔥 1. Application-level Middleware

Middleware added using app.use() or app.METHOD().

✅ Example:
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("App-level middleware");
  next();
});


Used for:

Logging

Body parsing

CORS

Auth

Global validation