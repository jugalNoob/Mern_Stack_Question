🔑 Summary of All Promise Types

new Promise() → create promise

.then(), .catch(), .finally()

Promise.resolve() / Promise.reject()

Promise.all() → all must succeed

Promise.allSettled() → wait for all, succeed or fail

Promise.race() → first to settle wins

Promise.any() → first success wins

async/await → modern syntax

Nested promises → possible, but chaining better


let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Operation Successful");
  } else {
    reject("❌ Operation Failed");
  }
});

const Pro=async()=>{

  try {
      let ch=await promise
  console.log(ch)
  } catch (error) {
   
    console.log(error)
  }

}

Pro()


/// --- >Real World Use Case  ---------------------->>>


const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let apiSuccess = Math.random() > 0.5; // 50% chance success/fail

      if (apiSuccess) {
        resolve({ id: 1, name: "Jugal Sharma" });
      } else {
        reject("❌ Failed to fetch user data");
      }
    }, 1000); // simulating 1s delay
  });
};

const Pro = async () => {
  try {
    let user = await fetchUser();
    console.log("User fetched:", user);
  } catch (error) {
    console.log("Error:", error);
  }
};

Pro();



multiple promises with Promise.all  ------>>>


// Simulate API to fetch user
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Jugal Sharma" });
    }, 1000); // 1s delay
  });
};

// Simulate API to fetch posts
const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "Post 1" },
        { id: 102, title: "Post 2" }
      ]);
    }, 1500); // 1.5s delay
  });
};

// Use Promise.all to fetch in parallel
const Pro = async () => {
  try {
    let [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log("✅ User:", user);
    console.log("✅ Posts:", posts);
  } catch (error) {
    console.log("❌ Error:", error);
  }
};

Pro();


// 🧠 Real Use Case

// E-commerce site: fetch user profile + cart items at the same time.

// Social media: fetch user info + feed posts in parallel.

// Dashboard: fetch analytics metrics from multiple APIs in parallel.



// -------------------->>Mutli api promise show row class -->>

🧠 Real-World Use Case

Imagine:

API 1: /user/:id → user profile

API 2: /user/:id/orders → recent orders
👉 Instead of calling them one by one (slow), you call both in parallel with Promise.all.

const Pro = async () => {
  try {
    // Define API calls as promises
    let [userRes, postRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/todos")
    ]);

    // Parse both JSON responses in parallel too
    let [users, posts] = await Promise.all([
      userRes.json(),
      postRes.json()
    ]);

    console.log("✅ Users:", users);
    console.log("✅ Posts:", posts);
  } catch (error) {
    console.log("❌ Error:", error);
  }
};

Pro();



// Utility function to fetch and parse JSON in one step
const fetchJSON = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`❌ Failed to fetch: ${url} (Status ${res.status})`);
  }

  return res.json();
};

const Pro = async () => {
  try {
    // Run both requests in parallel
    const [users, posts] = await Promise.all([
      fetchJSON("https://jsonplaceholder.typicode.com/users"),
      fetchJSON("https://jsonplaceholder.typicode.com/todos")
    ]);

    console.log("👤 Users:", users);
    console.log("📝 Posts:", posts);

    // Example: combine both results
    const enrichedUsers = users.map(user => ({
      ...user,
      todos: posts.filter(todo => todo.userId === user.id)
    }));

    console.log("🔗 Users with Todos:", enrichedUsers);

  } catch (error) {
    console.error("❌ API Error:", error.message);
  } finally {
    console.log("✨ Done fetching data");
  }
};

Pro();
