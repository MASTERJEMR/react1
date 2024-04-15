import { useState, useEffect } from "react"
import CartJock from "./CartJock"

function MainJocks() {
    const access = "index.hmtl"
    const [characters,setCharacters]=useState([])
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((res)=>{return res.json()})
        .then((res)=>{ setCharacters(res.results) })
        .catch((err)=>{console.log(err)}) 

    },[])
    /* */

    return (
        <main className="tarjeta p-4 grow grid justify-items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {characters.map((user,i)=>{console.log(user)})}
                <div className="m-8">
                {characters.map((character)=>{
                        console.log(character)
                        return <CartJock
                        title={character.name}
                        image={character.image}
                        text={character.species}
                        link="#" />
                    })}
                        
                </div>
            </div>
        </main>





        /*
        <main className="tarjeta p-4 grow grid justify-items-center">
            <div class="flex">
                <div class="efestos flex-initial w-64 text-orange-400">
                    <h2 className="text-7xl">Deportistas!!!</h2><h3>Compra ahora!!!</h3>
                </div>
                <div class="flex-initial w-128 ">
                    <img src="https://masterjemr.github.io/Entrega-Final/images/g14.png"></img>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="m-8">
                    <CartWidget
                        title="Tennis en Cuero Blanco"
                        image="https://reebokcol.vtexassets.com/arquivos/ids/708103-500-auto?v=638260188600170000&width=500&height=auto&aspect=true"
                        text="Tennis en cuero blanco con una línea gris"
                        precio="$100"
                        link="#" />
                        
                </div>
                <div className="m-8">
                    <CartWidget
                        title="Tennis sinténtico"
                        image="https://reebokcol.vtexassets.com/arquivos/ids/790298-500-auto?v=638296361691970000&width=500&height=auto&aspect=true"
                        text="Tennis sintético blanco con una línea azul"
                        precio="$70"
                        link={access} />
                </div>
                <div className="m-8">
                    <CartWidget
                        title="Tennis Amarillo"
                        image="https://reebokcol.vtexassets.com/arquivos/ids/787678-500-auto?v=638296348913300000&width=500&height=auto&aspect=true"
                        text="Tennis amarillo en gamuza"
                        precio="$120"
                        link={access} />
                </div>
                <div className="m-8">
                    <CartWidget
                        title="Tennis Azul"
                        image="https://reebokcol.vtexassets.com/arquivos/ids/790718-500-auto?v=638296363948370000&width=500&height=auto&aspect=true"
                        text="Tennis en cuero color azul"
                        precio="$120"
                        link={access} />
                </div>
                <div className="m-8">
                    <CartWidget
                        title="Tennis Rojo"
                        image="https://reebokcol.vtexassets.com/arquivos/ids/689782-500-auto?v=638260097470100000&width=500&height=auto&aspect=true"
                        text="Tennis en cuero color rojo"
                        precio="$130"
                        link={access} />
                </div>
                <div className="m-8">
                    <CartWidget
                        title="Tennis sintético Blanco"
                        image="https://reebokcol.vtexassets.com/arquivos/ids/702685-500-auto?v=638260161352430000&width=500&height=auto&aspect=true"
                        text="Tennis blanco sintético "
                        precio="$65"
                        link={access} />
                </div>
            </div>
        </main>*/
    )
}
export default MainJocks