// import React, { useState } from "react";

// export const UserHotDogContext = React.createContext();

// export const UserHotDogProvider = (props) => {
//   const [userHotDog, setUserHotDog] = useState([]);

//   const getUserHotDogs = () => {
//     return fetch("http://localhost:8088/userHotDogs")
//       .then((res) => res.json())
//       .then(setUserHotDog);
//   };

//   return (
//     <UserHotDogContext.Provider>
//       value=
//       {{
//         userHotDog,
//         getUserHotDogs,
//       }}
//       {props.children}
//     </UserHotDogContext.Provider>
//   );
// };
