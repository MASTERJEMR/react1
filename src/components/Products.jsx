import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from 'antd'

function Products(props) {    
  const [cont,setCont]=useState(0)
//console.log(props)
  const handleClickAdd = () =>{
    setCont(cont+1)
    // console.log("clip")
  }
  const handleClickMinus = () =>{
    
    if(cont >0)  setCont(cont-1)    

  }

return (
  <div className={`p-5 justify-items-center  ${cont>0 ? "bg-blue-300" : "bg-white-500" }` } key={props.id}>

    
   <div className="content-center">
   <img className="size-40 rounded-md" src={props.image} alt={props.title}></img>
    {props.text}<br/>
   </div>  
   
    <div>
        <p className='text-2xl'>{props.title}</p>
        <Link to={`/store/${props.id}`}>Conoce  +</Link>
    </div>
    <div className='precio text-center'>$ {props.price}</div>
    <div className="text-center"><Button onClick={handleClickAdd}><span><p className='efestosCompra'>+</p> </span></Button>
    <Button>{cont}</Button><Button onClick={handleClickMinus}><span><p className='efestosCompra'>-</p> </span></Button>
    </div> 


  </div>
)
}

export default Products