import React, { useState } from "react";

export const WallOfWeinersContext = React.createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userHotDog, setUserHotDog] = useState({ user: {} });
  const [userHotDogs, setUserHotDogs] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  const getUserHotDogs = () => {
    return fetch(`http://localhost:8088/userHotDogs`)
      .then((res) => res.json())
      .then(setUserHotDogs);
  };

  const getHotDogUserById = (id) => {
    return fetch(`http://localhost:8088/userHotDogs/${id}?_expand=user`)
      .then((res) => res.json())
      .then(setUserHotDog);
  };

  return (
    <WallOfWeinersContext.Provider
      value={{
        users,
        userHotDog,
        userHotDogs,
        getUserHotDogs,
        getHotDogUserById,
        getUsers,
      }}
    >
      {props.children}
    </WallOfWeinersContext.Provider>
  );
};
