import React, { useState } from "react";

export const UserHotDogContext = React.createContext();

export const UserHotDogProvider = (props) => {
  const [userHotDogs, setUserHotDog] = useState([]);

  const getUserHotDogs = () => {
    return fetch("http://localhost:8088/userHotDogs")
      .then((res) => res.json())
      .then(setUserHotDog);
  };

  const getUserHotDogsById = (id) => {
    return fetch(`http://localhost:8088/userHotDogs/${id}`).then((res) =>
      res.json()
    );
  };

  const deleteUserHotDog = (userHotDogId) => {
    return fetch(`http://localhost:8088/userHotDogs/${userHotDogId}`, {
      method: "DELETE",
    }).then(getUserHotDogs);
  };

  return (
    <UserHotDogContext.Provider
      value={{
        userHotDogs,
        getUserHotDogs,
        getUserHotDogsById,
        deleteUserHotDog,
      }}
    >
      {props.children}
    </UserHotDogContext.Provider>
  );
};
