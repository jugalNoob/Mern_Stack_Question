import React,{useState} from 'react'

function App() {

  const [name , setName]=useState('')
    const [color , setColor]=useState('green')
  const ClickButton=()=>{
    setName(!name)
  }
  const ColoreB=()=>{
    setColor(!color)
  }
  return (
    <div>
      <h1>{name ? 'karan' : 'jugal'}</h1>
    <h1 style={{ color: color ? 'red' : 'green' }}>CoorBoy</h1>

      <button onClick={ClickButton}>click</button>
      <button onClick={ ColoreB}>colorChange</button>
    </div>
  )
}

export default App