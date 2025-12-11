import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");  
  const [names, setNames] = useState([]);            

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert input string → array
    const list = inputValue.split(",").map(item => item.trim());
setNames(prev => [...prev, ...inputValue.split(",")]);
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


// ###




  // setState({provider , signer , address})   


   
//       {isLoaded ? (
//         data && data.user ? (
//           <>
//           <div className="users">

       
//             <h1>{data.user.name}</h1>
//             <h1>{data.user.email}</h1>
//             <h1>{data.user.age}</h1>
//             <h1>{data.user.password}</h1>
//             <h1>{data.user.gender}</h1>
//             <h3>{data.io}</h3>
   
//             </div>
//           </>
//         ) : (
//           <h1>User data not available</h1>
//         )
//       ) : (
//         <h1>Loading...</h1>
//       )}