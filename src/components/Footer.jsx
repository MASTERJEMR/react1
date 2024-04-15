
import sedFooter from "./images/footer.png"
function Footer(){
    return(
    <footer className="bg-[#FD4900] p-1  shadow-md text-center  flex justify-center">
      <div>
        <img className="" srcSet={sedFooter} width="300hv"alt="Olimpiadas SED"  /> 
      </div>
      <div><a className="efestos text-sm hover:text-white" href="http://efestos.com.co">Powered by EFESTOS ©</a>
      </div>   
      
    </footer>
    )
}
export default Footer