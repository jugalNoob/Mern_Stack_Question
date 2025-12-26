In React, data flows top → down.
So:

Parent → Child → ✅ direct via props

Child → Child → ❌ not direct
👉 must go through the parent

Let’s break it clearly.

🔹 Scenario

You want:

Parent
 ├── ChildA
 └── ChildB


ChildA sends data → ChildB

✅ Correct React Pattern (Lifting State Up)
1️⃣ Parent holds the shared state
function Parent() {
  const [data, setData] = React.useState("");

  return (
    <>
      <ChildA sendData={setData} />
      <ChildB receiveData={data} />
    </>
  );
}

2️⃣ ChildA sends data to Parent
function ChildA({ sendData }) {
  return (
    <button onClick={() => sendData("Hello from ChildA")}>
      Send Data
    </button>
  );
}

3️⃣ ChildB receives data from Parent
function ChildB({ receiveData }) {
  return <h2>{receiveData}</h2>;
}

🧠 How to explain in interview (IMPORTANT)

👉 One-line explanation (Interview ready):

“In React, sibling components communicate by lifting state up to the common parent and passing data via props.”

🔥 Why React works this way

Predictable data flow

Easier debugging

Avoids hidden side effects

🚫 What you should NOT do

❌ Direct child-to-child prop passing
❌ Modifying sibling state directly

🧠 Alternative approaches (when app grows)
🔹 Context API

Use when props drilling becomes messy.

🔹 Redux / Zustand / Recoil

Use for global or large-scale state sharing.

🏁 Mental Model (Remember this)
Child → Parent (callback)
Parent → Child (props)


If you want, I can also explain:

useCallback optimization

Context API version

Redux version

Interview follow-up questions on this topic