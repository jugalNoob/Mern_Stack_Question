import React, { useState } from 'react';

function Home() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value          // dynamic key update
    }));
  };

  return (
    <div>
      <form>
        
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="name"
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="email"
        />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />

      </form>

      <hr />

      <h3>Live Preview</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Home;




/// ------------------------>>Seomnd Wokring ----------------->>

mport React, { useId, useState } from 'react'

function Home() {

  const inputId1 = useId()
  const inputId2 = useId()
  const inputId3 = useId()

  // User state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  // Add user (for example: saving or submitting)
  const addAll = (e) => {
    e.preventDefault()
    console.log(user)  // final output
  }

  return (
    <div>
      <form onSubmit={addAll}>

        <label htmlFor={inputId1}>Name</label>
        <input
          id={inputId1}
          type="text"
          placeholder="enter name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <label htmlFor={inputId2}>Email</label>
        <input
          id={inputId2}
          type="email"
          placeholder="enter email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <label htmlFor={inputId3}>Password</label>
        <input
          id={inputId3}
          type="password"
          placeholder="enter password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button type="submit">Save</button>

      </form>
    </div>
  )
}

export default Home
