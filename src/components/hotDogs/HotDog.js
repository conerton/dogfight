import React from "react";
import "./HotDog.css";
import { Link } from "react-router-dom";

//this is a link for the hot dog name to take you to the form page

export const HotDog = ({ hotDog }) => (
  <section className="hotDog">
    <div className="hotDog_name">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
      </style>
      <Link to={`/hotDogs/${hotDog.id}`}>{hotDog.name}</Link>
    </div>
  </section>
);
