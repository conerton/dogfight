import React, { useContext, useEffect } from "react";
import { UserHotDogContext } from "./UserHotDogDataProvider";
import { UserHotDog } from "./UserHotDog";
import { HotDogContext } from "../hotDogs/HotDogDataProvider";
import "./UserHotDog.css";

export const UserHotDogList = (props) => {
  const { userHotDogs, getUserHotDogs } = useContext(UserHotDogContext);
  const { hotDogs, getHotDogs } = useContext(HotDogContext);

  //you need to get all hotdogs before you can get user hot dogs to find the name
  useEffect(() => {
    getHotDogs().then(getUserHotDogs);
  }, []);
  console.log("HOTDOGS", hotDogs);

  // if ((userHotDogs.hotDogId.length = 38)) {
  //   userHotDogs.then(() => props.history.push("/wallOfWeiners"));
  // } else {
  //   null;
  // }

  // mapping through userHotDogs from userHotDogProvider to pass in userHotDog, hotDog

  // I am bringing in hotDogs and using the find function to match the hotdog.id and
  //userHotDogId to pass into user hotdogs; in userHotDogs I call hotdog.name to find the name.
  return (
    <div className="userHotDogs">
      <h2 className="userHotDogTitle"> EATEN HOT DOGS</h2>
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
    </div>
  );
};
