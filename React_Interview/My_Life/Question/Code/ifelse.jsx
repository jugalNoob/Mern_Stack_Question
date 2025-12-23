✅ How it works:

Ternary → inline simple if-else: {count >= 5 ? 'True' : count}

Logical AND → renders element only if condition is true

If-Else outside JSX → complex conditions stored in a variable

Switch → handles multiple discrete cases

IIFE → inline function inside JSX for more complex logic

Conditional CSS → changes styling based on state


/// --- >Important roiw class
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



1::multi user condition 

  {num < 18 ? 'Less than 18' :  num === 18 ? 'Equal to 18'  : 'Greater than 18'}

 {num < 13 ? 'Child' : num >= 13 && num < 20 ? 
  'Teenager' : num >= 20 && num < 30 ? 'Young Adult' : num >= 30 && num < 60
    ? 'Adult'
    : 'Senior'}




import React, { useState } from 'react';

// Example components
function WelcomeMessage() {
  return <h1>Welcome! You are logged in.</h1>;
}

function LoginPage() {
  return <h1>Please log in to continue.</h1>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn); // toggle login state
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>

      {/* Conditional rendering */}
      {isLoggedIn ? <WelcomeMessage /> : <LoginPage />}
    </div>
  );
}

export default App;






3️⃣ Using IIFE for complex inline logic
<h1>
  {(() => {
    if (num < 13) return 'Child';
    if (num >= 13 && num < 20) return 'Teenager';
    if (num >= 20 && num < 30) return 'Young Adult';
    if (num >= 30 && num < 60) return 'Adult';
    return 'Senior';
  })()}
</h1>


import React, { useState } from 'react';
import './App.css'; // optional for styling classes

function App() {
  const [count, setCount] = useState(0);

  // 1️⃣ if-else outside JSX
  let displayIfElse;
  if (count === 0) {
    displayIfElse = 'Start (if-else)';
  } else if (count === 5) {
    displayIfElse = 'True (if-else)';
  } else {
    displayIfElse = count;
  }

  // 2️⃣ switch statement
  let displaySwitch;
  switch (count) {
    case 0:
      displaySwitch = 'Start (switch)';
      break;
    case 5:
      displaySwitch = 'True (switch)';
      break;
    default:
      displaySwitch = count;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Conditional Rendering Demo</h2>

      {/* 3️⃣ Ternary operator */}
      <h3>Ternary: {count >= 5 ? 'True' : count}</h3>

      {/* 4️⃣ Logical AND */}
      {count > 5 && <h3>Logical AND: Count is greater than 5</h3>}

      {/* 5️⃣ if-else outside JSX */}
      <h3>If-Else: {displayIfElse}</h3>

      {/* 6️⃣ Switch */}
      <h3>Switch: {displaySwitch}</h3>

      {/* 7️⃣ IIFE / inline function */}
      <h3>
        IIFE: {(() => {
          if (count === 0) return 'Start (IIFE)';
          if (count === 5) return 'True (IIFE)';
          return count;
        })()}
      </h3>

      {/* 8️⃣ Conditional CSS */}
      <h3 className={count >= 5 ? 'green' : 'red'}>
        Conditional CSS: {count}
      </h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
