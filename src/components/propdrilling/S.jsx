import React, { useState } from "react";
import T from "./T";

function S() {

 const [msg,setMessage]= useState("Good Night")
  return (
    <div>
      <h1> S component  {msg}</h1>
      <T message={msg}/>
    </div>
  );
}

export default S;
