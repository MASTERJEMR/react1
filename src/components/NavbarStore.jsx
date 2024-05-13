import LinkNav from "./LinkNav"
import { useParams } from "react-router-dom"
function NavbarStore() {
    
    const params = useParams()
    const {cat}=useParams()
    

    return (
        <nav className=" flex space-x-4 items-center">
            
            <LinkNav
                text="PRODUCTOS"
                link="ItemListContainer"
            />
            {/* <LinkNav
                text="men's clothing"
                link="category/men's clothing"
            />
            <LinkNav
                text="jewelery"
                link="category/jewelery"
            />
            <LinkNav
                text="Electronics"
                link="category/electronics"
            /> */}
            { <LinkNav
                text="Registro"
                link="/register"
            /> }
        </nav>
    )
}
export default NavbarStore