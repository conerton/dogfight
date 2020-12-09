import React, { useContext, useEffect, useState } from "react";
import { HotDog } from "./HotDog";
import { HotDogContext } from "./HotDogDataProvider";

export const HotDogDetail = (props) => {
  const { getHotDogById } = useContext(HotDogContext);

  useEffect(() => {
    getHotDogById(props.match.params.hotDogId).then((parsedHotDogs) =>
      setHotDogs(parsedHotDogs)
    );
  }, []);

  return (
    <>
      <section className="hotDogs">
        <h3 className="hotdog_name">{hotdog.name}</h3>
        <div className="hotdog_toppings">{hotdog.toppings}</div>

        <button>Ate it!</button>
      </section>
    </>
  );
};
