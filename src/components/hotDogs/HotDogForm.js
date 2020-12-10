import React, { useContext, useEffect, useState, useRef } from "react";
import { HotDogContext } from "./HotDogDataProvider";

export const HotDogForm = (props) => {
  const { getHotDogById } = useContext(HotDogContext);
  const [hotdog, setHotDog] = useState({});

  useEffect(() => {
    getHotDogById(props.match.params.hotdogId).then((parasedHotDog) =>
      setHotDog(parasedHotDog)
    );
  }, []);

  return (
    <>
      {console.log(hotdog)}
      <form className="hotDogs">
        <fieldset>
          <h3 className="hotdog_name"> Name: {hotdog.name}</h3>
          <div className="hotdog_toppings"> Toppings: {hotdog.topping}</div>
          <label htmlFor="hotdog_note"></label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Note"
          />
          <button>Ate it!</button>
        </fieldset>
      </form>
    </>
  );
};
