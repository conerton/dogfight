import React from "react";
import "./UserHotDog.css";
import { Link } from "react-router-dom";

export const UserHotDog = ({ userHotDog }) => (
  <section className="userHotDog">
    <div className="user_hotDog_name">
      <Link to={`/userHotDogs/${userHotDog.id}`}>{userHotDog.hotDogId}</Link>
    </div>
    <div className="date_completed">{userHotDog.timeStamp}</div>

    <div></div>
  </section>
);
