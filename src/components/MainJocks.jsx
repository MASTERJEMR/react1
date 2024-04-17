import { useState, useEffect } from "react"
import CartJock from "./CartJock"

function MainJocks() {
    const access = "index.hmtl"
    
  const [characters,setCharacters]=useState([])
    useEffect(()=>{
        fakeStore();
    },[])
const fakeStore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products")
    const jsonData=await response.json()
    setCharacters(jsonData);
    
}
    

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
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="m-8">
                {characters.map((character)=>{
                        console.log(character)
                        return <CartJock
                        key={character.id}
                        title={character.title}
                        image={character.image}
                        description={character.description}
                        price={character.price}
                        />
                    })}

                </div>
            </div>
            
        </main>

    )
}
export default MainJocks
/* 
const [characters,setCharacters]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
            return res.json()
        })
       // .then(json=>console.log(json))
        .then((res)=>{
            setCharacters(res.results)
        })   
        .catch((err)=>{
            console.log(err)
        })
    },[]) */