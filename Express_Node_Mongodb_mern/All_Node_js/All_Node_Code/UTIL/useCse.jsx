Here is the simple, clear, practical answer you can use in interviews:

✅ When to Use util in a Node.js Project?

You use Node.js util module when you need advanced helpers that the normal JS API cannot give you — especially for:

🔥 1. Converting CALLBACK code → PROMISE code

Most common real-world use.

When?

✔ Migrating old Node APIs
✔ Working with MySQL, Redis, fs, crypto, etc. (old callback style)

Example:
import { promisify } from 'node:util';
const read = promisify(fs.readFile);

🔥 2. When You Need Advanced Logging for Production

Use util.debuglog and util.inspect.

When?

✔ Debugging Kafka
✔ Observability
✔ Logging complex objects
✔ Circular object inspection

const debug = util.debuglog('auth');
debug("Login request received");

🔥 3. When You Need Deep Comparisons (Testing, Validation)

isDeepStrictEqual avoids writing your own compare logic.

When?

✔ Testing
✔ API schema comparison
✔ Cache invalidation
✔ Checking if payload changed

isDeepStrictEqual(obj1, obj2)

🔥 4. When Building a CLI or Admin Tool

Use util.parseArgs.

When?

✔ DevOps tools
✔ Script automation
✔ Microservices CLI

parseArgs({ options: { env: { type: "string" } } });

🔥 5. When Using or Creating a Library

util.deprecate is widely used in Express, Mongoose, Redis client.

When?

✔ Marking old functions as deprecated
✔ Library version upgrades
✔ API migrations

const oldFn = util.deprecate(fn, "Use newFn instead");

🔥 6. When Working With Binary / Encoded Data

Use TextEncoder, TextDecoder.

When?

✔ High-speed message processing
✔ Kafka producers/consumers
✔ WebSocket servers
✔ Real-time apps

new TextEncoder().encode("hello");

🔥 7. When Writing Middlewares & Need Type Detection

util.types.isAsyncFunction, isProxy, etc.

When?

✔ Ensuring middleware is async
✔ Detecting Promise handlers
✔ Building framework-level validation

if (!types.isAsyncFunction(fn)) throw new Error("Must be async");

🔥 8. When Building Custom Inspect Behavior

util.inspect.custom

When?

✔ Hide sensitive data in logs
✔ Pretty-print complex objects
✔ Custom class debugging

obj[util.inspect.custom] = () => "hidden";

🔥 9. When You Need Fast String Formatting (Like printf)

util.format

When?

✔ Logging services
✔ Audit logs
✔ Error messages

format("User %s logged in", user.name)

🔥 10. When You Need to Safely Handle Unicode

util.toUSVString

When?

✔ Message queues
✔ Internationalized apps
✔ Preventing corrupted strings

toUSVString(input)