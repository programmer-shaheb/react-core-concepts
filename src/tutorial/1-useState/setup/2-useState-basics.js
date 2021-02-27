import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Change The Text");

  const clickHandler = () => {
    if (text === "Change The Text") {
      setText("You Change Me");
    } else {
      setText("Change The Text");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={clickHandler}>
        Press Here
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
