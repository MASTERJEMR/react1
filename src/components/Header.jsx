import logo from "./images/olimiadas-sed-2023-2.png"
import NavBar from "./NavBar"
function Header(){
  //alert("Haz click en cualquier parte del menú para ir a la tienda, o en el logo para ir al inicio")
    return(
    
    <header className="bg-slate-400 p-4 flex justify-between shadow-md">
      <a href="index.html"><img src={logo} width="300hv" alt="Olimpiadas SED"/></a>
      <NavBar />
    </header>   

    )
 }
 export default Header