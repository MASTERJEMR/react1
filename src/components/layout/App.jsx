import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
function App(){
  return (  
    <BrowserRouter>
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    </BrowserRouter>
  )
}


export default App
