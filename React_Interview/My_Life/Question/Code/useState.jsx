import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 5) {
      setCount(0); // reset after reaching 5
    } else {
      setCount(count + 1); // increment
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count === 5 ? 'true' : count}</h1>
      <button onClick={handleClick}>Click Mejugal</button>
    </div>
  );
}

export default App;
