🔥 9. Async Middleware (Promise-based)

For async/await.

Example:
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get(
  "/data",
  asyncHandler(async (req, res) => {
    const data = await fetchData();
    res.send(data);
  })
);
