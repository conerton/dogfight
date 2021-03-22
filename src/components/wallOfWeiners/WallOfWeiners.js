import React, { useContext, useEffect } from "react";

import "./WallOfWeiners.css";
import { WallOfWeinersContext } from "./WallOfWeinersDataProvider";

export const User = ({ user }) => {
  const { userHotDogs } = useContext(WallOfWeinersContext);
  const filteredHotDogs = userHotDogs.filter((uhd) => uhd.user.id === user.id);
  console.log("USER HOT DOGS", userHotDogs);
  console.log("FILTERED HOT DOGS", filteredHotDogs);
  console.log("USER", user);
  if (filteredHotDogs.length > 37) {
    return (
      <section className="wallOfWeiners_UserCard">
        <ul className="userCard">
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          {/* <li>Time it took to Complete: </li>
          <li>Favorite Hot Dog: </li>
          <li>Date Complete: </li> */}
        </ul>
      </section>
    );
  } else {
    return null;
  }
};
//test
