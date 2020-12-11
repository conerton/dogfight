import React, { useState } from "react";

export const HotDogContext = React.createContext();

export const HotDogProvider = (props) => {
  const [hotDogs, setHotDogs] = useState([]);

  const getHotDogs = () => {
    return fetch("http://localhost:8088/hotdogs")
      .then((res) => res.json())
      .then(setHotDogs)
      .then((hd) => console.log(hd));
  };

  const getHotDogById = (id) => {
    return fetch(`http://localhost:8088/hotdogs/${id}`).then((res) =>
      res.json()
    );
  };

  const addHotDog = (note) => {
    return fetch(`http://localhost:8088/userHotDogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(getHotDogs);
  };

  return (
    <HotDogContext.Provider
      value={{
        hotDogs,
        getHotDogs,
        getHotDogById,
        addHotDog,
      }}
    >
      {props.children}
    </HotDogContext.Provider>
  );
};
