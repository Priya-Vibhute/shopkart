import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    // console.log("useEffect Hook");

    const timer = setTimeout(() => {
      console.log(count);
    }, 5500);

    return () => {
      clearTimeout(timer);
    };
    
  }, [count]);

  const increment = () => {
    //       2
    setCount(count + 1);
  };

  const increment1 = () => {
    //       2
    setCount1(count1 + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>

      <hr />

      <h1>{count1}</h1>
      <button onClick={increment1}>Click</button>
    </div>
  );
}

export default Counter;
