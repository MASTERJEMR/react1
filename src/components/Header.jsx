import logo from "./images/olimpiadas-sed-2023-2.png"
import NavBar from "./NavBar"
function Header(){
  
    return(
    
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
      <a href="index.html"><img srcSet={logo} width="300hv" alt="Olimpiadas SED"/></a>
      <NavBar />
    </header>   

    )
 }
 export default Header