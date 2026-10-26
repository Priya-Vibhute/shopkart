import React, { useRef } from 'react'

function RefExample() {

  const heading=useRef()  

  const onBtnClick=()=>{
    console.log(heading.current.style.backgroundColor="blue")
  }
  return (
    <div>

         <h1 ref={heading}>Hello</h1>
         <button onClick={onBtnClick}>Click</button>

    </div>
  )
}

export default RefExample