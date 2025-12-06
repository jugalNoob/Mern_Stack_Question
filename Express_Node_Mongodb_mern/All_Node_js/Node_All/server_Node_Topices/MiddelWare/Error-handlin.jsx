🔥 5. Error-handling Middleware

Special middleware with 4 parameters: err, req, res, next.

Example:
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});


Used for:

Logging errors

Sending meaningful messages

Avoiding server crashes