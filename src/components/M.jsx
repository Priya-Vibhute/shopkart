import React, { useCallback, useMemo, useState } from 'react'
import N from './N'

function M() {


  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState([12, 34, 90, 34])
  const [value, setValue] = useState(0);// step 1

  /*
    const total=()=>{
   console.log("Calcualating  total")
     return numbers.reduce((a,b)=>a+b)
  }

  */

  const total = useMemo(() => {
    console.log("Calculating  total")
    return numbers.reduce((a, b) => a + b)
  }, [numbers])

  // step 2
  const increment = () => {
    setCount(count + 1)
    if (count % 10 == 0) {
      setValue(count)
    }
  }


  //  Step  1
  const handleClick = useCallback(() => {
    alert("Button Clicked")
  }, [])


  return (
    <div>
      <h3>Parent Component</h3>

      <h5>{count}</h5>
      <button onClick={increment}>Increment</button>
      <hr />

      <h2>Total :{total}</h2>
      <button onClick={() => setNumbers([1, 2, 3])}>Change numbers</button>
      {/*  Step 2 */}
      <N value={value} handleClick={handleClick} />
    </div>
  )
}

export default M