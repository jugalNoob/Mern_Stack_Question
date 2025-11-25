🔥 7. Custom Middleware

Any function you write that works like middleware.

Example (simple logger):
const logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

app.use(logger);