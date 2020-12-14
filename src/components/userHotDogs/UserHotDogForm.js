import React, { useContext, useEffect, useState, useRef } from "react";
import { UserHotDogContext } from "./UserHotDogDataProvider";
// import { HotDogContext } from "../hotDogs/HotDogDataProvider";
import "./UserHotDog.css";

export const UserHotDogForm = (props) => {
  const { getUserHotDogsById } = useContext(UserHotDogContext);
  const [userHotDog, setUserHotDog] = useState({});
  //   const { getHotDogById } = useContext(HotDogContext);
  //   const [hotDog, setHotDog] = useState({});

  useEffect(() => {
    getUserHotDogsById(
      props.match.params.userHotDogId
    ).then((parsedUserHotDog) => setUserHotDog(parsedUserHotDog));
  }, []);

  //   useEffect(() => {
  //     console.log("PROPS", props);
  //     // debugger;
  //     getHotDogById(props.match.params.hotDogId).then((parsedHotDog) => {
  //       setHotDog(parsedHotDog);
  //       console.log("parsedHotDog", parsedHotDog);
  //     });
  //   }, []);

  return (
    <>
      <h3 className="hotdog_name"> Name: {userHotDog.name}</h3>
      <div className="hotdog_toppings"> Toppings: {userHotDog.toppings}</div>
      <div className="time_stamp"> Date: {userHotDog.timeStamp}</div>
      <div className="is_favorite"> Favorite?: {userHotDog.favHotDog}</div>
      <div className="note"> Notes: {userHotDog.hotDogNote}</div>
      <button>Delete</button>
    </>
  );
};
