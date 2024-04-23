import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from 'antd'

function Products(props) {
  const [cont, setCont] = useState(0)
  //console.log(props)
  const handleClickAdd = () => {
    setCont(cont + 1)
    // console.log("clip")
  }
  const handleClickMinus = () => {

    if (cont > 0) setCont(cont - 1)

  }

  return (
    <div className={`p-1 shadow-xl  ${cont > 0 ? "bg-blue-300" : "bg-white-500"}`} key={props.id}>
      <div>
        <img className="h-40 rounded-md hover:scale-125 duration-500"
          src={props.image} alt={props.title}></img>
        {props.text}<br />
        <p className='text-2xl'>{props.title}</p>
        <Link className="text-orange-500" to={`/ItemDetailContainer/${props.id}`}>Conoce  +</Link>
      </div>
      <div className='precio text-center'>$ {props.price}</div>
      <div className="text-center"><Button onClick={handleClickAdd}><span><p className='efestosCompra'>+</p> </span></Button>
        <Button>{cont}</Button><Button onClick={handleClickMinus}><span><p className='efestosCompra'>-</p> </span></Button>
      </div>
    </div>

  )
}

export default Products