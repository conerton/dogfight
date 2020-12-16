import React, { useContext, useEffect } from "react";
import { WallOfWeinersContext } from "./WallOfWeinersDataProvider";
import { User } from "./WallOfWeiners";
import "./WallOfWeiners.css";

export const WallOfWeinersList = () => {
  const { users, getUsers } = useContext(WallOfWeinersContext);

  useEffect(() => {
    getUsers();
  }, []);

  // const allHotDogsAte = users.map(user);

  return (
    <div className="wallOfWeiners_List">
      {users.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </div>
  );
};
