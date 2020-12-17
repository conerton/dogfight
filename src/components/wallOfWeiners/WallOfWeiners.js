import React, { useContext, useEffect } from "react";

import "./WallOfWeiners.css";
import { WallOfWeinersContext } from "./WallOfWeinersDataProvider";

export const User = ({ user }) => {
  const { userHotDogs } = useContext(WallOfWeinersContext);
  const filteredHotDogs = userHotDogs.filter((uhd) => uhd.userId === user.id);

  console.log("HEATH MAGIC", filteredHotDogs, user);
  if (filteredHotDogs.length > 38) {
    return (
      <section className="wallOfWeiners_UserCard">
        <ul className="userCard">
          <li>Name: {user.firstName}</li>
          <li>Time it took to Complete: </li>
          <li>Favorite Hot Dog: </li>
          <li>Date Complete: </li>
        </ul>
      </section>
    );
  } else {
    return null;
  }
};
