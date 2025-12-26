import React, { createContext, useContext } from "react";

const UserContext = createContext();

function DeepChild() {
  const user = useContext(UserContext);
  return <p>Hello, {user.name}</p>;
}

function Parent() {
  const user = { name: "Jugal" };
  return (
    <UserContext.Provider value={user}>
      <DeepChild />
    </UserContext.Provider>
  );
}
