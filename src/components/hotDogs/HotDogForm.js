import React, { useContext, useEffect, useState, useRef } from "react";
import { HotDogContext } from "./HotDogDataProvider";
import "./HotDog.css";

export const HotDogForm = (props) => {
  const { getHotDogById, addHotDog } = useContext(HotDogContext);
  const [hotdog, setHotDog] = useState({});

  //   const hdName = useRef(null);
  const note = useRef(null);
  const useId = useRef(null);
  const hdId = useRef(null);

  useEffect(() => {
    getHotDogById(props.match.params.hotdogId).then((parasedHotDog) =>
      setHotDog(parasedHotDog)
    );
  }, []);

  const addToList = () => {
    const hotDogId = parseInt(hdId.current.value);
    const userId = parseInt(useId.current.value);
    const hotDogNote = note.current.value;
    // const hotDogName = parseInt(hdName.current.value);
    console.log("note", hotDogNote);

    if (hotDogNote === "") {
      window.alert("Please add a note!");
    } else {
      addHotDog({
        hotDogId,
        userId,
        hotDogNote,
      }).then(() => props.history.push("/"));
    }
  };

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
            ref={hdId}
            ref={useId}
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
