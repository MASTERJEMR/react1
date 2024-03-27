import React, { useState } from 'react'
import { Button } from "antd"

function Tarjeta(props) {
    
    

  return (
    <div className='items-center'><h3 className='text-2xl'>{props.title}</h3>
      <a href={props.link}><img className="size-40" src={props.image}></img></a>
      {props.text}<br></br>
      
      <Button>Ver +</Button>
    </div>
  )
}

export default Tarjeta