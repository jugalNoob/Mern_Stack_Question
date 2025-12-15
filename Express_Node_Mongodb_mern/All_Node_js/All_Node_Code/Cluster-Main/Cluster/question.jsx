🟢 BASIC CLUSTER QUESTIONS
1️⃣ What is cluster in Node.js?

Cluster is a Node.js module that allows you to create multiple worker processes to use multiple CPU cores.

2️⃣ Why do we need cluster?

Node.js is single-threaded and uses only one CPU core.
Cluster allows Node.js to handle more requests in parallel.

3️⃣ Does cluster create threads?

❌ No
✔ It creates multiple processes

Each process has:

Its own event loop

Its own memory

4️⃣ How many cluster workers should we create?

👉 Usually equal to:

os.cpus().length

5️⃣ Does master process handle requests?

❌ No
✔ Only worker processes handle HTTP requests

🟡 INTERMEDIATE QUESTIONS
6️⃣ How do multiple workers listen on the same port?

OS kernel handles port sharing

Node uses round-robin load balancing (Linux)

7️⃣ What happens if a worker crashes?

Master detects exit

Master restarts worker automatically

8️⃣ Do cluster workers share memory?

❌ No
✔ Memory is isolated

Use:

Redis

Database

IPC messaging

9️⃣ What is IPC in cluster?

IPC = Inter-Process Communication

Used for:

Message passing

Event signaling

🔟 Can cluster improve response time?

❌ Single request → NO
✔ Overall throughput → YES

🔴 ADVANCED CLUSTER QUESTIONS

1️⃣1️⃣ Cluster vs Worker Threads


| Cluster            | Worker Threads           |
| ------------------ | ------------------------ |
| Multiple processes | Same process             |
| Separate memory    | Shared memory            |
| Good for HTTP      | Good for CPU-heavy tasks |


1️⃣2️⃣ Cluster vs PM2

| Cluster          | PM2                |
| ---------------- | ------------------ |
| Node core module | Process manager    |
| Manual setup     | Auto restart, logs |
| Low-level        | Production-ready   |



1️⃣3️⃣ Cluster and DB connection pooling issue?

Each worker has its own pool.

⚠️ Risk:

Workers × Pool size = Total DB connections

1️⃣4️⃣ Is cluster stateless or stateful?

Workers → Stateless

Cluster manager → Stateful internally

1️⃣5️⃣ Can cluster be used in microservices?

✔ Yes
But:

Prefer container orchestration (K8s)

Cluster still useful inside pods

❓ TRICKY INTERVIEW QUESTIONS
1️⃣6️⃣ Is cluster required if using Docker?

❌ Not required
✔ Containers scale horizontally

1️⃣7️⃣ Is cluster needed in serverless?

❌ No
(Serverless manages scaling)

1️⃣8️⃣ Can cluster share variables?

❌ No
Each worker has its own memory

1️⃣9️⃣ Can cluster handle CPU-heavy tasks?

⚠️ Limited
Better use Worker Threads

2️⃣0️⃣ How does cluster affect memory?

Memory usage increases

Each worker loads app separately

🧠 SYSTEM DESIGN QUESTIONS
2️⃣1️⃣ Cluster + Load Balancer?
Nginx
 ↓
Node Cluster
 ↓
DB / Redis

2️⃣2️⃣ Cluster + Redis usage?

Session sharing

Cache

Pub/Sub

2️⃣3️⃣ Can cluster replace Kubernetes?

❌ No
✔ Cluster = single machine
✔ K8s = multi-machine

🎯 INTERVIEW ONE-LINERS (🔥 VERY IMPORTANT)

✔ Cluster uses all CPU cores
✔ Each worker is a separate process
✔ No shared memory
✔ Improves throughput, not latency
✔ Master manages workers

🧪 CODING QUESTION (COMMON)

Create cluster-based HTTP server

👉 You already know this one 👍



🔥 Cluster Round-Robin Load Balancing (Simple Meaning)
🧠 First: What is Round-Robin?

Round-robin = turn by turn

Example:

Worker A → Worker B → Worker C → Worker A → ...


Each new request goes to the next worker.

🧩 In Node.js Cluster

When multiple workers listen on the same port:

👉 Node.js (or OS) distributes incoming requests among workers
👉 This is called round-robin load balancing

❓ “1 request at 1 user” — What really happens?
🚨 Important point (INTERVIEW GOLD)

Round-robin works per REQUEST, not per USER

🧪 Example (3 workers)
Worker 1
Worker 2
Worker 3

User sends requests:


| Request            | Goes to  |
| ------------------ | -------- |
| User A – Request 1 | Worker 1 |
| User A – Request 2 | Worker 2 |
| User A – Request 3 | Worker 3 |
| User A – Request 4 | Worker 1 |


⚠️ Same user ≠ same worker

❌ Common misunderstanding

❌ “One user is always handled by one worker”
✔ WRONG

✔ Requests are distributed independently

🧠 Why Node.js cluster behaves like this?

Because:

HTTP is stateless

Cluster does not track users

Workers do not share memory

🔥 Then how do we keep user data consistent?
Use external storage

Redis

Database

JWT (stateless auth)

Example:

User → Any Worker → Redis/DB

🟡 When does ONE user go to SAME worker?

Only if you use:

Sticky sessions

Load balancer session affinity

Example tools:

Nginx sticky sessions

PM2 sticky mode

🧪 Cluster default behavior summary


| Question                | Answer      |
| ----------------------- | ----------- |
| Load balancing type     | Round-robin |
| Based on                | Request     |
| User tracking           | ❌ No        |
| Same user → same worker | ❌ No        |
| Stateless               | ✔ Yes       |




⚙ OS vs Node handling

Linux → Node.js does round-robin

Windows → OS handles balancing

(But behavior is similar)

🎯 Interview One-Liners (MEMORIZE)

✔ Cluster distributes requests, not users
✔ Round-robin is per request
✔ Same user can hit different workers
✔ Use Redis for shared state
✔ Sticky sessions are optional

🚀 Real-world architecture
Browser
  ↓
Load Balancer (Nginx)
  ↓
Node.js Cluster (RR)
  ↓
Redis / DB

🔥 TRICKY FOLLOW-UP INTERVIEW QUESTION
❓ Does round-robin guarantee equal load?

❌ No (slow workers can still be overloaded)

If you want next:

🔥 Sticky sessions explained

🧠 Cluster + Redis session design

⚔️ Cluster vs Nginx load balancing

🚀 High-traffic Node.js design





If you want next:

🔥 Cluster MCQs

🧠 Cluster system design diagram

⚔️ Cluster vs Worker Threads deep dive

🚀 Node.js high-traffic architecture

Just tell me 🚀