If you want, I can create:

✅ React Router Protected Routes (Auth based)
✅ PrivateRoute component
✅ Role-based routing
✅ Layout components (Nav always shown, others hidden)


⭐ react-router-dom (Best Choice)
✔ Because:

It is made specifically for browsers.

It supports:

BrowserRouter

HashRouter

Link

NavLink

useNavigate

useParams

useLocation

Outlet

It includes everything from react-router plus browser features.



npm i react-router-dom

// --------------------->>>>Error  ---------------->
import { useNavigate } from 'react-router-dom'
function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}
export default Error
<Route path="*" element={<Error />} />



::::::::::::::::::: Nav Add Link --------------------->>

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Nav from './page/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />   {/* Navbar should be here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { NavLink } from 'react-router'
function Nav() {
  return (
    <div>
    <br/>

        <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/about'>about</NavLink>
    </div>
  )
}

export default Nav

/// ----------------->>Use Params --------------->>
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <br />
      <NavLink to="/">Home</NavLink>
      <br />
      {/* Give real ID Value */}
      <NavLink to="/about/10">About</NavLink>
      <Outlet />
    </div>
  )
}
export default Nav
import React from 'react'
import { useParams } from 'react-router-dom'
function About() {
  const { id } = useParams();
  return (
    <div>
      <h1>About Page</h1>
      <p>ID: {id}</p>
    </div>
  )
}
export default About

    <Route path="/about/:id" element={<About />} />

/// ----------------->>>UseNaviation ...............

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  const { id } = useParams();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>ID: {id}</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}

export default About;


/// ---------------->>Location.jsx---------------------------->>

import React from 'react'
import { useParams , useNavigate,useLocation } from 'react-router-dom'


function About() {
const gotohome=useNavigate()

  const { id } = useParams();

    const location = useLocation();

  console.log(location);

  const ClickB=()=>{
    gotohome('/')
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>ID: {id}</p>
            <p>Current Path: {location.pathname}</p>
            <p>current pathkey {location.key}</p>
      <button onClick={ClickB}>goHome</button>
    </div>
  )
}

export default About


| Scenario                       | Use?  |
| ------------------------------ | ----- |
| Read current URL               | ✅ Yes |
| Read query params              | ✅ Yes |
| Read navigation state          | ✅ Yes |
| Highlight active menu          | ✅ Yes |
| Track page changes             | ✅ Yes |
| Redirect based on current page | ✅ Yes |



1️⃣ What is a Private Route?

A private route is a route that only allows access if a user is authenticated.

Normal route: Anyone can access /home, /about, etc.

Private route: Only logged-in users can access, otherwise redirected (e.g., to /login).

Think of it like a secured page.

2️⃣ Example
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isAuth }) {
  // If user is authenticated, render the component
  // Otherwise, redirect to login page
  return isAuth ? children : <Navigate to="/login" />;
}


Usage:

<Route 
  path="/dashboard" 
  element={
    <PrivateRoute isAuth={userLoggedIn}>
      <Dashboard />
    </PrivateRoute>
  } 
/>


Dashboard is protected.

If userLoggedIn is false, user is redirected to /login.