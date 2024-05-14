import Header from "./components/Header"
import MainStore from "../MainStore.jsx"
import Footer from "./components/Footer"
function AppStore(){
  return (    
    
    
    <BrowserRouter>
    <>
      <Header></Header>
      <MainStore></MainStore>
      <Footer></Footer>
    </>
    </BrowserRouter>
  )
}


export default AppStore
