🚀 TOP 20 ADVANCED util PATTERNS
1️⃣ Promisify Legacy Libraries (MOST IMPORTANT)

Used when migrating monolith → microservices.

import { promisify } from "node:util";

const readFileAsync = promisify(fs.readFile);


Why used: convert old callback services to async/await → cleaner architecture.

2️⃣ Custom Promisify (Database Wrapper)

Make your own function automatically promisifiable.

myFunc[util.promisify.custom] = (arg) => {
  return new Promise(resolve => resolve(arg * 2));
};


Used in: Redis, MySQL old drivers.

3️⃣ util.callbackify Inside Legacy Integrations

Convert new async → old callback systems.

const cbFn = callbackify(async () => {
  return "done";
});


Used when integrating Node 18 async services with Node 8 legacy systems.

4️⃣ util.debuglog for Zero-Cost Logging

Production systems NEED lightweight debug flags.

const debug = util.debuglog("kafka");
debug("Partition rebalanced");


Run:

NODE_DEBUG=kafka node consumer.js

5️⃣ util.inspect for Smart Logging Pipelines

Used in ELK stack, Datadog, Graylog.

console.log(inspect(obj, { depth: 10, colors: true }));

6️⃣ util.types.isAsyncFunction for API Gateway Validation
if (!util.types.isAsyncFunction(handler)) {
  throw new Error("Middleware must be async");
}


Guarantees every route in a microservice is async-safe.

7️⃣ util.isDeepStrictEqual for Payload Verification

Used in fintech, auth, consistency checks.

if (!isDeepStrictEqual(a, b)) throw Error("mismatched payload");

8️⃣ util.parseArgs for CLI/DevOps Tools

Build internal admin tools:

const args = parseArgs({ options: { env: { type: "string" } }});

9️⃣ util.format for Standardized Logs
logger.info(format("User %s logged in at %d", id, Date.now()));

🔟 util.getSystemErrorName for Production Error Mapping
console.log(util.getSystemErrorName(34)); // ENOENT


Used in error analytics systems.

1️⃣1️⃣ util.toUSVString for Safe Unicode Strings

Prevents encoding bugs in messaging systems:

const safe = util.toUSVString(userInput);


Used in Kafka, RabbitMQ, ZeroMQ apps.

1️⃣2️⃣ util.TextEncoder & util.TextDecoder PIPELINE

Best for high-throughput message encoding (faster than Buffer in some cases).

const data = new TextEncoder().encode(JSON.stringify(obj));

1️⃣3️⃣ util.inspect.custom – Your Own Print Formatter

Used in ORM models, DB objects, custom classes.

obj[util.inspect.custom] = () => "secret-hidden-data";

1️⃣4️⃣ util.promisify → With Timeout Wrapper (Rare but Powerful)
const readTimeout = async (fn, ms) =>
  Promise.race([fn(), new Promise(_, rej => setTimeout(rej, ms))]);


Used in
✔ Payment gateways
✔ External service calls
✔ Microservice RPCs

1️⃣5️⃣ util.debuglog With Multiple Namespaces
const cacheDebug = util.debuglog("cache");
const dbDebug = util.debuglog("db");

1️⃣6️⃣ util.formatWithOptions

For structured logging with options:

formatWithOptions({ colors: true }, "User %o", user);


Used by Node.js internals.

1️⃣7️⃣ util.inspect → Safe in Circular Structures
inspect(obj, { depth: null, showHidden: true });


Prevents crashes in worker threads.

1️⃣8️⃣ util.styleText for Terminal UI

Color-coded DevOps CLI tools.

console.log(styleText('green', "✓ OK"));

1️⃣9️⃣ util.types for Low-Level Validation

Used by Node core modules.

if (types.isProxy(obj)) console.log("proxy detected");

2️⃣0️⃣ util.deprecate → API Version Migration

Used by Express, Mongoose, and many large libs.

const oldFn = util.deprecate(() => {}, "API deprecated. Use v2");