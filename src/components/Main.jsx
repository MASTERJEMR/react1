import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Error from "./pages/Error"
import Product from "./pages/Product"
function Main(){
    return(

        <main className="h-full max-h-full">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/store/:id"  element={<Product/>}/>
                <Route path="*" element={<Error/>}/> 
            </Routes>
        </main>
    )
}
export default Main