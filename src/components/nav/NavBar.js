import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <div className="navbar">
      <div>
        <Link className="navabr_link" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="navbar_link" to="/wallOfWeiners">
          Wall Of Weiners
        </Link>
      </div>
    </div>
  );
};
