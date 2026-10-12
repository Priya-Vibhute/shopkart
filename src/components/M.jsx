import React, { useMemo, useState } from 'react'
import N from './N'

function M() {


  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState([12, 34, 90, 34])

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


  return (
    <div>
      <h3>Parent Component</h3>

      <h5>{count}</h5>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />

      <h2>Total :{total}</h2>
      <button onClick={()=>setNumbers([1,2,3])}>Change numbers</button>

      <N/>
    </div>
  )
}

export default M