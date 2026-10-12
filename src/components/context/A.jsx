import React, { createContext, useState } from "react";
import B from "./B";

// step 1 - create context
 export const firstContext=createContext()

function A() {
const [msg, setMsg] = useState("Bye Bye");

 
  return (
    <div>
      <h1>A component</h1>
      <p className="text-danger m-3 p-2">message : {msg} </p>

      <hr />

{/*  Step 2 :Provide data to context with the help of provider */}
       <firstContext.Provider  value={{msg}}>

              <B /> 
{/*      C and D will also get data */}
       </firstContext.Provider>

     
    </div>
  );
}

export default A;
