starvation


This is real-world + interview + production knowledge.

I’ll explain HOW TO IMPROVE GC in 3 layers:

✅ With code (developer level)

⚙️ Without code (runtime / infra level)

🧠 Advanced / internal tricks (senior+ level)

1️⃣ Improve GC WITH CODE (Most Important)
🔴 1. Reduce object creation (BIGGEST WIN)
❌ Bad
function handler(req) {
  return {
    a: req.id,
    b: req.name
  }
}


Creates a new object every request

✅ Better (reuse objects)
const response = { a: null, b: null }

function handler(req) {
  response.a = req.id
  response.b = req.name
  return response
}


✔ Fewer allocations
✔ Less young-gen GC

🔴 2. Avoid large objects inside closures
❌ Bad
function init() {
  const big = new Array(1e6)
  return () => console.log('hi')
}


GC can’t collect big

✅ Fix
function init() {
  let big = new Array(1e6)
  const fn = () => console.log('hi')
  big = null
  return fn
}

🔴 3. Clear references manually

GC won’t free memory until references are gone

let cache = {}
cache.user = hugeData

// later
cache.user = null


✔ Makes object unreachable

🔴 4. Use streaming instead of buffering
❌ Bad (huge memory spike)
const data = fs.readFileSync('big.txt')

✅ Good
fs.createReadStream('big.txt').pipe(res)


✔ Less heap usage
✔ Less old-gen GC

🔴 5. Limit in-memory cache size
❌ Bad
const cache = {}

✅ Good
const LRU = require('lru-cache')

const cache = new LRU({
  max: 500
})

🔴 6. Avoid accidental globals
function test() {
  data = {} // ❌ global
}


Use:

let data = {}


Globals = GC roots = memory never freed ❌

🔴 7. Break long tasks (give GC time)
function heavyTask(items) {
  let i = 0
  function process() {
    while (i < items.length && i % 1000 !== 0) {
      work(items[i++])
    }
    if (i < items.length) {
      setImmediate(process)
    }
  }
  process()
}


✔ Prevents event loop starvation
✔ GC runs between chunks

2️⃣ Improve GC WITHOUT CODE (Runtime / Infra)
⚙️ 1. Increase heap size (Node.js)
node --max-old-space-size=4096 app.js


✔ Reduces frequent old-gen GC
❌ Does NOT fix memory leaks

⚙️ 2. Enable GC tracing (debugging)
node --trace-gc app.js


Shows:

GC frequency

Pause time

Young vs old GC

⚙️ 3. Use latest Node.js version

New Node.js = better V8 GC:

Faster

Less pause

Better concurrent GC

⚙️ 4. Horizontal scaling

Instead of one big heap:

1 process (8GB heap) ❌
4 processes (2GB each) ✅


✔ Smaller heaps = faster GC
✔ Better latency

⚙️ 5. Container memory limits (IMPORTANT)

Set correct limits:

resources:
  limits:
    memory: "2Gi"


Too low → GC thrashing
Too high → slow old-gen GC

3️⃣ Advanced / Senior-Level GC Optimization
🧠 1. Generational hypothesis awareness

Most objects die young

So:

Allocate objects inside functions

Let them die quickly

Avoid promoting to old-gen

🧠 2. Object shape stability (Hidden Classes)
❌ Bad
obj.a = 1
obj.b = 2
delete obj.a

✅ Good
obj = { a: 1, b: 2 }


Stable shapes → faster GC & execution

🧠 3. Avoid polymorphic objects
function create(flag) {
  return flag ? { a: 1 } : { b: 2 }
}


Creates multiple shapes ❌

Better:

{ a: null, b: null }

🧠 4. Weak references (GC-friendly)
const cache = new WeakMap()


✔ GC automatically removes keys
✔ Perfect for metadata caching

🧠 5. Heap snapshot analysis

Use Chrome DevTools / Node inspector:

Compare snapshots

Look for retained objects

Identify GC roots

🧠 6. Avoid microtask starvation
// ❌ blocks GC
Promise.resolve().then(loop)


Use:

setImmediate(loop)

🎯 Interview Cheat Sheet



| Problem        | Fix                  |
| -------------- | -------------------- |
| Frequent GC    | Reduce allocations   |
| Long GC pause  | Smaller heaps        |
| Memory leak    | Remove references    |
| Latency spikes | Streaming + chunking |
| Heap overflow  | Scale horizontally   |


🔥 One-liner (Interviewer killer)

“To improve GC, reduce allocations, release references early, stream data, avoid long-lived closures, and tune heap size. GC tuning can reduce pauses but cannot fix memory leaks.”