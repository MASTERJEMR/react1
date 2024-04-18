import Tarjeta from "../Tarjeta"
function Error(){
    
    const access="index.hmtl"
    return (
        <>
        <div className="flex">
                <div className="efestos flex-initial w-64 text-orange-400">
                        <h2 className="text-7xl">404!</h2><p>Con cada paso, hacemos historia.</p>
                </div>
                <div className="flex-initial w-128 ">
                    <img src="https://masterjemr.github.io/Entrega-Final/images/g14.png"></img>
                </div>
        </div> 
        <div>
        <h2 className="text-7xl">No disponible</h2>
        </div>
        </>
    )
}
export default Error