import React, { useState } from 'react';
import About from './About';

function Home() {
  const users = [
    { name: 'Jugal', age: 45 },
    { name: 'Rahul', age: 30 },
    { name: 'Anita', age: 25 },
  ];

  // State to hold selected user
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h2>Click a user to see details:</h2>
      {users.map((user, index) => (
        <button key={index} onClick={() => setSelectedUser(user)}>
          {user.name}
        </button>
      ))}

      {/* Pass the selected user to About component */}
      {selectedUser && <About user={selectedUser} />}
    </div>
  );
}

export default Home;


   
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