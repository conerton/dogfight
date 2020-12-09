import React from "react";
import "./HotDog.css";
import { Link } from "react-router-dom";

export const HotDog = ({ hotDog }) => (
  <section className="hotDog">
    <h3 className="hotDog_name">
      <Link to={`/hotDogs/${hotDog.id}`}>{hotDog.name}</Link>
    </h3>
  </section>
);
