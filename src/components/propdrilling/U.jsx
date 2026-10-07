import React from "react";
import V from "./V";

function U({message}) {
  return (
    <div>
      <h1>U component {message}</h1>
      <V message={message}/>
    </div>
  );
}

export default U;
