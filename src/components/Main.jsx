import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Error from "./pages/Error"

function Main(){
    return(

        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index.html" element={<Home/>}/>
                <Route path="/store2.html" element={<Store/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
        </main>
    )
}
export default Main