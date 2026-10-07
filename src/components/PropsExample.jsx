import React, { useState } from "react";
import Category from "./Category";
import User from "./User";

function PropsExample() {
  const [users, setUsers] = useState([
    { email: "user1@gmail,com", fname: "Nishant", lname: "Kumar" },
    { email: "user2@gmail,com", fname: "Rohit", lname: "Kumar" },
    { email: "user3@gmail,com", fname: "Ramesh", lname: "Kumar" },
    { email: "user4@gmail,com", fname: "Suresh", lname: "Kumar" },
    { email: "user5@gmail,com", fname: "Mahesh", lname: "Kumar" },
  ]);

  return (
    <div>
      <h1>Props</h1>
      <Category id={101} name={"Electronics"} />
      <Category id={102} name={"clothes"} />
      <Category id={103} name={"watches"} />

      <hr />

      {users.map((u) => (
        <User fname={u.fname} lname={u.lname} email={u.email} />
      ))}
    </div>
  );
}

export default PropsExample;
