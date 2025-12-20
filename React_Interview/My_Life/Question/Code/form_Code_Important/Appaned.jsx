import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");  
  const [names, setNames] = useState([]);            

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert input string → array
    const list = inputValue.split(",").map(item => item.trim());

    // Append new values (do NOT delete old)
    setNames(prev => [...prev, ...list]);
    console.log(names)

    setInputValue(""); // Clear input if you want
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter comma separated names"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br /><br />
        <button type="submit">Click</button>
      </form>

      <h3>Final Array:</h3>
      <pre>{JSON.stringify(names)}</pre>
    </div>
  );
}

export default Home;
