import React, { useContext, useEffect, useState, useRef } from "react";
import { UserHotDogContext } from "./UserHotDogDataProvider";
import { HotDogContext } from "../hotDogs/HotDogDataProvider";
import "./UserHotDog.css";

export const UserHotDogForm = (props) => {
  const { getUserHotDogsById } = useContext(UserHotDogContext);
  const [userHotDog, setUserHotDog] = useState({});

  useEffect(() => {
    getUserHotDogsById(
      props.match.params.userHotDogId
    ).then((parasedUserHotDog) => setUserHotDog(parasedUserHotDog));
  }, []);

  return (
    <>
      <h3 className="hotdog_name"> Name: {userHotDog.id}</h3>
      <div className="hotdog_toppings"> Toppings</div>
      <div className="time_stamp"> Date: {userHotDog.timeStamp}</div>
      <div className="is_favorite"> Favorite?: {userHotDog.favHotDog}</div>
      <div className="note"> Notes: {userHotDog.hotDogNote}</div>
      <button>Delete</button>
    </>
  );
};
