🎉 Complete Coverage

You now have:

✅ process basics
✅ memory APIs
✅ timers
✅ lifecycle
✅ signals
✅ env variables
✅ CPU usage
✅ event loop related APIs
✅ OS interactions
⚡ Now your list is complete + interview-ready.



✅ Line-by-Line Explanation
1️⃣ process.version
console.log(process.version)


✔ Gives Node.js version
Example:

v20.11.0

2️⃣ process.execPath
console.log(process.execPath)


✔ Absolute path of the Node.js binary
Example:

/usr/local/bin/node

3️⃣ process.cwd()
console.log(process.cwd());


✔ Returns current working directory
This changes if you call process.chdir().

4️⃣ process.constrainedMemory()
console.log(process.constrainedMemory())


✔ Shows available memory if Node is in a constrained environment
Most systems return 0 (no restriction).

5️⃣ process.uptime()
console.log(process.uptime())


✔ How long your Node app has been running (seconds).

6️⃣ process.hrtime()
const start = process.hrtime();
const diff = process.hrtime(start);
console.log(diff);


✔ High-resolution time difference
Output format:

[ seconds, nanoseconds ]

7️⃣ process.pid
console.log(process.pid)


✔ Process ID of your Node.js runtime.

8️⃣ process.title
console.log(process.title)


✔ Name shown in OS process list
Default: "node"

9️⃣ process.config
console.log(process.config)


✔ Internal Node.js build configuration
Example:

build options

shared libraries

v8 configuration
(Some keys are technical.)

❌ 10️⃣ process.listeners() (⚠ WRONG)
console.log(process.listeners())


❗ This is incorrect usage

listeners() expects an event name:

✔ Correct usage:

console.log(process.listeners('exit'))


Otherwise it throws an error.

11️⃣ process.cpuUsage()
console.log(process.cpuUsage())


✔ CPU usage of:

User space

System space
Values in microseconds.

Example:

{ user: 20000, system: 3000 }

12️⃣ process.eventNames()
console.log(process.eventNames())


✔ Returns all event names that have listeners attached.

Example:

[ 'beforeExit', 'exit' ]

13️⃣ process.features
console.log(process.features)


✔ Shows what native features your Node.js build supports.
Examples:

inspector

tls

uv

debug

14️⃣ process.availableMemory()
console.log(process.availableMemory())


✔ Node.js v20+
Returns currently available system memory, in bytes.

15️⃣ process.debugPort
console.log(process.debugPort)


✔ Default debug port:

9229


Used for DevTools debugging.

16️⃣ process.removeAllListeners()
console.log(process.removeAllListeners())


✔ Removes all listeners for all events and returns the process object.

⚠ Be careful — this wipes internal listeners too.

17️⃣ process.on
console.log(process.on)


✔ This prints the function itself:

[Function: on]


Used to add listeners:

process.on('exit', () => console.log("Bye"));

18️⃣ process.channel
console.log(process.channel)


✔ Available only if Node is run as a child process using:

fork()


If not using child processes → value will be undefined.

19️⃣ process.allowedNodeEnvironmentFlags
console.log(process.allowedNodeEnvironmentFlags)


✔ A Set containing all valid CLI flags allowed in NODE_OPTIONS.

Example:

Set(300) { '--inspect', '--trace-warnings', ... }

🎯 Want a full printable PDF explaining all process APIs in Node.js?

I can generate:

✅ ASCII diagrams
✅ Internals explanation
✅ Real-life examples
✅ PDF ready for your interview notes

Just say: "Make PDF"




✅ Missing Important process Properties & Methods

Below is a clean list of everything you didn’t include yet, grouped by category.

🔥 A. Process Info (Missing)
✔ process.arch

CPU architecture (x64, arm, ia32)

console.log(process.arch);

✔ process.platform

OS platform (win32, linux, darwin)

console.log(process.platform);

✔ process.env

Environment variables

console.log(process.env);

✔ process.argv

CLI arguments (node app.js hello → ["node", "app.js", "hello"])

console.log(process.argv);

✔ process.versions

All dependency versions (V8, OpenSSL, zlib, etc.)

console.log(process.versions);

🔥 B. Memory (Missing)
✔ process.memoryUsage()

Current memory usage (heap, rss, external, arrayBuffers)

console.log(process.memoryUsage());

✔ process.resourceUsage()

Detailed system-level usage (maxRSS, fsRead, fsWrite, voluntaryContextSwitches)

console.log(process.resourceUsage());

🔥 C. Events (Missing)
✔ process.emit()

Manually trigger an event

process.emit('jugalEvent', { name: "Jugal Sharma" });

✔ process.once()

Run a listener only one time

process.once('exit', () => console.log('exit once'));

✔ process.prependListener()

Add listener at beginning

process.prependListener('exit', ()=> console.log('first listener'));

🔥 D. Signals (Missing)

Node.js can listen to OS signals:

✔ SIGINT (Ctrl + C)
process.on('SIGINT', ()=> console.log('Ctrl + C pressed!'));

✔ SIGTERM
process.on('SIGTERM', ()=> console.log('OS asked to kill process!'));

✔ SIGUSR1, SIGHUP, etc.
🔥 E. Execution Control (Missing)
✔ process.exit([code])

Immediately stop the process

process.exit(1);

✔ process.exitCode

Set the exit code without killing immediately

process.exitCode = 2;

✔ process.kill(pid, signal)

Send signal to a process (not kill by default)

process.kill(process.pid, 'SIGTERM');

🔥 F. Next Tick / Queue (Missing)
✔ process.nextTick()

Microtask queue (like Promise)

process.nextTick(() => {
  console.log("nextTick executed");
});

🔥 G. Performance / Timing (Missing)
✔ process.hrtime.bigint()

High precision timestamp in nanoseconds (bigint)

console.log(process.hrtime.bigint());

✔ process.cpuUsage(previousValue)

Diff of CPU usage

console.log(process.cpuUsage());


(you already used this, but the diff version is missing)

🔥 H. stdio Streams (Missing)
✔ process.stdin
✔ process.stdout
✔ process.stderr

Example:

process.stdout.write("Hello Jugal!\n");

🔥 I. Process Lifecycle (Missing)
✔ process.abort()

Force immediate crash with core dump

// process.abort();  // DON'T RUN! (Crashes process)

✔ process.binding()

Access low-level internal C++ modules
⚠️ Not recommended for production.

🔥 J. Misc (Missing)
✔ process.hrtime.bigint()

BigInt version of hrtime

✔ process.emitWarning()

Emit warnings

process.emitWarning("High memory usage");

✔ process.setSourceMapsEnabled(true)

Enable/disable source maps for stack traces

✔ process.getActiveResourcesInfo()

List of active resources (timers, handles)