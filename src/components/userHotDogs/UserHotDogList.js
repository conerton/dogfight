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

  const currentUser = localStorage.getItem("dogfight_user_id");
  const currentUserHotDogs = userHotDogs.filter(
    (u) => u.userId === +currentUser
  );
  console.log("CURRENT USER", currentUserHotDogs);
  const currentUserPostedHotDogs = currentUserHotDogs.filter(() => {});

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
    </div>
  );
};
