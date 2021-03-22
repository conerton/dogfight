import React, { useState } from "react";

export const WallOfWeinersContext = React.createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userHotDog, setUserHotDog] = useState({ user: {} });
  const [userHotDogs, setUserHotDogs] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:8000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    })
      .then((res) => res.json())
      .then(setUsers);
  };

  const getUserHotDogs = () => {
    return fetch(`http://localhost:8000/user_hot_dogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    })
      .then((res) => res.json())
      .then(setUserHotDogs);
  };

  const getHotDogUserById = (id) => {
    return fetch(`http://localhost:8000/user_hot_dogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    })
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
