erfect 👍
Short-circuit patterns are very important for clean code, performance, and interviews in JavaScript.

Below is a complete, practical cheat-sheet 👇

🔑 What is Short-Circuiting?

Logical operators stop evaluating as soon as the result is known.

Operator	Stops When

| Operator | Stops When                                   |   |                        |
| -------- | -------------------------------------------- | - | ---------------------- |
| `        |                                              | ` | First **truthy** value |
| `&&`     | First **falsy** value                        |   |                        |
| `??`     | First **non-nullish** (`null` / `undefined`) |   |                        |



1️⃣ Default Value Pattern (||)
const name = userName || "Guest";

Problem
const count = 0 || 10; // ❌ 10 (wrong)

Fix → Use ??
const count = 0 ?? 10; // ✅ 0

2️⃣ Function Fallback Pattern
const handler = customHandler || defaultHandler;
handler();

3️⃣ Conditional Execution (&&)
isLoggedIn && showDashboard();


Equivalent to:

if (isLoggedIn) showDashboard();

4️⃣ Guard Clause Pattern (🔥 Interview Favorite)
function save(user) {
  user && user.id && sendToDB(user);
}


Modern:

user?.id && sendToDB(user);

5️⃣ Early Return Pattern
function process(data) {
  if (!data) return;
  // logic continues
}


Short-circuit style:

data || return; // ❌ invalid (just conceptual)

6️⃣ Safe Property Access (Before optional chaining)
const city = user && user.address && user.address.city;


Modern:

const city = user?.address?.city;

7️⃣ Lazy Evaluation (Performance Boost)
isHeavy && doHeavyCalculation();


✔ doHeavyCalculation() runs only if needed

8️⃣ Multiple Conditions Chain
user && user.isAdmin && user.permissions.includes("WRITE") && allow();


Stops immediately if any condition fails.

9️⃣ Return Value Pattern
const result = isValid && compute();


false → result = false

true → result = compute()

🔟 Short-Circuit Assignment (||= &&= ??=)
config.port ||= 3000;
config.cache ??= new Map();

⚠️ Dangerous Patterns (Know This!)
❌ Hidden Bugs with ||
const page = query.page || 1; // 0 breaks

❌ Side Effects
a && b(); // b() never runs if a is falsy

🧠 Truthy / Falsy Reminder

Falsy values:

false, 0, "", null, undefined, NaN


Everything else → truthy

🎯 Interview One-Liners

|| → first truthy

&& → first falsy

?? → first non-nullish

Logical operators return operands, not booleans

🔥 Real-World Examples (Node.js / React)
React conditional render
isLoading && <Spinner />

Node.js config
const PORT = process.env.PORT ?? 3000;

🧩 Mental Model
A || B → if A truthy → return A
A && B → if A falsy → return A
A ?? B → if A != null → return A


If you want next:
🚀 Short-circuit vs if-else (performance)
🚀 Operator precedence traps
🚀 Short-circuit + async pitfalls
🚀 Real interview trick questions

Just say 🔥

🚀 Short-circuit + async pitfalls

Perfect topic 🔥
Short-circuit + async pitfalls are a very common source of bugs in real Node.js / React code and are favorite interview traps.

🧠 Core Rule (Memorize This)

Short-circuiting happens before await resolves.

Logical operators do NOT wait for Promises.

1️⃣ && with async (❌ VERY COMMON BUG)
isAuth && fetchUser();

What people think

“fetchUser runs after auth check”

Reality
isAuth && Promise


If isAuth is true, it returns a Promise

But ❌ nothing awaits it

Fix
if (isAuth) {
  await fetchUser();
}

2️⃣ await with && (⚠️ Precedence Trap)
await isAuth && fetchUser();

Parsed as:
(await isAuth) && fetchUser();


isAuth → boolean

fetchUser() returns Promise

❌ Promise not awaited

Correct
if (await isAuth) {
  await fetchUser();
}

3️⃣ || with async fallback (❌ DOES NOT WORK)
const data = await getCache() || await getDB();

Bug

If getCache() returns a Promise (truthy)

|| stops → DB never runs

Correct
const cache = await getCache();
const data = cache || await getDB();

4️⃣ ?? is NOT async-safe either
const data = await cache ?? await fetchDB();


Parsed as:

(await cache) ?? fetchDB(); // ❌ DB not awaited

Fix
const data = (await cache) ?? (await fetchDB());

5️⃣ Short-circuit returns a Promise (surprise)
const result = isValid && asyncFn();
console.log(result);

Output
Promise { <pending> }

Fix
const result = isValid ? await asyncFn() : null;

6️⃣ React Conditional Rendering Bug ⚛️
{isLoggedIn && fetchUser()}


❌ fetchUser() runs during render
❌ Promise returned → ignored
❌ Side effects inside render

Correct
useEffect(() => {
  if (isLoggedIn) fetchUser();
}, [isLoggedIn]);

7️⃣ Error Handling Pitfall
isAuth && await login();


If isAuth is false → no error

But ❌ hard to debug, unreadable

Preferred
if (!isAuth) return;
await login();

8️⃣ Multiple async short-circuit chain (❌ unreadable)
user && user.isAdmin && await loadSecrets();

DO NOT DO THIS
Do this instead
if (user?.isAdmin) {
  await loadSecrets();
}

🧠 Golden Rules (Interview Gold ⭐)
❌ Don’t
condition && await fn();
await a || await b;
await a && b();

✅ Do
if (condition) await fn();

const aVal = await a();
const result = aVal || await b();

🧩 Mental Model
Short-circuit → evaluates immediately
await → pauses only the awaited expression
Promise ≠ resolved value

🎯 One-Line Interview Answer

Logical operators short-circuit synchronously and don’t wait for Promises, which causes async bugs.

If you want next:
🔥 Short-circuit vs if-else (performance & readability)
🔥 Async operator precedence traps
🔥 Event loop + short-circuit timeline
🔥 Real Node.js production bugs caused by this