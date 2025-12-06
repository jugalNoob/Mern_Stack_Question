Node.js process — Pro-level, step-by-step interview guide

Compact, practical, and ready for whiteboard / live-coding. I'll walk you through every important process property/method you listed (and the missing ones) step-by-step with examples, interviewer talking points, gotchas and quick quiz items.

How to use this guide

Read each numbered step.

Try the short code example locally (copy/paste).

Answer the Interview Tip out loud — be ready to explain tradeoffs and pitfalls.

1 — Process identity & paths
process.version
console.log(process.version); // e.g. v20.11.0


What it is: Node runtime version.
Interview tip: Use when debugging native-module mismatches.

process.execPath
console.log(process.execPath); // absolute path to node binary


Use-case: Confirm which Node binary is running (nvm / system).

process.pid / process.ppid
console.log(process.pid, process.ppid);


Use-case: Logging, crash reports, supervisors (PM2, systemd).

2 — Working directory & startup args
process.cwd() and process.chdir(path)
console.log(process.cwd());
process.chdir('/tmp');


Gotcha: require() resolution is relative to module path, not cwd().

process.argv
// node app.js --port 3000 foo
console.log(process.argv);
// ['node', '/path/app.js', '--port', '3000', 'foo']


Tip: Use yargs/commander in real apps; argv is raw.

3 — Environment & flags
process.env
console.log(process.env.NODE_ENV);


Security: Never log secrets. Use config libraries and .env for dev only.

process.allowedNodeEnvironmentFlags
console.log(process.allowedNodeEnvironmentFlags.has('--inspect'));


Use-case: Validate flags when building tooling.

4 — Version/feature info
process.versions / process.features
console.log(process.versions); // v8, openssl, zlib...
console.log(process.features); // boolean flags for build features


Interview point: Useful when diagnosing native addon or TLS issues.

5 — Uptime & high-resolution timing
process.uptime()
console.log(process.uptime()); // seconds

process.hrtime() & process.hrtime.bigint()
const start = process.hrtime();
// ...work...
const diff = process.hrtime(start); // [sec, nanosec]
const t = process.hrtime.bigint(); // nanoseconds as BigInt


Use-case: Micro-benchmarks; prefer hrtime.bigint() for simplicity.

6 — Memory & resource APIs
process.memoryUsage()
console.log(process.memoryUsage());
// { rss, heapTotal, heapUsed, external, arrayBuffers }


Interview: Explain rss vs heapUsed. rss includes native + heap + code.

process.resourceUsage()
console.log(process.resourceUsage());
// OS-level: maxRSS, fsRead, fsWrite, involuntaryContextSwitches...


Use-case: Profiling for noisy neighbors, CI performance checks.

process.constrainedMemory() & process.availableMemory()
console.log(process.constrainedMemory()); // often 0
console.log(process.availableMemory());   // bytes (v20+)


Note: Useful in constrained container environments.

7 — CPU usage
process.cpuUsage([previous])
const a = process.cpuUsage();
// ...work...
const b = process.cpuUsage(a); // returns diff in microseconds


Tip: Combine with hrtime to compute CPU utilization.

8 — Event loop / microtasks / timers
process.nextTick() vs queueMicrotask() vs setImmediate() vs setTimeout()
process.nextTick(() => console.log('nextTick'));
queueMicrotask(() => console.log('microtask'));
setImmediate(() => console.log('setImmediate'));
setTimeout(() => console.log('timeout'), 0);


Execution order (typical): nextTick → microtasks (Promises) → timers / I/O → setImmediate.
Interview tip: process.nextTick() can starve the event loop if abused.

9 — Events & listeners
process.on(name, fn), .once(), .prependListener(), .removeAllListeners()
process.on('exit', code => console.log('exit', code));
process.once('beforeExit', () => console.log('one time'));
process.prependListener('exit', () => console.log('runs first'));
process.removeAllListeners('exit');

process.emit(eventName, ...) and process.eventNames()
process.emit('custom', { x: 1 });
console.log(process.eventNames());


Gotcha: exit handlers must be sync — no async work.

10 — Lifecycle events & errors
beforeExit, exit, uncaughtException, unhandledRejection, warning
process.on('beforeExit', code => console.log('beforeExit', code));
process.on('exit', code => console.log('exit', code));
process.on('uncaughtException', err => {
  console.error('uncaught', err);
  process.exit(1); // recommended: fail fast after logging
});
process.on('unhandledRejection', (reason, p) => console.warn('unhandled', reason));
process.on('warning', w => console.warn(w.name, w.message));


Interview answer: For uncaughtException — log, notify, and exit; try not to continue a corrupted state.

11 — Exit control
process.exit([code]) vs process.exitCode
process.exitCode = 2;
process.exit(); // uses exitCode if set


Best practice: set exitCode and let Node exit gracefully.

12 — Abort & diagnostic helpers
process.abort()
// process.abort(); // creates core dump — don't run casually


