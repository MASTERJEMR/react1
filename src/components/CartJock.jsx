import React, { useState } from 'react'
import { Button } from "antd" 

function CartJock(props) {
    
    const [cont,setCont]=useState(0)
    const handleClickAdd = () =>{
      setCont(cont+1)
      
      // console.log("clip")

    }
    const handleClickMinus = () =>{
      
      if(cont >0)  setCont(cont-1)      
      //if(cont =>0) setCont(cont-1)      
      // console.log("clip")

    }

  return (
    <div className={`items-center ${cont>0 ? "bg-blue-300" : "bg-white-500" } text-center`}>
      <h3 className='text-2xl'>{props.title}</h3>
     <img className="size-40 rounded-md" src={props.image} alt={props.title}></img>
      {props.text}<br></br>
      
    </div>
  )
}

export default CartJock