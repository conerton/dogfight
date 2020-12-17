import React, { useContext, useEffect } from "react";
import { WallOfWeinersContext } from "./WallOfWeinersDataProvider";
// import { UserHotDogContext } from "../userHotDogs/UserHotDogDataProvider";
import { User } from "./WallOfWeiners";
import "./WallOfWeiners.css";

export const WallOfWeinersList = (props) => {
  const { users, getUsers, getUserHotDogs } = useContext(WallOfWeinersContext);
  // const { userHotDog, getUserHotDogById } = useContext(UserHotDogContext);
  useEffect(() => {
    getUsers();
    getUserHotDogs();
  }, []);

  return (
    <div className="wallOfWeiners_List">
      {users.map((u) => {
        // const userOnWall = userHotDogs.find((uhd) => uhd.userId === u.id);

        return <User key={u.id} user={u} props={props} />;
      })}
    </div>
  );
};
//this is a comment
