import { Route,Router,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import ItemDetailContainer from "./pages/ItemDetailContainer"
import ItemListContainer from "./pages/ItemListContainer"
import UserForm from "./pages/UserForm"

function Main(){
    return(

        <main className="">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/register" element={<UserForm/>}/>
                <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
                <Route path="/ItemListContainer/category/:cat"  element={<ItemListContainer/>}/>
                <Route path="/category/:cat"  element={<ItemListContainer/>}/>
                <Route path="/ItemDetailContainer/:id"  element={<ItemDetailContainer/>}/>
                <Route path="*" element={<Error/>}/> 
            </Routes>
        </main>
    )
}
export default Main