import React from "react";
import "./Dogfight.css";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./ApplicationViews";

export const Dogfight = () => (
  <>
    <Route
      render={() => {
        // The user id is saved under the key dogfight_user_id in local Storage. Change below if needed!
        if (localStorage.getItem("dogfight_user_id")) {
          return (
            <>
              <Route render={(props) => <NavBar {...props} />} />
              <Route render={(props) => <ApplicationViews {...props} />} />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login" render={(props) => <Login {...props} />} />
    <Route path="/register" render={(props) => <Register {...props} />} />
  </>
);
