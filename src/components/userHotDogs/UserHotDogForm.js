import React, { useContext, useEffect, useState, useRef } from "react";
import { UserHotDogContext } from "./UserHotDogDataProvider";
// import { HotDogContext } from "../hotDogs/HotDogDataProvider";
import "./UserHotDog.css";

export const UserHotDogForm = (props) => {
  const { getUserHotDogsById, userHotDog } = useContext(UserHotDogContext);

  //parse int then going through props to find the specific Id
  useEffect(() => {
    getUserHotDogsById(+props.match.params.userHotDogId);
  }, []);

  console.log("PROPS", props, userHotDog);
  return (
    <>
      <h3 className="hotdog_name"> Name: {userHotDog.hotDog.name}</h3>
      <div className="hotdog_toppings">
        {" "}
        Toppings: {userHotDog.hotDog.topping}
      </div>
      <div className="time_stamp">
        {" "}
        Date: {new Date(userHotDog.timeStamp).toLocaleDateString("en-us")}
      </div>

      <div className="note"> Notes: {userHotDog.hotDogNote}</div>
    </>
  );
};
