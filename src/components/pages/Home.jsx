import Tarjeta from "../Tarjeta"
function Home(){
    
    const access="index.hmtl"
    return (
        <>
        <div className="flex">
                <div className="efestos flex-initial w-64 text-orange-400">
                        <h2 className="text-7xl">Muy pronto!!!</h2><p>Con cada paso, hacemos historia.</p>
                </div>
                <div className="flex-initial w-128 ">
                    <img src="https://masterjemr.github.io/Entrega-Final/images/g14.png"></img>
                </div>
        </div> 
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="m-8">
                <Tarjeta
                title="Inscripciones" 
                image="https://masterjemr.github.io/Entrega-Final/images/home2.jpg"
                text="No te quedes por fuera, inscribete" 
                link="#"/>
                </div>
                <div className="m-8">
                <Tarjeta
                title="Deportistas" 
                image="https://masterjemr.github.io/Entrega-Final/images/home1.jpg"
                text="Conoce a nuestros deportista " 
                link="deportistas.html"/>
                </div>
                <div className="m-8">
                <Tarjeta
                title="Programación" 
                image="https://masterjemr.github.io/Entrega-Final/images/g7.png"
                text="Revisa la programación " 
                link={access}/>
                </div>
                <div className="m-8">
                <Tarjeta
                title="Boletines" 
                image="https://masterjemr.github.io/Entrega-Final/images/g6.png"
                text="Enterate de primera mano " 
                link={access}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home