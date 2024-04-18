import Header from "./components/Header"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer"
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
