import React, { useContext, useEffect, useState, useRef } from "react";
import { HotDogContext } from "./HotDogDataProvider";
import "./HotDog.css";

export const HotDogForm = (props) => {
  const { getHotDogById, addHotDog } = useContext(HotDogContext);
  const [hotdog, setHotDog] = useState({});

  const note = useRef(null);

  useEffect(() => {
    getHotDogById(props.match.params.hotdogId).then((parsedHotDog) =>
      setHotDog(parsedHotDog)
    );
  }, []);

  const addToList = () => {
    const hotDogId = parseInt(props.match.params.hotdogId);
    const userId = parseInt(localStorage.getItem("dogfight_user_id"));
    const hotDogNote = note.current.value;
    const timeStamp = Date.now();
    const favHotDog = false;
    console.log("note", hotDogNote);

    if (hotDogNote === "") {
      window.alert("Please add a note!");
    } else {
      addHotDog({
        hotDogId,
        userId,
        hotDogNote,
        timeStamp,
        favHotDog,
      }).then(() => props.history.push("/"));
    }
  };
  console.log(props);
  return (
    <>
      {console.log(hotdog)}
      <form className="hotDogs">
        <fieldset>
          <h3 className="hotdog_name"> Name: {hotdog.name}</h3>
          <div className="hotdog_toppings"> Toppings: {hotdog.topping}</div>
          <label htmlFor="hotdog_note">Add a note!</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Note"
            ref={note}
          />
          <button
            type="submit"
            onClick={(evt) => {
              evt.preventDefault();
              addToList();
            }}
            className="btn btn-primary"
          >
            Ate it!
          </button>
        </fieldset>
      </form>
    </>
  );
};
