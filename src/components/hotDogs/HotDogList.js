import React, { useContext, useEffect } from "react";
import { HotDogContext } from "./HotDogDataProvider";
import { HotDog } from "./HotDog";
import "./HotDog.css";

export const HotDogList = () => {
  const { hotDogs, getHotDogs } = useContext(HotDogContext);
};
