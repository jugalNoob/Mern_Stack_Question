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
