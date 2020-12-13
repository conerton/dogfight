import React from "react";
import "./UserHotDog.css";

export const UserHotDog = ({ userHotDog }) => (
  <section className="user">
    <h3 className="user_name">{userHotDog.hotDog.name}</h3>
    <div></div>
  </section>
);
