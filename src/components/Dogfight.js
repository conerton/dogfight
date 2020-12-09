import React from "react";
import "./Dogfight.css";
import Route from "react-router-dom";

export const Dogfight = () => (
  <>
    <Route
      render={() => {
        // The user id is saved under the key app_user_id in local Storage. Change below if needed!
        if (localStorage.getItem("dogfight_user")) {
          return (
            <>
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
