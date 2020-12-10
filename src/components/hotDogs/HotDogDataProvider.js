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

  return (
    <HotDogContext.Provider
      value={{
        hotDogs,
        getHotDogs,
        getHotDogById,
      }}
    >
      {props.children}
    </HotDogContext.Provider>
  );
};
