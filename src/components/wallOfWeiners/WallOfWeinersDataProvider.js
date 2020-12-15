import React, { useState } from "react";

export const WallOfWeinersContext = React.createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  return (
    <WallOfWeinersContext.Provider
      value={{
        users,
        getUsers,
      }}
    >
      {props.children}
    </WallOfWeinersContext.Provider>
  );
};
