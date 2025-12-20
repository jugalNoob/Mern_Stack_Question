import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Nav() {

    

  return (
    <div>
      <br />

      <NavLink to="/">Home</NavLink>
      <br />

      {/* Give real ID Value */}
      <NavLink to="/about">About</NavLink>

      <Outlet />
    </div>
  )
}

export default Nav
