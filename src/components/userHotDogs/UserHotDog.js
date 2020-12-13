import React from "react";
import "./UserHotDog.css";

export const UserHotDog = ({ userHotDog }) => (
  <section className="userHotDog">
    <h3 className="user_hotDog_name">{userHotDog.hotDog.name}</h3>
    <div></div>
  </section>
);
