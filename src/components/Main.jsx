import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import ItemListContainer from "./pages/ItemListContainer"
import Error from "./pages/Error"
import ItemDetailContainer from "./pages/ItemDetailContainer"
function Main(){
    return(

        <main className="">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                <Route path="/ItemDetailContainer/:id"  element={<ItemDetailContainer/>}/>
                <Route path="*" element={<Error/>}/> 
            </Routes>
        </main>
    )
}
export default Main