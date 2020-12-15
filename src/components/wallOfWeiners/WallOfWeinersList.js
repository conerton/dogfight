import React, { useContext, useEffect } from "react";
import { WallOfWeinersContext } from "./WallOfWeinersDataProvider";
import { User } from "./WallOfWeiners";

export const WallOfWeinersList = () => {
  const { users, getUsers } = useContext(WallOfWeinersContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="wallOfWeiners_List">
      {users.map(() => (
        <User key={users.id} users={u} />
      ))}
    </div>
  );
};
