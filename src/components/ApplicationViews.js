import React from "react";
import { Route } from "react-router-dom";
import { HotDogProvider } from "./hotDogs/HotDogDataProvider";
import { HotDogForm } from "./hotDogs/HotDogForm";
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
            return <HotDogForm {...props} />;
          }}
        ></Route>
      </HotDogProvider>
    </>
  );
};
