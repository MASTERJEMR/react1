import logo from "./images/olimpiadas-sed-2023-2.png"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
function Header(){
  
    return(
    
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
     <Link to="/index.html"><img srcSet={logo} width="300hv" alt="Olimpiadas SED"/></Link>
      <NavBar />
    </header>   

    )
 }
 export default Header