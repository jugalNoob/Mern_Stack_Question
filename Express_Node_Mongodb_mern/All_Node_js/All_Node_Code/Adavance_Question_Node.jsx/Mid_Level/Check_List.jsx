🚀 NODE.JS PRODUCTION CHECKLIST
1️⃣ PROCESS & RUNTIME
✅ Node Version

Lock Node version (.nvmrc, engines)

Use LTS only

✅ Process Manager

PM2 / systemd / Docker

Auto-restart on crash

pm2 start app.js -i max

2️⃣ CLUSTERING & SCALING
✅ CPU Scaling

Use cluster or PM2 cluster mode

One worker per CPU core

✅ Horizontal Scaling

Stateless APIs

External session store (Redis)

3️⃣ ERROR HANDLING (VERY IMPORTANT)
✅ Global Handlers
process.on('uncaughtException', err => {
  logger.error(err);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  logger.error(err);
});


❌ Do not ignore these

4️⃣ GRACEFUL SHUTDOWN
✅ Handle Signals
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

✅ Close Resources

HTTP server

DB connections

Kafka / Redis

⏱ Timeout fallback (10–30s)

5️⃣ SECURITY (INTERVIEW FAVORITE)
✅ HTTP Security

HTTPS only

HSTS

Secure headers (helmet)

✅ Auth

bcrypt / scrypt for passwords

Short-lived JWT

Refresh tokens

✅ Secrets

.env not in repo

Use Vault / KMS

Rotate keys

6️⃣ PERFORMANCE & EVENT LOOP SAFETY
✅ Avoid Blocking

❌ CPU-heavy loops
✔ Worker threads

✅ Watch Event Loop
setInterval(() => {
  console.log(process.memoryUsage());
}, 5000);

✅ Use Streams

✔ For files & large payloads

7️⃣ MEMORY MANAGEMENT
✅ Detect Leaks

Heap snapshots

--inspect

Watch RSS growth

✅ EventEmitter Safety

Remove listeners

Avoid unbounded listeners



