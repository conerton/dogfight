import React, { useContext, useEffect } from "react";
import { UserHotDogContext } from "./UserHotDogDataProvider";
import { UserHotDog } from "./UserHotDog";
import "./UserHotDog.css";

export const UserHotDogList = (props) => {
  const { userHotDogs, getUserHotDogs } = useContext(UserHotDogContext);

  useEffect(() => {
    getUserHotDogs();
  }, []);

  //added delete button here to try and SOMETHING ANYTHING HELP ME
  return (
    <div className="userHotDogs">
      {userHotDogs.map((uhd) => (
        <UserHotDog key={uhd.id} userHotDog={uhd} props={props} />
      ))}
      {/* <button>delete</button> */}
    </div>
  );
};
