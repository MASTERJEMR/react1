import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import ItemListContainer from "./pages/ItemListContainer"
import Error from "./pages/Error"
import Product from "./pages/Product"
function Main(){
    return(

        <main className="">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                <Route path="/ItemListContainer/:id"  element={<Product/>}/>
                <Route path="*" element={<Error/>}/> 
            </Routes>
        </main>
    )
}
export default Main