import React, { useContext, useEffect } from "react";
import { HotDogContext } from "./HotDogDataProvider";
import { UserHotDogContext } from "../userHotDogs/UserHotDogDataProvider";
import { HotDog } from "./HotDog";
import "./HotDog.css";

export const HotDogList = () => {
  const { hotDogs, getHotDogs } = useContext(HotDogContext);
  const { userHotDogs, getUserHotDogs } = useContext(UserHotDogContext);
  useEffect(() => {
    console.log("List");
    getHotDogs();
    getUserHotDogs();
  }, []);

  //maps through the array of hotDogs from HotDogProvider to pass hotDog to HotDog

  if (hotDogs.id === userHotDogs.hotDogId) {
    return (
      <div className="hotDogs">
        {hotDogs.map((hd) => (
          <HotDog key={hd.id} hotDog={hd} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};
