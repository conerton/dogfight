import React, { useContext, useEffect, useState } from "react";
import "./UserHotDog.css";
import { Link } from "react-router-dom";
import { UserHotDogContext } from "./UserHotDogDataProvider";

export const UserHotDog = ({ userHotDog, props }) => {
  const { userHotDogs, getUserHotDogById, deleteUserHotDog } = useContext(
    UserHotDogContext
  );
  const [checked, setChecked] = React.useState(false);
  return (
    <section className="userHotDog">
      <div className="user_hotDog_name">
        <Link to={`/userHotDogs/${userHotDog.id}`}>{userHotDog.hotDogId}</Link>
      </div>
      <form>
        <label>
          Favorite?:{" "}
          <input
            type="radio"
            name="favHotDog"
            value="favHotDog"
            checked={checked}
            className="is_favorite"
            onChange={() => setChecked(!checked)}
          />{" "}
        </label>
      </form>
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
