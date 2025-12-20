import React from 'react';

function About({ user }) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default About;

// {users.map((user, index) => (
//   <UserCard key={index} {...user} />
// ))}