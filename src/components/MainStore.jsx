import { Button } from "antd"
import CartWidget from "./CartWidget"

function MainStore() {
    const access = "index.hmtl"
    return (
        <main className="tarjeta p-4 grow grid justify-items-center">
            <div class="flex">
                <div class="efestos flex-initial w-64 text-orange-400">
                    <h2 className="text-7xl">Buy Now!!!</h2><h3>Compra ahora!!!</h3>
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
        </main>
    )
}
export default MainStore