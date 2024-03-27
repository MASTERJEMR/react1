import React, { useState } from 'react'
import { Button } from "antd"

function CartWidget(props) {
    
    const [cont,setCont]=useState(0)
    const handleClick = () =>{
      setCont(cont+1)
      console.log("clip")
  
    }

  return (
    <div className='items-center'><h3 className='text-2xl'>{props.title}</h3>
     <img className="size-40" src={props.image}></img>
      {props.text}<br></br>
      <div className='precio'>{props.precio}</div>
      
      <div><button onClick={handleClick}><p className='efestosCompra'>click aquí para añadir al carrito</p> <br></br><span>Unidades en el carrito <h2>{cont}</h2></span></button></div>
    </div>
  )
}

export default CartWidget