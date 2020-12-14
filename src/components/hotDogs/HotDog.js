import React from "react";
import "./HotDog.css";
import { Link } from "react-router-dom";

export const HotDog = ({ hotDog }) => (
  <section className="hotDog">
    <div className="hotDog_name">
      <Link to={`/hotDogs/${hotDog.id}`}>{hotDog.name}</Link>
    </div>
  </section>
);
