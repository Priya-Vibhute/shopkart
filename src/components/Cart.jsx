import React, { useContext, useEffect } from "react";
import { LoginContext } from "../LoginContext";
import {useNavigate} from 'react-router-dom'

function Cart() {

  const {isLoggedIn}=useContext(LoginContext)

  const navigate=useNavigate()

  useEffect(()=>{

    if (!isLoggedIn)
      navigate("/login")   
   
  },[])

  return <div>
    <h1>Cart will be displayed here</h1>
  </div>;
}

export default Cart;
