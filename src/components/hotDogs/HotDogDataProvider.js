import React, { useState } from "react";

export const HotDogContext = React.createContext();

export const HotDogProvider = (props) => {
  const [hotDogs, setHotDogs] = useState([]);

  const getHotDogs = () => {
    return fetch("http://localhost:8088/hotDogs")
      .then((res) => res.json())
      .then(setHotDogs);
  };

  const getHotDogById = (id) => {
    return fetch(`http://localhost:8088/hotDogs/${id}`).then((res) =>
      res.json()
    );
  };

  const getHotDogIdName = (hotDogId) => {
    return fetch(`http://localhost:8088/hotDogs/?hotDogId=${hotDogId}`);
  };

  const addHotDog = (note, userId, hotDogId, dateCompleted, isFavorite) => {
    return fetch(`http://localhost:8088/userHotDogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    return fetch("http://localhost:8088/userHotDogs")
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
