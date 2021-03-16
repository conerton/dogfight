import React, { useState } from "react";

export const HotDogContext = React.createContext();

export const HotDogProvider = (props) => {
  const [hotDogs, setHotDogs] = useState([]);

  const getHotDogs = () => {
    return fetch("http://localhost:8000/hot_dogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    })
      .then((res) => res.json())
      .then(setHotDogs);
  };

  const getHotDogById = (id) => {
    return fetch(`http://localhost:8000/hot_dogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    }).then((res) => res.json());
  };

  const getHotDogIdName = (hotDogId) => {
    return fetch(`http://localhost:8000/hot_dogs/?hotDogId=${hotDogId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    });
  };

  const addHotDog = (note, userId, hotDogId, dateCompleted, isFavorite) => {
    return fetch(`http://localhost:8088/userHotDogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
      body: JSON.stringify(
        note,
        parseInt(userId),
        parseInt(hotDogId),
        dateCompleted,
        isFavorite
      ),
    }).then(getHotDogs);
  };

  const getUserHotDogs = () => {
    return fetch("http://localhost:8088/user_hot_dogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("app_user")}`,
      },
    })
      .then((res) => res.json())
      .then(setHotDogs);
  };

  return (
    <HotDogContext.Provider
      value={{
        hotDogs,
        getHotDogs,
        getHotDogById,
        addHotDog,
        getUserHotDogs,
        getHotDogIdName,
      }}
    >
      {props.children}
    </HotDogContext.Provider>
  );
};
