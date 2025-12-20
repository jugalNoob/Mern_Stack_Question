📌 Simple Definition

Server Components render on the server and send only HTML + serialized data to the client, not JavaScript.

React Server Components (RSC)

Future React frameworks

🎯 Interview One-Liner

Server Components are React components that run only
 on the server, reduce client-side JavaScript, and
  allow direct access to backend resources.


  🚀 Why Server Components Exist (Big Picture)
Problems in old React (CSR):

Large JS bundles

Slow initial load

Sensitive logic exposed

Server Components solve:

✔️ Smaller JS bundle
✔️ Faster Time to First Byte
✔️ Secure data access
✔️ Better SEO


🧠 Example: Server Component
📁 app/page.js (Server Component by default)
import db from "@/lib/db";

export default async function Page() {
  const users = await db.user.findMany(); // DB access

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}


✔️ Runs on server
✔️ No JS shipped to browser

🧩 Client Component Example

You must explicitly mark it

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}


✔️ Runs in browser
✔️ JS bundle included

⚠️ Rules of Server Components

❌ Cannot use:

useState

useEffect

useRef

window, document

Event handlers (onClick)

✅ Can use:

async / await

Database calls

Environment variables

Backend logic

🧠 How Server + Client Work Together

Server Components can import Client Components

import Counter from "./Counter"; // Client Component

export default function Page() {
  return (
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>
  );
}


❌ Client components cannot import server components

🔄 Client Component vs Server Component

| Feature                         | Server Component | Client Component |
| ------------------------------- | ---------------- | ---------------- |
| Where it runs                   | Server           | Browser          |
| JS sent to browser              | ❌ No             | ✅ Yes            |
| Can use `useState`, `useEffect` | ❌ No             | ✅ Yes            |
| Can access DB / filesystem      | ✅ Yes            | ❌ No             |
| SEO                             | ✅ Excellent      | ⚠️ Depends       |
| Default in Next.js App Router   | ✅ Yes            | ❌ No             |
