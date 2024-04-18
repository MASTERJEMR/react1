import React, { useState } from 'react'
import { Button } from 'antd'
function CartJock(props) {    const [cont,setCont]=useState(0)
  const handleClickAdd = () =>{
    setCont(cont+1)
    
    // console.log("clip")

  }
  const handleClickMinus = () =>{
    
    if(cont >0)  setCont(cont-1)    

  }

return (
  <div className={`items-center ${cont>0 ? "bg-blue-300" : "bg-white-500" }` }key={props.id}>
    <h4 className='text-2xl'>{props.title}</h4>
   <img className="size-40 rounded-md" src={props.image} alt={props.title}></img>
    {props.text}<br></br>
    <div className='precio'>$ {props.price}</div>
    <div><Button onClick={handleClickAdd}><span><p className='efestosCompra'>+</p> </span></Button>
    <Button>{cont}</Button><Button onClick={handleClickMinus}><span><p className='efestosCompra'>-</p> </span></Button>
    </div>

  </div>
)
}

export default CartJock