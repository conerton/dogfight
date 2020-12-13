import React from "react";
import { Route } from "react-router-dom";
import { HotDogProvider } from "./hotDogs/HotDogDataProvider";
import { HotDogForm } from "./hotDogs/HotDogForm";
import { HotDogList } from "./hotDogs/HotDogList";
import { UserHotDogProvider } from "./userHotDogs/UserHotDogDataProvider";
import { UserHotDogList } from "./userHotDogs/UserHotDogList";

export const ApplicationViews = (props) => {
  return (
    <>
      <h1>Cori's Dogfight</h1>
      {/* <UserHotDogProvider> */}
      <HotDogProvider>
        <Route exact path="/">
          <HotDogList />
          {/* <UserHotDogList /> */}
        </Route>
        <Route
          path="/hotdogs/:hotdogId(\d+)"
          render={(props) => {
            return <HotDogForm {...props} />;
          }}
        ></Route>
      </HotDogProvider>
      {/* </UserHotDogProvider> */}
    </>
  );
};
