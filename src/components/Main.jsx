import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Error from "./pages/Error"
import Product from "./pages/Product"
function Main(){
    return(

        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index.html" element={<Home/>}/>
                <Route path="/store.html" element={<Store/>}/>
                <Route path="/:id"  element={<Product/>}/>
                {/* <Route path="*" element={<Error/>}/> 
 */}
            </Routes>
        </main>
    )
}
export default Main