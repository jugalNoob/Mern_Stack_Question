🔌 4️⃣ How do you implement graceful shutdown in Node.js?
🎯 Goal

✔ Finish active requests
✔ Close DB, Kafka, Redis
✔ Exit cleanly

✅ Example
const server = app.listen(3000);

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
  console.log('Shutting down...');
  
  server.close(() => {
    db.close();
    process.exit(0);
  });

  setTimeout(() => process.exit(1), 10000);
}

📌 Signals

SIGTERM → Docker / Kubernetes

SIGINT → Ctrl+C



Let's break down your code line by line and explain the purpose and meaning of each part in the context of Node.js:

const server = app.listen(3000);


Meaning: This starts your Express (or any other) app on port 3000 and returns a server object.

Why used: The server object lets you control the HTTP server—for example, you can call server.close() later to stop accepting new requests during a shutdown.

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);


Meaning: Here, we’re telling Node.js to listen for system signals:

SIGTERM → Signal to terminate the process (common in containers like Docker).

SIGINT → Signal triggered by Ctrl+C in the terminal.

Why used: When Node.js receives these signals, it runs the shutdown function to gracefully stop the server instead of just killing it abruptly.

function shutdown() {
  console.log('Shutting down...');


Meaning: Defines a function shutdown that will handle the cleanup when a termination signal is received.

Why used: The log is just to let you know shutdown has started.

server.close(() => {
    db.close();
    process.exit(0);
});


Meaning:

server.close() stops the server from accepting new connections but allows ongoing requests to finish.

Once the server is closed, the callback runs:

db.close() → Closes the database connection.

process.exit(0) → Exits the process successfully (code 0).

Why used: Ensures a graceful shutdown, finishing all ongoing work before exiting.

setTimeout(() => process.exit(1), 10000);


Meaning: Sets a 10-second timer to forcefully exit the process with code 1 if the shutdown takes too long.

Why used: Acts as a safety net. If server.close() or db.close() hangs, the process won’t be stuck forever.

✅ Summary

This pattern is a graceful shutdown approach:

Start server (app.listen) → get server object.

Listen for termination signals (SIGTERM, SIGINT).

On signal:

Log shutdown message.

Stop accepting new requests (server.close()).

Close DB connection (db.close()).

Exit with success (0) or force exit after 10s with failure (1).