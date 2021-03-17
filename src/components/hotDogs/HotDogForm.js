import React, { useContext, useEffect, useState, useRef } from "react";
import { HotDogContext } from "./HotDogDataProvider";
import "./HotDog.css";

export const HotDogForm = (props) => {
  const { getHotDogById, addHotDog } = useContext(HotDogContext);
  const [hotDog, setHotDog] = useState({});

  const hotDogNote = useRef(null);

  useEffect(() => {
    getHotDogById(props.match.params.hotDogId).then((parsedHotDog) =>
      setHotDog(parsedHotDog)
    );
  }, []);

  //add the notes to the json
  const addToList = () => {
    const hotDogId = parseInt(props.match.params.hotDogId);
    // const userId = parseInt(localStorage.getItem("app_user"));
    const note = hotDogNote.current.value;
    const dateCompleted = Date.now();
    const isFavorite = false;
    const isApproved = true;
    console.log("note", hotDogNote);

    if (note === "") {
      window.alert("Please add a note!");
    } else {
      addHotDog({
        hotDogId,
        // userId,
        note,
        dateCompleted,
        isFavorite,
        isApproved,
      }).then(() => props.history.push("/"));
    }
  };
  console.log(props);
  return (
    <>
      {console.log(hotDog)}
      <div className="form">
        <form className="hotDogs">
          <fieldset>
            <h3 className="hotDog_name_form"> Name: {hotDog.name}</h3>
            <div className="hotDog_toppings"> Toppings: {hotDog.toppings}</div>
            <label className="hotDog_note" htmlFor="hotDog_note">
              Add a note!
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Note"
              ref={hotDogNote}
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
      </div>
    </>
  );
};
