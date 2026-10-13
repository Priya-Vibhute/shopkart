import React from 'react'
// step 3
function N({value,handleClick}) {

  console.log("N component")


  return (
    <div>
      <h2>N component {value}</h2>

      {/* step 4 */}
      <button onClick={handleClick}>CLick</button>
    </div>
  )
}

export default React.memo(N)