// import React, { useContext, useEffect } from "react";
// import { UserHotDogContext } from "./UserHotDogDataProvider";
// import { UserHotDog } from "./UserHotDog";
// import "./UserHotDog.css";

// export const UserHotDogList = () => {
//   const { userHotDogs, getUserHotDogs } = useContext(UserHotDogContext);

//   useEffect(() => {
//     getUserHotDogs();
//   }, []);

//   return (
//     <div className="userHotDogs">
//       {userHotDogs.map((hd) => (
//         <UserHotDog key={hd.id} hotDog={hd} />
//       ))}
//     </div>
//   );
// };
