import React, { useContext, useEffect, useState } from "react";
import "./UserHotDog.css";
import { Link } from "react-router-dom";
import { UserHotDogContext } from "./UserHotDogDataProvider";

export const UserHotDog = ({ userHotDog, props }) => {
  const { userHotDogs, getUserHotDogById, deleteUserHotDog } = useContext(
    UserHotDogContext
  );
  // const [userHotDog, setUserHotDog] = useState({ hotdog: {} });

  // useEffect(() => {
  //   console.log("USER HOT DOG", userHotDog);
  //   console.log("SET USER HOTDOGS", setUserHotDog);
  //   console.log("GET USER HOT BY ID", getUserHotDogById);
  //   getUserHotDogById(
  //     props.match.params.userHotDogId
  //   ).then((parsedUserHotDogs) => setUserHotDog(parsedUserHotDogs));
  //   console.log("PROPS DELETE", props);
  // }, []);

  //this part of my code is broken and I have no idea why. It is not liking the Link. Cannot read 'id'
  return (
    <section className="userHotDog">
      <div className="user_hotDog_name">
        <Link to={`/userHotDogs/${userHotDog.id}`}>{userHotDog.hotDogId}</Link>
      </div>
      <div className="is_favorite"> Favorite?: </div>
      <button
        className="delete_button"
        onClick={() => {
          deleteUserHotDog(userHotDog.id).then(() => props.history.push("/"));
        }}
      >
        Delete
      </button>
    </section>
  );
};
