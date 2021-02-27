import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 15,
    message: "Babu Khaiso?",
  });

  const changeText = () => {
    if (person.message === "Babu Khaiso?") {
      setPerson({ ...person, message: "Hae Khaisi" });
    } else {
      setPerson({ ...person, message: "Babu Khaiso?" });
    }
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeText}>
        Ans Pls
      </button>
    </>
  );
};

export default UseStateObject;
