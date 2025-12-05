🔴 Advanced Express.js – Simple Answers
30. What is the Express Request-Response cycle?

The flow where a request goes through middleware → routes → response → ends.

31. Explain Express layered architecture (MVC).

Model → database logic

View → UI / templates

Controller → request handlers
Keeps app clean and organized.

32. Difference between global & route-level middleware?

Global → runs for all routes

Route-level → runs only on a specific route or router

33. What is rate limiting?

Restricting how many requests a user can send.
Used to prevent abuse / DDoS.

34. How to handle file uploads (multer)?

Use multer middleware to process multipart/form-data.

35. How to secure Express apps?

Use:

helmet → security headers

xss-clean / sanitizer → remove unsafe input

validation → block bad data

36. How to write custom middleware with error handling?
function mw(req, res, next) {
  try { next(); }
  catch (err) { next(err); }
}

37. How does Express v5 handle async errors?

Async route errors automatically go to error-middleware without next(err).

38. How to validate input (Joi / Zod / Validator)?

Use validation middleware to check request data before processing.

39. Why is Express single-threaded? How to scale?

Node.js uses one thread → event loop.
Scale using cluster mode, PM2, or load balancer.

40. What is clustering?

Running multiple Node.js processes to use all CPU cores.

41. How to use Redis caching with Express?

Store frequently used data in Redis and return it before hitting DB.

42. How to use Express with Kafka?

Producer sends messages from routes → consumer processes in background.

43. How to implement pagination?

Use query params: ?page=1&limit=10 and apply skip/limit on DB.

44. Difference between middleware and interceptor?

Express uses middleware.
Interceptor is common in other frameworks (Nest, Angular).
Both modify request/response flow.

45. What is router-level prefix?

A base path for a router:

app.use("/users", userRouter);

46. How to handle sessions (express-session)?

Use session middleware to store user login data on server.

47. What are signed cookies?

Cookies that are hashed with a secret to prevent tampering.

48. What is CSRF protection?

Prevents unauthorized actions using tokens (csurf package).

49. How to version routes (/v1, /v2)?

Use router prefixes:
app.use("/api/v1", v1Router);

50. What is a RESTful API?

API that uses clean URLs + HTTP methods (GET/POST/PUT/DELETE).

51. Logging (Winston + morgan)?

Morgan logs requests; Winston logs errors/application logs.

52. Handling large JSON payloads?

Increase body-parser limit:
app.use(express.json({ limit: "50mb" }));

53. How to benchmark and monitor Express?

Use tools like PM2, New Relic, Datadog, clinic.js.

54. req.app vs app.locals vs res.locals

req.app → current app instance

app.locals → global variables

res.locals → per-request data

55. Difference between Express and Fastify?

Fastify is faster and more modern; Express is simpler and widely used.

56. PM2 with Express?

PM2 runs, restarts, and clusters your Express app in production.

57. Unit tests (Mocha/Jest + Supertest)?

Supertest hits endpoints; Jest/Mocha checks responses.

58. What is a reverse proxy?

Server like Nginx that sits before Express for security, caching, and load balancing.

59. WebSockets with Express?

Use Socket.IO or ws alongside Express for real-time communication.

60. Event loop role?

Handles async, non-blocking tasks so Express stays fast.

61. Prevent memory leaks?

Clear timers, close DB connections, avoid storing large objects, use streaming.

62. What is load balancing?

Distributing traffic across multiple servers
 using Nginx or cloud LB.
 

63. Difference between Express 4 and 5?

Express 5 supports async errors automatically and modern routing.

64. Graceful shutdown?

Close server + DB connections before stopping the app.

65. How does Express handle streaming responses?

Using res.write(), res.flush(), and Node.js streams to send data in chunks.

🔴 Advanced Level Questions
✔ 30. What is the Express Request-Response cycle?
✔ 31. Explain Express layered architecture (MVC pattern).
✔ 32. What is the difference between global & route-level middleware?
✔ 33. What is rate limiting? How do you implement it?
✔ 34. How do you handle file uploads in Express (multer)?
✔ 35. How do you secure Express apps (helmet, sanitizer, validation)?
✔ 36. How do you write custom middleware with error handling?
✔ 37. How does Express handle async errors automatically (Express v5)?
✔ 38. How do you validate input data (Joi / Zod / Express Validator)?
✔ 39. Why is Express single-threaded? How to scale it?
✔ 40. What is clustering and how to use node:cluster with Express?
✔ 41. How do you use Redis caching with Express?
✔ 42. How to use Express with Kafka producer/consumer?
✔ 43. How do you implement pagination in Express?
✔ 44. What is the difference between middleware and interceptor?
✔ 45. What is an Express router-level prefix?
✔ 46. How do you handle sessions in Express (express-session)?
✔ 47. What are signed cookies in Express?
✔ 48. What is CSRF protection & how to implement it?
✔ 49. How do you version API routes in Express (/v1, /v2)?
✔ 50. What is an Express "RESTful API"?
✔ 51. How do you implement logging (Winston + morgan)?
✔ 52. How do you handle large JSON payloads in Express?
✔ 53. How do you benchmark and monitor Express performance?
✔ 54. What is req.app vs app.locals vs res.locals?
✔ 55. What is the difference between Express and Fastify?
✔ 56. How to use PM2 with Express for production deployment?
✔ 57. How do you write unit tests for Express (Mocha/Jest/Supertest)?
✔ 58. What is a reverse proxy and why use Nginx before Express?
✔ 59. How do you implement WebSockets with Express?
✔ 60. Explain the event loop role in Express apps.
✔ 61. How do you prevent memory leaks in Express?
✔ 62. What is load balancing and how to apply it to Express?
✔ 63. Difference between Express 4 and Express 5?
✔ 64. How do you implement graceful shutdown of Express server?
✔ 65. How does Express handle streaming responses?