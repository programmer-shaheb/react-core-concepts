import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [person, setPerson] = useState(data);

  const deleteItem = (id) => {
    const newPeople = person.filter((people) => people.id !== id);
    return setPerson(newPeople);
  };
  return (
    <React.Fragment>
      {person.map((people) => {
        const { id, name } = people;
        return (
          <div className="item" key={id}>
            <h3>i am {name}</h3>
            <button onClick={() => deleteItem(id)} className="btn">
              Delete me
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPerson([])}>
        Delete All
      </button>
    </React.Fragment>
  );

  // const [person, setPerson] = useState(data);
  // return (
  //   <React.Fragment>
  //     {person.map((people) => {
  //       const { id, name } = people;
  //       const removeItem = (id) => {
  //         const newPeople = person.filter((people) => people.id !== id);
  //         setPerson(newPeople);
  //       };
  //       return (
  //         <div className="item" key={id}>
  //           <h2>{name}</h2>
  //           <button className="btn" onClick={() => removeItem(id)}>
  //             Remove Me
  //           </button>
  //         </div>
  //       );
  //     })}
  //     <button className="btn" onClick={() => setPerson([])}>
  //       Delete Item
  //     </button>
  //   </React.Fragment>
  // );
};

export default UseStateArray;
