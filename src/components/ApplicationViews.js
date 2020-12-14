import React from "react";
import { Route } from "react-router-dom";
import { HotDogProvider } from "./hotDogs/HotDogDataProvider";
import { HotDogForm } from "./hotDogs/HotDogForm";
import { HotDogList } from "./hotDogs/HotDogList";
import { UserHotDogProvider } from "./userHotDogs/UserHotDogDataProvider";
import { UserHotDogList } from "./userHotDogs/UserHotDogList";
import { UserHotDogForm } from "./userHotDogs/UserHotDogForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <h1>Cori's Dogfight</h1>
      <UserHotDogProvider>
        <HotDogProvider>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <HotDogList />
                <UserHotDogList {...props} />
              </>
            )}
          />
          <Route
            path="/hotdogs/:hotdogId(\d+)"
            render={(props) => {
              return <HotDogForm {...props} />;
            }}
          ></Route>
          <Route
            path="/userHotDogs/:userHotDogId(\d+)"
            render={(props) => {
              return <UserHotDogForm {...props} />;
            }}
          ></Route>
        </HotDogProvider>
      </UserHotDogProvider>
    </>
  );
};
