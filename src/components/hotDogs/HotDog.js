import React from "react";
import "./HotDog.css";
import { Link } from "react-router-dom";

//this is a link for the hot dog name to take you to the form page

export const HotDog = ({ hotDog }) => (
  <section className="hotDog">
    <div className="hotDog_name">
      <Link to={`/hotDogs/${hotDog.id}`}>{hotDog.name}</Link>
    </div>
  </section>
);
