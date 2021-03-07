import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);

  const handlerBtn = (e) => {
    e.preventDefault();
    if (name && email) {
      // Below part is an object. If the property & value name are same,we can use like this
      const person = { name, email };
      // Above part .......
      setPeople([...people, person]);
      setName("");
      setEmail("");
    } else {
      alert("Fill The Form");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handlerBtn}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              id="email"
              name="email"
            />
          </div>
          {/* <div className="form-control">
            <label htmlFor="password">Password : </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              id="password"
              name="password"
            />
          </div> */}
          <button type="text">Add Me</button>
        </form>
        {people.map((person) => {
          const { name, email } = person;
          return (
            <>
              <div className="item">
                <h5>{name}</h5>
                <p>{email}</p>
                <button className="btn">Remove</button>
              </div>
            </>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
