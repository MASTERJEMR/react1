import { Link } from "react-router-dom"

function LinkNav(props) {
    return (  
        <div className="p-5 m-1"><Link to={props.link}>{props.text}</Link></div>
        
    )
  }
  
  export default LinkNav
