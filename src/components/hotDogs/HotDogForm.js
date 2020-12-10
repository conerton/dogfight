import React, { useContext, useEffect, useState, useRef } from "react";
import { HotDogContext } from "./HotDogDataProvider";

export const HotDogForm = (props) => {
  const { getHotDogs } = useContext(HotDogContext);
  const { hotDogId, getHotDogs } = useState(HotDogContext);

  const hotdog = useRef(null);

  useEffect(() => {
    getHotDogs(props.match.params.hotDogId);
  }, []);

  return (
    <>
      <section className="hotDogs">
        <h3 className="hotdog_name">{hotDogId.name}</h3>
        <div className="hotdog_toppings">{hotDogId.toppings}</div>
        <button>Ate it!</button>
      </section>
    </>
  );
};