Use-case: Crash for post-mortem analysis (native debugging).

process.emitWarning()
process.emitWarning('High memory usage', { type: 'PerformanceWarning' });

process.setSourceMapsEnabled(true)
process.setSourceMapsEnabled(true);


Use-case: Cleaner stack traces in prod (if source maps available).

13 — Std I/O streams
process.stdin, process.stdout, process.stderr
process.stdout.write('Hello\n');
process.stderr.write('Error\n');

process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => console.log('stdin:', chunk));


Interview tip: Use streams for large data; avoid buffering entire payloads in memory.

14 — Child process & IPC
process.channel, process.send() (when forked)
// child process
if (process.send) process.send({ ready: true });
console.log(process.channel); // object when IPC exists


Use-case: Master-worker communication (cluster/fork).

process.kill(pid, signal)
process.kill(pid, 'SIGTERM'); // sends signal — does not necessarily kill


Note: kill sends signals, doesn't always terminate.

15 — Debugging & inspector
process.debugPort
console.log(process.debugPort); // default 9229


Tip: Useful when allocating ports or launching remote debugger.

16 — Low-level / internal
process.binding()

Warning: Accesses internals; not for app code. Use only for experimentation.

process.getActiveResourcesInfo()
console.log(process.getActiveResourcesInfo()); // timers, handles, etc.


Use-case: Debugging resource leaks.

17 — Misc useful helpers

process.title — name shown in ps.

process.arch, process.platform — runtime architecture and OS.

process.stdin.isTTY — terminal interactive checks.

process.umask() — file creation mask.

18 — Practical interview answers (short)

Q: How to gracefully shutdown a server?
Listen SIGTERM/SIGINT, stop accepting new connections, wait for active requests to finish (or timeout), close DB connections, then process.exit().

Q: How to detect memory leaks?
Monitor process.memoryUsage() over time, use heapdump/Chrome DevTools, compare heap snapshots.

Q: When to use process.nextTick() vs setImmediate()?
nextTick for microtasks that must run before I/O; setImmediate to schedule after I/O. Avoid deep nextTick loops.

Q: Should you catch uncaughtException and continue?
No — log, alert, flush telemetry, then exit. Continuing can leave inconsistent state.

19 — Common pitfalls & gotchas (say these in interviews)

process.exit() kills the process immediately — pending async ops may not finish. Prefer exitCode or graceful shutdown flow.

process.nextTick() can starve the event loop if used in recursion.

uncaughtException should be used only to clean up and exit; don't try to rehydrate app state.

process.memoryUsage() values differ across platforms; interpret relatively.

process.binding() is not stable across Node versions.

20 — Quick study plan (7 days)

Day 1: Basics + identity + cwd/argv/env + small scripts.

Day 2: Timers, nextTick, setImmediate, promises ordering. Create small examples.

Day 3: Memory APIs + hrtime + cpuUsage. Write mem profiler small app.

Day 4: Signals, lifecycle events, graceful-shutdown implementation (HTTP server).

Day 5: Child process & IPC, process.send, cluster basics.

Day 6: Resource leak debugging: getActiveResourcesInfo(), heapdump (practice).

Day 7: Mock interview: explain 5 common pitfalls + live-coding graceful shutdown & a CPU usage diff script.

21 — Ready-made code snippets you can show in interview
Graceful shutdown pattern (HTTP + DB)
const http = require('http');
const server = http.createServer((req,res)=> res.end('ok'));
let connections = 0;

server.on('connection', () => connections++);

server.listen(3000, () => console.log('listening'));

function shutdown(signal) {
  console.log('Got', signal);
  server.close(() => {
    console.log('Closed server');
    // close DB, flush logs...
    process.exit(0);
  });

  setTimeout(() => {
    console.warn('Force exit');
    process.exit(1);
  }, 10_000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

CPU and wall-clock measurement
const startHr = process.hrtime.bigint();
const startCpu = process.cpuUsage();

heavyWork(); // some CPU work

const cpuDiff = process.cpuUsage(startCpu);
const durationNs = process.hrtime.bigint() - startHr;
console.log({ cpuUserUs: cpuDiff.user, cpuSystemUs: cpuDiff.system, durationMs: Number(durationNs/1_000_000n) });

22 — Short checklist before an interview

Can explain nextTick vs Promises vs setImmediate order.

Can show graceful shutdown and explain why exit listeners must be sync.

Can read memoryUsage() and explain rss vs heapUsed.

Can explain cpuUsage() diff and combine with hrtime to compute load.

Know what process.binding() / process.abort() do and why they’re risky.

If you want, I can:

✅ Generate a printable PDF of this whole guide (with code blocks + ASCII event loop diagram).

✅ Create a one-page cheat-sheet (A4) for last-minute review.

✅ Produce 15 mock interview questions (with ideal answers).

Say which one: “PDF please”, “Cheat sheet”, or “Mock questions” and I’ll generate it now.