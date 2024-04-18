import { Link } from "react-router-dom"
function LinkNav(props) {
    return (  
        <Link to={props.link}>{props.text}</Link>
    )
  }
  
  export default LinkNav
