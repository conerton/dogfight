import React, { useState } from "react";

export const UserHotDogContext = React.createContext();

export const UserHotDogProvider = (props) => {
  //this is the set all hotDogs
  const [userHotDogs, setUserHotDogs] = useState([]);
  //defined state varible for single user hotdog with hotdog object from the expand query parameter from the user hotdog fetch
  const [userHotDog, setUserHotDog] = useState({ hotDog: {} });

  const user = localStorage.getItem("app_user");
  const getUserHotDogs = () => {
    return fetch(
      `http://localhost:8088/userHotDogs/?userId=${user}&_expand=hotDog`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${localStorage.getItem("app_user")}`,
        },
      }
    )
      .then((res) => res.json())
      .then(setUserHotDogs);
  };

  const getUserHotDogsById = (id) => {
    return fetch(`http://localhost:8088/userHotDogs/${id}?_expand=hotDog`, {
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

  const deleteUserHotDog = (userHotDogId) => {
    return fetch(`http://localhost:8088/userHotDogs/${userHotDogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    }).then(getUserHotDogs);
  };

  const editUserHotDog = (favHotDog) => {
    return fetch(`http://localhost:8088/userHotDogs/${favHotDog.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
      body: JSON.stringify(favHotDog),
    }).then(getUserHotDogs);
  };

  return (
    <UserHotDogContext.Provider
      value={{
        userHotDogs,
        userHotDog,
        getUserHotDogs,
        getUserHotDogsById,
        deleteUserHotDog,
        editUserHotDog,
      }}
    >
      {props.children}
    </UserHotDogContext.Provider>
  );
};
