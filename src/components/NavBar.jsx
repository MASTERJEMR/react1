import ItemListContainer from "./ItemListContainer"
import LinkNav from "./LinkNav"
function NavBar(props) {
    return (
      
       <nav className="text-xl hidden md:block p-5 space-x-5">
        <LinkNav
          text="Tienda"
          link="store2.html"
          />
          <LinkNav
          text="Contactenos"
          link="store.html"
          />
      </nav>
    )
  }
  
  export default NavBar