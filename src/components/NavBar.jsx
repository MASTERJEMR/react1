import ItemListContainer from "./ItemListContainer"
import Link from "./Link"
function NavBar(props) {
    return (
      
        <nav className="text-xl hidden md:block p-5 space-x-20">
        <Link
        text="Inscipciones"
        link="store.html"
        />
        <Link
        text="Deportistas"
        link="store.html"
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