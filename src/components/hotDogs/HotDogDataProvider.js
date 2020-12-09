import React, { useState } from "react";

export const HotDogContext = React.createContext();

export const HotDogProvider = (props) => {
  const [hotDogs, setHotDogs] = useState([]);

  const getHotDogs = () => {
    return fetch("http://localhost:8088/hotDogs")
      .then((res) => res.json())
      .then(setHotDogs)
      .then((parsedHotDogs) => setHotDogs(parsedHotDogs));
  };

  return (
    <HotDogContext.Provider
      value={{
        hotDogs,
        getHotDogs,
      }}
    >
      {props.children}
    </HotDogContext.Provider>
  );
};
