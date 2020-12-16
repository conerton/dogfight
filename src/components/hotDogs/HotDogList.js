import React, { useContext, useEffect } from "react";
import { HotDogContext } from "./HotDogDataProvider";
import { HotDog } from "./HotDog";
import "./HotDog.css";

export const HotDogList = () => {
  const { hotDogs, getHotDogs } = useContext(HotDogContext);

  useEffect(() => {
    console.log("List");
    getHotDogs();
  }, []);

  //maps through the array of hotDogs from HotDogProvider to pass hotDog to HotDog
  return (
    <div className="hotDogs">
      {hotDogs.map((hd) => (
        <HotDog key={hd.id} hotDog={hd} />
      ))}
    </div>
  );
};
