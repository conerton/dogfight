// import React, { useState, useEffect, useContext } from "react";
// import { HotDogContext } from "./HotDogDataProvider";
// import "./HotDog.css";

// export const HotDogDetail = (props) => {
//   const { hotDogs, getHotDogs } = useContext(HotDogContext);

//   const [hotDog, setHotDog] = useState({});

//   useEffect(() => {
//     getHotDogs();
//   }, []);

//   useEffect(() => {
//     const hotDog =
//       hotDogs.find((hd) => hd.id === parseInt(props.match.params.hotDogId)) ||
//       {};
//     setHotDog(hotDog);
//   }, [hotDogs]);
// };

// return (
//   <section className="userHotDogs">
//     <div className="hotDog_name"> I ate: {hotDog.name}</div>
//   </section>
// );
