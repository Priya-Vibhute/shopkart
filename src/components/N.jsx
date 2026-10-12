import React from 'react'

function N() {

  console.log("N component")


  return (
    <div>N</div>
  )
}

export default React.memo(N)