🔥 4. Third-party Middleware

Installed via npm.

Popular ones:

cors → enable cross-origin requests

morgan → logging

helmet → security headers

cookie-parser → handle cookies

express-rate-limit → rate limiting

Example:
const morgan = require("morgan");
app.use(morgan("dev"));
