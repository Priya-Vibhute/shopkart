import React from "react";
import U from "./U";

function T({message}) {
  return (
    <div>
      <h1>T component {message}</h1>
      <U message={message}/>
    </div>
  );
}

export default T;
