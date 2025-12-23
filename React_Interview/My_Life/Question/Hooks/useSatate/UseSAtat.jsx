[Initial Render]
       |
       v
  useState -> value stored in state -> changing it triggers re-render
       |
       v
  useRef  -> value stored in .current -> changing it does NOT trigger re-render
       |
       v
  useEffect -> runs after render -> can read/update state/ref



🟢 Common Interview Question

Q: Why do we use useState instead of storing variables directly?
A: Because normal variables do NOT trigger UI updates.
Only useState re-renders the component when value changes.


⭐ What is useState in React?

useState is a React Hook used to:
✔ store values
✔ update UI
✔ re-render components when data changes

It gives you state inside functional components.



import React, { useState } from 'react'

function App() {

const [users, setUsers] = useState([
  { id: 1, name: "Jugal" },
  { id: 2, name: "Karan" }
])

if (users.length === 0) {
  return <h1>No users found</h1>
}

  return (
    <div>
   


   {users.map(user => (
  <h2 key={user.id}>{user.id}: 
  {user.name}</h2>
))}
    </div>
  )
}

export default App



   {users.length === 0 ? (
      <h1>No users found</h1>
    ) : (
      users.map(user => (
        <h2 key={user.id}>{user.id}: {user.name}</h2>
      ))
    )}



    /// --------------Form In SetUstatus -------------------->>

    import React, { useState } from 'react'
    
    function App() {
    
      const [users, setUsers] = useState("")
    
      const FormChange = (e) => {
        e.preventDefault() // stop form refresh
        console.log(users)
      }
    
      return (
        <div>
    
          <form onSubmit={FormChange}>
    
            <input 
              type="text" 
              value={users} 
              onChange={(e) => setUsers(e.target.value)} 
              placeholder="Enter name"
            />
    
            <button type="submit">Submit</button>
            
          </form>
    
        </div>
      )
    }
    
    export default App
    