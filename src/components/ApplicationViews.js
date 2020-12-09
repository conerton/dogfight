import React from "react";
import { Route } from "react-router-dom";
import { HotDogProvider } from "./hotDogs/HotDogDataProvider";
import { HotDogDetail } from "./hotDogs/HotDogDetail";
import { HotDogList } from "./hotDogs/HotDogList";

export const ApplicationViews = (props) => {
  return (
    <>
      <HotDogProvider>
        <Route exact path="/">
          <HotDogList />
        </Route>
        <Route
          path="/hotdogs/:hotdogId(\d+)"
          render={(props) => {
            return <HotDogDetail {...props} />;
          }}
        ></Route>
      </HotDogProvider>
    </>
  );
};
