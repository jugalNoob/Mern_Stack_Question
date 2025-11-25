🔥 2. Router-level Middleware

Middleware applied only to specific router or route group.

Example:
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router-level");
  next();
});

router.get("/users", (req, res) => {
  res.send("User list");
});

app.use("/api", router);



