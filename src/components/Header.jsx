import logo from "./images/olimpiadas-sed-2023-2.png"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import NavbarStore from "./NavbarStore"
function Header(){
  
    return(
    
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
      <Link to="/index"><img srcSet={logo} width="300hv" alt="Olimpiadas SED"/></Link>
      
      <NavbarStore/>{/* <NavBar /> */}
    </header>   

    )
 }
 export default Header