import React from "react";
import "./WallOfWeiners.css";

export const User = ({ user }) => {
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
};
