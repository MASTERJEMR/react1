import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from 'antd'

function CartJock(props) {    
  const [cont,setCont]=useState(0)
console.log(props)
  const handleClickAdd = () =>{
    setCont(cont+1)
    // console.log("clip")
  }
  const handleClickMinus = () =>{
    
    if(cont >0)  setCont(cont-1)    

  }

return (
  <div className={`items-center ${cont>0 ? "bg-blue-300" : "bg-white-500" }` } key={props.id}>

    
     <h4 className='text-2xl'>{props.title}</h4>
   <img className="size-40 rounded-md" src={props.image} alt={props.title}></img>
    {props.text}<br/>
    <div>
      <Link to={`/${props.id}`}>Conoce  +{props.id}</Link>
    </div>
    <div className='precio'>$ {props.price}</div>
    <div><Button onClick={handleClickAdd}><span><p className='efestosCompra'>+</p> </span></Button>
    <Button>{cont}</Button><Button onClick={handleClickMinus}><span><p className='efestosCompra'>-</p> </span></Button>
    </div> 


  </div>
)
}

export default CartJock