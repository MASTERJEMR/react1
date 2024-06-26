import ItemListContainer from "./ItemListContainer"
import LinkNav from "./LinkNav"
function NavBar(props) {
    return (
      
       <nav className="text-xl hidden md:block p-5 space-x-5">
        <LinkNav
          text="Tienda"
          link="ItemListContainer"
          />
          <LinkNav
          text="Contactenos"
          link="contactenos"
          />
      </nav>
    )
  }
  
  export default NavBar