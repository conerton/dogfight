import React, { useContext, useEffect, useState, useRef } from "react";
import "./UserHotDog.css";
import { Link } from "react-router-dom";
import { UserHotDogContext } from "./UserHotDogDataProvider";
import { HotDogContext } from "../hotDogs/HotDogDataProvider";

export const UserHotDog = ({ userHotDog, props }) => {
  const { deleteUserHotDog, editUserHotDog } = useContext(UserHotDogContext);
  const { getHotDogById } = useContext(HotDogContext);
  const [hotDog, setHotDog] = useState({});
  console.log("HOTDOGS", hotDog);
  // console.log("USER HD", userHotDogs);

  // useEffect(() => {
  //   getUserHotDogById(+props.match.params.userHotDogId);
  // }, []);
  // const [checked, setChecked] = useState(false);
  const fav = useRef(false);

  //this is implementing the radio button
  const favoriteChoosen = () => {
    editUserHotDog({
      hotDogId: parseInt(userHotDog.hotDogId),
      userId: parseInt(userHotDog.userId),
      hotDogNote: userHotDog.hotDogNote,
      timeStamp: userHotDog.timeStamp,
      favHotDog: fav.current.checked,
      id: parseInt(userHotDog.id),
    }).then(() => props.history.push("/"));
  };

  return (
    <section className="userHotDog">
      <div className="user_hotDog_name">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        </style>
        <Link to={`/userHotDogs/${userHotDog.id}`}>
          {userHotDog.hot_dog.name}
        </Link>
      </div>
      <form>
        <label className="favorite">
          Favorite?:{" "}
          <input
            ref={fav}
            type="radio"
            value={userHotDog.userId}
            name="favHotDog"
            className="is_favorite"
            onChange={favoriteChoosen}
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

//TEST CODE
// const [userHotDog, setUserHotDog] = useState({});

// const handleFavHotDog = (e) => {
//   const changeValue = Object.assign({}, userHotDog);
//   changeValue[e.target.name] = Boolean(e.target.checked);
//   setUserHotDog(changeValue);
// };
