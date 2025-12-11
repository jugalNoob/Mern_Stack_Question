✅ Top 10 util module real-world examples
1️⃣ util.promisify() → Convert callback functions to Promises
import { promisify } from "node:util";
import fs from "node:fs";

const readFileAsync = promisify(fs.readFile);

readFileAsync("./data.txt", "utf8")
  .then(console.log)
  .catch(console.error);


📌 Use when converting old callback-style code into async/await.

2️⃣ util.callbackify() → Convert Promises to callback functions
import { callbackify } from "node:util";

async function getData() {
  return "hello";
}

const callbackFn = callbackify(getData);

callbackFn((err, data) => {
  console.log(data);
});


📌 Used when working with old libraries that require callbacks.

3️⃣ util.format() → String formatting (like printf)
import { format } from "node:util";

console.log(format("Hello %s, number: %d", "Jugal", 100));


📌 Handy for logging.

4️⃣ util.inspect() → Pretty print objects
import { inspect } from "node:util";

const obj = { name: "Jugal", address: { city: "Delhi" } };
console.log(inspect(obj, { colors: true, depth: 5 }));


📌 Best for debugging deeply nested objects.

5️⃣ util.types → Check types safely
import { types } from "node:util";

console.log(types.isPromise(Promise.resolve()));  // true
console.log(types.isAsyncFunction(async () => {})); // true


📌 More accurate than typeof.

6️⃣ util.deprecate() → Mark a function as deprecated
import { deprecate } from "node:util";

const oldFunc = deprecate(
  () => console.log("Old function"),
  "oldFunc is deprecated. Use newFunc() instead."
);

oldFunc();


📌 Shows warning only once → used in libraries.

7️⃣ util.TextEncoder / TextDecoder → Encode/Decode strings
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const encoded = encoder.encode("Hello Jugal");
console.log(encoded);

console.log(decoder.decode(encoded));


📌 Very useful in binary data processing.

8️⃣ util.debuglog() → Create debug logs (NODE_DEBUG=...)
import { debuglog } from "node:util";

const debug = debuglog("server");

debug("Server is starting...");


Run:

NODE_DEBUG=server node app.js


📌 Only prints logs in debug mode → not in production.

9️⃣ util.isDeepStrictEqual() → Compare objects deeply
import { isDeepStrictEqual } from "node:util";

console.log(isDeepStrictEqual({ a: 1 }, { a: 1 })); // true
console.log(isDeepStrictEqual({ a: 1 }, { a: 2 })); // false


📌 Reliable deep comparison for testing + validation.

🔟 util.parseArgs() → Parse CLI arguments
import { parseArgs } from "node:util";

const { values } = parseArgs({
  args: ["--port", "3000"],
  options: { port: { type: "string" } }
});

console.log(values.port); // 3000


📌 Super useful for CLI tools (alternative to yargs).