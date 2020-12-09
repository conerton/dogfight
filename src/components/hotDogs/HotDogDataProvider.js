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
