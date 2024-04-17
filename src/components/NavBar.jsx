import ItemListContainer from "./ItemListContainer"
import Link from "./Link"
function NavBar(props) {
    return (
      
        <nav className="text-xl hidden md:block p-5 space-x-5">
        
        <Link
        text="Tienda2"
        link="store2.html"
        />
        <Link
        text="Contactenos"
        link="store.html"
        />
        <Link
        text="Tienda"
        link="store.html"
        />
        <ItemListContainer 
        greeting="Greeting"
        link="index.html"   
        />     
      </nav>
    )
  }
  
  export default NavBar