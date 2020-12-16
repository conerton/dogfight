import React, { useContext, useEffect } from "react";
import { UserHotDogContext } from "./UserHotDogDataProvider";
import { UserHotDog } from "./UserHotDog";
import { HotDogContext } from "../hotDogs/HotDogDataProvider";
import "./UserHotDog.css";

export const UserHotDogList = (props) => {
  const { userHotDogs, getUserHotDogs } = useContext(UserHotDogContext);
  const { hotDogs, getHotDogs } = useContext(HotDogContext);

  useEffect(() => {
    getHotDogs().then(getUserHotDogs);
  }, []);
  console.log("HOTDOGS", hotDogs);

  //added delete button here to try and SOMETHING ANYTHING HELP ME
  return (
    <div className="userHotDogs">
      {userHotDogs.map((uhd) => {
        const hotDogName = hotDogs.find((hd) => hd.id === uhd.hotDogId);
        console.log("HOT DOG NAME", hotDogName);
        return (
          <UserHotDog
            key={uhd.id}
            userHotDog={uhd}
            props={props}
            hotDog={hotDogName}
          />
        );
      })}
      {/* <button>delete</button> */}
    </div>
  );
};
