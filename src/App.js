import React, { useState } from "react";
import Person from "./Person";
// import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Bertie Yates",
    age: "29 years",
    image: "./Images/image-daniel.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: "32 years",
    image: "./Images/image-jeanette.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: "36 years",
    image: "./Images/image-jonathan.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: "34 years",
    image: "./Images/image-kira.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: "29 years",
    image: "./Images/image-patrick.jpg",
  },
];

const App = () => {
  const [users, setUsers] = useState(data);
  const clearItems = () => {
    setUsers([]);
  };
  const deleteBtn = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <>
      <section className="birthday-card">
        <h1>5 birthdays today</h1>
        {users.map((user) => {
          // const { id, name, age, image } = user; // this will need the jsx that will access it to also be in same file, and not rendered as a component.
          let id = user.id;
          return (
            <Person key={id} {...user}>
              <button onClick={() => deleteBtn(id)}>del</button>
            </Person>
          );
          // return <Person key={user.id} userProp={user} />; // to be used with the 2nd method in Person.js file
        })}
        <button className="btn" onClick={clearItems}>
          Clear All
        </button>
      </section>
    </>
  );
};

export default App;
