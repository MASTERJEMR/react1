
import { Button } from 'antd'
import { Link } from "react-router-dom"
function Selection(props) {
    return (  
        <div className="p-5 m-1">
         <Button onClick="location.href=${props.a};">
          <span className='efestosCompra'><Link to={props.a}>{props.text}</Link> </span>
        </Button>
        </div>
        
    )
  }
  
  export default Selection