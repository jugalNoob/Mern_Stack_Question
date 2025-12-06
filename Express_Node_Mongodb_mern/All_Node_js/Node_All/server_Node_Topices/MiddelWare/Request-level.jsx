🔥 6. Request-level Middleware

Middleware applied to a specific route only.

Example:
const checkAuth = (req, res, next) => {
  console.log("Auth check");
  next();
};

app.get("/profile", checkAuth, (req, res) => {
  res.send("Profile route");
});