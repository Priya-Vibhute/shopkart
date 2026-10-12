import React, { useContext } from "react";
import { firstContext } from "./A";

function D() {


  // Step 3: use the context
  const {msg}=useContext(firstContext)



  return (
    <div>
      <h1>D component</h1>
      <p className="text-danger m-3 p-2">message : {msg}</p>
      <hr />
    </div>
  );
}

export default D;
