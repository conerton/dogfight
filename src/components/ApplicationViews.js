import React from "react";
import { Route } from "react-router-dom";
import { HotDogProvider } from "./hotDogs/HotDogDataProvider";
import { HotDogForm } from "./hotDogs/HotDogForm";
import { HotDogList } from "./hotDogs/HotDogList";
import { UserHotDogProvider } from "./userHotDogs/UserHotDogDataProvider";
import { UserHotDogList } from "./userHotDogs/UserHotDogList";
import { UserHotDogForm } from "./userHotDogs/UserHotDogForm";
import { WallOfWeinersList } from "./wallOfWeiners/WallOfWeinersList";
import { UserProvider } from "./wallOfWeiners/WallOfWeinersDataProvider";
import "./ApplicationViews.css";

export const ApplicationViews = (props) => {
  return (
    <>
      <div className="background">
        <UserHotDogProvider>
          <HotDogProvider>
            <Route
              exact
              path="/hot_dogs"
              render={(props) => (
                <>
                  <HotDogList />
                  <UserHotDogList {...props} />
                </>
              )}
            />
            <Route
              path="/hotDogs/:hotDogId(\d+)"
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

        <UserProvider>
          <Route
            exact
            path="/wallOfWeiners"
            render={(props) => (
              <>
                <WallOfWeinersList {...props} />
              </>
            )}
          />
        </UserProvider>
      </div>
    </>
  );
};
