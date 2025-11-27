Here’s a complete, interview-ready guide to all types of memory used in Node.js, with simple explanations and examples. I’ll cover everything: V8 heap, stack, buffers, external memory, RSS, libuv, etc.

⭐ 1️⃣ Stack Memory

Stores: Function calls, local primitive variables, references to heap objects

Managed: Automatically, LIFO (last in, first out)

Size: Small, fast

Example:

function add(a, b) {
  let sum = a + b; // stored on stack
  return sum;
}

⭐ 2️⃣ Heap Memory (V8 Heap)

Stores: Objects, arrays, functions, closures, class instances

Managed: Garbage Collector (V8 GC)

Size: Large (default ~2GB in 64-bit Node.js)

Example:

let obj = { name: "Jugal", age: 25 };
let arr = [1,2,3,4];


Objects in heap; references to them are stored in stack

⭐ 3️⃣ Buffer / Binary Memory

Stores: Raw binary data (files, TCP streams, network, images)

Managed: Outside V8 heap, manually allocated

Example:

const buf = Buffer.from("Hello Node");


Allows high-performance binary operations

⭐ 4️⃣ External Memory

Stores: Memory used by C++ addons, crypto, zlib, ArrayBuffer, WebAssembly

Managed: Outside V8 heap, tracked via process.memoryUsage().external

Example:

console.log(process.memoryUsage().external);

⭐ 5️⃣ Resident Set Size (RSS)

Definition: Total memory allocated to Node.js process by OS

Includes heap + stack + buffers + libuv + native modules

Managed: By OS and Node process

Example:

console.log(process.memoryUsage().rss);

⭐ 6️⃣ Closure / Private Memory

Stores: Private variables inside closures that persist even after function ends

Managed: GC cleans only after references removed

Example:

function outer() {
  let secret = 42; // private memory in heap
  return function inner() {
    console.log(secret);
  }
}
const fn = outer();
fn(); // 42

⭐ 7️⃣ TypedArray / ArrayBuffer Memory

Stores: Binary memory for high-performance operations

Used in: Node.js buffers, WebAssembly, crypto

Example:

const arr = new Uint8Array([1,2,3]);

⭐ 8️⃣ Shared Memory (SharedArrayBuffer)

Stores: Memory shared between worker threads

Use: Multi-threading, concurrent data access

Example:

const shared = new SharedArrayBuffer(1024);

⭐ 9️⃣ Libuv Memory

Stores: Node.js event loop internals, thread pool, async I/O queues

Managed: Node.js internally

Example: Not directly accessible in JS, but used internally for:

fs async operations

TCP/UDP network sockets

Timers

⭐ 10️⃣ V8 Internal Memory

Stores: Engine-specific data

Includes:

Hidden classes

Inline caches

Compiled bytecode

Optimized function metadata

Example: Invisible to JS code, handled automatically by V8

⭐ Memory Units in Node.js


| Unit | Size       |
| ---- | ---------- |
| Bit  | 0 or 1     |
| Byte | 8 bits     |
| KB   | 1024 bytes |
| MB   | 1024 KB    |
| GB   | 1024 MB    |


Buffers, typed arrays, heap allocations are measured in bytes/MB/GB.



⭐ Node.js Memory Layout Summary


┌─────────────────────────────┐
|       V8 Internal Memory     |  <- Bytecode, hidden classes, inline cache
└─────────────────────────────┘
            ▲
┌─────────────────────────────┐
|       External Memory        |  <- Buffers, crypto, zlib, WebAssembly
└─────────────────────────────┘
            ▲
┌─────────────────────────────┐
|            HEAP              |  <- Objects, arrays, functions, closures
└─────────────────────────────┘
            ▲
┌─────────────────────────────┐
|            STACK             |  <- Function calls, primitives, references to heap
└─────────────────────────────┘
            ▲
┌─────────────────────────────┐
|            RSS               |  <- Total memory allocated by OS
└─────────────────────────────┘



⭐ Key Takeaways

Stack: small, fast, stores primitives & references

Heap: large, dynamic, stores objects & closures

Buffers / TypedArray: raw binary, outside V8 heap

External: memory used by C++ modules

RSS: total memory used by Node process

Closures / private fields: hidden heap memory

Libuv: event loop, async I/O memory

V8 internals: engine optimizations, invisible to JS

