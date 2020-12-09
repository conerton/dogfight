import React from "react";
import { Route } from "react-router-dom";
import { HotDogProvider } from "HotDogDataProvider";
import { HotDogList } from "HotDogList";

export const ApplicationViews = (props) => {
  return (
    <>
      <HotDogProvider>
        <Route exact path="/">
          <HotDogList />
        </Route>
      </HotDogProvider>
    </>
  );
};
